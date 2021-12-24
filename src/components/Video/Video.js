import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'

function Video() {
    return (
        <div className="video">
<div className="video__top">
<img src ='https://i.ytimg.com/vi/ztbYpMj8ycY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9idHDYHL5lOSEt3skjp2iXav7gg' alt="logo"/>
<span>05:43</span>

</div>
<div className="video__title">
    Create App in 5 mins made by chintu
</div>
<div className="video__details">
    <span><AiFillEye /> 5M views •</span>
    <span>5 days ago</span>
</div>
<div className="video__channel">
    <img src="https://yt3.ggpht.com/ytc/AKedOLQIUclFE2eo0FML90Si6dSQL3x4bTOt66kLSRy4VA=s68-c-k-c0x00ffffff-no-rj" alt="" />
    <p>Rainbow hat Jr</p>
</div>

        </div>
    )
}

export default Video
