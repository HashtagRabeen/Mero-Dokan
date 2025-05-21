import { useSearchParams } from "react-router-dom";

function Success() {
  const [searchParams] = useSearchParams(); //
  const givenData = searchParams.get("data");
  console.log(givenData);
  let decodedData = atob(givenData); //atob to decrypt the data
  console.log("decode", decodedData);

  const parseData = JSON.parse(decodedData);
  console.log(parseData);

  return (
    <div className="shadow-xl shadow-slate-900 w-96 m-auto flex justify-center items-center flex-col rounded mt-16">
      <img
        src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
        alt=""
        className="h-44"
      />
      <h1>
        Transaction code: <span className="text-red-500 underline font-extrabold">{parseData.transaction_code}</span>{" "}
      </h1>
      <h1>
        Status: <span className="text-red-500 underline font-bold">{parseData.status}</span>{" "}
      </h1>
      <h1>
        Total Amount Rs: <span className="text-red-500 underline font-bold">{parseData.total_amount}</span>{" "}
      </h1>
      <h1 className="py-4">Payment Successful</h1>
    </div>
  );
}

export default Success;
