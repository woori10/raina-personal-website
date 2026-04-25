"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen
        bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(147,197,253,1)_0%,rgba(239,246,255,1)_42.3%,rgba(239,246,255,1)_100%)]
        flex items-center justify-center overflow-hidden
        dark:bg-[radial-gradient(circle_farthest-corner_at_50%_50%,rgba(30,58,138,1)_0%,rgba(15,23,42,1)_100%)]"
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* sub title */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
          dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for Internship 2026
          </span>
        </div>
        {/* title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-bold mb-6"
        >
          Raina Disa Wibowo
        </h1>
        {/* typewrite effect */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Web Developer",
              2000,
              "Information Technology",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground dark:text-gray-200 max-w-2xl px-8 sm:px-6 mx-auto mb-10"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          perspiciatis voluptatem consequuntur. Provident officia, quam
          laboriosam iusto obcaecati distinctio nemo, in sit magni dolore enim?
          Nihil illum quae mollitia quasi?
        </p>
        {/* buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="#_">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
