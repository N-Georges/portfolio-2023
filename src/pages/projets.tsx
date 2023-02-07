import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import client from "@/lib/graphql/client";
import { GET_PROJECTS } from "@/lib/graphql/queries";

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

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: { url: string };
  slug: string;
  sourceUrl: string;
  githubUrl: string;
  category: string;
};

export default function Projets({ projects }: { projects: Project[] }) {
  console.log(projects);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState(projects);

  const handleCollapse = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleFilter = (category: string) => {
    if (category === "all") {
      setData(projects);
    } else {
      const filteredData = projects.filter((item) => item.category === category);
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
                        src={item.image.url}
                        alt="mutatis legal website"
                        className="w-full h-auto"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="mx-3 mt-2 space-y-3">
                      <p className="mb-2 text-xl font-medium">Description</p>
                      <div className="flex items-center space-x-3">
                        <p className="text-base text-body-color">{item.description}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-xl font-medium">Technologies</p>
                        <div className="space-y-3">
                          {item.technologies.map((item) => (
                            <div key={item} className="flex items-center space-x-2">
                              <p className="text-base text-body-color">#{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 text-xl font-medium">Liens utiles</p>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Link href={item.sourceUrl} target="_blank" className="link link-hover">
                              {item.sourceUrl}
                            </Link>
                          </div>
                          {item.githubUrl && (
                            <div className="flex items-center space-x-3">
                              <Link
                                href={item.githubUrl}
                                target="_blank"
                                className="link link-hover"
                              >
                                {item.githubUrl}
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

export async function getStaticProps() {
  const { projects } = await client.request(GET_PROJECTS);
  return {
    props: {
      projects,
    },
  };
}
