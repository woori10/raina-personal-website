import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* section heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* image */}
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              alt="profile"
              src={"/images/profile.jpg"}
              width={500}
              height={700}
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
          <h3 className="text-2xl font-semibold">
            A sixth-semester Software Engineering Technology student at IPB
            University
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Software Engineering Technology student who experienced in
            developing web projects from user requirement analysis to
            implementing functional and responsive user interfaces using modern
            web technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
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
      {/* stats */}
      {/* <div className="my-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default About;
