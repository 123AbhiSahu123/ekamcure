"use client";
import Image from "next/image";
import {
  FaUserMd,
  FaCalendarCheck,
  FaComments,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";

export default function TopHeader() {
  return (
    <>
      {/* 🖥️ Desktop Header */}
      <div className="hidden md:flex bg-[#053161] text-white text-sm xl:px-65 md:px-5 py-2 justify-end items-center gap-6">
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <Image
            src={img3}
            alt="Phone"
            width={35}
            height={20}
            className="rounded-md"
          />
          <span className="font-medium">(+91)9990205353 </span>
        </div>

        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <Image
            src={img1}
            alt="Partner"
            width={25}
            height={15}
            className="rounded-md"
          />
          <span className="font-medium">Partner With Us</span>
        </div>

        <div className=" flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <Image
            src={img2}
            alt="Quote"
            width={25}
            height={25}
            className="rounded-md"
          />
          <span className="font-medium">Get Free Quote</span>
        </div>
      </div>

      {/* 📱 Mobile Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md md:hidden z-50">
        <div className="flex justify-around items-center py-2 text-[#053161] text-center">
          <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer text-center">
            {/* <FaUserMd className="text-lg mb-1" /> */}
            <Image
              src={img2}
              alt="Quote"
              width={25}
              height={25}
              className="rounded-md"
            />
            <span>Get Free Quote!</span>
          </div>
          <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer">
            {/* <FaCalendarCheck className="text-lg mb-1" /> */}
            <Image
              src={img1}
              alt="Partner"
              width={25}
              height={15}
              className="rounded-md"
            />
            <span>Partner with us!</span>
          </div>
          <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer">
            {/* <FaComments className="text-lg mb-1" /> */}
            <Image
              src={img3}
              alt="Phone"
              width={35}
              height={20}
              className="rounded-md"
            />
            <span>Chat or Call</span>
          </div>
          {/* <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer">
            <FaPhoneAlt className="text-lg mb-1" />
            <span>Call Us</span>
          </div> */}
          <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer">
            <FaBars className="text-lg mb-1" />
            <span>Menu</span>
          </div>
        </div>
      </div>
    </>
  );
}
