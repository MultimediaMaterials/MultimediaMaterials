import { useNavigate } from "react-router-dom";

const CourseMenu = ({courseMenuData, menuActiveId}) => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="menu h-full bg-base-200 rounded-box w-50 md:border-r-gray-200 md:border-r-1 gap-4 pt-24 md:pt-4">
        {courseMenuData && courseMenuData.length && (
          courseMenuData.map(item => (
            <li key={item.id}>
              <button className={`btn btn-lg py-10 ${menuActiveId === item.id ? "btn-outline" : ""}`} onClick={() => navigate(`/course?id=${item.id}`)}>{item.title}</button>
            </li>
          ))
        )}
        
        <li>
          <button className="btn btn-xl" onClick={() => navigate("/")}>↩️ 回主頁</button>
        </li>
      </ul>
    </>
  );
};

export default CourseMenu;
