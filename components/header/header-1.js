import NagigationOne from './navigation-1'
import MiddleHeader from './middle-header'
import Topbar from './topbar'
import MobileSidebar from '../sidebar/sidebar'
const HeaderOne = () => {
  return (
    <>
      {/* <!-- header area start --> */}
        <header>
            <div className="header-area">
               
                <MiddleHeader/>
                <NagigationOne/>
                <MobileSidebar/>
            </div>
        </header>
        {/* <!-- header area end --> */}
    </>
  )
}

export default HeaderOne