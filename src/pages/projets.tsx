import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TbFileDescription, TbWorldUpload, TbBrandGithub } from "react-icons/tb";

import {
  SiTailwindcss,
  SiChakraui,
  SiNextdotjs,
  // SiPostgresql,
  // SiHasura,
  // SiGraphql,
  // SiTypescript,
  // SiPrisma,
  // SiReact,
  // SiDocker,
  // SiStyledcomponents,
  // SiSupabase,
  SiSquarespace,
} from "react-icons/si";
import Head from "next/head";

const tabs = [
  {
    id: 1,
    title: "Voir tout",
  },
  {
    id: 2,
    title: "Personnels",
  },
  {
    id: 3,
    title: "Clientèles",
  },
];

const data_projects = [
  {
    id: 1,
    title: "Mutatis",
    description:
      "Mutatis est un cabinet juridique spécialisé dans le droit de la propriété intellectuelle, les nouvelles technologies etc...",
    image: "/mutatis.webp",
    link: "https://www.mutatis.legal/",
    github: "",
    category: "customer",
    technologies: [{ id: 1, icon: SiSquarespace, name: "Squarespace", color: "text-[#000000]" }],
  },
  {
    id: 2,
    title: "Oak law firm",
    description:
      "Oak law firm est un cabinet d'avocats belge spécialisé dans un grand nombre de domaines juridiques.",
    image: "/oak.webp",
    link: "https://www.oaklaw.eu/",
    github: "",
    category: "customer",
    technologies: [{ id: 1, icon: SiSquarespace, name: "Squarespace", color: "text-[#000000]" }],
  },
  {
    id: 3,
    title: "01",
    description:
      "Mon portfolio est un site web qui vous permet de découvrir mes projets et mes compétences.",
    image: "/portfolio-1.avif",
    link: "https://www.mutatis.legal/",
    github: "https://github.com/N-Georges",
    category: "personal",
    technologies: [
      { id: 1, icon: SiNextdotjs, name: "Next.js", color: "text-[#000000]" },
      { id: 2, icon: SiChakraui, name: "Chakra UI", color: "text-[#3ABBB6]" },
    ],
  },
  {
    id: 4,
    title: "02",
    description:
      "Mon portfolio est un site web qui vous permet de découvrir mes projets et mes compétences.",
    image: "/portfolio-2.avif",
    link: "https://www.mutatis.legal/",
    github: "https://github.com/N-Georges",
    category: "personal",
    technologies: [
      { id: 1, icon: SiNextdotjs, name: "Next.js", color: "text-[#000000]" },
      { id: 2, icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#35B3EB]" },
    ],
  },
];

export default function Projets() {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState(data_projects);

  const handleCollapse = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleFilter = (category: string) => {
    if (category === "all") {
      setData(data_projects);
    } else {
      const filteredData = data_projects.filter((item) => item.category === category);
      setData(filteredData);
    }
  };

  const handleTabClick = (index: number) => {
    setIsActiveTab(index);
    if (index === 0) {
      handleFilter("all");
    } else if (index === 1) {
      handleFilter("personal");
    } else {
      handleFilter("customer");
    }
  };

  return (
    <>
      <Head>
        <title>NG - Projets</title>
        <meta name="description" content="Hello, je vous présente mes différents projets" />
      </Head>
      <section className="pt-20 pb-32 lg:pt-[200px] md:pb-12 lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                  <span className="block mb-2 text-lg font-semibold text-primary">Mes projets</span>
                  <h2
                    className="
              font-bold
              text-3xl
              sm:text-4xl
              md:text-[40px]
              text-dark
              my-4
              "
                  >
                    😊 + ‍💻 + 🧠 = <span className="text-primary">🚀</span>
                  </h2>
                  <p className="text-base text-body-color">
                    Une vision d&apos;ensemble de mes projets personnels et clientèles.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="w-full mx-auto space-y-2 lg:w-4/6">
            <div className="mx-3 space-y-2 md:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="tabs">
                  {tabs.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(index)}
                      className={`${
                        isActiveTab === index ? "tab-active tab tab-lifted" : "tab tab-lifted"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </motion.div>
              {data.map((item, index) => (
                <motion.div
                  onClick={() => handleCollapse(index)}
                  tabIndex={0}
                  className={`collapse collapse-arrow cursor-pointer border border-base-300 bg-base-100 rounded-box ${
                    activeIndex === index ? "collapse-open" : "collapse-close"
                  }`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-xl font-medium collapse-title">
                    <span>Projet</span> <span className="font-bold text-primary">{item.title}</span>
                  </div>
                  <div className="collapse-content">
                    <div className="border mockup-window bg-base-300">
                      <Image
                        src={item.image}
                        alt="mutatis legal website"
                        className="w-full h-auto"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="mx-3 mt-2 space-y-3">
                      <p className="mb-2 text-xl font-medium">Description</p>
                      <div className="flex items-center space-x-3">
                        <TbFileDescription className="text-2xl text-[#000000]" />
                        <p className="text-base text-body-color">{item.description}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-xl font-medium">Technologies</p>
                        <div className="space-y-3">
                          {item.technologies.map((item) => (
                            <div key={item.id} className="flex items-center space-x-2">
                              <item.icon className={`text-2xl ${item.color}`} />
                              <p className="text-base text-body-color">{item.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 text-xl font-medium">Liens utiles</p>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <TbWorldUpload className="text-2xl text-[#000000]" />
                            <Link href={item.link} target="_blank" className="link link-hover">
                              {item.link}
                            </Link>
                          </div>
                          {item.github && (
                            <div className="flex items-center space-x-3">
                              <TbBrandGithub className="text-2xl text-[#000000]" />
                              <Link href={item.github} target="_blank" className="link link-hover">
                                {item.github}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
