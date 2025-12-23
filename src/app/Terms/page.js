import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | ACPLSports",
  description: "Terms and Conditions for ACPLSports",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33] text-white py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-300">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10 text-slate-700">

          {/* Intro */}
          <p>
            Welcome to <strong>ACPLSports</strong>. By accessing or using our
            website, you agree to be bound by the following Terms & Conditions
            (“Terms”). Please read them carefully before using our services.
          </p>

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website and registering for any ACPLSports events,
              trials, tournaments, or related services, you agree to comply with
              and be legally bound by these Terms. If you do not agree, you must
              not use our website or services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              2. Services
            </h2>
            <p>ACPLSports provides sports-related services including but not limited to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Player registrations</li>
              <li>Cricket trials and tournaments</li>
              <li>Sports events, selections, and training programs</li>
              <li>Online and offline sports-related information and updates</li>
            </ul>
            <p className="mt-2">
              All services are subject to availability and may be modified at the
              discretion of ACPLSports.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              3. Payments
            </h2>
            <p>
              All payments for registrations, trials, tournaments, or services
              must be made through the ACPLSports website or authorized payment
              gateways. Payments are processed securely, and ACPLSports does not
              store your card or banking details.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              4. Refund Policy
            </h2>
            <p>
              Refunds, if approved by ACPLSports, will be processed within
              <strong> 5 to 7 business days</strong> to the original payment
              method.
            </p>
            <p className="mt-2">
  To exercise these rights, contact us at:
  <br />
  📧{" "}
  <Link
    href="https://acplsports.in/contact"
    target="_blank"
    className="font-medium text-blue-600 hover:underline"
  >
      acplsports.in/contact
  </Link>
</p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              5. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the website and services only for lawful purposes</li>
              <li>Refrain from any activity that may disrupt or harm ACPLSports or other users</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content available on the ACPLSports website—including text,
              images, videos, logos, designs, and event materials—is the
              exclusive property of ACPLSports and is protected by applicable
              intellectual property laws.
            </p>
            <p className="mt-2">
              You may not copy, reproduce, distribute, or create derivative works
              without prior written permission.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              7. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms & Conditions shall be governed by and construed in
              accordance with the laws of <strong>India</strong>. Any disputes
              arising out of or related to these Terms or your use of the
              ACPLSports website shall be subject to the exclusive jurisdiction
              of the courts of <strong>Madhya Pradesh, India</strong>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
