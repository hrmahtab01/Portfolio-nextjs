"use client";
import Image from "next/image";
import profilepic from "../../public/patrickBravo.jpeg";
import { PROFILE } from "../constants";
import {FaDownload} from "react-icons/fa6"

const ProfileOverview = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={profilepic}
          width={110}
          height={110}
          alt="profilepic"
          className="rounded-full border-2 border-slate-400"
        />
        <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
        <p className="tracking-tighter ">{PROFILE.city}</p>
        <a
          href="/patrick.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-x-2 rounded-full bg-gray-300 px-3 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:text-teal-800"
        >
            Download Resume
            <FaDownload/>
        </a>
        <p className="my-10 text-center text-5xl font-semibold tracking-tighter lg:text-[10rem]">{PROFILE.greet} </p>
        <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-400 lg:text-4xl">
            I am a passionate {" "}
            <span className="border-b font-medium text-slate-200">
                Full Stack Developer
            </span>{" "}
            with a knack for creating seameledss, User-Friendly web applications. Specialize in both{" "} 
        <span className="font-medium text-slate-200">front-end</span>{" "}
        and {" "}
        <span className="font-medium text-slate-200">back-end</span> {" "}
        development,ensuring a cohesive and efficient user experience from start to finish.
        </p>
      </div>
    </div>
  );
};

export default ProfileOverview;
