import { useNavigate } from "react-router-dom";

const SectionCard = ({title, subtitle, summary, imgUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", path="/"}) => {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={imgUrl}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {subtitle ? <h5>{subtitle}</h5> : null}
        <p>
          {summary}
        </p>
        <div className="card-actions justify-end">
          <button onClick={() => {
            if (path){
              navigate(path);
            }
          }} className="btn btn-primary">開始學習</button>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
