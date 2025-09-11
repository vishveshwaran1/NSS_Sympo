import React from "react";

const staffCoordinators = [
  { name: "Dr. Murugayesu", img: "/fonts/MagicMem/Murugayesu.jpg" },
  { name: "Ms. Srimathi", img: "/fonts/MagicMem/Srimathi.jpg" },
  { name: "Mr. Sathish", img: "/fonts/MagicMem/Sathish.jpg" }
];

export default function StaffCoordinatorSlider() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {staffCoordinators.map((staff) => (
        <div key={staff.name} className="flex flex-col items-center">
          <img
            src={staff.img}
            alt={staff.name}
            className="object-cover w-40 h-40 rounded-2xl border-4 border-red-600 mb-2"
          />
          <div className="text-lg font-bold text-red-600 text-center">{staff.name}</div>
        </div>
      ))}
    </div>
  );
}