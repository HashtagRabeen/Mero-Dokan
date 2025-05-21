import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Protected({Comp}) {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  console.log(state);

  useEffect(() => {
    if (!state.token) {
      navigate("/login");
    }
  }, [state, navigate]);

  return <Comp />;
}

export default Protected; 
