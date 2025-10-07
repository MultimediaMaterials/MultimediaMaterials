import WithCourseSidebar from "../sidebar/WithCourseSidebar"
import ScrollToTop from "../utils/ScrollToTop"
import Footer from "./footer"
import MainNavbar from "./MainNavbar"

const BaseLayout = ({children, hamburgerBtnShow=true}) => {
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
      {hamburgerBtnShow ? <WithCourseSidebar><MainContent /></WithCourseSidebar> : <MainContent />}
    </div>
  )
}

export default BaseLayout
