import React from 'react'
import './helperdetails.scss'
import HelpLists from '../helpCatRight/helplists'
const HelperDetails = () => {
  return (
    <div className="row g-3  helper-details">
        <div className="col-xl-6">
            <div className="left guide"></div>
        </div>
        <div className="col-xl-6">
            <div className="right">
                <h1>Guide to collection NFT artworks on Crypter</h1>
                <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                    <br />Ratione earum minus quia consectetur debitis magnam. Ex nemo maiores reiciendis distinctio. Cupiditate nihil doloribus repellat voluptatem.
                    <br />Et id possimus harum ipsa eum odit labore. Eligendi repellat impedit eaque corporis dolor ipsam vero. Vitae beatae aperiam consequatur consequatur praesentium minus sequi magni.
                    <br />Et neque dolor velit aliquid earum reiciendis sequi harum. Laudantium et doloremque deleniti quaerat. Dolorem molestias doloribus. Non non laboriosam ut assumenda vel aut sequi.
                </p>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="left bid"></div>
        </div>
        <div className="col-xl-6">
            <div className="right">
                <h1>Place a bid</h1>
                <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                   <br />Et neque dolor velit aliquid earum reiciendis sequi harum. Laudantium et doloremque deleniti quaerat.
                </p>
                <ul>
                    <HelpLists/>
                </ul>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="left buy"></div>
        </div>
        <div className="col-xl-6">
            <div className="right">
                <h1>Buy now</h1>
                <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                   <br />Et neque dolor velit aliquid earum reiciendis sequi harum. Laudantium et doloremque deleniti quaerat.
                </p>
                <ul>
                    <HelpLists/>
                </ul>
            </div>
        </div>
        <div className="row related">
            <div className="col-xl-6">
                <div className="left">
                    <h1>Related<br />articles.</h1>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="right">
                    <ul>
                        <HelpLists/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelperDetails