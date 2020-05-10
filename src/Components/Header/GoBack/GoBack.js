import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import './GoBack.css'

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
      <button className="button" onClick={goBackHandle}>
        <div>Go back</div>
      </button>
  )



}


export default Back;