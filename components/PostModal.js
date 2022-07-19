import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import { db } from "../firebase";

const styles = {
  wrapper: `w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  fieldTitle: `flex-1 text-end`,
  inputCont: `flex-[5] h-min border-2 border-[#787878] `,
  inputField: `w-full border-0 outline-none bg-transparent p-1 ml-2`,
  accentedBtn: "bg-[#FCC017] text-black py-2 px-4 rounded-full",
};

const PostModal = () => {
  const { currentUser } = useContext(MediumContext);

  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFB = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "articles"), {
      bannerImage: bannerImage,
      body: body,
      category: category,
      brief: brief,
      postedOn: serverTimestamp(),
      postLength: Number(postLength),
      title: title,
      author: currentUser.email,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>

        <span className={styles.inputCont}>
          <input className={styles.inputField} type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>

        <span className={styles.inputCont}>
          <input className={styles.inputField} type="text" value={brief} onChange={event => setBrief(event.target.value)} />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image Url</span>

        <span className={styles.inputCont}>
          <input className={styles.inputField} type="text" value={bannerImage} onChange={event => setBannerImage(event.target.value)} />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>

        <span className={styles.inputCont}>
          <input className={styles.inputField} type="text" value={category} onChange={event => setCategory(event.target.value)} />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Est Read Length (in min)</span>

        <span className={styles.inputCont}>
          <input className={styles.inputField} type="text" value={postLength} onChange={event => setPostLength(event.target.value)} />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Body</span>

        <span className={styles.inputCont}>
          <textarea className={styles.inputField} rows={12} type="text" value={body} onChange={event => setBody(event.target.value)} />
        </span>
      </div>

      <button onClick={addPostToFB} className={styles.accentedBtn}>SUBMIT</button>
    </div>
  );
};

export default PostModal;
