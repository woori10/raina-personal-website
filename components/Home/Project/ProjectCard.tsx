import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

type Props = {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
};

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  githubUrl,
}: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
      {/* image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          alt={title}
          src={image}
          width={400}
          height={400}
          className="w-full object-cover"
        />
      </div>
      {/* main content */}
      <div className="p-6">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2  group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => {
            return (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white font-medium"
              >
                {tech}
              </span>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <Button asChild size={"sm"} className="flex-1 py-4 rounded-lg">
              <a href={githubUrl} target="_blank" rel="noonpener noreferrer">
                <FaGithub className="w-4 h-4 mr-2" />
                Github Link
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
