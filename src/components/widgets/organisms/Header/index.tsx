"use client";

import { usePathname } from "next/navigation";
import { Logo } from "@/components/assets/icons/logo";
import { Navlink } from "@/components/widgets/atoms/Navlink";
import { SignInButton } from "../../atoms/SignInButton";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-ignews-gray-background  h-20 text-ignews-gray-title flex items-center justify-center border-b-2 border-ignews-gray-shape">
      <div className="container max-w-screen-lg px-5 flex justify-between items-center gap-20">
        <h1>
          <Logo />
        </h1>

        <nav className="flex-1 flex items-center justify-between">
          <ul className="flex gap-6">
            <Navlink label="Home" link="/" isActive={pathname === "/"} />
            <Navlink
              label="Posts"
              link="/posts"
              isActive={pathname === "/posts"}
            />
          </ul>

          <SignInButton />
        </nav>
      </div>
    </header>
  );
}
