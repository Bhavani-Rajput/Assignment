import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io"
import { PiButterfly } from "react-icons/pi"
import { GoHome } from "react-icons/go"
import { BsCash } from "react-icons/bs"
import { GoTasklist } from "react-icons/go"
import { IoIosContact } from "react-icons/io"
import { IoNotificationsOutline } from "react-icons/io5"
import { IoExitOutline } from "react-icons/io5"

const SideBar = () => {
    
  return (
      <nav>            
          <div>
              <span className='hide'><PiButterfly  size={'20'} color='#aaa' /></span>
              <span className='hide'><IoIosSearch size={'20'} color='#aaa' /></span>
              <span className='selected'><GoHome  size={'20'} color='#fff'/></span>
              <span><BsCash  size={'20'} color='#aaa'/></span>
              <span><GoTasklist  size={'20'} color='#aaa'/></span>
              <span><IoIosContact  size={'20'} color='#aaa'/></span>
          </div>
          <div className='hide'>
              <span ><IoNotificationsOutline size={'20'} color='#aaa'/></span>
              <span><IoExitOutline size={'20'} color='#aaa'/></span>
          </div>
    </nav>
  )
}

export default SideBar