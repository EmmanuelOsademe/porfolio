// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github, website } from "../assets";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface CardProps {
  index: number;
  project: (typeof projects)[0];
}

const ProjectCard: React.FC<CardProps> = ({ index, project }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className=""
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[270px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-fit rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>
        <div className=" mt-4 flex flex-row justify-between">
          <a
            href={project.deployment_link}
            className=" text-sm cursor-pointer text-purple-200 hover:text-purple-400"
            target="_blank"
          >
            Visit Live site
          </a>
          <a
            href={project.source_code_link}
            className=" text-sm cursor-pointer text-purple-200 hover:text-purple-400"
            target="_blank"
          >
            See project on Github
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
