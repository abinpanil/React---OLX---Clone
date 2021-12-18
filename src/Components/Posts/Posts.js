import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Store/FirebaseContext';
import Heart from '../../assets/Heart';
import './Post.css';
import { useHistory } from 'react-router';
import { doc, getDocs, getFirestore, collection } from "firebase/firestore";
import { PostContext } from '../../Store/PostContext';
import { Col, Container, Row } from 'react-bootstrap';


function Posts() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const { setPostDetails } = useContext(PostContext)

  useEffect(() => {
    const db = getFirestore()
    const colRef = collection(db, "products")
    getDocs(colRef).then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      console.log(allPost);
      setProducts(allPost)
    })
  }, [])
  return (
    <div className="postParentDiv">
      <Container>
        <Row>
          <Col md="12">
          <div className="moreView">
            <div className="heading">
              <span>Quick Menu</span>
              <span>View more</span>
            </div>
            <div className="cards">
              {products.map(product => {

                return <div
                  className="card"
                  onClick={() => {
                    setPostDetails(product)
                    history.push('/view')
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.downloadURL} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9;{product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              })
              }
            </div>
          </div>
          <div className="recommendations">
            <div className="heading">
              <span>Fresh recommendations</span>
            </div>
            <div className="cards">
              {products.map(product => {

                return <div
                  className="card"
                  onClick={() => {
                    setPostDetails(product)
                    history.push('/view')
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.downloadURL} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9;{product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              })
              }
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Posts;
