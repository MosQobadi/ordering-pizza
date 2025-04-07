import { Link } from "react-router-dom";

const Button = ({ children, disabled, path, type, onClick }) => {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      base +
      " px-4 py-3 text-sm md:px-6 md:py-4 bg-stone-200 border-2 hover:bg-stone-300 focus:ring-stone-300 focus:bg-stone-300 hover:text-stone-800 text-stone-400",

    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (path)
    return (
      <Link className={styles[type]} to={path}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
