import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, auth, provider } from "../firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // runs when a new user is detected
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);

  // retrieves all posts from the database
  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));

      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  // adding user to database
  const addUserToDB = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    });
  };

  // logging in the user
  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    console.log(user, 'supppp')
    setCurrentUser(user);
    addUserToDB(user)
  };

  return (
    <MediumContext.Provider value={{ posts, users, currentUser, handleUserAuth }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
