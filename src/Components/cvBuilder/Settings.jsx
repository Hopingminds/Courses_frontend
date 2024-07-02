import { motion, AnimatePresence } from "framer-motion";
import SettingMain from "./SettingsComponents/SettingMain";
import About from "./SettingsComponents/About";
import Skills from "./SettingsComponents/Skills";
import Projects from "./SettingsComponents/Projects";
import Experiences from "./SettingsComponents/Experiences";
import Education from "./SettingsComponents/Education";

const Settings = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="p-7 pb-0 relative w-[450px] xsm:w-[100vw] xsm:p-3 xsm:bg-slate-300 max-h-[105vh] overflow-y-auto">
        <SettingMain />
        <About />
        <Skills />
        <Education />
        <Experiences />
        <Projects />
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;
