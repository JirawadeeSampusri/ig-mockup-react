import { Image } from "react-bootstrap";
import { SearchIcon } from "@heroicons/react/outline";
import { useState, useRef, useEffect } from "react";
import { PlusCircleIcon, HomeIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCompass,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const NavScrollExample = () => {
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [crossVisibility, setCrossVisibility] = useState(false);
  const inputAreaRef = useRef(null);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (!inputAreaRef?.current?.contains(e.target)) {
        console.log("Outside input area");
        setCrossVisibility(false);
        setSearchVisibility(true);
      } else {
        setCrossVisibility(true);
        setSearchVisibility(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, []);

  return (
    <div className="shadow-sm border-b bg-white top-0 fixed w-full">
      <div className="flex justify-between max-w-4xl mx-5 laptop:mx-auto p-2 ">
        <div className="flex justify-between w-4/6">
          <div className="relative mt-2 w-24 h-8 laptop:inline-grid">
            <Image
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            ref={inputAreaRef}
            className="relative hidden h9  mt-1 p-1 pl-2 rounded-md tablet:text-sm border-solid border-[1.2px] border-gray-300 tablet:flex bg-grey-50  "
          >
            {searchVisibility && (
              <SearchIcon className="h-5 w-5 text-gray-400 "></SearchIcon>
            )}
            <input
              type="text"
              placeholder="search"
              className="headerinput pl-1 bg-gray-50 focus:outline-none"
            ></input>

            {crossVisibility && (
              <PlusCircleIcon className="h-5 w-5 text-gray-400 rotate-45" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="h-6 cursor-pointer fill-black" />
          <div className="relative ">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faFacebookMessenger}
              size="lg"
              color="black"
            />
            <span className="absolute -top-1 -right-2 bg-red-500 rounded-full h-4 w-4 text-white text-xs items-center justify-center flex leading-none">
              3
            </span>
          </div>

          <div className="relative ">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faHeart}
              size="lg"
              color="black"
            />
            <div className="block absolute w-1 h-1 left-1/2 -translate-x-1/2 bg-red-600 rounded-full " />
            {/* <HeartTip /> */}
          </div>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faPlusSquare}
            size="lg"
            color="black"
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faCompass}
            size="lg"
            color="black"
          />
          <div class="avatar">
            <div class="rounded-full w-6 h-6">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NavScrollExample;


