import React from "react";
import {QuizCard} from '../Components/QuizCard/QuizCard'
import {NavLink, useHistory, useParams} from "react-router-dom";

const QuizCards = () => {
  const params = useParams();
  const history = useHistory();
  console.log(params.id);
  const id = [1,2,3,4];

  return (
      <section className="card">
        <section className='card-title'>{params.id}</section>
        <div className="gridBox">
          { id.map( (quiz, i)=> {
            return (
                <NavLink key={i} to={`/${params.id}/${quiz}`}>{quiz}</NavLink>
            // <QuizCard
            //     id="1"
            //     onClick={() => {
            //       history.push('/react/1')
            //     }}
            // />
            )

          })}

          {/*<QuizCard*/}
          {/*    id="1"*/}
          {/*    onClick={() => {*/}
          {/*      history.push('/react/1')*/}
          {/*    }}*/}
          {/*/>*/}
          {/*<QuizCard id="2"*/}
          {/*         onClick={() => {*/}
          {/*           history.push('/react/2')*/}
          {/*         }}*/}
          {/*/>*/}

        </div>
      </section>
  )
};

export default QuizCards;