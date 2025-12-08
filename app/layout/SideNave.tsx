"use client";
import { useRouter, usePathname } from "next/navigation";

export type linkType = {
  name: string;
  href: string;
};

const links: linkType[] = [
  { name: "社員別資格一覧", href: "/" },
  {
    name: "社員一覧",
    href: "/employees",
  },
  {
    name: "資格一覧",
    href: "/quals",
  },
  {
    name: "部門一覧",
    href: "/departments",
  },
  {
    name: "役職一覧",
    href: "/positions",
  },
  {
    name: "分野区分一覧",
    href: "/categories",
  },
];

const SideNave = () => {
  const router = useRouter();
  const pathname = usePathname(); //現在のパスを取得

  // ナビゲーション処理
  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      router.push(href);
    }
  };

  return (
    <nav className="h-full w-full bg-cyan-900">
      <div className="flex flex-col gap-2 p-4">
        {links.map((link) => {
          return (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href)}
              className={`flex h-12 w-full items-center justify-start gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-200 hover:text-cyan-900 transition-colors ${
                pathname === link.href
                  ? "bg-gray-300 text-cyan-900 font-bold"
                  : "text-white"
              }`}
            >
              <p>{link.name}</p>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
export default SideNave;
