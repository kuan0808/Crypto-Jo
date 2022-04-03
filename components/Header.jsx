import { HomeIcon } from "@heroicons/react/solid";
import React from "react";

import Avatar from "./Avatar";

const Header = () => {
  return (
    <div
      className="w-full relative rounded-br-3xl text-jo-100 bg-jo-800 px-4 pt-4 space-y-4
          before:block before:absolute before:w-full before:h-full before:left-0 before:bg-jo-600 before:-z-10"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <HomeIcon className="w-8 h-8 text-jo-100 mr-2" />
          <h1 className="text-xl">Strategy</h1>
        </div>
        <div>
          <Avatar />
        </div>
      </div>
      <div className="flex justify-start items-end space-x-8 px-4 pb-2">
        <h2>Instance</h2>
        <h2>Strategy</h2>
      </div>
    </div>
  );
};

export default Header;
