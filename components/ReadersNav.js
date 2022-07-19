import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Luis from "../static/me.png";

const styles = {
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  logoCont: `cursor-pointer`,
  iconsCont: `flex flex-1 flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImgCont: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center`,
  profileImg: `object-cover`,
};

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoCont}>
          <Image src={SmallLogo} />
        </div>
      </Link>

      <div className={styles.iconsCont}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>

      <div className={styles.profileImgCont}>
        <Image className={styles.profileImg} src={Luis} />
      </div>
    </div>
  );
};

export default ReadersNav;
