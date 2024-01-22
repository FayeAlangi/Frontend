import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
  const [index, setIndex] = useState(0);

  const facts = [
    {
      //q1
      question: "When were LEGO bricks invented?",
      answer:
        " LEGO bricks were invented in 1958 by Danish carpenter Ole Kirk Christiansen.",
    },
    {
      //q2
      question: 'What does the word "LEGO" mean?',
      answer:
        'The word "LEGO" is derived from the Danish words "leg godt," which mean "play well.',
    },
    {
      //q3
      question: "How many LEGO sets are produced each year?",
      answer:
        "On average, around 60 billion LEGO bricks are produced annually, making it one of the most popular toys worldwide.",
    },
    {
      //q4
      question: "How many LEGO minifigures have been produced to date?",
      answer:
        "As of the last count, over 10 billion LEGO minifigures have been produced.",
    },
    {
      //q5
      question: "What is the largest LEGO set ever created?",
      answer:
        "The largest LEGO set is the Art World Map, released in 2021, consisting of a staggering 11,695 pieces.",
    },
  ];

  const handleBack = () => {
    setIndex(index - 1);
  };
  return (
    <>
      <div className="App">
        <div className="header">
          <h1 className="title"> Legos Fun Facts</h1>
          <Flashcard
            question={facts[index].question}
            answer={facts[index].answer}
          />
          {index > 0 && <button onClick={handleBack}> Back</button>}
          {index < facts.length - 1 && (
            <button
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
