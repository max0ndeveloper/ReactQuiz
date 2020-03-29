import React from "react";
import {useHistory} from 'react-router-dom'

export const MainCard = ({title}) => {
  const history = useHistory();

  const quizHandler = ()=> {
      history.push(`/${title}`)
  };

  return(
      <div className="quizCard" onClick={ quizHandler}>
        <p className="quizCard__title">
          {title}
        </p>
      </div>
  )
};