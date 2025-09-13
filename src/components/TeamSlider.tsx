import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "./TeamCard";

interface Member {
  name: string;
  position: string;
  src: string;
}

interface TeamSliderProps {
  members: Member[];
  slidesToShow?: number;
}

const TeamSlider: React.FC<TeamSliderProps> = ({ members, slidesToShow = 4 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Slider {...settings}>
      {members.map((member, idx) => (
        <div key={idx} className="px-2">
          <TeamCard
            src={member.src}
            alt={member.name}
            className="w-full h-48 object-cover rounded-2xl"
            name={member.name}
            position={member.position}
            isCircular={false}
          />
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider;