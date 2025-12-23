import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ACPLSports",
  description: "Privacy Policy for ACPLSports",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33] text-white py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">
            At ACPLSports, we are committed to protecting your privacy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10 text-slate-700">

          {/* Intro */}
          <p>
            This Privacy Policy explains how we collect, use, and safeguard your
            personal information when you use our website and services.
          </p>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Information We Collect
            </h2>

            <h3 className="font-semibold text-slate-800 mb-2">
              Personal Information
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment details</li>
              <li>Any other information you provide during registration or purchases</li>
            </ul>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">
              Usage Information
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and usage patterns on our website</li>
            </ul>
          </div>

          {/* How We Use */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide, operate, and improve our services</li>
              <li>Process registrations, payments, and manage your account</li>
              <li>Communicate important updates, confirmations, and promotional information</li>
              <li>Analyze user behavior to enhance website performance and user experience</li>
            </ul>
          </div>

          {/* Sharing */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Sharing Your Information
            </h2>
            <p>
              ACPLSports does not sell or rent your personal information to third
              parties. We may share information only in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>To comply with legal requirements or government requests</li>
              <li>To protect the rights, property, or safety of ACPLSports, our users, or others</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Data Security
            </h2>
            <p>
              We use appropriate technical and organizational security measures to
              protect your personal data. However, no online system is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Cookies and Tracking Technologies
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Improve website functionality</li>
              <li>Understand user interactions</li>
              <li>Enhance your browsing experience</li>
            </ul>
            <p className="mt-2">
              You can disable cookies through your browser settings. Some features
              may not work properly if cookies are disabled.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
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

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Changes to This Privacy Policy
            </h2>
            <p>
              ACPLSports may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision date.
              Please review it periodically.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
