import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebook,
  FaPinterest,
  FaPlus,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function SocialLinks() {
  return (
    <div className="SocialLinks w-full sm:w-auto flex flex-col">
      <div className="SocialLinksHeader flex flex-row items-center justify-start w-full">
        <h2 className="uppercase inline-block dark:text-white bg-zinc-200 text-black dark:bg-gray-800 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-xs">
          Follow Us
        </h2>
        <hr className="h-[2px] flex-grow bg-rose-500 " />
      </div>
      <div className="socialLinks flex flex-row flex-wrap items-start justify-start my-8 gap-2">
        <div className="facebook flex flex-row items-center justify-between gap-4 px-4 rounded-[2px] w-[44px] cursor-pointer md:w-[130px] h-[30px] py-3 bg-[#4E69A3]">
          <FaFacebook color="white" />
          <span className="text-white  text-sm inter hidden md:block">
            10K+
          </span>
        </div>
        <div className="Twitter flex flex-row items-center justify-between gap-4 px-4 rounded-[2px] w-[44px] cursor-pointer md:w-[130px] h-[30px] py-3 bg-black">
          <FaXTwitter color="white" />
          <span className="text-white text-xs inter hidden md:block">
            1K+
          </span>
        </div>
        <div className="Youtube flex flex-row items-center justify-between gap-4 px-4 rounded-[2px] w-[44px] cursor-pointer md:w-[130px] h-[30px] py-3 bg-[#F50000]">
          <FaYoutube color="white" />
          <span className="text-white text-xs inter hidden md:block">
            20K+
          </span>
        </div>
        <div className="Youtube flex flex-row items-center justify-between gap-4 px-4 rounded-[2px] w-[44px] cursor-pointer md:w-[130px] h-[30px] py-3 bg-[#29A0DA]">
          <FaTelegram color="white" />
          <span className="text-white text-xs inter hidden md:block">
            25K+
          </span>
        </div>
        {/* <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-[#52C261]">
          <FaWhatsapp color="white" size={20} />
        </div>
        <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-[#CF373C]">
          <FaPinterest color="white" size={20} />
        </div>
        <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-gray-400">
          <CgMail color="white" size={22} />
        </div>
        <div className="Twitter flex flex-row items-center justify-between gap-4 px-3 rounded-[2px] w-[44px] h-[30px] py-1 bg-gray-100">
          <FaPlus color="gray" size={18} />
        </div> */}
      </div>
    </div>
  );
}

export default SocialLinks;
