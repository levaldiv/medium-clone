import React, { useEffect, useState } from "react";
import Logo from "../static/logo.png";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
  wrapper: `shadow-md flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer border border-[gray] rounded-lg p-2 hover:border hover:border-[#FCC017]`,
  authorCont: `flex gap-[0.4rem]`,
  authorImgCont: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authImg: `object-cover`,
  authName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detsCont: `flex items-center justify-between text-[#787878]`,
  articleDets: `my-2 text-sm`,
  bookmarkCont: `cursor-pointer`,
  postDet: `flex-[2.5] flex flex-col`,
  cate: `bg-[#F2F2F2] p-1 rounded-full`,
  thumbnailCont: `flex-1`
};

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      // grabbing auths data from post
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };
    getAuthorData();
  }, [post]);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDet}>
          <div className={styles.authorCont}>
            <div className={styles.authorImgCont}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                className={styles.authImg}
                height={40}
                width={40}
              />
            </div>

            <div className={styles.authName}>{authorData?.name}</div>
          </div>

          <h1 className={styles.title}>{post.data.title}</h1>

          <div className={styles.briefing}>{post.data.brief}</div>

          <div className={styles.detsCont}>
            <span className={styles.articleDets}>
              {new Date(post.data.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}
              • {post.data.postLength} min read • <span className={styles.cate}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkCont}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailCont}>
          <Image height={100} width={100} src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
