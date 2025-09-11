import React from "react";

const technicalEvents = [
  {
    name: "Algo Galaxy",
    description:
      "A coding challenge on HackerRank in C, Java, and Python to test logic, speed, and creativity as participants explore vast problem-solving universes.",
    link: "https://forms.gle/2TjyiN4hdP26eH647",
    img: "/Events/Algo Galaxy.png"
  },
  {
    name: "Spidy Web Verse",
    description:
      "Teams build functional websites in 1 hour 30 minutes on any of the 17 SDGs using tools of their choice. AI tools like ChatGPT and GitHub Copilot can be used for creativity and speed. Ends with a 2–3 minute demo of the solution.",
    link: "https://forms.gle/muKUxgRA99gszX116",
    img: "/Events/Spidy Web Verse.png"
  },
  {
    name: "Guardians of the Code",
    description:
      "A fun, Marvel-themed workshop introducing beginners to JavaScript. Participants learn core concepts, DOM manipulation, and build a mini project—unlocking their own coding superpowers.",
    link: "https://forms.gle/62TVpJn5ybCMQFCg9",
    img: "/Events/Guardians of the Code.jpg"
  },
  {
    name: "Infinity Design",
    description:
      "A 2-hour UI/UX design competition in Figma where teams of two craft app/web prototypes based on a theme. Tests creativity, problem-solving, and design thinking.",
    link: "https://forms.gle/LsNnveJ4PqKpBjXE8",
    img: "public/Events/Infinity Designs.png"
  }
];

const nonTechnicalEvents = [
  {
    name: "The Sonic Dimension",
    description:
      "A fun lip-reading challenge where teams of two guess movies and phrases with music, humor, and speed—guaranteeing laughter and excitement.",
    link: "https://forms.gle/U9yxGMacgW6Kgseu7",
    img: "/Events/Sonic Dimesions.png"
  },
  {
    name: "Cine Spark",
    description:
      "Participants create 5–10 minute films on themes like conservation, equality, and empowerment. Shortlisted teams present ideas in a Q&A round to inspire audiences.",
    link: "https://forms.gle/gXt6g37LSYU3Hops7",
    img: "/Events/Cine Spark.png"
  },
  {
    name: "The Reel Multiverse",
    description:
      "A Marvel-themed event where participants act, guess, and dub iconic movie scenes across fun rounds, showcasing creativity and expressions.",
    link: "https://forms.gle/XC3xbTFz6VPcEbBU6",
    img: "/Events/Reel Multiverse.png"
  },
  {
    name: "The Debate Saga",
    description:
      "An engaging debate event where teams of three pop balloons to reveal topics. Two debate for and against, while one judges—promoting quick thinking, balanced perspectives, and teamwork.",
    link: "https://forms.gle/CrPEmermQAzkfvuV8",
    img: "/Events/Debate Saga.jpg"
  }
];

function EventCard({ event }: { event: typeof technicalEvents[0] }) {
  return (
    <div className="flex flex-col rounded-3xl shadow-xl bg-black bg-opacity-70 overflow-hidden h-[420px]">
      <div className="flex-shrink-0 h-[40%] w-full">
        <img
          src={event.img}
          alt={event.name}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow px-4 py-3">
        <div>
          <h3 className="text-xl font-avengero text-white mb-2 text-center">{event.name}</h3>
          <p className="text-white text-center text-sm">{event.description}</p>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition w-full text-center"
            style={{ marginTop: "auto" }}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EventList() {
  return (
    <div className="space-y-12">
      {/* Technical Events Row */}
      <div>
        <h2 className="text-3xl font-avengero text-white mb-6">Technical Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalEvents.map(event => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>
      </div>
      {/* Non-Technical Events Row */}
      <div>
        <h2 className="text-3xl font-avengero text-white mb-6">Non-Technical Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nonTechnicalEvents.map(event => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}