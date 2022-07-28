import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stories from "./stories.json";
import Story from "./Story";
import "../index.css";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Instragram_Stories = () => {
  return (
    <div className="relative">
      <div className="flex space-x-2 overflow-x-scroll  bg-white border-gray-200 p-4 scroll-smooth scrollbar-hide">
        {stories.map((story) => (
          <Story
            key={story.id}
            img={story.avatar}
            username={story.first_name + story.last_name}
          />
        ))}
      </div>
      <div className="absolute top-0 p-4 w-full h-full flex justify-between z-10 items-center">
        <FontAwesomeIcon
          size="laptop"
          icon={faChevronCircleLeft}
          color="white"
          className="cursor-pointer drop-shadow-lg filter"
        />
        <FontAwesomeIcon
          size="laptop"
          icon={faChevronCircleRight}
          color="white"
          className="cursor-pointer drop-shadow-lg mr-4 filter"
        />
      </div>
    </div>
  );
};

export default Instragram_Stories;
