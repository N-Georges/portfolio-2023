import {useState} from "react"
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  SiTailwindcss,
  SiChakraui,
  SiNextdotjs,
  SiPostgresql,
  SiHasura,
  SiGraphql,
  SiTypescript,
  SiPrisma,
  SiReact,
  SiDocker,
  SiStyledcomponents,
  SiSupabase,
  SiSquarespace,
} from "react-icons/si"

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
    title: "Clientèle",
  },
]

const data_projects = [
  {
    id: 1,
    title: "Mutatis",
    description:
      "Mutatis est un cabinet juridique basé à brussels spécialisé dans le droit de la propriété intellectuelle, les nouvelles technologies et la protection des données.",
    image: "/mutatis.webp",
    link: "https://www.mutatis.legal/",
    category: "customer",
    technologies: [{id: 1, icon: SiSquarespace, name: "Squarespace", color: "text-[#000000]"}],
  },
  {
    id: 2,
    title: "Oak law firm",
    description:
      "Oak law firm est un cabinet d'avocats belge spécialisé dans un grand nombre de domaines juridiques.",
    image: "/oak.webp",
    link: "https://www.oaklaw.eu/",
    category: "customer",
    technologies: [{id: 1, icon: SiSquarespace, name: "Squarespace", color: "text-[#000000]"}],
  },
  {
    id: 3,
    title: "01",
    description:
      "Mon portfolio est un site web qui vous permet de découvrir mes projets et mes compétences.",
    image: "/portfolio-1.avif",
    link: "https://www.mutatis.legal/",
    category: "personal",
    technologies: [
      {id: 1, icon: SiNextdotjs, name: "Next.js", color: "text-[#000000]"},
      {id: 2, icon: SiChakraui, name: "Chakra UI", color: "text-[#3ABBB6]"},
    ],
  },
  {
    id: 4,
    title: "02",
    description:
      "Mon portfolio est un site web qui vous permet de découvrir mes projets et mes compétences.",
    image: "/portfolio-2.avif",
    link: "https://www.mutatis.legal/",
    category: "personal",
    technologies: [
      {id: 1, icon: SiNextdotjs, name: "Next.js", color: "text-[#000000]"},
      {id: 2, icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#35B3EB]"},
    ],
  },
]

export default function Projets() {
  const [isActiveTab, setIsActiveTab] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [data, setData] = useState(data_projects)
  console.log("====================================")
  console.log(data)
  console.log("====================================")
  const handleCollapse = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  const handleFilter = (category: string) => {
    if (category === "all") {
      setData(data_projects)
    } else {
      const filteredData = data_projects.filter((item) => item.category === category)
      setData(filteredData)
    }
  }

  const handleTabClick = (index: number) => {
    setIsActiveTab(index)
    handleFilter(index === 0 ? "all" : index === 1 ? "personal" : "customer")
  }

  return (
    <section className="pt-20 lg:pt-[200px] pb-12 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5}}>
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">Mes projets</span>
                <h2
                  className="
              font-bold
              text-3xl
              sm:text-4xl
              md:text-[40px]
              text-dark
              mb-4
              ">
                  Ce que je propose
                  <span className="ml-1">🤝</span>
                </h2>
                <p className="text-base text-body-color">
                  Une vision d&apos;ensemble de mes projets personnels et clientèle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-4/6 mx-auto space-y-2">
          <div className="mx-3 md:mx-0 space-y-2">
            <motion.div
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.7}}>
              <div className="tabs">
                {tabs.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(index)}
                    className={`${
                      isActiveTab === index ? "tab-active tab tab-lifted" : "tab tab-lifted"
                    }`}>
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
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}>
                {/* <div
                  onClick={() => handleCollapse(index)}
                  tabIndex={0}
                  className={`collapse collapse-arrow cursor-pointer border border-base-300 bg-base-100 rounded-box ${
                    activeIndex === index ? "collapse-open" : "collapse-close"
                  }`}> */}
                <div className="collapse-title text-xl font-medium">
                  <span>Projet</span> <span className="font-bold text-primary">{item.title}</span>
                </div>
                <div className="collapse-content">
                  <div className="mockup-window border bg-base-300">
                    {/* <div className="h-96 carousel carousel-vertical">
                      <div className="carousel-item h-full">
                        <Image
                          src="/mutatis.webp"
                          className="w-full h-auto"
                          width={500}
                          height={500}
                          alt="mutatis legal website"
                        />
                      </div>
                      <div className="carousel-item h-full">
                        <Image
                          alt="mutatis legal website"
                          src="/oak.webp"
                          className="w-full h-auto"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="carousel-item h-full">
                        <Image
                          alt="mutatis legal website"
                          src="/portfolio-1.avif"
                          className="w-full h-auto"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="carousel-item h-full">
                        <Image
                          alt="mutatis legal website"
                          src="/portfolio-2.avif"
                          className="w-full h-auto"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div> */}
                    <Image
                      src={item.image}
                      alt="mutatis legal website"
                      className="w-full h-auto"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mx-3 mt-2 space-y-2">
                    <div>
                      <p className="text-xl font-medium mb-2">Description</p>
                      <p className="text-base text-body-color ml-3">{item.description}</p>
                    </div>
                    <div>
                      <p className="text-xl font-medium mb-2">Technologies</p>
                      <div className="ml-3 space-y-2 ">
                        {item.technologies.map((item) => (
                          <div key={item.id} className="flex items-center space-x-2">
                            <item.icon className={`text-2xl ${item.color}`} />
                            <p className="text-base text-body-color">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-medium mb-2">Liens utiles</p>
                      <Link href={item.link} target="_blank" className="link link-primary ml-3">
                        {item.link}
                      </Link>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
