export default function TermsAndService() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl my-28">
      <section className="bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Terms of Service</h1>
        <p className="mb-6">Last updated: June 15, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using the Vivee Aura Service Apartments ("we", "us", or "our") website, mobile application, or booking services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Booking and Reservations</h2>
            <h3 className="font-bold mb-2">2.1 Reservation Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You must be at least 18 years old to make a reservation</li>
              <li>Valid government-issued ID and credit card are required at check-in</li>
              <li>All bookings are subject to availability</li>
            </ul>

            <h3 className="font-bold mb-2">2.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A deposit may be required to secure your reservation</li>
              <li>Full payment is due according to the terms specified during booking</li>
              <li>We accept major credit cards and other payment methods as indicated</li>
            </ul>

            <h3 className="font-bold mb-2">2.3 Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made more than 48 hours before check-in receive full refund</li>
              <li>Cancellations within 48 hours forfeit the deposit</li>
              <li>No-shows will be charged the full reservation amount</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Guest Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are responsible for any damage to the apartment beyond normal wear and tear</li>
              <li>Quiet hours must be observed from 10pm to 8am</li>
              <li>Smoking is prohibited in all apartments and common areas</li>
              <li>Pets are only allowed in designated pet-friendly units with prior approval</li>
              <li>Commercial activities and parties are not permitted without written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Property Rules</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check-in time is 3:00 PM and check-out time is 11:00 AM</li>
              <li>Early check-in and late check-out may be available for an additional fee</li>
              <li>Maximum occupancy limits must be strictly observed</li>
              <li>Parking is available on a first-come, first-served basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Prohibited Activities</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the apartment for any illegal purpose</li>
              <li>Sublet or assign your reservation without our written consent</li>
              <li>Tamper with any safety or security devices</li>
              <li>Bring hazardous materials onto the premises</li>
              <li>Disturb other guests or neighbors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law, Vivee Aura shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss or theft of personal property</li>
              <li>Inconvenience caused by circumstances beyond our control (natural disasters, utility outages, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="mb-4">All content on our website and marketing materials, including text, graphics, logos, and images, is our property or the property of our licensors and is protected by copyright and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Privacy</h2>
            <p>Your use of our Services is also governed by our <a href="/privacyPolicy" className="text-accent hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. The most current version will always be posted on our website. Continued use of our Services after changes constitutes acceptance of the modified Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. Governing Law</h2>
            <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">11. Contact Information</h2>
            <p className="mb-2">For questions about these Terms, please contact us at:</p>
            <address className="not-italic" >
              Vivee Aura Service Apartments<br />
              Data Protection Officer<br />
              Email: viveeaura@gmail.com<br />
              Phone: +2348032870434<br />
              10 Eyinogun St, Orile Oshodi.<br />
              Ikeja 102214, Lagos
            </address>
          </section>
        </div>
      </section>
    </main>
  )
}