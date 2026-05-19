import React from 'react'
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
          <nav className="container text-md pt-4 flex justify-around">
            <h2 className='hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>WebDev</h2>
            <div>
              <ul className="flex gap-5">
                <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
                  <Link href="/">Home</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
                  <Link href="/performance">Performance</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
                  <Link href="/reliability">Reliability</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
  )
}

export default NavBar
