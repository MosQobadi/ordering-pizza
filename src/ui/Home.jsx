import { useSelector } from "react-redux";
import CreateUser from "../features/User/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16 sm:px-4">
      <h1 className="mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type={"primary"}>Continue ordering</Button>
      )}
    </div>
  );
}

export default Home;
