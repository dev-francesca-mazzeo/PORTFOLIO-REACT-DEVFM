import React, { useState } from "react";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants/index";

const Tech = () => {
  // State to keep track of the currently hovered technology name
  const [selectedTech, setSelectedTech] = useState(null);

  // Handler to set the hovered technology name when mouse enters
  const handleMouseEnter = (techName) => {
    setSelectedTech(techName);
  };

  // Handler to reset the hovered technology name when mouse leaves
  const handleMouseLeave = () => {
    setSelectedTech(null);
  };

  return (
    // Container div with flexbox styling to layout the technology items responsively
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Loop over the technologies array to display each technology */}
      {technologies.map((technology) => (
        <div className="w-20 h-15" key={technology.name}>
          {/* Tilt component adds a 3D tilt effect on hover */}
          <Tilt
            options={{
              max: 20,       // maximum tilt rotation
              scale: 1.1,    // scale up slightly on hover
              speed: 500,    // animation speed of tilt effect
              glare: true,   // enable glare effect
              "max-glare": 4 // maximum glare intensity
            }}
            onMouseEnter={() => handleMouseEnter(technology.name)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Technology icon image fills the entire tilt container */}
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full"
            />
          </Tilt>

          {/* Conditionally render the technology name below the icon when hovered */}
          {selectedTech === technology.name && (
            <p className="sm:text-[15px] text-secondary mt-4 uppercase tracking-wider text-center">
              {technology.name}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

// Export the Tech component wrapped with SectionWrapper HOC (Higher-Order Component)
export default SectionWrapper(Tech, "");
