import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#141212] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Privacy <span className="text-red-400">Policy</span>
        </h1>

        <p className="text-gray-400 mb-10">Last Updated: June 2026</p>

       

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              We collect information that you provide directly to us, including
              your name, email address, phone number, delivery information, and
              order details. We may also collect basic usage information to
              improve our services and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              Your information is used to process orders, manage your account,
              provide customer support, improve our platform, and communicate
              important updates related to your purchases and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Order & Payment Information
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              We maintain records of your purchases and order history to provide
              a seamless shopping experience. Payment information is handled
              securely through trusted payment providers and is not stored in
              plain text on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Data Security
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no internet-based system can guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Sharing of Information
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              We do not sell your personal information. Information may be
              shared with delivery partners, payment processors, and service
              providers solely for the purpose of fulfilling orders and
              maintaining our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Cookies & Analytics
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              We may use cookies and similar technologies to enhance user
              experience, remember preferences, and analyze platform
              performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Your Rights
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              You may request access, correction, or deletion of your personal
              information where permitted by applicable laws. You can also
              contact us regarding concerns about your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. Contact Us
            </h2>
            <p className="text-gray-100/60 leading-relaxed">
              If you have any questions regarding this Privacy Policy, please
              contact our support team through the contact information provided
              on our platform.
            </p>

             <Link
  to="/home"
  className=" mt-9 inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-red-400 text-white font-semibold rounded-lg hover:bg-black transition-all duration-200 hover:text-red-400 border border-red-400"
>
  ← Back to Home
</Link>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 <span className="text-red-400 font-semibold">Your App</span>.
            All rights reserved.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;