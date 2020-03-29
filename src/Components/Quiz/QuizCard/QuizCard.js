import React from "react";
import {useParams} from 'react-router-dom'

const QuizCard = () => {
	const {id, quiznum} = useParams();
	console.log(id, quiznum);
	return (
			<section className="card">

				<div className="activeCard">
					<div className="quizStat">
						{id}
						<hr/>
						Билет №{quiznum}

					</div>

          <div className="quizList">
            <p>
              <span>
                <strong>1.</strong>&nbsp;
                What's the weather today?
              </span>
            </p>

            <hr/>
            <ul>
              <li>sunny</li>
              <li>stormy</li>

            </ul>
          </div>


				</div>
			</section>
	)
};
export default QuizCard