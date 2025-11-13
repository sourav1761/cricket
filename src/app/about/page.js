// pages/about.js
import Head from "next/head";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";
import { FaFutbol, FaStar, FaHandshake, FaLeaf } from "react-icons/fa";


export default function AboutPage() {
  const teamMembers = [
    {
      name: "Koushal Sawle ",
      role: "Tournament Director",
      experience: "2+ years in cricket administration",
      description:
        "Former first-class cricketer with extensive experience in organizing national-level tournaments.",
    },
    {
      name: " Aman Sawle",
      role: "Event Manager",
      experience: "5+ years in sports management",
      description:
        "Specialized in large-scale sporting events with focus on player experience and fan engagement.",
    },
    {
      name: "Himanshu Jaat",
      role: "Head of Operations",
      experience: "5+ years in sports operations",
      description:
        "Expert in venue management, logistics, and tournament coordination.",
    },
 
  ];

  const tournamentHistory = [
    {
      year: "2018",
      title: "Inaugural Tournament",
      participants: "16 Teams",
      champion: "City Lions CC",
      highlight:
        "Successfully launched with overwhelming response from local cricket community",
    },
    {
      year: "2019",
      title: "Expanded Edition",
      participants: "24 Teams",
      champion: "Thunder Strikers",
      highlight: "Introduced live streaming and attracted first major sponsors",
    },
    {
      year: "2020",
      title: "COVID Adaptation",
      participants: "12 Teams",
      champion: "Royal Challengers",
      highlight:
        "Successfully conducted with strict health protocols during pandemic",
    },
    {
      year: "2021",
      title: "Comeback Season",
      participants: "32 Teams",
      champion: "Mumbai Warriors",
      highlight: "Record participation and introduced women's category",
    },
    {
      year: "2022",
      title: "Mega Tournament",
      participants: "48 Teams",
      champion: "Delhi Daredevils",
      highlight: "Featured international players and attracted media coverage",
    },
  ];


const values = [
  {
    icon: <FaFutbol size={40} className="mx-auto" />,
    title: "Passion for Cricket",
    description:
      "We live and breathe cricket, dedicated to promoting the sport at grassroots level",
  },
  {
    icon: <FaStar size={40} className="mx-auto" />,
    title: "Excellence",
    description:
      "Striving for the highest standards in tournament organization and player experience",
  },
  {
    icon: <FaHandshake size={40} className="mx-auto" />,
    title: "Fair Play",
    description:
      "Ensuring equal opportunities and maintaining sportsmanship throughout the tournament",
  },
  {
    icon: <FaLeaf size={40} className="mx-auto" />,
    title: "Community Growth",
    description:
      "Developing local talent and creating opportunities for aspiring cricketers",
  },
];


  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us | ACPL Cricket Tournament 2024</title>
        <meta
          name="description"
          content="Learn about our cricket tournament history, team, and mission"
        />
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
              About Our Tournament
            </h1>
            <p className="text-xl md:text-2xl text-[#56C2E8] mb-8 max-w-4xl mx-auto">
          Founded with the vision of “Cricket for Everyone,” ACPL brings together players from all walks of life to share their love for the game.

            
          
              ACPL is not just a tournament — it’s a celebration of passion, teamwork, and true sportsmanship
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#081B33] mb-6">
                Our Story
              </h2>
              <p className="text-[#081B33] text-lg mb-6">
                ACPL (Apni Cricket Premier League) ACPL is a local cricket
                platform with the aim of providing opportunities to emerging
                cricket players, helping them refine their skills, and giving
                them a pathway to reach higher levels of the sport. The primary
                goal of ACPL is to bring out the hidden talent from rural and
                urban areas and offer them a professional environment to
                compete. Our league is built entirely on fair selection,
                discipline, sportsmanship, and passion.
              </p>
              <p className="text-[#081B33] text-lg mb-6">
                ACPL supports players in developing essential qualities such as
                fitness, teamwork, leadership, and game awareness. ACPL is not
                just a cricket league, but a community—where players play,
                learn, grow, and move closer to achieving their dreams.{" "}
              </p>
              
            </div>
           <div className="bg-gradient-to-br from-[#56C2E8]/10 to-white rounded-2xl p-8 border-2 border-[#56C2E8]">
  <h3 className="text-2xl font-bold text-[#002E5D] mb-4">
    Our Mission
  </h3>
  
  <ul className="text-[#081B33] space-y-3">
    <li className="flex items-start">
      <span className="font-bold mr-2">1.</span>
      Providing opportunities to talent
    </li>
    <li className="flex items-start">
      <span className="font-bold mr-2">2.</span>
      Bringing talent from grassroots
    </li>
    <li className="flex items-start">
      <span className="font-bold mr-2">3.</span>
      Promoting discipline and sportsmanship
    </li>
    <li className="flex items-start">
      <span className="font-bold mr-2">4.</span>
      Creating a professional environment
    </li>
    <li className="flex items-start">
      <span className="font-bold mr-2">5.</span>
      Inspiring youth towards a healthy lifestyle
    </li>
    <li className="flex items-start">
      <span className="font-bold mr-2">6.</span>
      Community building
    </li>
  </ul>
<li></li>
           
              <h3 className="text-2xl font-bold text-[#002E5D] mb-4">
                Our Vision
              </h3>
              <p className="text-[#081B33]">
            "ACPL aims to provide a platform for emerging cricket talents from villages, towns, and cities where they can enhance their skills, fulfill their dreams of playing at higher levels, and contribute to developing a strong, disciplined cricket culture."

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Primary Blue Background */}
   <section className="py-16 px-4 bg-gradient-to-b from-[#002E5D] to-[#081B33] text-white relative overflow-hidden">
      {/* Decorative curves */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white rounded-b-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-full"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#56C2E8] to-[#002E5D] rounded-xl p-6 text-center transform hover:scale-105 transition duration-300 border-2 border-[#A6CE39]"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-blue-100 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Team Section - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-[#081B33] mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#56C2E8]/10 to-white border-2 border-[#56C2E8] rounded-xl p-6 text-center transform hover:scale-105 transition duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#56C2E8] to-[#002E5D] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#A6CE39]">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#081B33] mb-2">
                  {member.name}
                </h3>
                <div className="text-[#002E5D] font-semibold mb-2">
                  {member.role}
                </div>
                <div className="text-[#F36E21] text-sm mb-3">
                  {member.experience}
                </div>
                <p className="text-[#081B33] text-sm">{member.description}</p>
              </div>
            ))}
          </div>


<div className="mt-12 text-center">
  <div className="relative inline-block bg-gradient-to-r from-[#56C2E8]/20 to-[#A6CE39]/20 border-2 border-[#56C2E8] rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    
    {/* Decorative circle behind the content */}
    <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#F36E21]/30 rounded-full blur-2xl"></div>
    
    <h3 className="text-3xl font-extrabold text-[#002E5D] mb-4">
      Join Our Team
    </h3>
    <p className="text-[#081B33] mb-6 max-w-md mx-auto">
      We're always looking for passionate individuals to help us grow the tournament.
    </p>
    <Link
      href="/contact"
      className="inline-block bg-gradient-to-r from-[#F36E21] to-[#C1272D] hover:from-[#E55D1A] hover:to-[#B02026] text-white font-bold py-3 px-10 rounded-full transition duration-300 border-2 border-[#C1272D] shadow-md hover:shadow-lg"
    >
      Get In Touch
    </Link>
  </div>
</div>

        </div>
      </section>

  

      {/* Achievements Section - White Background */}
     
      {/* Future Vision Section - Primary Blue Background */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#002E5D] to-[#081B33] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Future Vision</h2>
          <p className="text-xl text-[#56C2E8] mb-8">
            As we look ahead, we're committed to expanding our reach,
            introducing new formats, and creating even more opportunities for
            cricket enthusiasts. Our goal is to establish international
            partnerships and make our tournament a global platform for amateur
            cricket.
          </p>
        <div className="bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500"></div>
  </div>


  {/* Floating Elements */}
  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
</div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
