import React from 'react'
import blogbg from '../../../assets/home/blogbg.jpg'
import './blogtop.scss'
const BlogTop = () => {
  return (
    <div className="blog-top">
        <img src={blogbg} alt="" />
        <h1>Crypter Blog<br /><span>Crypter NFT marketplace blog</span></h1>
    </div>
  )
}

export default BlogTop