import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
 import   postPic3 from './img.jpg';
 import   postPic2 from './sing.jpeg';
 import   postPic1 from './com.jpeg';
 import   postPic0 from './glas.jpeg';
import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        {/* <ProfileCard/> */}
        <div className='categories'>
        <h2 className='head'>Top Categories</h2>
        <h5 className='al'>All</h5>
        <div className='down'>
          <div className='div1'>
           <img className='im' src={postPic3} alt='img' />
           <h6 className='h'>Drawing</h6>
           <h5 className='hl'>30 Posts</h5>
          </div>
          <div className='div2'>
           <img className='im' src={postPic2} alt='img' />
           <h6 className='h'>Singing</h6>
           <h5 className='hl'>25 Posts</h5>
          </div>
          <div className='div3'>
           <img className='im' src={postPic1} alt='img' />
           <h6 className='h'>Comedy</h6>
           <h5 className='hl'>20 Posts</h5>
          </div>
          <div className='div4'>
           <img className='im' src={postPic0} alt='img' />
           <h6 className='h'>Script Songs</h6>
           <h5 className='hl'>20 Posts</h5>
          </div>
          <h3>View All</h3>
        </div>
        </div>
        {/* <FollowersCard/> */}
    </div>
  )
}

export default ProfileSide