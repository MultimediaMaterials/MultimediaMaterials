import SectionCard from "../card/SectionCard";
import Hero1 from "../hero/Hero1";
import { Md } from "@m2d/react-markdown/client";

const CourseDataRenderer = ({ course }) => {
  if (!course || !course.type) {
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

  switch (course.type) {
    case 'video':
      return (
        <div>
          <h2>{course.title}</h2>
          <video src={course.videoUrl} controls width="600" />
          <p>{course.description}</p>
        </div>
      );
    case 'article':
      return (
        <div>
          <Hero1 title={course.title} description={<Md>{course.description}</Md>} />
          {course.content && course.content.length ? (
            <>
              {course.content.map(item => {
                switch (item.type) {
                  case "p":
                    return (
                      <div key={item.id} className={`${item.height ? `h-[${item.height}px]` : ''} flex items-center justify-center px-4`}>
                        <p className="max-w-xl text-2xl">{item.data}</p>
                      </div>
                    )
                  
                  case "cards":
                    return (
                      <div key={item.id} className={`${item.height ? `h-[${item.height}px]` : ''} flex items-center justify-center py-8 gap-8 xl:gap-16 flex-wrap`}>
                        {item.data && item.data.length && (
                          item.data.map(cardData => 
                            <SectionCard key={cardData.id} title={cardData.title} summary={cardData.summary} path={`/course?id=${cardData.id}`} />
                          )
                        )}
                      </div>
                    )
                
                  default:
                    break;
                }
              })}
            </>
          ) : null}
        </div>
      );
    case 'quiz':
      return (
        <div>
          <h2>{course.title}</h2>
          <ul>
            {course.questions?.map((q, idx) => (
              <li key={idx}>{q.question}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return <div>Unknown course type.</div>;
  }
};

export default CourseDataRenderer;
