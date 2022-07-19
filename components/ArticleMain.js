import Image from "next/image";
import React from "react";
import Banner from "../static/banner.png";
import Luis from "../static/me.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen w-full p-[2rem]`,
  postHeadCont: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authCont: `flex gap-[1rem]`,
  authProfImgCont: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  column: `flex-1 flex-col justify-center`,
  postDet: `flex gap-[.rem] text-[#787878]`,
  listenBtn: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  articleMainCont: `flex flex-col gap-[1rem]`,
  bannerCont: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  image: `object-cover`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleTxt: `font-mediumSerif text-[1.4rem] text-[#292929]`,
};

const ArticleMain = ({ post, author }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeadCont}>
          <div className={styles.authCont}>
            <div className={styles.authProfImgCont}>
              <Image
                src={Luis}
                className="object-cover"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.column}>
              <div>{author?.data?.name}</div>

              <div className={styles.postDet}>
                <span>
                  {new Date(post?.data?.postedOn).toLocaleString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}{" "}
                  • {post.data?.postLength} min read •
                </span>

                <span className={styles.listenBtn}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>

        {/* Article container */}
        <div className={styles.articleMainCont}>
          <div className={styles.bannerCont}>
            <Image
              src={Banner}
              height={100}
              width={100}
              className={styles.image}
            />
          </div>

          <h1 className={styles.title}>{post?.data?.title}</h1>

          <h4 className={styles.subtitle}>
            <div>
              {author?.data?.name} -{" "}
              {new Date(post?.data?.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>

            <div>{post?.data?.brief}</div>
          </h4>

          <div className={styles.articleTxt}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
