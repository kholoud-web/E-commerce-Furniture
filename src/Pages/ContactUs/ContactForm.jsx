import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "./ContactSchema";
import MainButton from "../../components/MainButton";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  return (
    <div className="max-w-7xl mx-auto md:py-16 px-10 sm:py-8 mb-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-5">
          <label className="font-medium ">Your Name</label>
          <input
            placeholder="Full Name"
            className="border p-3 rounded w-full mt-4"
            {...register("fullName")}
          />
          {errors.firstName && (
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
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
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
          />
           {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.notes.message}
            </p>
          )}

          <MainButton type="submit">Submit</MainButton>
        </div>
      </form>
    </div>
  );
}
