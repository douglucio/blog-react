import './NewPost.css'
import Navbar from "../../components/navbar/NavBar"
import useBlogApi from "../../services/useBlogApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault(); //mantem form sem recarregar a pagina
    const post = { title, body, userId: 1 }
    await blogFetch.post("/posts", {
      body: post,
    })
    navigate("/")
  }

  return (
    <div>
      <Navbar />
      <div className="new-post">
        <h2>inserir novo post</h2>
        <form onSubmit={(e) => createPost()}>
          <div className="form-control">
            <label htmlFor="title">Titulo: </label>
            <input type="text" name="title" id="title" placeholder="digite o titulo" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="body">Conteudo: </label>
            <textarea name="body" id="body" placeholder="digite o conteudo" onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
          <input type="submit" value="Criar Post" className="btn-ler-mais" />
        </form>
      </div>
    </div>
  )
}

export default NewPost
