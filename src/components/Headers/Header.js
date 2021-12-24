import React from "react";
import "./_header.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

function Header({handleToggleSidebar}) {
  return (
    <div className="header">
      <MenuIcon className="header__menu" size={26}
      onClick={()=>handleToggleSidebar()}
      
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='avatar' />
         </div>

    </div>
  );
}

export default Header;
