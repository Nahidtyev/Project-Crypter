import React from 'react'
import Cardblock from './Cardblock'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../../service/service'
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
  return (
    <div id="collections">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="heading">
                        <h1>Curated <br /> collections.</h1>
                        <span></span>
                    </div>
                </div>
                <div className="g-3 carding">
                    {
                    data && data.map((data,index)=>(
                        <div className="col-xl-4">
                            <Cardblock
                                index={data.index}
                                image1={data.image1}
                                image2={data.image2}
                                image3={data.image3}
                                price={data.price}
                                owner={data.owner}
                                name={data.name}
                                />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections