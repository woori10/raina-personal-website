import SectionHeading from "@/components/Helper/SectionHeading";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1="Featured"
        title_2="Project"
        description="A  selection of my recent wprk and side project"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
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
