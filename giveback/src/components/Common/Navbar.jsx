import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useScroll,
} from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import { NavItems } from "../../data/navItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState("");
  const [pathname, setPathname] = useState("/");
  const controller1 = useAnimation();
  const controller2 = useAnimation();
  const navRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const navController = useAnimation();

  useEffect(() => {
    const t1 = isOpen ? { y: 5 } : { rotate: 0 };
    const t2 = isOpen ? { y: -5 } : { rotate: 0 };
    const t3 = isOpen ? { rotate: 45 } : { y: 0 };
    const t4 = isOpen ? { rotate: -45 } : { y: 0 };

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    controller1
      .start({
        ...t1,
        transition: { duration: 0.3, ease: "easeOut" },
      })
      .then(() => {
        controller1.start({
          ...t3,
          transition: { duration: 0.3, ease: "circOut" },
        });
      });

    controller2
      .start({
        ...t2,
        transition: { duration: 0.3, ease: "easeOut" },
      })
      .then(() => {
        controller2.start({
          ...t4,
          transition: { duration: 0.3, ease: "circOut" },
        });
      });
  }, [isOpen, controller1, controller2]);

  useEffect(() => {
    if (!navRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width < 1024) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }
    });
    observer.observe(navRef.current);
    return () => {
      observer.disconnect();
    };
  }, [navRef]);

  useEffect(() => {
    let lastScrollY = 0;
    const updateScrollDirection = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navController.start({
          y: -180,
          transition: { duration: 0.2, ease: "easeOut" },
        });
      } else {
        navController.start({
          y: 0,
          transition: { duration: 0.2, ease: "easeOut" },
        });
      }
      lastScrollY = currentScrollY;
    };
    const unsubscribe = scrollY.on("change", updateScrollDirection);
    return () => unsubscribe();
  }, [scrollY, navController]);

  const menuVariants = {
    open: {
      clipPath: "circle(1000px at 90% 35px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 90% 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.nav
      ref={navRef}
      className="bg-white text-gray-600 min-h-[60px] py-2 px-4 border-b border-gray-200 sticky top-0 z-50"
      animate={navController}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setPathname("/")}>
            <div className="flex items-center justify-between">
              <img
                src={`${process.env.PUBLIC_URL}/assets/IITJ-coloured.png`}
                alt="logo"
                className="h-20 md:h-12 sm:h-8"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/IIT-JODHPUR-2.png`}
                alt="logo"
                className="h-16 md:h-12 sm:h-8"
              />
            </div>
          </Link>

          <div className="hidden lg:flex ml-10">
            <div className="flex space-x-4 items-center">
              {NavItems.map((navItem) => (
                <div
                  key={navItem.id}
                  className="relative h-full flex justify-center items-center"
                >
                  <a
                    href={navItem.path}
                    className={`py-2 font-suse px-4 text-md font-medium ${
                      pathname === navItem.path ||
                      ((pathname === "/" || pathname === "") &&
                        navItem.name === "Home")
                        ? "text-[#000080]"
                        : ""
                    } hover:text-[#000080]`}
                    onMouseEnter={() => setHoveredPath(navItem.path)}
                    onMouseLeave={() => setHoveredPath("")}
                    onClick={() => setPathname(navItem.path)}
                  >
                    {navItem.name}
                  </a>
                  <AnimatePresence>
                    {hoveredPath === navItem.path && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -4 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#000080]"
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <motion.div
                rel="noopener noreferrer"
                className="border cursor-pointer ml-4 border-[#000080] bg-[#000080] py-2 px-4 md:py-3 md:px-6 uppercase font-['Montserrat'] text-sm md:text-base tracking-[2px] text-white no-underline transition-all duration-200 hover:bg-white hover:text-[#000080]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/initiatives">DONATE NOW</Link>
              </motion.div>
            </div>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="z-[2000] block transition-colors duration-700 ease-linear lg:hidden relative w-6 h-3"
          >
            <motion.div
              animate={controller1}
              className="absolute top-0 left-0 h-0.5 w-6 z-[2000] bg-gray-600"
            />
            <motion.div
              animate={controller2}
              className="absolute bottom-0 left-0 h-0.5 w-6 z-[2000] bg-gray-600"
            />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50"
            >
              <motion.div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                {NavItems.map((navItem, index) => (
                  <motion.div
                    key={navItem.id}
                    variants={menuItemVariants}
                    custom={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={navItem.path}
                      className={`py-2 font-medium text-2xl ${
                        pathname === navItem.path
                          ? "text-[#000080]"
                          : "text-gray-600"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setPathname(navItem.path);
                      }}
                    >
                      {navItem.name}
                    </a>
                  </motion.div>
                ))}
                <motion.a
                  href="/initiatives"
                  rel="noopener noreferrer"
                  className="border border-[#000080] bg-[#000080] py-2 px-4 md:py-3 md:px-6 uppercase font-['Montserrat'] text-sm md:text-base tracking-[2px] text-white no-underline transition-all duration-200 hover:bg-white hover:text-[#000080]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  DONATE NOW
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
