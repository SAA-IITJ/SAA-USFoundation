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
  const [focusedPath, setFocusedPath] = useState("");
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

    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";

    controller1
      .start({
        ...t1,
        transition: { duration: 0.28, ease: "easeOut" },
      })
      .then(() => {
        controller1.start({
          ...t3,
          transition: { duration: 0.28, ease: "circOut" },
        });
      });

    controller2
      .start({
        ...t2,
        transition: { duration: 0.28, ease: "easeOut" },
      })
      .then(() => {
        controller2.start({
          ...t4,
          transition: { duration: 0.28, ease: "circOut" },
        });
      });
  }, [isOpen, controller1, controller2]);

  useEffect(() => {
    if (!navRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setIsMobile(entry.contentRect.width < 1024);
      }
    });
    observer.observe(navRef.current);
    return () => observer.disconnect();
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
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(30px at 90% 35px)",
      transition: {
        delay: 0.45,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 50, opacity: 0 },
  };

  const isUnderlined = (path) => hoveredPath === path || focusedPath === path;

  return (
    <motion.nav
      ref={navRef}
      className="bg-white text-gray-600 min-h-[64px] py-2 px-4 border-b border-gray-200 sticky top-0 z-50"
      animate={navController}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between flex-nowrap gap-4">
          <Link
            to="/"
            onClick={() => setPathname("/")}
            className="flex items-center flex-shrink-0 whitespace-nowrap"
            aria-label="Go to homepage"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/IITJ-coloured.png`}
              alt="IITJ logo"
              className="h-10 md:h-12 w-auto flex-shrink-0"
            />
            <h1
              className="ml-3 text-lg md:text-2xl font-bold text-[#000080] whitespace-nowrap"
              style={{ fontFamily: "Playfair Display" }}
            >
              IIT JODHPUR FOUNDATION
            </h1>
          </Link>

          <div className="hidden lg:flex items-center flex-nowrap">
            <div className="flex items-center space-x-3">
              {NavItems.map((navItem) => {
                const isExternal = !!navItem.external || /^https?:\/\//.test(navItem.path);
                return (
                  <div
                    key={navItem.id}
                    className="relative flex items-center"
                    style={{ height: 44 }}
                  >
                    {isExternal ? (
                      <a
                        href={navItem.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 text-sm md:text-md font-medium whitespace-nowrap inline-block relative"
                        onMouseEnter={() => setHoveredPath(navItem.path)}
                        onMouseLeave={() => setHoveredPath("")}
                        onFocus={() => setFocusedPath(navItem.path)}
                        onBlur={() => setFocusedPath("")}
                        aria-label={`${navItem.name} (opens in new tab)`}
                      >
                        {navItem.name}
                        <AnimatePresence>
                          {isUnderlined(navItem.path) && (
                            <motion.span
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              exit={{ opacity: 0, scaleX: 0 }}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="absolute left-0 right-0 -bottom-1 h-0.5 origin-left bg-[#000080] block"
                              style={{ transformOrigin: "left" }}
                            />
                          )}
                        </AnimatePresence>
                      </a>
                    ) : (
                      <a
                        href={navItem.path}
                        className={`py-2 px-3 text-sm md:text-md font-medium whitespace-nowrap inline-block relative ${
                          pathname === navItem.path ||
                          ((pathname === "/" || pathname === "") &&
                            navItem.name.toLowerCase() === "home")
                            ? "text-[#000080]"
                            : "text-gray-700"
                        }`}
                        onMouseEnter={() => setHoveredPath(navItem.path)}
                        onMouseLeave={() => setHoveredPath("")}
                        onFocus={() => setFocusedPath(navItem.path)}
                        onBlur={() => setFocusedPath("")}
                        onClick={() => setPathname(navItem.path)}
                        aria-current={pathname === navItem.path ? "page" : undefined}
                      >
                        {navItem.name}
                        <AnimatePresence>
                          {isUnderlined(navItem.path) && (
                            <motion.span
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              exit={{ opacity: 0, scaleX: 0 }}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="absolute left-0 right-0 -bottom-1 h-0.5 origin-left bg-[#000080] block"
                              style={{ transformOrigin: "left" }}
                            />
                          )}
                        </AnimatePresence>
                      </a>
                    )}
                  </div>
                );
              })}

              <motion.div
                className="border border-[#000080] bg-[#000080] py-2 px-4 md:py-3 md:px-6 uppercase font-['Montserrat'] text-sm md:text-base tracking-[2px] text-white no-underline transition-all duration-200 hover:bg-white hover:text-[#000080] flex-shrink-0 whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/initiatives">DONATE NOW</Link>
              </motion.div>
            </div>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="z-[2000] block lg:hidden relative w-6 h-4 flex-shrink-0"
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsOpen((s) => !s);
            }}
          >
            <motion.span
              animate={controller1}
              className="absolute left-0 top-0 h-0.5 w-6 bg-gray-600 block"
            />
            <motion.span
              animate={controller2}
              className="absolute left-0 bottom-0 h-0.5 w-6 bg-gray-600 block"
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
              className="lg:hidden fixed inset-0 bg-white z-50"
            >
              <motion.div className="flex flex-col gap-6 items-center justify-center w-full h-full">
                {NavItems.map((navItem, index) => {
                  const isExternal = !!navItem.external || /^https?:\/\//.test(navItem.path);
                  return (
                    <motion.div
                      key={navItem.id}
                      variants={menuItemVariants}
                      custom={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {isExternal ? (
                        <a
                          href={navItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 text-2xl text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {navItem.name}
                        </a>
                      ) : (
                        <a
                          href={navItem.path}
                          className={`py-2 text-2xl ${
                            pathname === navItem.path ? "text-[#000080]" : "text-gray-700"
                          }`}
                          onClick={() => {
                            setIsOpen(false);
                            setPathname(navItem.path);
                          }}
                        >
                          {navItem.name}
                        </a>
                      )}
                    </motion.div>
                  );
                })}

                <motion.a
                  href="/initiatives"
                  className="border border-[#000080] bg-[#000080] py-2 px-6 uppercase font-['Montserrat'] text-base tracking-[2px] text-white no-underline transition-all duration-200 hover:bg-white hover:text-[#000080]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
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
