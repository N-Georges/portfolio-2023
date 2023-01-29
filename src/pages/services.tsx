import { motion } from "framer-motion";
import Head from "next/head";
import { BiServer, BiBrush } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
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
} from "react-icons/si";

export default function Services() {
  return (
    <>
      <Head>
        <title>NG - Services</title>
        <meta name="description" content="Voici, les services que je propose" />
      </Head>
      <section className="pt-20 pb-32 lg:pt-[120px] md:pb-12 lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    Mes services
                  </span>
                  <h2
                    className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                    Ce que je propose
                    <span className="ml-1">🤝</span>
                  </h2>
                  <p className="text-base text-body-color">
                    Une revue complète des besoins client ainsi je pourrais utiliser les different
                    outils pour construire un projet de A à Z.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary rounded-xl mb-5">
                    <BiBrush className="text-2xl text-white" />
                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-dark">Frontend</h4>
                  <p className="mb-3 text-body-color">
                    We dejoy working with discerning clients, people for whom qualuty, service,
                    integrity & aesthetics.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <SiNextdotjs className="text-3xl p-1 text-[#000000] rounded-lg" />
                      <span className="font-semibold text-dark text-md">Nextjs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTypescript className="text-3xl p-1 text-[#3274BC] rounded-lg" />
                      <span className="font-semibold text-dark text-md">Typescript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTailwindcss className="text-3xl text-[#35B3EB] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">TailwindCSS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiChakraui className="text-3xl text-[#3ABBB6] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">ChakraUI</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary rounded-xl mb-5">
                    <BiServer className="text-2xl text-white" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-dark">Backend</h4>
                  <p className="mb-3 text-body-color">
                    We dejoy working with discerning clients, people for whom qualuty, service,
                    integrity & aesthetics.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <SiPostgresql className="text-3xl p-1 text-[#306289] rounded-lg" />
                      <span className="font-semibold text-dark text-md">Postgresql</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiHasura className="text-3xl text-[#1FABC8] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">Hasura</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiGraphql className="text-3xl text-[#D931A1] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">Graphql</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiDocker className="text-3xl text-[#228FE0] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">Docker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiPrisma className="text-3xl text-[#11374C] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">Prisma</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary rounded-xl mb-5">
                    <FaMobileAlt className="text-2xl text-white" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-dark">Mobile</h4>
                  <p className="mb-3 text-body-color">
                    We dejoy working with discerning clients, people for whom qualuty, service,
                    integrity & aesthetics.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <SiReact className="text-3xl p-1 text-[#62DAFB] rounded-lg" />
                      <span className="font-semibold text-dark text-md">ReactNative</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTailwindcss className="text-3xl text-[#35B3EB] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">TailwindCSS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiStyledcomponents className="text-3xl text-[#CC84BE] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">Styledcomponents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiSupabase className="text-3xl text-[#3DC387] p-1 rounded-lg " />
                      <span className="font-semibold text-dark text-md">Supabase</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
