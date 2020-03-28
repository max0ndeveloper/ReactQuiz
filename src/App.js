import React from 'react';
import "./styles/style.css"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Hdr} from "./Components/Header/Header";
import {MainCards} from "./Components/MainCards/MainCards";
import QuizCards from "./QuizCards/QuizCards";
import FirstQuiz from "./Links/firstQuiz";
import QuizCard from "./Components/QuizCard/QuizCard";


function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Hdr/>

      <Switch>
        <Route path="/" exact component={MainCards}/>
        <Route path="/:id" exact component={QuizCards}/>
        <Route path="/:id/:quiznum"  component={QuizCard}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
