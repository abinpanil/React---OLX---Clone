import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../Store/PostContext';
import { AuthContext } from '../../Store/FirebaseContext';
import { getDocs, query, where, getFirestore, collection } from "firebase/firestore";
import './View.css';

function View() {
  const [userDetails, setUserDetails] = useState()
  const { user } = useContext(AuthContext)
  const { postDetails } = useContext(PostContext)
  const db = getFirestore()
  const [post, setPost] = useState()

  useEffect(() => {
    if (postDetails) {
      setPost(postDetails)
    } else {
    }
  }, [postDetails])

  useEffect(async () => {
    if (user) {
      const colRef = collection(db, "users")
      const res = await query(colRef, where('id', '==', user.uid))
      const querySnapshot = await getDocs(res);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUserDetails(doc.data());
      });

    }
  }, [user])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.downloadURL}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
