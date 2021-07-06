import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function PrivateRouter({ children, ...rest }) {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
  });

  return (
    <Route
      {...rest}
      render={() => {
        return !!currentUser ? children : <Redirect to="/signin" />;
      }}
    />
  );
}

export default PrivateRouter;
