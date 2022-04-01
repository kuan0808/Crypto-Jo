import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ Icon, text, pathname }) => {
  const router = useRouter();
  const active = pathname === router.pathname;
  return (
    <Link href={pathname}>
      <div
        className={clsx(
          "w-12 h-12 p-1.5 flex flex-col items-center justify-center text-white/80",
          active && "rounded-full border text-jo-400 bg-white/80"
        )}
      >
        <Icon />
        <h1 className="text-xs capitalize">{text}</h1>
      </div>
    </Link>
  );
};
export default NavLink;
