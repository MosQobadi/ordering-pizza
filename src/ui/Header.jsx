import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";
import { Username } from "../features/User/Username";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        React Pizza Co.
      </Link>

      <SearchOrder />
      {username === "" ? null : <Username />}
    </header>
  );
};

export default Header;
