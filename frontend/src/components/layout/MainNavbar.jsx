import { useNavigate } from "react-router-dom";

const MainNavbar = ({title="樂齡數位學習平台", logoPath="/", hamburgerBtnShow = true}) => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-30 w-full">
      <div className={`flex-none ${hamburgerBtnShow ? "md:hidden" : "hidden"}`}>
        <label className="btn btn-square btn-ghost drawer-button" for="my-course-drawer-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <p className="btn btn-ghost text-xl" onClick={() => {
          if (logoPath) navigate(logoPath);
        }}>{title}</p>
      </div>
    </div>
  );
};

export default MainNavbar;
