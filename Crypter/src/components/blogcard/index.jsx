import React from 'react'
import { client, urlFor } from '../../service/service'
import './blogcard.scss'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
const BlogCard = ({image,text,description}) => {
    const {data} =useQuery({
        queryKey: ['createdcard'],
        queryFn: ()=>client.fetch(`*[_type=='createdcard']`)
    })
  return (
    <div className="blog-card">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="left">
                      <img src={urlFor(image)} alt="" />
                     
                     {data&&data.map((data,index)=>(
                         <Link to={`/blog/${data._id}`}><button>Continue reading</button></Link>
                     ))}
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="right">
                        <div className="top">
                            <h1>{text}</h1>
                            <span>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7994 1.61744C15.0667 0.617101 12.932 0.617102 11.1994 1.61745L4.675 5.38428C2.94235 6.38463 1.875 8.23334 1.875 10.234V17.7677C1.875 19.7684 2.94235 21.6171 4.675 22.6174L11.1994 26.3843C12.932 27.3846 15.0667 27.3846 16.7994 26.3843L23.3237 22.6174C25.0564 21.6171 26.1237 19.7684 26.1237 17.7677V10.234C26.1237 8.23334 25.0564 6.38463 23.3237 5.38428L16.7994 1.61744ZM13.9994 21.0009C17.8653 21.0009 20.9994 17.8669 20.9994 14.0009C20.9994 10.1349 17.8653 7.00086 13.9994 7.00086C10.1334 7.00086 6.99936 10.1349 6.99936 14.0009C6.99936 17.8669 10.1334 21.0009 13.9994 21.0009Z" fill="#010101"/>
                                        <circle cx="13.9978" cy="14.0017" r="3.11111" fill="#010101"/>
                                    </svg>
                                </button>
                                <p>Crypter II<br /><span>26 Aug 2022</span></p>
                            </span>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard