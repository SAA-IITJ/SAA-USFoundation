import React, { useEffect, useRef } from "react";
import { motion, animate,inView } from "framer-motion";
import { stats } from "../data/stats";

const StatsSection = () => {
  

  return (
    <div className="flex justify-around bg-white p-8">
      {stats.map((item, index) => (
        <AnimatedStat
          key={index}
          number={item.number}
          label={item.label}
          icon={item.icon}
          suffix={item.suffix || ""}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};

const AnimatedStat = ({ number, label, icon, suffix, delay }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    // inView(node, () => {
    //   const controls = animate(0, number, {
    //     duration: 2,
    //     delay,
    //     onUpdate(value) {
    //       node.textContent = `${Math.round(value)}${suffix}`;
    //     },
    //   });
    //   return () => controls.stop();
    // });
  }, [number, delay, suffix]);

  return (
    <motion.div
      className="flex flex-col items-center font-suse stats"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="text-6xl">{icon}</span>
      <div className="flex">
        <span
          className="text-7xl font-semibold text-primary mt-4"
          ref={nodeRef}
        >{number}</span>
        <span className="text-7xl font-semibold text-primary mt-4">+</span>
      </div>
      <p className="text-2xl text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatsSection;
