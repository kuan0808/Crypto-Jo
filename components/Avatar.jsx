import { BigHead } from "@bigheads/core";

import { getRandomOptions } from "../utils/bigHeads";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-9 h-9 rounded-full aspect-square border-2">
        <BigHead {...getRandomOptions()} />
      </div>
      {/* <p className="text-xs">John Doe</p> */}
    </div>
  );
};

export default Avatar;
