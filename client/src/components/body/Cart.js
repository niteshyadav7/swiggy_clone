import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div></div>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className=" p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems?.map((data, id) => {
            return (
              <span key={id}>
                <img
                  className="w-20 h-20"
                  alt="img"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data?.imageId}`}
                />
                <span className="text-center text-lg font-semibold text-red-600 mb-20">{data?.name}</span>
              </span>
            );
          })}
          {cartItems?.length === 0 && (
            <h1> Cart is empty. Add Items to the cart!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
