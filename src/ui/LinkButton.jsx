import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, path }) => {
  const navigate = useNavigate();
  const clasName = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (path === "-1")
    return (
      <button className={clasName} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={path} className={clasName}>
      {children}
    </Link>
  );
};

export default LinkButton;
