import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      
      <div className="text-center font-extrabold text-9xl">
        {err.status}:{err.statusText}
      </div>
      <div className="text-center ">
        <img
          src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design.jpg" 
          alt="images"
        />
      </div>
    </>
  );
};
export default ErrorElement;
