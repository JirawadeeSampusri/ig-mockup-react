import {
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "../index.css";

const Post = () => {
  return (
    <div className="bg-white my-7 border rounder-sm">
      <div className="flex items-center p-4">
        <div className="avatar  mr-3">
          <div className="rounded-full w-10 h-10">
            <img src="https://placeimg.com/100/100/people" />
          </div>
        </div>
        <p className="flex-1 text-black font-semibold text-sm">Sawasdeeka</p>
        <DotsHorizontalIcon className="fill-black h-5" />
      </div>
      <img
        className="w-full"
        src="https://placeimg.com/250/250/people"
        alt=""
      />
      <div className="flex justify-between p-4">
        <div className="flex space-x-4 items-center">
          <HeartIcon className="h-6 cursor-pointer"></HeartIcon>
          <FontAwesomeIcon
            className="cursor-pointer scale-x-[-1]"
            icon={faComment}
            size="lg"
          ></FontAwesomeIcon>
          <PaperAirplaneIcon className="h-6 cursor-pointer rotate-[60deg] -translate-y-0.5" />
        </div>
        <BookmarkIcon className="h-6 cursor-pointer"></BookmarkIcon>
      </div>
      <p className="px-4 truncate">
        <p className="font-semibold mb-1 text-sm">23 likes</p>
        <spam className="font-semibold mr-1 text-sm">Sawasdeeka</spam>
        Nice Pic!
      </p>
      <div className="px-4 text-sm mb-1 text-gray-400 cursor-pointer">
        View all 4 comments
      </div>
      <div className="px-4 flex justify-between">
        <div>
          <span className="font-semibold mr-1 text-sm">Niels</span>That's
          awesome
        </div>
        <HeartIcon className="h-4 cursor-pointer"></HeartIcon>
      </div>
      <div className="px-4 flex justify-between">
        <div>
          <span className="font-semibold mr-1 text-sm">Bobbi</span>COOOOOLLLLL
        </div>
        <HeartIcon className="h-4 cursor-pointer"></HeartIcon>
      </div>
      <div className="flex">
      <div className="px-4 mt-2 text-gray-400 text-xs mb-4">2 DAYS AGO</div>
      <div className=" mt-2 text-gray-400 text-sm mb-4 font-semibold ">See translate</div>
      </div>
     
      <hr />
      <form action="" className="flex items-cemter p-4">
        <EmojiHappyIcon className="h-6 cursor-pointer mr-2" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
