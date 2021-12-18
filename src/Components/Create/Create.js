import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/FirebaseContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useHistory } from 'react-router';

const Create = () => {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const db = getFirestore()
  const colRef = collection(db, 'products')
  const storage = getStorage();
  let date = new Date()
  const handleSubmit = () => {
    const ImagesRef = ref(storage, `images/${image.name}`);
    uploadBytes(ImagesRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);

        console.log('Uploaded a blob or file!');
        console.log(snapshot);
        addDoc(colRef, {
          name,
          category,
          price,
          downloadURL,
          userId: user.uid,
          createdAt: date.toDateString()
        });
        
      })
      history.push('/')
    });
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="fname"
            name="Price" />
          <br />

          <br />
          <img alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : null}></img>

          <br />
          <input onChange={(e) => {
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
