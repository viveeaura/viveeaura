// components/FAQ.jsx
import FAQItem from "@/components/faqItem";
import { RiCustomerService2Fill, RiMailLine, RiPhoneLine } from "react-icons/ri";

const faqs = [
  {
    question: "What is included in the service apartment?",
    answer: [
      "Our service apartments come fully furnished with premium amenities including:",
      ["Fully equipped kitchen", "High-speed WiFi and smart TV", "Luxury bedding", "Housekeeping on request", "24/7 security", "Access to building amenities"]
    ]
  },
  {
    question: "What is the minimum stay requirement?",
    answer: [
      "We have a minimum stay requirement of 1 night.",
      [],
      "Guests are welcome to extend their stay for as long as they wish, subject to availability."
    ]
  },
  {
    question: "How does the booking process work?",
    answer: [
      { title: "1. Inquiry", text: "Submit your preferred dates and property" },
      { title: "2. Confirmation", text: "Our team will confirm availability" },
      { title: "3. Reservation", text: "Secure your stay with payment" },
      { title: "4. Move-in", text: "Complete payment and check in" }
    ]
  },
  {
    question: "What is your cancellation policy?",
    answer: [
      "Our cancellation policy:",
      ["Cancellations made more than 48 hours before check-in receive full refund, excluding charges", "No-show receive No refund"],
      "*Special conditions may apply*"
    ]
  },
  {
    question: "Are pets allowed in the apartments?",
    answer: [
      "We welcome pets with conditions",
      []
    ]
  },
  {
    question: "Is there parking available?",
    answer: [
      "Parking availability:",
      ["Yes", ],
    ]
  },
  {
    question: "How can i cancel my reservation?",
    answer: [
      "Send us an email with your booking ID to reservation@viveeaura.com",
      [],
    ]
  }
];

export default function FAQ() {
  return (
    <main className="py-36 bg-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers about our service apartments and booking process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 bg-pale rounded-lg p-8 text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mx-auto mb-4">
            <RiCustomerService2Fill size={25} className="text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-primary">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is available 24/7 to assist you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+2347062745324" className="bg-accent flex items-center hover:bg-accent/90 text-white px-6 py-3 font-medium rounded-button">
              <RiPhoneLine className="mr-2" /> Call Us
            </a>
            <a href="mailto:viveeaura@gmail.com" className="bg-white hover:bg-gray-50 flex items-center text-primary border border-gray-200 px-6 py-3 font-medium rounded-button">
              <RiMailLine className="mr-2" /> Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
