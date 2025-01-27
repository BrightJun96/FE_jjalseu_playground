"use client";

import Career from "@/app/(page)/portfolio/_ui/career";
import Main from "@/app/(page)/portfolio/_ui/main";
import Project from "@/app/(page)/portfolio/_ui/project";
import Tech from "@/app/(page)/portfolio/_ui/tech";
import {
    motion,
    useScroll,
    useSpring,
} from "framer-motion";
import React from "react";

function Page() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 10,
        restDelta: 0.001,
    });
    return (
        <div className={"h-full flex flex-col w-full"}>
            <Main />
            <Career />
            <Tech />
            {/*<Ability />*/}
            <Project />
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "grey",
                }}
            />
        </div>
    );
}

export default Page;
