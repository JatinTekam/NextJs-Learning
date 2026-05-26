import React from "react";
import Link from "next/link";
import Image from "next/image";
""

const NavBar = () => {
  return (
    <div>
      <nav className="container text-md flex justify-around items-center px-2">
        <div className="flex gap-4  items-center">
          <Image src="/Vercel.png" alt="Vercel Logo" width={50} height={50} />
          <Link href="/" className="text-2xl">
            NEXT <span className="text-sm">.JS</span>
          </Link>
          <li className="flex gap-6 ml-5">
            <Link href="/showcase" className="text-gray-400 hover:text-white cursor-pointer">
              Showcase
            </Link>
            <Link href='/docs' className="text-gray-400 hover:text-white cursor-pointer">
              Docs
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white cursor-pointer">
              Blog
            </Link>
            <Link href="/templates" className="text-gray-400 hover:text-white cursor-pointer">
              Templates
            </Link>
            <Link href="enterprise" className="text-gray-400 hover:text-white cursor-pointer">
              Enterprise
            </Link>
          </li>
        </div>
        <div className="flex">
          <input
            type="text"
            className="p-1 rounded-md"
            style={{ backgroundColor: "rgb(31,31,31)" }}
            placeholder="Search Here"
          />
          <button
            className="ml-2 flex gap-2 border border-gray-500 rounded-lg py-1 px-4 rounded cursor-pointer"
          >
            <Image src="/Vercel.png" alt="Vercel Logo" width={20} height={20} />
            Deploy
          </button>
          <button className="ml-2 border-none border-gray border-2xl py-1 px-4 rounded bg-white text-black cursor-pointer">
            Learn
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
