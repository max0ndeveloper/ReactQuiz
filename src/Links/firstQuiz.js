import React from "react";
import {useParams} from 'react-router-dom'

const FirstQuiz = () => {
  const params = useParams();

  return(
      <div>
        {params.id}
      </div>
  )
};

export default FirstQuiz;