import { useRouter } from "next/router";
import Link from "next/link";
import { TbHome, TbFileInfo, TbLayout2, TbBolt } from "react-icons/tb";

const dataTabs = [
  {
    id: 1,
    tabTitle: "Acceuil",
    tabIcon: TbHome,
    href: "/",
  },
  {
    id: 2,
    tabTitle: "A propos",
    tabIcon: TbFileInfo,
    href: "/a-propos",
  },
  {
    id: 3,
    tabTitle: "Services",
    tabIcon: TbBolt,
    href: "/services",
  },
  {
    id: 4,
    tabTitle: "Projets",
    tabIcon: TbLayout2,
    href: "/projets",
  },
];

const BottomNav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="btm-nav md:hidden pt-100">
      {dataTabs.map((item, index) => (
        <Link
          href={item.href}
          key={item.id}
          className={`${currentRoute === item.href ? "active" : ""}`}
        >
          <item.tabIcon className={`w-6 h-6 ${currentRoute === item.href ? "text-primary" : ""}`} />
          <span
            className={`text-xs ${
              currentRoute === item.href && "bg-primary rounded-full text-white px-2 py-1 "
            } `}
          >
            {item.tabTitle}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
