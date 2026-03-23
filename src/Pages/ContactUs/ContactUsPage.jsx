import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Hero from "../../components/Hero";

export default function ContactUsPage() {
  return (
    <section>
      <Hero title="Contact Us" currentPage="Contact Us" />
      <div className="grid lg:grid-cols-2 ">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
