import './NewPost.css'
import Navbar from "../../components/navbar/NavBar"
import useBlogApi from "../../services/useBlogApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const createPost = async (e) => {
    e.preventDefault(); //mantem form sem recarregar a pagina
    const post = { title, content }
    await useBlogApi.post("/posts/new", {
      'title': post.title,
      'content': post.content
    })
    navigate("/")
  }

  return (
    <div>
      <Navbar />
      <div className="new-post">
        <h2>inserir novo post</h2>
        <form onSubmit={(e) => createPost(e)}>
          <div className="form-control">
            <label htmlFor="title">Titulo: </label>
            <input type="text" name="title" id="title" placeholder="digite o titulo" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="content">Conteudo: </label>
            <textarea name="content" id="content" placeholder="digite o conteudo" onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <input type="submit" value="Criar Post" className="btn-ler-mais" />
        </form>
      </div>
    </div>
  )
}

export default NewPost
