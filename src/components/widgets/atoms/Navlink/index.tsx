import Link from "next/link";

type Props = {
  link: string;
  label: string;
  isActive?: boolean;
};

export function Navlink({ isActive = false, label, link }: Props) {
  return (
    <Link href={link}>
      <li className="h-full flex flex-col relative">
        <span
          className={
            isActive
              ? "font-bold text-ignews-gray-title"
              : "text-ignews-gray-text"
          }
        >
          {label}
        </span>
        {isActive ? (
          <div className="bg-ignews-yellow w-full h-[3px] absolute top-12 rounded-t-full" />
        ) : null}
      </li>
    </Link>
  );
}
