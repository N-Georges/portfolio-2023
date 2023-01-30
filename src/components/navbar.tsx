import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import BottomTab from "./BottomTab";
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbDotsVertical } from "react-icons/tb";

const navigation = [
  { name: "Acceuil", href: "/" },
  { name: "A propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Projets", href: "/projets" },
];

const social = [
  {
    name: "gmail",
    href: "mailto:ngeorges.dev@gmail.com",
    icon: TbBrandGmail,
  },
  {
    name: "A propos",
    href: "https://www.linkedin.com/in/georges-nodari/",
    icon: TbBrandLinkedin,
  },
  {
    name: "Services",
    href: "https://github.com/N-Georges",
    icon: TbBrandGithub,
  },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const toggle = () => setOpen(!isOpen);
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-row justify-between bg-transparent navbar">
      {/* web navbar */}
      <div className="gap-5 navbar-center">
        <h1 className="text-3xl cursor-pointer md:flex">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 ml-2 font-black text-center text-transparent border-gray-500 rounded-md cursor-pointer"
          >
            <Image src="/logo-bold.webp" alt="logo" width={100} height={100} priority />
          </Link>
        </h1>
        <nav className="flex items-center justify-center flex-1 text-center" aria-label="Global">
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black transition-all duration-300 ease-in-out group"
              >
                <span
                  className={`bg-gradient-to-r from-green-200 to-green-100 dark:from-indigo-400 dark:to-purple-400
                  bg-[length:0px_8px]
                  bg-left-bottom
                  bg-no-repeat
                  transition-[background-size]
                  duration-500
                  hover:bg-[length:100%_3px] group-hover:bg-[length:100%_8px] ${
                    currentRoute === item.href &&
                    "bg-gradient-to-r  bg-left-bottom duration-500  bg-[length:100%_8px] bg-no-repeat transition-[background-size] from-green-400 to-green-100 dark:from-indigo-400 dark:to-purple-400"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      <BottomTab />

      <div className="navbar-end">
        {/* mobile social media */}
        <div onClick={toggle} className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <TbDotsVertical className="w-6 h-6 " />
          </label>
          <ul
            tabIndex={0}
            className={`menu ${
              isOpen ? "hidden" : ""
            } dropdown-content p-2 shadow bg-base-100 rounded-box mt-4`}
          >
            {social.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* web social media */}
        <div className="hidden space-x-7 md:inline-flex">
          {social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="text-black transition-all duration-150 ease-in-out hover:scale-110 hover:text-gray-700"
            >
              <item.icon className="w-7 h-7" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
