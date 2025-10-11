import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import CourseDataRenderer from "../components/course/CourseDataRenderer"

const Course = () => {
  const [searchParams] = useSearchParams()
  const courseId = searchParams.get("id")
  const [course, setCourse] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch('/api/tutorials/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Assuming the API returns an array of topics, each with lessons.
        // We need to find the specific course (lesson) based on courseId.
        let foundCourse = null;
        for (const topic of data) {
            const lessons = topic.lessons || [];
            foundCourse = lessons.find(lesson => lesson.id.toString() === courseId);
            if (foundCourse) {
                // Once the course is found, we can also determine the menu data if needed.
                // This part might need adjustment based on how sidebarData was structured.
                // For now, let's assume the topic itself can serve as menu data.
                setMenuData(topic.lessons.map(l => ({ id: l.id, title: l.title })));
                break;
            }
        }

        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          setError(new Error(`Course with id ${courseId} not found`));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  if (loading) {
    return <BaseLayout><div>Loading...</div></BaseLayout>;
  }

  if (error) {
    return <BaseLayout><div>Error: {error.message}</div></BaseLayout>;
  }

  return (
    <BaseLayout courseMenuData={menuData} menuActiveId={course && course.parent ? course.parent : null}>
      <CourseDataRenderer course={course} courseId={courseId} />
    </BaseLayout>
  )
}

export default Course
