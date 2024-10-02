import Download from './assets/Icons/Sidebar/Download.svg'
import Shorts from './assets/Icons/Sidebar/Shorts.svg'
import Subscribe from './assets/Icons/Sidebar/Subscribe.svg'
import You from './assets/Icons/Sidebar/You.svg'
import YT_Home from './assets/Icons/Sidebar/YT_Home.svg'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
        <div className="sidebar-link">
            <img src={YT_Home}/>
            <div>Home</div>
        </div>
        <div className="sidebar-link">
            <img src={Shorts}/>
            <div>Shorts</div>
        </div>
        <div className="sidebar-link">
            <img src={Subscribe}/>
            <div>Subscriptions</div>
        </div>
        <div className="sidebar-link">
            <img src={You}/>
            <div>You</div>
        </div>
        <div className="sidebar-link">
            <img src={Download}/>
            <div>Downloads</div>
        </div>
    </div>
    </>
  )
}

export default Sidebar