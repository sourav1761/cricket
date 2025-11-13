"use client";

import Link from "next/link";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FF6600]">
              Cricket Championship 2025-26
            </h3>
            <p className="text-gray-400">
              The premier cricket tournament for amateur and semi-professional
              teams. Join us for a season of competitive cricket and
              sportsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#FF6600] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="hover:text-[#FF6600] transition"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorship"
                  className="hover:text-[#FF6600] transition"
                >
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link
                  href="/More-Info"
                  className="hover:text-[#FF6600] transition"
                >
                  Tournament Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: acplt10@gmail.com</li>
              <li>Phone: +91 7879598020</li>
              <li>Phone: +91 8923605791</li>
              <li>Phone: +91 9702918689</li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://chat.whatsapp.com/Eyos8omo42k3RRRbtD9pbT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-2xl hover:scale-110 transition-transform"
                title="Join WhatsApp Group"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.youtube.com/channel/UCwLGiUDe4228vrUa3wfnYpQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 text-2xl hover:scale-110 transition-transform"
                title="YouTube Channel"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/tenni_scricketleague?igsh=MWJkbXZ1OTh5azJkOQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-2xl hover:scale-110 transition-transform"
                title="Instagram Profile"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
