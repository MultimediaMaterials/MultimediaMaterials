import { useSearchParams } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { coursePages } from "../data/courses"
import CourseDataRenderer from "../components/course/CourseDataRenderer"

const Course = () => {
  const [searchParams] = useSearchParams()
  const courseId = searchParams.get("id")
  const course = coursePages[courseId]

  return (
    <BaseLayout>
      {course ? (
        <>
          <CourseDataRenderer course={course} />
        </>
      ) : (
        <h1>Course not found</h1>
      )}
    </BaseLayout>
  )
}

export default Course
