import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from "@/components/Footer";
import { FaFileAlt, FaMapMarkerAlt, FaBroadcastTower } from 'react-icons/fa';

export default function MoreInfoPage() {
  const tournamentRules = [
    {
      category: "Team Composition",
      rules: [
        "Each team must have minimum 11 players and maximum 15 players",
        "All players must be registered with valid ID proof",
        "Teams must have designated captain and vice-captain",
        "Minimum 2 reserve players mandatory for each match"
      ]
    },
    {
      category: "Match Format",
      rules: [
        "All matches will be played in T10 format",
        "Each innings limited to 10 overs",
        "Powerplay: First 3 overs with fielding restrictions",
        "Strategic timeout of 2.5 minutes per innings"
      ]
    },
    {
      category: "Player Conduct",
      rules: [
        "Strict code of conduct to be followed by all players",
        "No abusive language or aggressive behavior permitted",
        "Respect umpire decisions - no arguments allowed",
        "Fair play and sportsmanship mandatory"
      ]
    },
  
  ];

  const venues = [
    {
      name: "City Cricket Stadium",
      location: "123 Sports Avenue, Main City",
      facilities: ["Floodlights", "Practice Nets", "Changing Rooms", "Medical Facility"],
      capacity: "15,000"
    },
    {
      name: "Greenfield International Ground",
      location: "456 Cricket Road, Downtown",
      facilities: ["Digital Scoreboard", "VIP Lounge", "Food Court", "Parking"],
      capacity: "10,000"
    },
    {
      name: "Riverside Sports Complex",
      location: "789 Riverside Drive, East City",
      facilities: ["Indoor Practice Area", "Gym", "Swimming Pool", "Hotel"],
      capacity: "8,000"
    }
  ];

  const schedule = [
    {
      stage: "Group Stage",
      dates: "Coming Soon",
      matches: "Coming Soon",
      description: "Round-robin format where all teams play each other"
    },
    {
      stage: "Quarter Finals",
      dates: "Coming Soon ",
      matches: "Coming Soon",
      description: "Knockout stage begins with top 8 teams"
    },
    {
      stage: "Semi Finals",
      dates: "Coming Soon",
      matches: "Coming Soon",
      description: "Final four teams compete for championship spot"
    },
    {
      stage: "Grand Finale",
      dates: "Coming Soon",
      matches: "Coming Soon ",
      description: "Championship match with opening ceremony"
    }
  ];

  const faqs = [
    {
      question: "How can I register my team for the tournament?",
      answer: "You can register your team through our online registration portal. Click on the Registration link in the navigation menu and fill out the team registration form."
    },
    {
      question: "What is the registration fee?",
      answer: "The registration fee is ₹5,000 per team. Early bird discount of 20% is available for registrations completed before October 15th, 2023."
    },
    {
      question: "Are there any age restrictions for players?",
      answer: "Players must be at least 16 years old to participate. There's no upper age limit as long as players meet the fitness requirements."
    },
    {
      question: "What happens in case of rain during matches?",
      answer: "We have reserved dates for rain-affected matches. The Duckworth-Lewis method will be used for interrupted matches."
    },
    {
      question: "Can individual players register without a team?",
      answer: "Yes, individual players can register and we'll help place them in teams that need additional players."
    },
    {
      question: "What prizes can winning teams expect?",
      answer: "The total prize pool is ₹2,50,000 with ₹1,00,000 for champions, ₹60,000 for runners-up, and additional individual awards for best players."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>More Information | ACPL Cricket Tournament 2024</title>
        <meta name="description" content="Complete information about tournament rules, venues, schedule and FAQs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section - Primary Blue Background */}
      <section className="bg-gradient-to-r from-[#002E5D] to-[#081B33] py-25 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tournament Information
            </h1>
            <p className="text-xl md:text-2xl text-[#56C2E8] mb-8 max-w-4xl mx-auto">
              Everything you need to know about the ACPL Cricket Tournament 2024. 
              From rules and regulations to venues and schedules.
            </p>
            <div className="bg-[#F36E21] text-white py-3 px-6 rounded-lg inline-block border-2 border-[#C1272D]">
              <span className="text-xl font-bold">Complete Guide</span> for Participants & Teams
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Rules Section - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-[#081B33] mb-12">Tournament Rules & Regulations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tournamentRules.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-[#56C2E8]/10 to-white border-2 border-[#56C2E8] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#002E5D] mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#F36E21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#A6CE39] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-[#081B33]">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#F36E21]/10 to-[#C1272D]/10 border-2 border-[#F36E21] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#C1272D] mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              Important Notes
            </h3>
            <p className="text-[#C1272D]">
              All teams must strictly adhere to the tournament rules. Any violation may result in penalties, 
              including disqualification. The tournament committee's decisions will be final and binding.
            </p>
          </div>
        </div>
      </section>

      {/* Venues Section - Primary Blue Background */}
<section className="bg-slate-900 text-white py-16 px-4">
  <div className="container mx-auto max-w-5xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      ACPL Player <span className="text-emerald-400">Selection Process</span>
    </h2>
    <p className="text-blue-200 max-w-xl mx-auto mb-12">
      Follow these simple steps to become a professional ACPL cricketer.
    </p>

    {/* Process Flow */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-8 md:space-y-0 relative">
      {/* Curved connector line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 rounded-full"></div>

      {/* Step 1 */}
      <div className="relative z-10 bg-slate-800 rounded-2xl p-6 w-full md:w-1/5 shadow-md hover:shadow-lg transition-all">
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          1
        </div>
        <h3 className="text-lg font-semibold mb-2">Registration</h3>
        <p className="text-sm text-blue-200">
          Fill the online form and pay ₹749 (inclusive of GST) to register for ACPL trials.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative z-10 bg-slate-800 rounded-2xl p-6 w-full md:w-1/5 shadow-md hover:shadow-lg transition-all">
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
          2
        </div>
        <h3 className="text-lg font-semibold mb-2">Profile Update</h3>
        <p className="text-sm text-blue-200">
          Complete your personal and professional details to confirm eligibility.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative z-10 bg-slate-800 rounded-2xl p-6 w-full md:w-1/5 shadow-md hover:shadow-lg transition-all">
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
          3
        </div>
        <h3 className="text-lg font-semibold mb-2">Physical Trials</h3>
        <p className="text-sm text-blue-200">
          Attend scheduled trials and meet performance goals to qualify for auction.
        </p>
      </div>

      {/* Step 4 */}
      <div className="relative z-10 bg-slate-800 rounded-2xl p-6 w-full md:w-1/5 shadow-md hover:shadow-lg transition-all">
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
          4
        </div>
        <h3 className="text-lg font-semibold mb-2">Player Auction</h3>
        <p className="text-sm text-blue-200">
          Get selected in the live auction and be drafted into a team.
        </p>
      </div>

      {/* Step 5 */}
      <div className="relative z-10 bg-slate-800 rounded-2xl p-6 w-full md:w-1/5 shadow-md hover:shadow-lg transition-all">
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold">
          5
        </div>
        <h3 className="text-lg font-semibold mb-2">Play ACPL</h3>
        <p className="text-sm text-blue-200">
          Join official ACPL teams and compete in the premier cricket league.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16">
      <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:scale-105 transition-all">
        Begin Registration – ₹749
      </button>
    </div>
  </div>
</section>



      {/* Schedule Section - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#081B33] mb-12">Tournament Schedule</h2>
          
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#56C2E8]/10 to-white border-2 border-[#56C2E8] rounded-xl p-6 transform hover:scale-102 transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#002E5D] mb-2">{item.stage}</h3>
                    <p className="text-[#081B33] mb-2">{item.description}</p>
                    <div className="flex items-center text-sm text-[#002E5D]">
                      <svg className="w-4 h-4 mr-1 text-[#F36E21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {item.dates}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <div className="bg-gradient-to-r from-[#F36E21] to-[#C1272D] text-white px-4 py-2 rounded-lg inline-block border border-[#C1272D]">
                      <span className="font-bold">{item.matches}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#56C2E8]/20 to-[#A6CE39]/20 border-2 border-[#56C2E8] rounded-xl p-6 inline-block">
              <h3 className="text-xl font-bold text-[#002E5D] mb-2">Download Complete Schedule</h3>
              <p className="text-[#081B33] mb-4">Get the detailed match schedule with timings and team fixtures</p>
              <button className="bg-gradient-to-r from-[#F36E21] to-[#C1272D] hover:from-[#E55D1A] hover:to-[#B02026] text-white font-bold py-3 px-8 rounded-lg transition duration-300 border-2 border-[#C1272D]">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

   
      {/* Additional Resources Section - White Background */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#002E5D] to-[#081B33]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Additional Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="text-center p-6 border-2 border-[#56C2E8] rounded-xl hover:shadow-lg transition duration-300 bg-white">
    <div className="bg-[#56C2E8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <FaFileAlt className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-[#002E5D] mb-2">Tournament Handbook</h3>
    <p className="text-[#081B33] mb-4">Complete guide with all rules and regulations</p>
    <button className="bg-gradient-to-r from-[#F36E21] to-[#C1272D] hover:from-[#E55D1A] hover:to-[#B02026] text-white font-medium py-2 px-6 rounded-lg transition duration-300">
      Download PDF
    </button>
  </div>

  <div className="text-center p-6 border-2 border-[#A6CE39] rounded-xl hover:shadow-lg transition duration-300 bg-white">
    <div className="bg-[#A6CE39] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <FaMapMarkerAlt className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-[#002E5D] mb-2">Venue Maps</h3>
    <p className="text-[#081B33] mb-4">Detailed maps and directions to all venues</p>
    <button className="bg-gradient-to-r from-[#F36E21] to-[#C1272D] hover:from-[#E55D1A] hover:to-[#B02026] text-white font-medium py-2 px-6 rounded-lg transition duration-300">
      View Maps
    </button>
  </div>

  <div className="text-center p-6 border-2 border-[#F36E21] rounded-xl hover:shadow-lg transition duration-300 bg-white">
    <div className="bg-[#F36E21] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <FaBroadcastTower className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-[#002E5D] mb-2">Live Updates</h3>
    <p className="text-[#081B33] mb-4">Real-time scores and match updates</p>
    <button className="bg-gradient-to-r from-[#F36E21] to-[#C1272D] hover:from-[#E55D1A] hover:to-[#B02026] text-white font-medium py-2 px-6 rounded-lg transition duration-300">
      Follow Live
    </button>
  </div>
</div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}