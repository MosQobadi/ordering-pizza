import { useSelector } from "react-redux";

export const Username = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};
