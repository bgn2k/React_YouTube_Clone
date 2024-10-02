import Option from './assets/Icons/Option.svg'
import Create from './assets/Icons/Create.svg'
import Notification from './assets/Icons/Notification.svg'
import SearchButton from './assets/Icons/SearchButton.svg'
import Voice from './assets/Icons/Voice.svg'
import YT_Voice_Button from './assets/Icons/YT_Voice_Button.svg'
import Home_Logo from './assets/Icons/Home_Logo.png'
import logo from './assets/Icons/logo.png'
import Voice2 from './assets/Icons/Voice2.png'
import YouTube_Icon_2 from './assets/Icons/YouTube_Icon_2.png'
import YouTube_Icon from './assets/Icons/YouTube_Icon.png'
import User_PP from './assets/PP/User_PP.jpeg'

const Header = () => {
  return (
    <>
        <div className="header">
        <div className="left-section">
            <img className="humburger-menu" src={Option}/>
            <img className="youtube-logo" src={YouTube_Icon_2}/>
        </div>

        <div className="middle-section">
            <input className="searchBox" type="text" placeholder="Search"/>
            <button className="search-button">
                <img style={{cursor: "pointer"}} src={SearchButton}/>
                <div className="tooltip">Search</div>
            </button>
            <button className="voice-button">
                <img style={{cursor: "pointer"}} src={YT_Voice_Button}/>
            </button>
        </div>

        <div className="right-section">
            <img className="upload-icon" src={Create}/>
            <div className="notification">
                <img className="notification-icon" src={Notification}/>
                <div className="count">9+</div>
            </div>
            <img className="user-icon" src={User_PP}/>
        </div>
    </div>
    </>
  )
}
export default Header