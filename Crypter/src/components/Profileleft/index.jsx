import React from 'react'
import {BiCopyAlt, BiLogoInstagram} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {FiGlobe, FiLink} from 'react-icons/fi';
import {TfiTwitter} from 'react-icons/tfi';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {RiFacebookBoxLine} from 'react-icons/ri';
import {AiOutlinePlus} from 'react-icons/ai'
import './left.scss'
import { urlFor } from '../../service/service';
import {Link} from 'react-router-dom'

const ProfileLeft = ({image,follow,follower,bio,name,sales}) => {
  return (
    <div id="profile-left">
        <img src={urlFor(image)} alt={name} />
        <div className="head">
            <span>
                <h1>{name}</h1>
                <span>@{name}</span>
                <button>0x1e86…533B <BiCopyAlt/></button>
            </span>
            <button>follow <AiOutlinePlus size={24}/></button>
        </div>
        <ul className="propeties">
           <li>{sales} ETH<br /><span><BsPerson size={20}/> Total sales</span></li>
           <li>{follow}<br /><span><BsPerson size={20}/> Following</span></li>
           <li >{follower}<br /><Link to={"/profile/followers"}><span><BsPerson size={20}/> Followers</span></Link></li>
        </ul>
        <div className="row justify-content-between info">
            <div className="col-xl-9">
                <div className="bio">
                    <h1>BIO</h1>
                    <p>{bio}</p>
                </div>
                <div className="links">
                    <h1>LINKS</h1>
                    <p>
                        <span><FiGlobe size={24}/> ui8.net</span>
                        <span><FiLink size={24}/> mirror.xyz/ui8</span>
                    </p>
                </div>
            </div>
            <div className="col-xl-1 ">
                <ul className="social">
                    <li><BiLogoInstagram size={24}/></li>
                    <li><TfiTwitter size={24}/></li>
                    <li><TiSocialLinkedinCircular size={24}/></li>
                    <li><RiFacebookBoxLine size={24}/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileLeft