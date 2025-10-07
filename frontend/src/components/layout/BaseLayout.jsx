import WithCourseSidebar from "../sidebar/WithCourseSidebar"
import ScrollToTop from "../utils/ScrollToTop"
import Footer from "./footer"
import MainNavbar from "./MainNavbar"

const BaseLayout = ({children, hamburgerBtnShow=true, courseMenuData, menuActiveId}) => {
  const MainContent = () => (
    <>
      <ScrollToTop />
      <MainNavbar hamburgerBtnShow={hamburgerBtnShow} />
      <div className="pt-16"> {/* Add padding to account for fixed navbar height */}
        {children}
      </div>
      <Footer />
    </>
  )
  return (
    <div>
      {hamburgerBtnShow ? <WithCourseSidebar courseMenuData={courseMenuData} menuActiveId={menuActiveId}><MainContent /></WithCourseSidebar> : <MainContent />}
    </div>
  )
}

export default BaseLayout
