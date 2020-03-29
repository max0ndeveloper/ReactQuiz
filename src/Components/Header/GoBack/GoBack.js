import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function Back() {
  let location = useLocation();
  let history = useHistory();
  console.log(history);
  console.log(location);

  if(location.pathname === "/") {
    return(<button disabled>
    </button>);
  }

  function goBackHandle() {

    history.goBack();
  }



  return(
      <button onClick={goBackHandle}>Go back</button>
  )



}


export default Back;