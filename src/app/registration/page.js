
"use client";

import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";

export default function PlayerRegistration() {
  const playerRoles = ["Batsman", "Bowler", "All-Rounder"];

  // Mapping of states to trial cities
  const stateCityMap = {
    "Uttar Pradesh": ["Kanpur", "Lucknow", "Varanasi", "Agra"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Delhi (NCT)": ["Delhi"],
    Bihar: ["Patna", "Bhagalpur"],
    Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
    Chhattisgarh: ["Raipur", "Bijapur"],
    Gujarat: ["Surat", "Ahmedabad"],
    Odisha: ["Bhubaneswar"],
    Karnataka: ["Bengaluru"],
    Telangana: ["Hyderabad"],
    "Tamil Nadu": ["Chennai"],
    "West Bengal": ["Kolkata"],
    Assam: ["Guwahati"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada"],
    Punjab: ["Amritsar"],
    Haryana: ["Gurgaon", "Chandigarh"],
    Jharkhand: ["Ranchi"],
  };

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    dob: "",
    role: "",
    battingStyle: "",
    bowlingStyle: "",
    state: "",
    city: "",
    trialsCity: "",
    agreeToTerms: false,
    profilePhoto: null,
    aadharCard: null,
  });

  // Initialize filters and state controls
  const [filteredStates, setFilteredStates] = useState(Object.keys(stateCityMap));
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredTrials, setFilteredTrials] = useState([]);
  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showTrials, setShowTrials] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [finalConfirmation, setFinalConfirmation] = useState(false);

  // Refs for dropdowns
  const stateDropdownRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const trialDropdownRef = useRef(null);

  // -------------------- FILE UPLOAD HANDLERS --------------------
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      alert("Profile photo size must be under 2MB.");
      return;
    }
    setFormData((prev) => ({ ...prev, profilePhoto: file }));
  };

  const handleAadharUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Aadhar file size must be under 5MB.");
      return;
    }
    setFormData((prev) => ({ ...prev, aadharCard: file }));
  };
  // -------------------------------------------------------------

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "state") {
      const matches = Object.keys(stateCityMap).filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStates(matches);
      setShowStates(true);

      // Reset city and trials city when state changes
      if (formData.state !== value) {
        setFormData(prev => ({ ...prev, city: "", trialsCity: "" }));
        setFilteredCities([]);
        setFilteredTrials([]);
      }
    }

    if (name === "city") {
      const currentCities = stateCityMap[formData.state] || [];
      const matches = currentCities.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(matches);
      setShowCities(true);
    }

    if (name === "trialsCity") {
      const currentCities = stateCityMap[formData.state] || [];
      const matches = currentCities.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTrials(matches);
      setShowTrials(true);
    }
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "state") {
      const cities = stateCityMap[value] || [];
      setFilteredCities(cities);
      setFormData(prev => ({ ...prev, city: "", trialsCity: "" }));
      setShowStates(false);
    }

    if (field === "city") {
      setShowCities(false);
    }

    if (field === "trialsCity") {
      setShowTrials(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
        setShowStates(false);
      }
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setShowCities(false);
      }
      if (trialDropdownRef.current && !trialDropdownRef.current.contains(event.target)) {
        setShowTrials(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.mobile ||
      !formData.email ||
      !formData.dob ||
      !formData.role ||
      !formData.state ||
      !formData.city ||
      !formData.trialsCity ||
      !formData.agreeToTerms ||
      !formData.profilePhoto ||
      !formData.aadharCard
    ) {
      alert("Please fill all required fields and upload all documents.");
      return;
    }

    setShowReview(true);
  };

  // ✅ FINAL SUBMIT FUNCTION (SEND DATA TO BACKEND)
  const handleFinalSubmit = async () => {
    if (!finalConfirmation) {
      alert("Please confirm your details before final submission.");
      return;
    }

    try {
      const submissionData = new FormData();
      submissionData.append("fullName", formData.fullName);
      submissionData.append("mobile", formData.mobile);
      submissionData.append("email", formData.email);
      submissionData.append("dob", formData.dob);
      submissionData.append("role", formData.role);
      submissionData.append("state", formData.state);
      submissionData.append("city", formData.city);
      submissionData.append("trialsCity", formData.trialsCity);
      submissionData.append("profilePhoto", formData.profilePhoto);
      submissionData.append("aadharCard", formData.aadharCard);

      const query = new URLSearchParams({
        name: formData.fullName,
        email: formData.email,
        phone: formData.mobile,
        sid: 'graphic-design-001',
        planPrice: '1',   // <-- FIXED
        gateway: 'razorpay',
      }).toString();

      window.location.href = `https://predicts.in/checkout/graphic-design?${query}`;

      // const res = await axios.post(
      //   "http://localhost:5000/api/players",
      //   submissionData,
      //   {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   }
      // );

      // if (res.status === 201 || res.status === 200) {
      //   alert("🎉 Registration successful!");
      //   setShowReview(false);
      //   setFormData({
      //     fullName: "",
      //     mobile: "",
      //     email: "",
      //     dob: "",
      //     role: "",
      //     battingStyle: "",
      //     bowlingStyle: "",
      //     state: "",
      //     city: "",
      //     trialsCity: "",
      //     agreeToTerms: false,
      //     profilePhoto: null,
      //     aadharCard: null,
      //   });
      // }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error submitting registration. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33] py-10 md:py-24 px-4 text-white">
        <div className="container mx-auto py-8 md:py-10 max-w-6xl">
          <div className="text-center pt-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Player Registration
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Join India's premier cricket talent hunt platform. Get scouted by
              top coaches, showcase your skills, and kickstart your professional
              cricket career!
            </p>
            <div className="bg-white text-blue-700 py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl inline-block shadow-lg">
              <span className="text-xl md:text-2xl font-bold">
                Registration Fee: ₹749
              </span>
            </div>
            <p className="text-blue-200 mt-3 md:mt-4 text-base md:text-lg">
              Limited spots available • Professional scouting guaranteed
            </p>
          </div>
        </div>{" "}
      </section>

      {/* Mission & About Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Our Mission Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002C5F] mb-6 md:mb-8">
                Our Mission
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-[#F36F21] text-white p-2 rounded-lg mt-1 flex-shrink-0">
                    <span className="text-lg">■</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#002C5F] mb-2">
                      Promote grassroots cricket
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Nurturing local talent and providing platforms for
                      aspiring cricketers to shine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-[#A5D63F] text-white p-2 rounded-lg mt-1 flex-shrink-0">
                    <span className="text-lg">■</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#002C5F] mb-2">
                      Discover hidden talent
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Unearthing raw talent from local communities and giving
                      them national exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-[#6ECFF6] text-white p-2 rounded-lg mt-1 flex-shrink-0">
                    <span className="text-lg">■</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#002C5F] mb-2">
                      Bring excitement to cricket enthusiasts
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Creating thrilling cricket experiences for thousands of
                      fans across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About ACPL Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002C5F] mb-6 md:mb-8">
                About ACPL
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:pb-3">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Format:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      T10 (10 overs per side)
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:pb-3">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Ball Type:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      Hard Tennis
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:pb-3">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Overs per Bowler:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      Maximum 2
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:pb-3">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Powerplay:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      3 overs
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:pb-3">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Age Limit:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      14+ (Open to all aspiring players)
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-gray-100 pb-2 md:pb-3">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Unique Features:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      Auction and trials
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#002C5F] text-sm md:text-base">
                      Location:
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base text-right">
                      Madhya Pradesh (expanding across Central India)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-[#002E5D] to-[#002E5D]">
        <div className="container mx-auto max-w-4xl">
          <div className=" backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden "></div>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#081B33] to-[#081B33] text-white py-6 md:py-8 px-6 md:px-8 rounded-t-2xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
                Player Registration
              </h2>
              <p className="text-[#56C2E8] text-sm md:text-lg">
                Complete your profile to join the trials
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* FULL NAME */}
              <div className="md:col-span-2">
                <label className="block text-black font-semibold mb-2 text-base md:text-lg">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-slate-500 rounded-lg text-black placeholder-slate-500 outline-none"
                  placeholder="Enter your full name as per Aadhar"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-500 outline-none"
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* DOB */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black outline-none"
                />
              </div>

              {/* ROLE */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Primary Playing Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black outline-none"
                >
                  <option value="">Select your primary role</option>
                  {playerRoles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* STATE */}
              <div className="relative" ref={stateDropdownRef}>
                <label className="block text-black font-semibold mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => setShowStates(true)}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-500 outline-none"
                  placeholder="Type to search states..."
                  autoComplete="off"
                />

                {showStates && filteredStates.length > 0 && (
                  <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-400 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {filteredStates.map((s) => (
                      <li
                        key={s}
                        onClick={() => handleSelect("state", s)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 text-black"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CITY */}
              <div className="relative" ref={cityDropdownRef}>
                <label className="block text-black font-semibold mb-2">
                  Your City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onFocus={() => {
                    if (formData.state) {
                      const cities = stateCityMap[formData.state] || [];
                      setFilteredCities(cities);
                      setShowCities(true);
                    }
                  }}
                  required
                  disabled={!formData.state}
                  className={`w-full px-4 py-3 border rounded-lg outline-none placeholder-gray-500 ${!formData.state
                      ? "border-gray-300 bg-gray-100 cursor-not-allowed text-gray-500"
                      : "border-gray-400 bg-transparent text-black"
                    }`}
                  placeholder={
                    formData.state
                      ? "Type to search cities..."
                      : "Select state first"
                  }
                  autoComplete="off"
                />

                {showCities && filteredCities.length > 0 && (
                  <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-400 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {filteredCities.map((c) => (
                      <li
                        key={c}
                        onClick={() => handleSelect("city", c)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 text-black"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* TRIAL CITY */}
              <div className="md:col-span-2 relative" ref={trialDropdownRef}>
                <label className="block text-black font-semibold mb-2">
                  Preferred Trials City *
                </label>
                <input
                  type="text"
                  name="trialsCity"
                  value={formData.trialsCity}
                  onChange={handleChange}
                  onFocus={() => {
                    if (formData.state) {
                      const cities = stateCityMap[formData.state] || [];
                      setFilteredTrials(cities);
                      setShowTrials(true);
                    }
                  }}
                  required
                  disabled={!formData.state}
                  className={`w-full px-4 py-3 border rounded-lg outline-none placeholder-gray-500 ${!formData.state
                      ? "border-gray-300 bg-gray-100 cursor-not-allowed text-gray-500"
                      : "border-gray-400 bg-transparent text-black"
                    }`}
                  placeholder={
                    formData.state
                      ? "Select your preferred trial city"
                      : "Select state first"
                  }
                  autoComplete="off"
                />

                {showTrials && filteredTrials.length > 0 && (
                  <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-400 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {filteredTrials.map((t) => (
                      <li
                        key={t}
                        onClick={() => handleSelect("trialsCity", t)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 text-black"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* FILE UPLOADS */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Photo */}
                <div>
                  <label className="block text-black font-semibold mb-2">
                    Profile Photo *
                  </label>

                  <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center bg-transparent transition hover:border-blue-500 hover:bg-blue-50/20">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="profilePhoto"
                      required
                    />
                    <label htmlFor="profilePhoto" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">
                          Upload Profile Photo
                        </span>
                        <p className="text-gray-500 text-xs mt-1">
                          JPEG, PNG - Max 2MB
                        </p>
                      </div>
                    </label>
                  </div>

                  {formData.profilePhoto && (
                    <p className="text-green-600 font-semibold mt-2 text-sm flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Uploaded successfully
                    </p>
                  )}
                </div>

                {/* Aadhar Card */}
                <div>
                  <label className="block text-black font-semibold mb-2">
                    Aadhar Card Copy *
                  </label>

                  <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center bg-transparent transition hover:border-blue-500 hover:bg-blue-50/20">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleAadharUpload}
                      className="hidden"
                      id="aadharCard"
                      required
                    />
                    <label htmlFor="aadharCard" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">
                          Upload Aadhar Card
                        </span>
                        <p className="text-gray-500 text-xs mt-1">
                          PDF, JPEG, PNG - Max 5MB
                        </p>
                      </div>
                    </label>
                  </div>

                  {formData.aadharCard && (
                    <p className="text-green-600 font-semibold mt-2 text-sm flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Uploaded successfully
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* REGISTRATION DETAILS */}
            <div className="mt-8 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">
                Registration Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Fee Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-700 font-semibold text-base md:text-lg">
                      Registration Fee:
                    </span>
                    <span className="text-lg md:text-xl font-bold text-emerald-600">
                      ₹749
                    </span>
                  </div>
                </div>
              </div>

              {/* TERMS */}
              <div className="mt-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 text-emerald-600 focus:ring-emerald-500 rounded border-slate-300"
                  />
                  <span className="text-slate-700 text-sm leading-relaxed">
                    I agree to the tournament terms and conditions. I confirm
                    that all information provided is accurate and I understand
                    that the registration fee of ₹749 is non-refundable. I have
                    read and agree to the privacy policy and code of conduct.
                  </span>
                </label>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-[#002C5F] text-white font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto"
              >
                Proceed to Register - ₹749
              </button>
              <p className="text-slate-600 mt-4 text-sm">
                Secure registration • Professional platform • Talent recognition
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* REVIEW MODAL */}
      {showReview && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-0 sm:p-4">
          <div
            className="
              bg-white
              border border-white/20
              w-full
              h-full sm:h-auto
              max-w-full sm:max-w-2xl
              mx-0 sm:mx-auto
              my-0 sm:my-8
              rounded-none sm:rounded-2xl
              shadow-2xl
              overflow-auto
              flex flex-col
            "
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-6 px-4 sm:px-8">
              <h2 className="text-2xl font-bold text-center">Review Your Registration</h2>
              <p className="text-center text-blue-100 mt-2">Verify all details before final submission</p>
            </div>

            {/* Review Content */}
            <div className="p-6 space-y-6 max-h-[55vh] overflow-y-auto">
              {/* Personal Information */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Full Name
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.fullName}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Mobile
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.mobile}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Email
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.email}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Date of Birth
                    </label>
                    <p className="text-slate-800 font-medium">{formData.dob}</p>
                  </div>
                </div>
              </div>

              {/* Cricket Details */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Cricket Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Player Role
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.role}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Batting Style
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.battingStyle}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Bowling Style
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.bowlingStyle}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      State
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.state}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      City
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.city}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-600">
                      Trials City
                    </label>
                    <p className="text-slate-800 font-medium">
                      {formData.trialsCity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Uploaded */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Documents Uploaded
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-emerald-700 font-medium">
                      Profile Photo
                    </span>
                    <span className="text-emerald-600 font-semibold">
                      ✓ Uploaded
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-emerald-700 font-medium">
                      Aadhar Card
                    </span>
                    <span className="text-emerald-600 font-semibold">
                      ✓ Uploaded
                    </span>
                  </div>
                </div>
              </div>

              {/* Final Confirmation */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={finalConfirmation}
                    onChange={(e) => setFinalConfirmation(e.target.checked)}
                    className="mt-1 text-emerald-600 focus:ring-emerald-500 rounded border-slate-300"
                    required
                  />
                  <span className="text-slate-700 text-sm leading-relaxed">
                    I confirm that all the information provided is accurate and
                    complete. I understand that this registration is final and
                    the fee of ₹749 is non-refundable. I agree to abide by the
                    tournament rules and code of conduct.
                  </span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6 border-t border-slate-200 bg-slate-50 space-y-3 md:space-y-0 md:space-x-4">
              <button
                type="button"
                onClick={() => setShowReview(false)}
                className="px-8 py-3 border-2 border-slate-400 text-slate-700 rounded-xl font-semibold hover:border-slate-500 hover:bg-slate-100 transition-all duration-300"
              >
                Edit Details
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={!finalConfirmation}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>Complete Registration - ₹749</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cricket Teams Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Featured Cricket Teams
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-3xl mx-auto px-2">
            Explore teams from across India representing the diverse cricketing
            talent of our nation
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {/* Delhi */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/delhi.png"
                  alt="Delhi Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Delhi
              </h3>
            </div>

            {/* Kolkata */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/kolkata.jpg"
                  alt="Kolkata Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Kolkata
              </h3>
            </div>

            {/* Chennai */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/chennai.png"
                  alt="Chennai Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Chennai
              </h3>
            </div>

            {/* Rajasthan */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/rajasthan.png"
                  alt="Rajasthan Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Rajasthan
              </h3>
            </div>

            {/* Lucknow */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/lucknow.png"
                  alt="Lucknow Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Lucknow
              </h3>
            </div>

            {/* Bihar */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/bihar.png"
                  alt="Bihar Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Bihar
              </h3>
            </div>

            {/* indore  */}

            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/indore.png"
                  alt="Bihar Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Indore
              </h3>
            </div>

            {/*mumbai */}
            <div className="text-center p-4 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md hover:shadow-lg transition duration-300">
                <img
                  src="/assets/mumbai.png"
                  alt="Bihar Cricket Team"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Mumbai
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[#F36F21] to-[#FF8833]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Why Thousands of Players Choose Us
          </h2>
          <p className="text-center text-white mb-8 md:mb-12 text-base md:text-lg max-w-3xl mx-auto px-2">
            Join India's most trusted cricket talent platform with proven track
            record of discovering exceptional talent
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                Professional Scouting Network
              </h3>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Get evaluated by certified coaches and scouts from IPL, Ranji
                Trophy, and state-level teams. Our network includes former
                international players and professional talent scouts.
              </p>
            </div>

            <div className="text-center p-4 md:p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                Career Advancement
              </h3>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Direct pathway to professional cricket contracts. Our alumni
                have been selected for state teams, IPL trials, and national
                camps. Real opportunities for real talent.
              </p>
            </div>

            <div className="text-center p-4 md:p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-purple-100 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                Elite Networking
              </h3>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Connect with cricket professionals, coaches, and like-minded
                players. Build relationships that can shape your career in the
                cricketing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
