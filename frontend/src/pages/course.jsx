import { useSearchParams } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { coursePages } from "../data/courses"
import CourseDataRenderer from "../components/course/CourseDataRenderer"
import { sidebarData } from "../data/sidebarData"

const Course = () => {
  const [searchParams] = useSearchParams()
  const courseId = searchParams.get("id")
  const course = coursePages[courseId]
  const menuData = course && course.menu ? sidebarData[course.menu] : null;

  return (
    <BaseLayout courseMenuData={menuData} menuActiveId={course && course.parent ? course.parent : null}>
      <CourseDataRenderer course={course} courseId={courseId} />
    </BaseLayout>
  )
}

export default Course
