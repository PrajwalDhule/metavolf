import { React, useEffect } from "react";

const Demo = () => {
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    if (process.browser) {
      const panoramic = document.getElementById("img");
      panoramic.addEventListener("mousemove", function (event) {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

        panoramic.style.transform = `rotateY(${mouseX * 10}deg) rotateX(${
          -mouseY * 20
        }deg)`;
      });
    }
  }, []);

  return (
    <div className="demo-body">
      <div id="panoramic-image">
        <img src="/panoramic-2.jpeg" alt="Panoramic Image" id="img" />
        <div className="hotspot" style={{ top: "20%", left: "30%;" }}>
          <p>This is a hotspot</p>
        </div>
        <div className="hotspot" style={{ top: "50%", right: "10%;" }}>
          <p>This is another hotspot</p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
