import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Hero = () => {
  const [emoji, setEmoji] = useState("😁");

  const router = useRouter();

  function handleEmoji() {
    setEmoji("🤗");
    router.push("/projets");
  }

  return (
    <section id="hero">
      <div className="relative z-20 px-6 lg:px-8">
        <div className="max-w-2xl py-32 mx-auto mt-20 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Faites un tour sur mon profile{" "}
                <Link
                  href="https://github.com/N-Georges"
                  target="blank"
                  rel="noopener noreferrer"
                  className="font-semibold cursor-pointer text-primary"
                >
                  <span className="absolute inset-0 " aria-hidden="true" />
                  Github <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>
          <div></div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="">
                  {" "}
                  Hello <span className="wave">👋</span> je suis Georges{" "}
                </span>{" "}
                <br />
                <span className="font-black text-transparent cursor-pointer animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">
                  Développeur
                </span>{" "}
                Web
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <p className="mt-6 text-lg font-semibold leading-8 tracking-wider text-gray-600">
                Plus qu&apos;un métier, une passion
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
            >
              <div className="flex items-center justify-center mt-10 gap-x-6">
                {" "}
                <button
                  onClick={handleEmoji}
                  className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Découvrir mes projets <span className="text-2xl">{emoji}</span>
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
