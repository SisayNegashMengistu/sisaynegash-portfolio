import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Check,
  AlertCircle,
  Send,
  MapPin,
  Phone,
  Mail,
  LoaderIcon,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const accessKey = "1aab92dc-a0b9-4043-a390-b72203d93691"; // Web3Forms key

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true); // Start loading

    const formData = {
      ...data,
      access_key: accessKey,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setIsError(false);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsSuccess(false);
        setIsError(true);
      }
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Feel free to contact me for any work or suggestions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-dark-600 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactItem icon={<MapPin />} title="Location" value={personalInfo.location} />
                <ContactItem icon={<Mail />} title="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                <ContactItem icon={<Phone />} title="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
              </div>
              <div className="mt-8">
                <p className="text-dark-400 dark:text-dark-300 mb-4">
                  I'm always open to discussing new projects, opportunities in software development, or partnerships.
                </p>
                <a href="https://calendly.com/sisay-negash-mengistu" target="_blank" rel="noopener noreferrer" className="btn btn-outline inline-flex">
                  Schedule a call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-dark-600 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input type="hidden" {...register("botcheck")} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField
                    name="name"
                    label="Your Name"
                    placeholder="your name here"
                    register={register}
                    required
                  />
                  <InputField
                    name="email"
                    type="email"
                    label="Your Email"
                    placeholder="email here..."
                    register={register}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-dark-500 dark:text-dark-200">
                    Your Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    id="message"
                    rows={5}
                    placeholder="your massage please..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                </div>

                {isSuccess && (
                  <AlertBox icon={<Check />} message="Your message has been sent successfully!" type="success" />
                )}
                {isError && (
                  <AlertBox icon={<AlertCircle />} message="There was an error sending your message." type="error" />
                )}

                <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                  <span className="flex items-center justify-center">
                    {isLoading ? (
                      <LoaderIcon className="animate-spin w-5 h-5" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                <p className="text-xs text-dark-400 dark:text-dark-300 text-center mt-4">
                  Feel free to contact me anytime!
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// InputField component
function InputField({ name, label, placeholder, register, required = false, type = "text" }: any) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-dark-500 dark:text-dark-200">
        {label}
      </label>
      <input
        {...register(name, { required })}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
      />
    </div>
  );
}

// ContactItem component
function ContactItem({ icon, title, value, href }: any) {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        {href ? (
          <a href={href} className="text-dark-400 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-dark-400 dark:text-dark-300">{value}</p>
        )}
      </div>
    </div>
  );
}

// AlertBox component
function AlertBox({
  icon,
  message,
  type,
}: {
  icon: React.ReactNode;
  message: string;
  type: "success" | "error";
}) {
  const baseClasses = {
    success: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400",
    error: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg flex items-center ${baseClasses[type]}`}
    >
      {icon}
      <span className="ml-2">{message}</span>
    </motion.div>
  );
}
