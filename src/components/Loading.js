import React from "react";
import { LoadContainer, LoadSubContainer } from "../styles";
import NetFlixTitle from "../assets/icons/NetflixIcon";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <LoadContainer>
      <LoadSubContainer>
        <NetFlixTitle />
        <div style={{ marginTop: "50px" }}>
          <CircularProgress color="secondary" />
        </div>
      </LoadSubContainer>
    </LoadContainer>
  );
}
