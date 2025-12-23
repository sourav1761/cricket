// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from '../../components/Navigation';
import Footer from "@/components/Footer";
import {FaBullseye, FaBolt, FaGlobeAsia , FaTrophy,FaMapMarkerAlt, FaVideo, FaUsers } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>ACPL Cricket Tournament 2023 | Register Now</title>
        <meta
          name="description"
          content="Join Apni Cricket Premier League - Discover hidden cricket talent across India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/stadiumA.jpg"
            alt="Cricket Stadium"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#002C5F]/85"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 pt-30">
            {/* Left Content */}
            <div className="lg:w-2/3 text-center lg:text-left ">
           <div className="inline-flex items-center bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
  <FaTrophy className="w-4 h-4 mr-2" />
  ACPL - APNI CRICKET PREMIER LEAGUE
</div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
                Discover <span className="text-orange-500">Hidden</span> Cricket{' '}
                <span className="text-green-400">Talent</span> Across{' '}
                <span className="text-cyan-400">India</span>
              </h1>

              <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                Where Passion Meets Opportunity • Your Journey to Cricket Stardom Begins Here
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-md">
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-xl font-bold text-white">30+</div>
                  <div className="text-gray-300 text-xs">Cities</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-xl font-bold text-white">₹1.21L</div>
                  <div className="text-gray-300 text-xs">Prize Pool</div>
                </div>
               
                <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
                  <div className="text-xl font-bold text-white">Pro</div>
                  <div className="text-gray-300 text-xs">Scouts</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link 
                  href="/registration"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all text-center"
                >
                  Register Now - Limited Slots
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Logo */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/assets/logo.png"
                      alt="ACPL Logo"
                      width={200}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">ACPL 2026</h3>
                  <p className="text-gray-300 text-sm">
                    Apni Cricket Premier League
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              About ACPL Tournament
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                ACPL is revolutionizing cricket talent discovery in India. We provide a national platform 
                for aspiring cricketers to showcase their skills, compete with the best, and get recognized 
                by professional scouts.
              </p>
              <p>
                We present an exclusive sponsorship opportunity with ACPL – Apni Cricket Premier League, 
                a fast-growing T10 Tennis Cricket League based in Indore, Madhya Pradesh.
              </p>
              <p>
                Unlike major cricket leagues that focus on established names, ACPL is designed to provide 
                fair opportunities to talented local players who are often overlooked.
              </p>
            </div>
          </div>

       {/* Features */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white p-5 rounded-lg shadow-sm border text-center">
    <FaBullseye className="text-2xl mb-3 mx-auto text-blue-600" />
    <h3 className="font-semibold text-gray-800 mb-2">Talent Focused</h3>
    <p className="text-gray-600 text-sm">Spotlight on emerging players</p>
  </div>
  
  <div className="bg-white p-5 rounded-lg shadow-sm border text-center">
    <FaBolt className="text-2xl mb-3 mx-auto text-yellow-500" />
    <h3 className="font-semibold text-gray-800 mb-2">Fast-Paced T10</h3>
    <p className="text-gray-600 text-sm">Exciting cricket format</p>
  </div>
  
  <div className="bg-white p-5 rounded-lg shadow-sm border text-center">
    <FaGlobeAsia className="text-2xl mb-3 mx-auto text-green-600" />
    <h3 className="font-semibold text-gray-800 mb-2">National Reach</h3>
    <p className="text-gray-600 text-sm">Connecting talent across India</p>
  </div>
</div>
        </div>
      </section>

   {/* Tournament Highlights */}
<section className="py-16 px-4 bg-gray-800 text-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Tournament Highlights
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Professional cricket experience with world-class facilities and organization
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white/10 p-5 rounded-lg text-center border border-white/20">
        <FaMapMarkerAlt className="text-2xl mb-3 mx-auto text-blue-400" />
        <h3 className="font-semibold mb-2">Professional Venues</h3>
        <p className="text-gray-300 text-sm">Premium cricket grounds</p>
      </div>
      
      <div className="bg-white/10 p-5 rounded-lg text-center border border-white/20">
        <FaVideo className="text-2xl mb-3 mx-auto text-red-400" />
        <h3 className="font-semibold mb-2">Live Streaming</h3>
        <p className="text-gray-300 text-sm">Global audience coverage</p>
      </div>
      
      <div className="bg-white/10 p-5 rounded-lg text-center border border-white/20">
        <FaTrophy className="text-2xl mb-3 mx-auto text-yellow-400" />
        <h3 className="font-semibold mb-2">Elite Trophies</h3>
        <p className="text-gray-300 text-sm">Custom awards & recognition</p>
      </div>
      
      <div className="bg-white/10 p-5 rounded-lg text-center border border-white/20">
        <FaUsers className="text-2xl mb-3 mx-auto text-green-400" />
        <h3 className="font-semibold mb-2">Expert Team</h3>
        <p className="text-gray-300 text-sm">Professional commentary</p>
      </div>
    </div>
  </div>
</section>

   {/* Prize Pool Section */}
<section className="py-16 px-4 bg-white">
  <div className="container mx-auto max-w-4xl">
 
    {/* Prize Card */}
    <div className="bg-[#002C5F] rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <div className="text-4xl md:text-5xl font-bold mb-2">₹172,500</div>
        <p className="text-gray-300">Total Prize Money</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-xl text-center border border-white/20">
          <div className="text-2xl font-bold mb-2 text-yellow-400">1st Prize</div>
          <div className="text-3xl font-bold mb-3">₹1,21,000</div>
          <div className="space-y-1 text-sm text-gray-300">
            <div>Champions Trophy</div>
            <div>Gold Medals</div>
            <div>Team Jerseys</div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-xl text-center border border-white/20">
          <div className="text-2xl font-bold mb-2 text-gray-300">2nd Prize</div>
          <div className="text-3xl font-bold mb-3">₹51,500</div>
          <div className="space-y-1 text-sm text-gray-300">
            <div>Runners-up Trophy</div>
            <div>Silver Medals</div>
            <div>Team Awards</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="inline-block bg-green-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
          + Individual Player Awards
        </div>
      </div>
    </div>
       <div className="text-center mb-12">
      {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Prize Pool
      </h2>
      <p className="text-gray-600">
        Compete for impressive rewards and recognition
      </p> */}
    </div>

    {/* 🖼 Prize Images */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {[
        "/assets/IMG_4729.PNG",
        "/assets/IMG_4730.PNG",
        "/assets/IMG_4731.PNG",
        "/assets/IMG_4732.PNG",
      ].map((src, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
        >
          <Image
            src={src}
            alt={`Prize ${index + 1}`}
            width={400}
            height={300}
            className="w-110 h-60 object-contain"
          />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join the Tournament?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't miss your chance to be part of the most exciting cricket tournament. 
            Register your team today and start your journey to glory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/registration"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Register Now 
            </Link>
            <Link 
              href="/sponsorship"
              className="border border-gray-400 hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Become a Sponsor
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Limited slots available • Register early for best benefits
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}