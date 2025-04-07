import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseCartQuantity,
  getCurrentQuantityById,
  increaseCartQuantity,
} from "./cartSlice";

const UpdateitemQuantity = ({ pizzaId }) => {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseCartQuantity(pizzaId))}
      >
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button
        onClick={() => dispatch(increaseCartQuantity(pizzaId))}
        type={"round"}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateitemQuantity;
