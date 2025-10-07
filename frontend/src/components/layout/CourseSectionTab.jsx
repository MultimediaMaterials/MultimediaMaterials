import { useNavigate } from "react-router-dom"

const CourseSectionTab = ({tabsData, currentPageId}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div role="tablist" className="tabs tabs-border">
        {tabsData.map(tab => (
          <span key={`tab-${tab.id}`} role="tab" className={`tab ${tab.id === currentPageId ? "tab-active" : ""}`} onClick={() => navigate(`/course?id=${tab.id}`)}>{tab.title}</span>
        ))}
      </div>
    </div>
  )
}

export default CourseSectionTab