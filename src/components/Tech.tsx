//import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../style";

const TechCard: React.FC<{index: number, icon: string, name: string}> = ({index, icon, name}) => {

    return (
        <motion.div
            variants={slideIn("up", "tween", 0.25 * index, 1)}
        >
            <div className="h-[100px] w-[100px] bg-secondary rounded-full flex justify-center items-center">
                <img 
                    src={icon}
                    alt={name}
                    className="h-[90%] w-[90%] rounded-full object-cover"
                />
            </div>
        </motion.div>
    )
}

const Tech: React.FC = () => {

    return (
        <motion.div
            variants={slideIn("up", "tween", 0.2, 1)}
        >
            <p className={`${styles.sectionSubText}`}>Technologies I Use</p>
            <h3 className={`${styles.sectionHeadText}`}>Proficiency.</h3>
            <div className="mt-12 px-4 py-8 rounded-[24px] bg-tertiary flex flex-wrap gap-8 justify-center">
                {technologies.map((technology, index) => (
                    // {/* <BallCanvas icon={technology.icon}/> */}
                    <TechCard key={technology.name} index={index} icon={technology.icon} name={technology.name}/>
                ))}
            </div>
        </motion.div>
    )
}

export default SectionWrapper(Tech, "");