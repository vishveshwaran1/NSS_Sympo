import React from "react";

const staffCoordinators = [
  { name: "Dr. Roopa D ", img: "/Staff/roopa.jpg" , designation: "NSS Programme Officer-Unit I \n Samarpana Coordinator"},
  { name: "Dr. Baranidharan K", img: "/Staff/Barani.jpg" , designation: "NSS Programme Officer-Unit II"},
  { name: "Dr. Avudainayaki R", img: "/Staff/Avudainayaki.jpg" , designation: "NSS Programme Officer-Unit III"}
];

export default function StaffCoordinatorSlider() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {staffCoordinators.map((staff) => (
        <div key={staff.name} className="flex flex-col items-center">
          <img
            src={staff.img}
            alt={staff.name}
            className="object-cover w-60 h-60 rounded-2xl border-4 border-red-600 mb-2"
          />
          <div className="text-lg font-bold text-red-600 text-center">{staff.name}</div>
          <div className="text-md text-gray-500 text-center">{staff.designation}</div>
        </div>
      ))}
    </div>
  );
}