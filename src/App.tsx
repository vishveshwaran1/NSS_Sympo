import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import EventCard from './components/EventCard';
import TeamCard from './components/TeamCard';
import PamphletSlider from './components/PamphletSlider';
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

  const coordinators = [
    { name: "Arjun Sharma", position: "Event Coordinator" },
    { name: "Priya Nair", position: "Technical Lead" },
    { name: "Rahul Singh", position: "Non-Tech Coordinator" },
    { name: "Sneha Patel", position: "Logistics Head" },
  ];

  const editors = [
    { name: "Karthik Raj", position: "Video Editor" },
    { name: "Deepika M", position: "Cinematographer" },
    { name: "Arun Kumar", position: "Photo Editor" },
  ];

  const designers = [
    { name: "Nisha Reddy", position: "UI Designer" },
    { name: "Vikram S", position: "Graphic Designer" },
    { name: "Ananya Joshi", position: "Creative Director" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Pamphlet Showcase Section */}
      <Section 
        title="Event Gallery" 
        subtitle="Explore our exciting event posters and promotional materials"
        backgroundColor="bg-black bg-opacity-60"
      >
        <PamphletSlider />
      </Section>

      {/* Chief Guests Section */}
      <Section 
        title="Chief Guests" 
        subtitle="Distinguished personalities who will grace our event"
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="bg-black bg-opacity-30 rounded-2xl p-8 text-center">
          <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <p className="text-white text-xl">Chief guest details will be announced soon!</p>
          <p className="text-yellow-300 mt-2">Stay tuned for exciting updates</p>
        </div>
      </Section>

      {/* Technical Events Section */}
      <Section 
        title="Technical Events" 
        subtitle="Challenge your technical skills with our exciting competitions"
        backgroundColor="bg-black bg-opacity-60"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              category="Technical"
            />
          ))}
        </div>
      </Section>

      {/* Non-Technical Events Section */}
      <Section 
        title="Non-Technical Events" 
        subtitle="Showcase your creativity and teamwork in these fun competitions"
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nonTechnicalEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              category="Non-Technical"
            />
          ))}
        </div>
      </Section>

      {/* Mini Hackathon Section */}
      <Section 
        title="Mini Hackathon" 
        backgroundColor="bg-yellow-600 bg-opacity-80"
      >
        <div className="bg-black bg-opacity-40 rounded-3xl p-12 text-center border-4 border-yellow-400">
          <Code className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl font-black text-white mb-6">24-Hour Coding Marathon</h3>
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

      {/* Paper Presentation Section */}
      <Section 
        title="Paper Presentation" 
        subtitle="Share your research and innovative ideas with the academic community"
        backgroundColor="bg-black bg-opacity-60"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 shadow-2xl">
              <BookOpen className="w-16 h-16 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Research Symposium</h3>
              <div className="space-y-3 text-white">
                <p>• Present your innovative research findings</p>
                <p>• Network with fellow researchers</p>
                <p>• Get feedback from industry experts</p>
                <p>• Win exciting cash prizes and certificates</p>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Call for Papers</h3>
            <p className="text-lg leading-relaxed mb-6">
              We invite researchers, students, and professionals to submit their original research 
              papers across various domains including Computer Science, Engineering, and Technology. 
              Selected papers will be presented at our symposium and published in our conference proceedings.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                <span>Best Paper Awards</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                <span>Publication Opportunity</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-yellow-400 mr-3" />
                <span>Expert Panel Review</span>
              </div>
            </div>
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
            <h3 className="text-3xl font-bold mb-6">Our Institution</h3>
            <p className="text-lg leading-relaxed mb-6">
              Sri Sairam Institute of Technology stands as a beacon of excellence in technical education, 
              fostering innovation and nurturing talented minds. Our National Service Scheme organizes 
              SAMARPANA as a platform to showcase student talents and promote technical excellence.
            </p>
            <p className="text-lg leading-relaxed mb-8">
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
      <Section 
        title="Our Sponsors" 
        subtitle="Proud partners supporting our vision and mission"
        backgroundColor="bg-black bg-opacity-60"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-bold">SPONSOR</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Student Coordinators Section */}
      <Section 
        title="Student Coordinators" 
        subtitle="Meet the dedicated team organizing this spectacular event"
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {coordinators.map((coordinator, index) => (
            <TeamCard
              key={index}
              name={coordinator.name}
              position={coordinator.position}
            />
          ))}
        </div>
      </Section>

      {/* Editors & Cinematographers Section */}
      <Section 
        title="Editors & Cinematographers" 
        subtitle="Creative minds capturing every moment of our event"
        backgroundColor="bg-black bg-opacity-60"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editors.map((editor, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-4">
                <TeamCard
                  name={editor.name}
                  position={editor.position}
                  isCircular={false}
                />
                <div className="absolute top-2 right-2 bg-red-600 rounded-full p-2">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Design Team Section */}
      <Section 
        title="Design Team" 
        subtitle="Artistic visionaries behind our event's stunning visual identity"
        backgroundColor="bg-black bg-opacity-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designers.map((designer, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-4">
                <TeamCard
                  name={designer.name}
                  position={designer.position}
                  isCircular={false}
                />
                <div className="absolute top-2 right-2 bg-yellow-500 rounded-full p-2">
                  <Palette className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Alex Johnson</h3>
            <p className="text-red-600 font-semibold uppercase tracking-wider mb-4">Lead Web Developer</p>
            <p className="text-gray-600">
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
          <div className="bg-white rounded-2xl p-4 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-200 to-gray-400 h-80 rounded-xl flex items-center justify-center">
              <MapPin className="w-20 h-20 text-gray-600" />
              <div className="ml-4 text-gray-700">
                <h4 className="font-bold text-xl">Google Maps</h4>
                <p>Interactive venue location</p>
              </div>
            </div>
          </div>

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
                  <p className="text-yellow-300">samarpana@sairam.edu.in</p>
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