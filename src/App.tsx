import Header from './components/Header';
import Section from './components/Section';
import EventCard from './components/EventCard';
import TeamCard from './components/TeamCard';
import PamphletSlider from './components/PamphletSlider';
import StudentCoordinatorSlider from './components/StudentCoordinatorSlider';
import StaffCoordinatorSlider from "./components/StaffCoordinatorSlider";
import EventList from "./components/EventList";
import TeamSlider from './components/TeamSlider';
import { 
  Users, 
  Trophy, 
  Code, 
  BookOpen, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  Camera,
  Palette,
  Monitor
} from 'lucide-react';

function App() {
  const technicalEvents = [
    {
      title: "Stray Revengers",
      description: "An exciting coding challenge where participants solve complex algorithms and data structures problems.",
      imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    },
    {
      title: "Literary Disorder",
      description: "A creative writing and literature competition that tests your storytelling and analytical skills.",
      imageUrl: "https://images.pexels.com/photos/159775/library-book-reading-read-159775.jpeg"
    },
    {
      title: "Road Giant",
      description: "Engineering design challenge focused on transportation and infrastructure solutions.",
      imageUrl: "https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg"
    },
    {
      title: "Guardian of the Code",
      description: "Cybersecurity competition testing your skills in ethical hacking and system protection.",
      imageUrl: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "The Sock Daredevils",
      description: "Fun team-building activities and creative challenges that test your coordination and creativity.",
      imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
      title: "One Strike",
      description: "Sports competition featuring various athletic challenges and team sports events.",
      imageUrl: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg"
    },
    {
      title: "The Real Multiverse",
      description: "Art and design competition showcasing creativity across multiple mediums and platforms.",
      imageUrl: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
    },
    {
      title: "The Secret Saga",
      description: "Mystery-solving competition that combines logic, teamwork, and creative problem-solving.",
      imageUrl: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg"
    }
  ];

  const editors = [
    { name: "VAIBHAV ", position: "CSE II Year", src: "/Editors/Vaibhav.png" }, 
    { name: "Datchin Y S", position: "CSE II Year", src: "/Editors/Datchin.png" },
    { name: "SAI KANISHKAR S", position: "CSE II Year", src: "/Editors/Sai Kanishkar.png" },
    { name: "RAHUL R M", position: "CSE II Year", src: "/Editors/Rahul.png" }
  ];

  const designers = [
    { name: "Ajisha", position: "CSE II Year" , src:"/Design/Ajisha.jpg" },
    { name: "Shivani", position: "CSE II Year" , src:"/Design/Shivani.jpg" },
    { name: "Shruthi", position: "CSE II Year" , src:"/Design/Shruthi.jpg" },
    { name: "Shyam", position: "AI&DS II Year" , src:"/Design/Shyam.jpg" },
    { name: "Varshini", position: "CSE II Year" , src:"/Design/Varshini.png" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Pamphlet Showcase Section */}
      <Section 
  title={<span className="font-avengero text-6xl">Event Gallery</span>} 
  subtitle={<span className="font-avengero text-3xl">Explore our exciting event</span>} 
  backgroundColor="bg-black bg-opacity-60"
>

        <PamphletSlider />
      </Section>

      {/* Chief Guests Section */}
      <Section 
        title={<span className="font-avengero text-4xl">Chief Guests</span>} 
        subtitle={<span className="font-avengero text-xl">Distinguished personalities who will grace our event</span>}
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="bg-black bg-opacity-30 rounded-2xl p-8 text-center">
          <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <p className="text-white text-xl">Chief guest details will be announced soon!</p>
          <p className="text-yellow-300 mt-2">Stay tuned for exciting updates</p>
        </div>
      </Section>

      {/* Events Section (Technical & Non-Technical) */}
      <Section
        title={<span className="font-avengero text-4xl">Events</span>}
        subtitle={<span className="font-avengero text-xl">Register for our technical and non-technical events!</span>}
        backgroundColor="bg-black bg-opacity-80"
      >
        <EventList technicalEvents={technicalEvents} nonTechnicalEvents={nonTechnicalEvents} />
      </Section>

      {/* Mini Hackathon Section */}
      <Section 
        title={<span className="font-dback">Mini Hackathon</span>} 
        backgroundColor="bg-yellow-600 bg-opacity-80"
      >
        <div className="bg-black bg-opacity-40 rounded-3xl p-12 text-center border-4 border-yellow-400">
          <Code className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h3 className="font-avengero text-3xl font-bold mb-6">24-Hour Coding Marathon</h3>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Join our intensive 24-hour hackathon where teams of developers, designers, and innovators 
            come together to build amazing solutions. Code, create, and compete for exciting prizes 
            while learning from industry experts and mentors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold">
              ₹50,000 Prize Pool
            </div>
            <div className="bg-white text-black px-6 py-3 rounded-full font-bold">
              24 Hours Challenge
            </div>
            <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold">
              Team of 4 Max
            </div>
          </div>
        </div>
      </Section>

      {/* Deadpool Sticker - Mobile Responsive & Higher Position */}
      <div className="relative">
        <img
          src="/Deadpool.png"
          alt="Deadpool Sticker"
          className="block absolute right-2 -top-8 z-50 pointer-events-none max-w-full h-auto w-24 md:w-40 lg:w-56"
          style={{ transform: 'rotate(-8deg)' }}
        />
      </div>

      {/* Paper Presentation Section */}
      <Section 
  title={<span className="font-avengero text-4xl text-white">Paper Presentation</span>} 
  subtitle={<span className="font-avengero text-xl text-white">Showcase your research and social service innovations</span>}
  backgroundColor="bg-black bg-opacity-60"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="bg-gradient-to-br from-yellow-600 to-red-600 rounded-3xl shadow-2xl p-8 flex flex-col justify-between h-full">
      <BookOpen className="w-16 h-16 text-white mb-6 mx-auto" />
      <h3 className="text-2xl font-avengero text-white mb-4 text-center">Contribute to Social Service Literature</h3>
      <ul className="text-white space-y-3 text-lg font-avengero mb-6">
        <li>• Teams of up to 3 members</li>
        <li>• Focus on NSS, NCC, YRC, or similar organizations</li>
        <li>• Submit a research or project paper (precedence/abstract)</li>
        <li>• Address real-world problems, solutions, or community impact</li>
        <li>• Upload abstract in prescribed format via Google Form</li>
        <li>• Accepted abstracts published in ISBN booklet</li>
        <li>• Gain recognition for your social welfare contributions</li>
      </ul>
      <div className="flex flex-col items-center">
        <span className="bg-white text-red-600 font-bold px-6 py-2 rounded-full mb-4">Registration Fee: ₹300</span>
        <a
          href="https://forms.gle/QMhKvSq5uq6LGx3k7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
        >
          Register & Upload Abstract
        </a>
      </div>
    </div>
    <div className="flex flex-col justify-center text-white font-avengero text-lg">
      <p className="mb-6">
        We invite teams of up to 3 members to participate in an exciting opportunity to contribute to the domain of social service initiatives such as NSS, NCC, YRC, and similar organizations. Participants are encouraged to create a research paper or project paper that highlights innovative ideas, impactful case studies, or thoughtful analyses related to social service activities.
      </p>
      <p className="mb-6">
        Each team must prepare and submit a precedence (abstract) in the prescribed paper publishing format, focusing on real-world problems, solutions, community impact, or social innovations. The abstract must be uploaded via the provided Google Form within the deadline.
      </p>
      <p className="mb-6">
        All accepted abstracts will be compiled into a well-structured booklet, which will be published with an ISBN number, providing a valuable addition to academic and social service literature.
      </p>
      <p>
        This is a great opportunity to showcase your contribution toward social welfare, promote your ideas on a larger platform, and gain recognition for your efforts in community development.
      </p>
    </div>
  </div>
</Section>

      {/* About Us Section */}
      <Section 
        title="About Us" 
        subtitle="Learn more about Sri Sairam Institute of Technology and our mission"
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-200 to-gray-400 h-64 rounded-xl flex items-center justify-center">
                <Calendar className="w-20 h-20 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6 font-avengero">Our Institution</h3>
<p className="text-lg leading-relaxed mb-6 font-avengero">
  Sri Sairam Institute of Technology stands as a beacon of excellence in technical education, 
  fostering innovation and nurturing talented minds. Our National Service Scheme organizes 
  SAMARPANA as a platform to showcase student talents and promote technical excellence.
</p>
<p className="text-lg leading-relaxed mb-8 font-avengero">
  Through events like SAMARPANA, we aim to bridge the gap between academic learning and 
  real-world applications, encouraging students to think creatively and work collaboratively.
</p>
<div className="flex justify-center">
  <div className="bg-yellow-400 rounded-full p-6 shadow-2xl">
    <Calendar className="w-12 h-12 text-black" />
  </div>
</div>
          </div>
        </div>
      </Section>

      {/* Sponsors Section */}
      {/* <Section 
        title="Our Sponsors" 
        subtitle="Proud partners supporting our vision and mission"
        backgroundColor="bg-black bg-opacity-60"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-bold font-avengero">SPONSOR</span>
              </div>
            </div>
          ))}
        </div>
      </Section> */}

      {/* Staff Coordinators Section */}
      <Section
        title="Staff Coordinators"
        subtitle="Meet our dedicated staff coordinators"
        backgroundColor="bg-black bg-opacity-50"
      >
        <TeamSlider members={[
    { name: "Dr.Baranidharan K", position: "NSS Program Coordinator", src: "/Staff/Barani.jpg" },
    { name: "Dr.Avudaniyaki R", position: "AP / S&H", src: "/Staff/Avudainayaki.jpg" },
    { name: "Dr.Roopa D", position: "AP / CSE", src: "/Staff/roopa.jpg" }
  ]} slidesToShow={3} />
      </Section>

      {/* Student Coordinators Section */}
      <Section
        title="Student Coordinators"
        subtitle="Meet our dedicated student coordinators"
        backgroundColor="bg-black bg-opacity-50"
      >
        <TeamSlider members={[
    { name: "Abhishek", position: "Student Coordinator", src: "/MagicMem/Abhishek.jpg" },
    { name: "Aiysha Nizar", position: "Student Coordinator", src: "/MagicMem/Aiysha Nizar.jpg" },
    { name: "Akash", position: "Student Coordinator", src: "/MagicMem/Akash.jpg" },
    { name: "Kishore", position: "Student Coordinator", src: "/MagicMem/Kishore.jpg" },
    { name: "Murugayesu", position: "Student Coordinator", src: "/MagicMem/Murugayesu.jpg" },
    { name: "Nivetha", position: "Student Coordinator", src: "/MagicMem/Nivetha.jpg" },
    { name: "Prabha", position: "Student Coordinator", src: "/MagicMem/Prabha.jpg" },
    { name: "Rishi Prasad", position: "Student Coordinator", src: "/MagicMem/Rishi Prasad.jpg" },
    { name: "Roshini", position: "Student Coordinator", src: "/MagicMem/Roshini.jpg" },
    { name: "Sathish", position: "Student Coordinator", src: "/MagicMem/Sathish.jpg" },
    { name: "Srimathi", position: "Student Coordinator", src: "/MagicMem/Srimathi.jpg" },
    { name: "Srivarshan", position: "Student Coordinator", src: "/MagicMem/Srivarshan.jpg" },
    { name: "Venuprasath", position: "Student Coordinator", src: "/MagicMem/Venuprasath.jpg" }
  ]} slidesToShow={5} />
      </Section>

      {/* Editors & Cinematographers Section */}
      <Section 
        title="Editors & Cinematographers" 
        subtitle="Creative minds capturing every moment of our event"
        backgroundColor="bg-black bg-opacity-60"
      >
        <TeamSlider members={editors} slidesToShow={4} />
      </Section>

      {/* Design Team Section */}
      <Section 
        title="Design Team" 
        subtitle="Artistic visionaries behind our event's stunning visual identity"
        backgroundColor="bg-black bg-opacity-50"
      >
        <TeamSlider members={designers} slidesToShow={5} />
      </Section>

      {/* Web Master Section */}
      <Section 
        title="Web Master" 
        subtitle="The technical architect behind our digital presence"
        backgroundColor="bg-black bg-opacity-60"
      >
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full mx-auto flex items-center justify-center">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-2">
                <Code className="w-4 h-4 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-avengero">Vishveshwaran A</h3>
            <p className="text-red-600 font-semibold uppercase tracking-wider mb-4 font-avengero">Lead Web Developer</p>
            <p className="text-gray-600 font-avengero">
              Architecting digital experiences and ensuring seamless web performance for SAMARPANA.
            </p>
          </div>
        </div>
      </Section>

      {/* Venue & Contact Section */}
      <Section 
        title="Venue & Contact" 
        subtitle="Find us and get in touch for any queries"
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
  
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1750647706585!2d80.05065757512264!3d12.960647087353676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1757614259703!5m2!1sen!2sin"
      width="400"
      height="300"
      style={{ border: 0, borderRadius: "0.75rem" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Sri Sairam Institute of Technology Location"
      className="w-full max-w-md"
    />



          {/* Contact Info */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-yellow-300">samarpana2k25@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-yellow-300">+91 9876543210</p>
                  <p className="text-yellow-300">+91 9876543211</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-yellow-300">Sri Sairam Institute of Technology</p>
                  <p className="text-yellow-300">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-lg font-semibold">
            © SAMARPANA – Sri Sairam Institute of Technology NSS
          </p>
          <p className="text-yellow-400 mt-2">Empowering Innovation, Celebrating Excellence</p>
        </div>
      </footer>
    </div>
  );
}

export default App;