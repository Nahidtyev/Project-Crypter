import React, { useRef , useState } from 'react'
import Cardblock from './Cardblock'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../../service/service'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import './collection.scss'
const Collections = () => {
    const {data} = useQuery({
        queryKey: ["collections"],
        queryFn : () => client.fetch(`*[_type =="collections"]`),
    })
    const {delta} = useQuery({
        queryKey: ["createdcard"],
        queryFn : () => client.fetch(`*[_type =="createdcard"]`),
    })

    //-----------------SWIPER-----------------//
    const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div id="collections">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="heading">
                        <h1>Curated <br /> collections.</h1>
                        <span>
                            <button><FaArrowLeft size={24} color='#202025'/></button>
                            <button><FaArrowRight size={24} color='#F7FBFA'/></button>
                        </span>
                    </div>
                </div>
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={3}
                            spaceBetween={20}
                            centeredSlides={true}
                            className="mySwiper carding"
                        >
                        <div className="row">
                            {
                                data && data.map((data,index)=>(
                                    <SwiperSlide className="col-xl-4">
                                            <Cardblock
                                                index={data.index}
                                                image1={data.image1}
                                                image2={data.image2}
                                                image3={data.image3}
                                                price={data.price}
                                                owner={data.owner}
                                                name={data.name}
                                                />
                                    </SwiperSlide>
                                ))
                                }
                        </div>
                        </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Collections