import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbCircleDot } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";
import './helpcatR.scss'
import HelpLists from './helplists';
const HelpCatRight = () => {
  return (
    <div className="help-cat-right">
        <div className="search-bar">
            <input placeholder='Search topics' type="text" />
            <CiSearch size={24}/>
        </div>
        <hr />
        <ul>
            <li className='first-li'><label>Buying</label><CiCircleMinus size={24}/></li>
            <HelpLists/>
        </ul>
        <ul>
            <li className='first-li'><label>Creating</label><CiCircleMinus size={24}/></li>
            <HelpLists/>
        </ul>
        <ul>
            <li className='first-li'><label>Selling</label><CiCircleMinus size={24}/></li>
            <HelpLists/>
        </ul>
    </div>
  )
}

export default HelpCatRight