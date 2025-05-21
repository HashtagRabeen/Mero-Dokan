import { NavLink } from "react-router-dom";

function Failure() {
  return (
    <div className="shadow-xl shadow-slate-900 w-96 m-auto flex justify-center items-center flex-col rounded mt-16">
      <img
        src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon-300x300.png"
        alt=""
        className="h-44"
      />
      <h1 className="py-4">Payment failed! <NavLink to="/cart" className="underline text-red-500 font-semibold">Try Again</NavLink> </h1>
    </div>
  );
}

export default Failure;
