import useBlogApi from '../../services/useBlogApi'
import './home.css'
import Navbar from "../../components/navbar/NavBar"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import React from 'react'

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await useBlogApi.get("/posts");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="home">
          <h1>ultimos posts</h1>
          {posts.length === 0 ? <p>carregando ... </p> : (
            posts.map((post) => (
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Link to={`/post/${post.id}`} className='btn-ler-mais'>saber mais</Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
