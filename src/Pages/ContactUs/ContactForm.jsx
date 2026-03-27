import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "./ContactSchema";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(ContactSchema),
    mode:"all",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto md:py-16 px-10 sm:py-8 mb-8">
      {submitted && (
        <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl">
          <span className="text-xl">✓</span>
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm text-green-600">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-5">
          <label className="font-medium ">Your Name</label>
          <input
            placeholder="Full Name"
            className="border p-3 rounded w-full mt-4"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
          <label className="font-medium">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            className="border p-3 rounded w-full mt-4"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <label className="font-medium">Subject</label>
          <input
            type="text"
            placeholder="This is an optional"
            className="border p-3 rounded w-full mt-4"
            {...register("subject")}
          />

          <label className="font-medium">Message</label>

          <textarea
            placeholder=" Hi i would like to ask about ..."
            className="border p-3 rounded w-full mt-4"
            {...register("message")}
            data-gramm="false"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          <button className="bg-[#B88E2F] px-6 py-2 text-[#FFFFFF] font-bold text-[16px] hover:scale-110 transition-transform duration-300 cursor-pointer"
           disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
