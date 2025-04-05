import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") return;
    dispatch(updateName(username));
    navigate("/menu");

    console.log("test");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome! Please start by telling your name:
      </p>
      <input
        type="text"
        placeholder="Enter your fullname"
        className="input mb-8 w-72"
        onChange={(e) => setUsername(e.target.value)}
      />
      {username !== "" && (
        <div>
          <Button type="primary" path={"/menu"}>
            Start Ordering
          </Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
