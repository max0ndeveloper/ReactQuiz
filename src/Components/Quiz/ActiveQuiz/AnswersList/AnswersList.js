import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
	return(
			<ul>
				{	props.answers.map((answer, i) => {
					return(
							<AnswerItem
									key={i}
									answer={answer}
							/>
					)
			}) }
			</ul>
	)
};

export default AnswersList;