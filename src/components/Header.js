import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGlobe, faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="altImage"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2"
        />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <FontAwesomeIcon icon={faGlobe} className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <FontAwesomeIcon icon={faBars} className="h-6" />
          <FontAwesomeIcon icon={faCircleUser} className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
