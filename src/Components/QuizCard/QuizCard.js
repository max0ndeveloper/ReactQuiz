import React from "react";
import {NavLink, useParams} from 'react-router-dom'

const QuizCard = () => {
  const {id, quiznum} = useParams();
  console.log(id, quiznum);

  return (

        <div className="" >

          Язык - {id}
          <hr/>
          Номер билета - {quiznum}
          <hr/>
            Номер вопроса
          <hr/>
          Вопросы???

        </div>
  )
};

export default QuizCard