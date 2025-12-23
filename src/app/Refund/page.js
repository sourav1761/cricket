import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link"; 

export const metadata = {
  title: "Refund Policy | ACPLSports",
  description: "Refund Policy for ACPLSports",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33] text-white py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-slate-300">
            Please review our refund terms carefully.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10 text-slate-700">

          {/* Intro */}
          <p>
            At <strong>ACPLSports</strong>, we strive to provide a smooth and
            reliable experience for all participants. However, if you are not
            satisfied with our services, please review our Refund Policy outlined
            below.
          </p>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Eligibility for Refund
            </h2>
            <p>You may be eligible for a refund under the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                If you do not receive confirmation or participation details after
                successful payment
              </li>
              <li>
                If you face technical issues that prevent you from accessing
                ACPLSports services and the issue cannot be resolved by our
                support team
              </li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Refund Policy
            </h2>
            <p>
              If a refund is approved by ACPLSports, the amount will be credited
              to your original payment method within{" "}
              <strong>5 to 7 business days</strong>.
            </p>
          </div>

          {/* Refund Process */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Refund Process
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Contact our support team at{" "}
                <br />
  📧{" "}
  <Link
    href="https://acplsports.in/contact"
    target="_blank"
    className="font-medium text-blue-600 hover:underline"
  >
      acplsports.in/contact
  </Link> within
                7 days of your payment
              </li>
              <li>
                Provide your payment details, including the registered email
                address and transaction ID
              </li>
              <li>
                Our support team will verify your request and, if eligible,
                process the refund within <strong>4 working days</strong>
              </li>
            </ol>
          </div>

          {/* Refund Method */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Refund Method
            </h2>
            <p>
              All refunds will be processed using the same payment method used
              for the original transaction. Depending on your payment provider,
              additional time may be required for the refund to reflect in your
              account.
            </p>
          </div>

          {/* Non Refundable */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Non-Refundable Situations
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Change of mind after registration or payment</li>
              <li>
                Failure to attend trials, events, or sessions without prior
                notice
              </li>
              <li>Violation of ACPLSports Terms & Conditions</li>
            </ul>
          </div>

          {/* Subscriptions */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Subscriptions and Trials
            </h2>
            <p>
              ACPLSports may offer trial access or short-duration subscription
              plans for selected sports programs or events.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Trial access is intended to provide a brief experience of
                ACPLSports services
              </li>
              <li>
                After completing the trial, users may opt for extended
                subscriptions or paid registrations as displayed on our website
              </li>
              <li>
                All subscription fees must be paid in advance to continue access
              </li>
            </ul>
          </div>

          {/* Please Note */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Please Note
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Trial access and trial subscriptions are non-refundable</li>
              <li>
                Access to services will be granted only after successful payment
              </li>
              <li>
                Subscriptions and registrations are non-transferable and limited
                to individual use
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions or need assistance with a refund request,
              please contact us at:
          📧{" "} <Link
    href="https://acplsports.in/contact"
    target="_blank"
    className="font-medium text-blue-600 hover:underline"
  >
    acplsports.in/contact
  </Link>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
