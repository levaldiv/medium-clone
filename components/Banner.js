import Image from "next/image";
import React from "react";
import Logo from "../static/banner.png";

const styles = {
  wrapper:
    "h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black",
  content: "max-w-7xl flex-1 flex items-center justify-between",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer items-center space-x-5",
  accentedBtn: "bg-black text-white py-2 px-4 rounded-full",
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif">
            Stay Curious
          </h1>

          <h3 className="text-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>

          <button className={styles.accentedBtn}>Start Reading</button>
        </div>

        <Image
          className="h-32 md:inline-flex object-contain flex-1 hidden"
          src={Logo.src}
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
