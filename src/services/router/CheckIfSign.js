import React, { useContext, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function CheckIfSign({ children, ...rest }) {
  const { currentUser } = useContext(AuthContext);
  let history = useHistory();
  const checkUser = () => {
    if (currentUser) {
      return history.push("/main");
    }
    return children;
  };

  useEffect(() => {
    return checkUser();
  });
  return (
    <Route
      {...rest}
      render={() => {
        checkUser();
      }}
    />
  );
}

export default CheckIfSign;
