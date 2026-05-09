import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="py-40 md:py-28 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200  dark:bg-gradient-to-b dark:from-slate-950 dark:via-blue-950 dark:to-slate-900"
    >
      {/* section heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />
      <div className="grid w-[75%] mx-auto lg:grid-cols-2 gap-8 items-center">
        {/* image */}
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square  rounded-2xl overflow-hidden p-2">
            <Image
              alt="profile"
              src={"/images/me_profile.jpg"}
              width={450}
              height={400}
              className="h-full object-center rounded-xl border border-gray-300 dark:shadow-none dark:border-gray-700"
            />
          </div>
        </div>
        {/* content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-center md:text-left">
            A sixth-semester Software Engineering Technology student at IPB
            University
          </h3>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Software Engineering Technology student who experienced in{" "}
            <span className="font-bold">developing web projects </span> from{" "}
            <span className="font-bold">user requirement analysis</span> to{" "}
            <span className="font-bold">implementing functional</span> and{" "}
            <span className="font-bold">responsive user interfaces</span> using
            modern web technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Actively involved in organizations and committees, demonstrating
            strong leadership, communication, and teamwork skills
          </p>
          {/* highligth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
