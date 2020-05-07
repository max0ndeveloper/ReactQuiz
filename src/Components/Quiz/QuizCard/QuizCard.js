import React from "react";
import {useParams} from 'react-router-dom'

const state = {
  //'JS': [{1: []}, {2: []}],
  javascript: {
    1: [{
      id: 1,
      question: 'Какого цвета небо?',
      rightAnswerId: 3,
      answers:
          [{text: 'Черное', id: 1},
            {text: 'Зеленое', id: 2},
            {text: 'Голубое', id: 3}]
    }],
    2: [{
      id: 2,
      question: 'What r u doing?',
      rightAnswerId: 1,
      answers:
          [{text: 'nothing', id: 1}]
    }]
  },
  html: {
    1: [{
      id: 1,
      question: 'Как дела?',
      rightAnswerId: 2,
      answers:
          [{text: 'Норм', id: 1},
            {text: 'Хорошо', id: 2}
          ]
    }]
  },
};


const QuizCard = () => {
  const {id, quiznum} = useParams();
  console.log(id, quiznum);

  
  //language, numberTicket
  //console.log(state.js.first[0].question);


  // const question = state.js.first[0].question;
  // const answers = state.js.first[0].answers;
  // console.log(answers);


  // const questionsCard = state[id][quiznum];
  // console.log(questionsCard);
  // questionsCard.map(item => {
  //   return (
  //       `${item.question}`
  //   )
  // });



  const questionCard = state[id][quiznum].map(item => {
    return (
        `${item.question}`
    )
  })
  console.log(questionCard);


  // const answerCard = state[id][quiznum].map(item => {
  //   return item.answers
  // })
  //
  // answerCard.map(item => {
  //   return (
  //       console.log(item[0])
  //   )
  // })


  console.log(state[id][quiznum]);
  const answerCard = state[id][quiznum].map(item => {
       // `${item.answers[0].text}`
       //  console.log(item.answers);массив
    return (
        item.answers.map( answer => {
          return (
              <div className={answer.id}>
                {answer.text}
              </div>
          )
        })
    )

  })





  return (
      <div className="activeCard">
        <div className="quizStat">
          {id}
          <hr/>
          Билет №{quiznum}

        </div>

        <div className="quizQuestion">
          {questionCard}
          <div className="quizAnswer">
            {answerCard}
          </div>


          {/*{ questions.map((question, i)=> {*/}
          {/*	return(*/}
          {/*  )*/}
          {/*})}*/}

          {/*<p>*/}
          {/*  <span>*/}
          {/*    <strong>1.</strong>&nbsp;*/}
          {/*    What's the weather today?*/}
          {/*  </span>*/}
          {/*</p>*/}

          {/*<hr/>*/}
          {/*<ul>*/}
          {/*  <li>sunny</li>*/}
          {/*  <li>stormy</li>*/}
          {/*</ul>*/}
        </div>

      </div>
  )
};
export default QuizCard