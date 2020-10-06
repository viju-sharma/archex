import React from "react";
import Particles from "react-particles-js";

function MovingParticles(){
    return(
        <Particles
        style={{
          backgroundImage: `url("https://wallpapershome.com/images/wallpapers/polygon-2560x1440-4k-hd-wallpaper-3d-241.jpg")`,
          width: "50%",
        }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    )
}

export default MovingParticles;