import {
  CreditCardIcon,
  HomeIcon,
  LibraryIcon,
  LightBulbIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-14 flex justify-between items-center px-4 rounded-t-2xl bg-jo-400 fixed bottom-0">
      <NavLink Icon={HomeIcon} text="Home" pathname="/home" />
      <NavLink Icon={LibraryIcon} text="Strategy" pathname="/strategy" />
      <NavLink Icon={PlusCircleIcon} text="Create" pathname="/create" />
      <NavLink Icon={LightBulbIcon} text="Example" pathname="examples" />
      <NavLink Icon={CreditCardIcon} text="Balance" pathname="balance" />
    </div>
  );
};

export default Navbar;
