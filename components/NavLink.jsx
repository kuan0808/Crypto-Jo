import clsx from "clsx";
import Link from "next/link";

const NavLink = ({ Icon, text, active }) => {
  return (
    <Link href="/">
      <div
        className={clsx(
          "w-12 h-12 p-1.5 flex flex-col items-center justify-center text-jo-800",
          active && "rounded-full border border-jo-800"
        )}
      >
        <Icon />
        <h1 className="text-xs capitalize">{text}</h1>
      </div>
    </Link>
  );
};
export default NavLink;
