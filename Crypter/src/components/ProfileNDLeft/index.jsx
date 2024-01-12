import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { RiLinksLine } from "react-icons/ri";
import { IoOpenOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { urlFor } from '../../service/service';
import dash from '../../assets/home/dash.png'
import './profilendleft.scss'
const ProfileNDLeft = ({name,image,description}) => {
  return (
    <div className="profile-nd-left">
        <img src={urlFor(image)} alt="" />
        <div className="name-card">
            <img className='sml' src={dash} alt="" />
            <p><span>{name}</span><br /> @ {name}</p>
        </div>
        <div className="details">
            <h5>Details</h5>
            <p>
                {description}
            </p>
            <hr />
            <ul>
                <li><CiGlobe size={24}/> View on Etherscane</li>
                <li><RiLinksLine size={24}/> View metadata</li>
                <li><RiLinksLine size={24}/> View on IPFS</li>
            </ul>
            <button>Add tags <FiPlus size={24}/></button>
        </div>
        <div className="lower">
            <h5>Provenance</h5>
            <hr />
            <div className="block">
                <div>
                    <img className='sml' src={dash} alt="" />
                    <p><span>Minted by</span> @ {name}<br />Aug 18, 2022 at 18:80</p>
                </div>
                <Link to={'/profile'}><IoOpenOutline size={24}/></Link>
            </div>
        </div>
    </div>
  )
}

export default ProfileNDLeft