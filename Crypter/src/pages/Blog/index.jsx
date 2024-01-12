import React, { useState } from 'react'
import News from '../Home/News'
import BlogCard from '../../components/blogcard'
import { useQuery } from '@tanstack/react-query'
import { LuLoader } from "react-icons/lu";
import { client } from '../../service/service'
import './blog.scss'
import BlogTop from './top'

const Blog = () => {
    const {data}=useQuery({
        queryKey: ["createdcard"],
        queryFn: ()=>client.fetch(`*[_type=="createdcard"]`)
    })

    const [visibleData, setVisibleData] = useState(3);
    const [showLoadLess, setShowLoadLess] = useState(false);

    const loadMore = () => {
        setVisibleData(prev => prev + 100);
        setShowLoadLess(true);
    };

    const loadLess = () => {
        setVisibleData(3);
        setShowLoadLess(false);
    };
    return (
        <div id="blog">
            <div className="container">
                <div className="row">
                    <BlogTop />
                    <div className="col-xl-12">
                        {data &&
                            data.slice(0, visibleData).map((dataItem, index) => (
                                <BlogCard
                                    key={index}
                                    image={dataItem.image}
                                    text={dataItem.text}
                                    description={dataItem.description}
                                />
                            ))}
                       <div className='loads'>
                            {data && visibleData < data.length && (
                                <button onClick={loadMore}>load more <LuLoader size={24}/></button>
                            )}
                            {showLoadLess && (
                                <button onClick={loadLess}>load less <LuLoader size={24}/></button>
                            )}
                       </div>
                    </div>
                    <News />
                </div>
            </div>
        </div>
    );
};

export default Blog