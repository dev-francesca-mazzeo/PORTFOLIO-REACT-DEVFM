import React, { useState } from "react";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants/index";

const Tech = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleMouseEnter = (techName) => {
    setSelectedTech(techName);
  };

  const handleMouseLeave = () => {
    setSelectedTech(null);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-15" key={technology.name}>
          <Tilt
            options={{
              max: 20,
              scale: 1.1,
              speed: 500,
              glare: true,
              "max-glare": 4,
            }}
            onMouseEnter={() => handleMouseEnter(technology.name)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full"
            />
          </Tilt>
          {selectedTech === technology.name && (
            <p className="sm:text-[15px] text-secondary mt-4 uppercase tracking-wider text-center">{technology.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
