import CourseMenu from "./CourseMenu"

const WithCourseSidebar = ({children}) => {
  return (
    <div class="drawer md:drawer-open min-h-screen">
      <input id="my-course-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {children}
      </div>
      <div class="drawer-side h-screen">
        <label for="my-course-drawer-2" className="drawer-overlay"></label>
        <CourseMenu />
      </div>
    </div>
  );
};

export default WithCourseSidebar;
