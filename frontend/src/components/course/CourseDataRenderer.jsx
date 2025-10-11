import Hero1 from "../hero/Hero1";
import { Md } from "@m2d/react-markdown/client";

const CourseDataRenderer = ({ course }) => {
  if (!course) {
    return (
      <div className="min-h-[450px] p-8">
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>找不到對應的課程資料。</span>
        </div>
      </div>
    );
  }

  // Render the course data coming from the backend
  return (
    <div>
      <Hero1 title={course.title} description={<Md>{course.introduction}</Md>} />
      <div className="prose lg:prose-xl mx-auto p-8">
        {course.scenario && <Md>{course.scenario}</Md>}
        {course.steps && course.steps.length > 0 && (
          <div>
            <h3>課程步驟</h3>
            {course.steps.map(step => (
              <div key={step.step_number} className="step">
                <h4>步驟 {step.step_number}</h4>
                <Md>{step.description}</Md>
                {step.image && <img src={step.image} alt={`Step ${step.step_number}`} className="w-full max-w-2xl mx-auto" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDataRenderer;
