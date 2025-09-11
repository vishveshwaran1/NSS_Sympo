import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coordinatorNames = [
  "Abhishek",
  "Aiysha Nizar",
  "Thirumugil",
  "Akash",
  "Kishore",
  "Murugayesu",
  "Nivetha",
  "Prabha",
  "Rishi Prasad",
  "Roshini",
  "Sathish",
  "Srimathi",
  "Srivarshan",
  "Venuprasath"
];

export default function StudentCoordinatorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {coordinatorNames.map((name) => (
        <div key={name} className="flex flex-col items-center px-2">
          <img
            src={`/MagicMem/${name}.jpg`}
            alt={name}
            className="object-cover w-60 h-60 rounded-2xl border-4 border-yellow-400 mb-2"
          />
          <div className="text-lg font-bold text-yellow-400 text-center">{name}</div>
        </div>
      ))}
    </Slider>
  );
}