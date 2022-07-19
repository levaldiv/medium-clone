import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../static/replit.png";
import TutorialImg from "../static/tutorial.jpg";
import CPLogo from "../static/cp.png";
import Luis from "../static/me.png";
import JSLogo from "../static/jsLogo.png";
import Image from "next/image";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] `,
  accentedBtn: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authCont: `my-[2rem]`,
  authProImgCont: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authFollowers: `text-[#787878]`,
  authActions: `flex gap-[0.6rem] my-[1rem]`,
  actionBtn: `bg-[#1A8917] text-white rounded-full text-sm px-[.6rem] py-[.4rem]`,
  recCont: ``,
  recAuthCont: `flex items-center gap-[.6rem]`,
  title: ``,
  articlesCont: ``,
  recAuthProImgCont: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recAuthName: `text-sm`,
  recThumbCont: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recTitle: `font-bold`,
  recThumbnail: `object-cover rounded-md`,
  articleContWrapper: `flex items-center justify-between cursor-pointer my-[1rem] border border-[gray] rounded-lg p-2 hover:border hover:border-[#FCC017]`,
  articleContent: `flex-[4]`,
};

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedBtn}>Get UNLIMITED access</div>

      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search for article"
          type="text"
        />
      </div>

      <div className={styles.authCont}>
        <div className={styles.authProImgCont}>
          <Image src={Luis} width={100} height={100} />
        </div>

        <div className={styles.authName}>Luis</div>
        <div className={styles.authFollowers}>1 follower</div>

        <div className={styles.authActions}>
          <button className={styles.actionBtn}>1 follower</button>
          <button className={styles.actionBtn}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recCont}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesCont}>
          {/* looping through posts */}
          {recommendedPosts.map((post) => (
            <div className={styles.articleContWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recAuthCont}>
                  <div className={styles.recAuthProImgCont}>
                    <Image src={post.author.image} height={100} width={100} />
                  </div>

                  <div className={styles.recAuthName}>{post.author.name}</div>
                </div>

                <div className={styles.recTitle}>{post.title}</div>
              </div>

              <div className={styles.recThumbCont}>
                <Image
                  className={styles.recThumbnail}
                  src={post.image}
                  height={100}
                  width={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

const recommendedPosts = [
  {
    title: "What can you do with Replit?",
    image: ReplitLogo,
    author: {
      name: "Luios",
      image: CPLogo,
    },
  },
  {
    title: "Ultimate JS Course for Newbies",
    image: TutorialImg,
    author: {
      name: "Luios",
      image: Luis,
    },
  },
  {
    title: "Make money by coding ... ?",
    image: JSLogo,
    author: {
      name: "Luios",
      image: CPLogo,
    },
  },
];
