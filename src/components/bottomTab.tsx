import { useRouter } from "next/router";
import { useState } from "react";
import { FcHome, FcAbout, FcAcceptDatabase, FcFolder } from "react-icons/fc";

const dataTabs = [
  {
    id: 1,
    tabTitle: "Acceuil",
    tabIcon: <FcHome className="w-5 h-5" />,
    href: "/",
  },
  {
    id: 2,
    tabTitle: "A propos",
    tabIcon: <FcAbout className="w-5 h-5" />,
    href: "/a-propos",
  },
  {
    id: 3,
    tabTitle: "Services",
    tabIcon: <FcAcceptDatabase className="w-5 h-5" />,
    href: "/services",
  },
  {
    id: 4,
    tabTitle: "Projets",
    tabIcon: <FcFolder className="w-5 h-5" />,
    href: "/projets",
  },
];

const BottomTab = () => {
  const [isActive, setIsActive] = useState(0);
  const router = useRouter();

  const navigate = (index: number) => {
    setIsActive(index);
    router.push(dataTabs[index].href);
  };

  return (
    <div className="btm-nav md:hidden pt-100">
      {dataTabs.map((item, index) => (
        <button
          key={item.id}
          onClick={() => navigate(index)}
          className={`${isActive === index ? "active" : ""}`}
        >
          {item.tabIcon}
          <span
            className={`text-xs ${
              isActive === index &&
              "bg-primary rounded-xl transition-all delay-150 ease-in-out text-white px-2 py-1 "
            } `}
          >
            {item.tabTitle}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomTab;
