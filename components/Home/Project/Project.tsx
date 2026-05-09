import SectionHeading from "@/components/Helper/SectionHeading";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div
      id="project"
      className="py-40 md:py-28 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200  dark:bg-gradient-to-b dark:from-slate-950 dark:via-blue-950 dark:to-slate-900"
    >
      <SectionHeading
        title_1="Featured"
        title_2="Project"
        description="A  selection of my recent wprk and side project"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        {projects.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              key={index}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
