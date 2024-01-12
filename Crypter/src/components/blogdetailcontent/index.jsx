import React from 'react'
import HelpLists from '../helpCatRight/helplists'
import dog from '../../assets/home/dog.png'
import img from '../../assets/home/img.png'
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import './blogCD.scss'
const BlogDetailContent = ({text,description}) => {
  return (
    <div className="blog-detail-content">
        <div className="block1">
            <h1>{text}</h1>
            <span>{description}</span>
            <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                <br />Ratione earum minus quia consectetur debitis magnam. Ex nemo maiores reiciendis distinctio. Cupiditate nihil doloribus repellat voluptatem.
                <br />Et id possimus harum ipsa eum odit labore. Eligendi repellat impedit eaque corporis dolor ipsam vero. Vitae beatae aperiam consequatur consequatur praesentium minus sequi magni.
                <br />Et neque dolor velit aliquid earum reiciendis sequi harum. Laudantium et doloremque deleniti quaerat. Dolorem molestias doloribus. Non non laboriosam ut assumenda vel aut sequi.
            </p>
        </div>
        <div className="block2">
            <img src={dog} alt="" />
        </div>
        <div className="block3">
            <h1>{text}</h1>
            <span>{description}</span>
            <img src={img} alt="" />
            <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                <br />Ratione earum minus quia consectetur debitis magnam. Ex nemo maiores reiciendis distinctio. Cupiditate nihil doloribus repellat voluptatem.
                <br />Et id possimus harum ipsa eum odit labore. Eligendi repellat impedit eaque corporis dolor ipsam vero. Vitae beatae aperiam consequatur consequatur praesentium minus sequi magni.
                <br />Et neque dolor velit aliquid earum reiciendis sequi harum. Laudantium et doloremque deleniti quaerat. Dolorem molestias doloribus. Non non laboriosam ut assumenda vel aut sequi.
            </p>
            <ul><HelpLists/></ul>
            <div className="posts">
                <label>share this post</label>
                <ul>
                    <li><FaInstagram size={24}/> Instagram</li>
                    <li><TfiTwitter size={24}/> Twitter</li>
                    <li><AiOutlineFacebook size={24}/> Facebook</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailContent