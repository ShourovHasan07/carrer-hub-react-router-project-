import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Opsss!!!!</h1>
      <Link to='/'> Go Back to home</Link>
    </div>
  );
};

export default ErrorPage;