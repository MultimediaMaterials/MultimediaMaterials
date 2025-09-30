import WithCourseSidebar from "../sidebar/WithCourseSidebar"
import Footer from "./footer"
import MainNavbar from "./MainNavbar"

const BaseLayout = ({children, hamburgerBtnShow=true}) => {
  const MainContent = () => (
    <>
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
