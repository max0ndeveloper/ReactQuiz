import React from "react";
import {MainCard} from "../MainCard/MainCard";
import { useHistory } from "react-router-dom";

export const MainCards = () => {
  let history = useHistory();
  console.log(history);
  const languages = ['React', 'JavaScript', 'HTML', 'CSS'];

  return (
      <section className="card">
        <div className="container flex">
          { languages.map( (language, i)=> {
            return (
                <MainCard key={i} title={language}/>
            )
          })}
        </div>
      </section>
  )
};