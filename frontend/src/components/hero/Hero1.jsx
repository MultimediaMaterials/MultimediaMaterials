const Hero1 = ({title="Hello there", description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.", btnText, btnAction, height=600}) => {
  return (
    <div className={`hero bg-base-200 h-[${height}px]`}>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold">{title}</h1>
          <div className="py-6 text-2xl">
            {description}
          </div>
          {btnText && (<button onClick={btnAction} className="btn btn-primary btn-xl">{btnText}</button>)}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
