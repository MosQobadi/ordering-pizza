import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../User/userSlice";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (cart.length < 1) return <EmptyCart />;

  return (
    <div className="px-3 py-4">
      <LinkButton path="/menu"> &larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y-2 divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type={"primary"} path="/order/new">
          Order pizzas
        </Button>
        <Button type={"secondary"} onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
