import { motion } from "framer-motion";
import { useState } from "react";

const svgVariants = {
    hidden: { rotate: 45 },
    visible: {
        rotate: 0,
        transition: { duration: 1 },
    },
};

const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" },
    },
};

function App() {
    let [anim, setAnim] = useState(false);
    const toggleAnim = () => {
        pathVariants.hidden.pathLength = 0;
        setAnim(true);
        setTimeout(() => {
            setAnim(false);
        }, 300);
    };
    return (
        <div className="flex items-center justify-center h-screen bg-blue-200">
            <motion.button
                className="bg-green-600 w-36 h-11  flex items-center justify-center text-gray-100 text-lg font-semibold lowercase space-x-2 -mt-4 rounded-lg shadow-xl  transform delay-100 ease-in hover:bg-green-500"
                onClick={() => toggleAnim()}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.path
                        variants={pathVariants}
                        animate={anim ? "hidden" : "visible"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </motion.svg>

                <span className="font-semibold">Click Me!</span>
            </motion.button>
        </div>
    );
}

export default App;
