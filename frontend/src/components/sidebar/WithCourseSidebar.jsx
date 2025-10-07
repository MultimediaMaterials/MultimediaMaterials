import CourseMenu from "./CourseMenu"

const WithCourseSidebar = ({children}) => {
  return (
    <div className="drawer md:drawer-open min-h-screen">
      <input id="my-course-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side h-screen">
        <label htmlFor="my-course-drawer-2" className="drawer-overlay"></label>
        <CourseMenu />
      </div>
    </div>
  );
};

export default WithCourseSidebar;
