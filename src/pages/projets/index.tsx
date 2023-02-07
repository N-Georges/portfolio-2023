import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Head from "next/head";
import client from "@/lib/graphql/client";
import { GET_PROJECTS } from "@/lib/graphql/queries";
import { useRouter } from "next/router";

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
  const [data, setData] = useState(projects);
  const router = useRouter();

  const handleLink = (slug: string) => {
    router.push(`/projets/${slug}`);
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
      <section className="pt-20 pb-32 lg:pt-[150px] md:pb-12 lg:pb-[80px]">
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
              <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
                {data.length > 0 ? (
                  data.map((item) => (
                    <motion.button
                      onClick={() => handleLink(item.slug)}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      key={item.id}
                      className="col-span-1 text-left group md:col-span-2 xl:col-span-2 card glass"
                    >
                      <figure>
                        <Image
                          src={item.image.url}
                          alt={item.title}
                          className="w-full h-auto transition-all duration-500 ease-in-out group-hover:scale-105 "
                          width={500}
                          height={500}
                          priority
                        />
                      </figure>
                      <div className="px-6 py-4 card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>

                        <div className="pb-2 space-x-4">
                          {item.sourceUrl && (
                            <Link href={item.sourceUrl} target="_blank">
                              <FiExternalLink className="inline-block w-5 h-5 text-base-content" />
                            </Link>
                          )}
                          {item.githubUrl && (
                            <Link href={item.githubUrl} target="_blank">
                              <FiGithub className="inline-block w-5 h-5 text-base-content" />
                            </Link>
                          )}
                        </div>
                        <div>
                          {item.technologies.map((item) => (
                            <span
                              key={item}
                              className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                            >
                              #{item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="items-center min-w-max"
                  >
                    <span className="text-2xl font-semibold text-base-content md:text-4xl">
                      ⏰ Coming<span className="ml-2 text-primary">Soon</span> ⏰
                    </span>
                  </motion.div>
                )}
              </div>
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
