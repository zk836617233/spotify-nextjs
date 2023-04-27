"use client";

import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <div>
        <button>
          <AiOutlineHome className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button>
          <AiOutlineSearch className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button>
          <AiOutlineHome className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button>
          <AiOutlineHome className="w-5 h-5" />
          <p>Home</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
