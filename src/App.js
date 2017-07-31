import React, { Component } from "react";
import "./App.css";

// the person card
const Person = props =>
  <div className={`person person--${props.sex}`}>
    <h2 className="person__name">{props.name}</h2>
    <p className="person__description">
      This <strong>{props.sex}</strong> is currently{" "}
      <strong>{props.age} years old</strong>.
    </p>
  </div>;

const people = [
  { name: "Anna", sex: "female", age: 28 },
  { name: "John", sex: "male", age: 31 },
  { name: "Tim", sex: "male", age: 7 },
  { name: "Bella", sex: "female", age: 4 }
];

// the list of people
const App = () =>
  <div>
    {people.map((person, i) => {
      return (
        <Person name={person.name} age={person.age} sex={person.sex} key={i} />
      );
    })}
  </div>;

export default App;