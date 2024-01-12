import React, { useEffect, useState } from 'react'
import News from '../../Home/News'
import DetailTop from './detailtop'
import { useParams } from 'react-router-dom';
import { client } from '../../../service/service';
import BlogDetailContent from '../../../components/blogdetailcontent';

const BlogDetail = () => {
  const {blogId} = useParams();
  const [bloging, setBlog] = useState('');
  useEffect(() => {
    client.fetch(`*[_type == "createdcard" && _id == "${blogId}"]`)
      .then((res) => {
        if (res && res.length > 0) {
          setBlog([res[0]]);
        }
      })
  }, [blogId]);
  
  return (
    <div id="blog-detail">
        <div className="container">
            <div className="row">
                {bloging && bloging.map((data,index)=>(
                  <DetailTop
                  key={data.index}
                  image={data.image}
                  text={data.text}
                  />
                ))}
                {bloging && bloging.map((data,index)=>(
                  <BlogDetailContent
                  key={data.index}
                  text={data.text}
                  description={data.description}
                  />
                ))}
                <News/>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail