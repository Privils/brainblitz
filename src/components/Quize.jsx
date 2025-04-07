import React, { useEffect, useState } from 'react';

const Quize = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10); // Set the total number of questions
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const getApiData = async () => {
    const url = 'https://the-trivia-api.com/v2/questions?limit=10';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const randomise = async () => {
    const initialData = await getApiData();
    if (initialData && initialData.length > 0) {
      const randomData = initialData[Math.floor(Math.random() * initialData.length)];
      setRandomQuestion(randomData);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setQuestionCount((prev) => prev + 1);
    } else {
      console.error("No data found to randomize.");
    }
  };

  const handleClick = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === randomQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
      setModalMessage('Congratulations! You answered correctly!');
    } else {
      setModalMessage('Oops! That’s not correct. Try again next time!');
    }
    setShowModal(true);

    // Check if all questions are answered and if the score is equal to total questions
    if (questionCount + 1 === totalQuestions && score === totalQuestions) {
      setModalMessage('Congratulations! You got all answers correct!');
      setShowModal(true);
    }

    setTimeout(() => {
      randomise();
    }, 1500);
  };

  useEffect(() => {
    randomise();
  }, []);

  return (
    <>
      <p className="score">Your score is {score}/{totalQuestions}</p>
      <h1 className="game-title">Quiz</h1>
      {randomQuestion ? (
        <div>
          <div className="quiz">
            <p className="quiz-question">{randomQuestion.question.text}</p>
          </div>
          <ul className="sections">
            {[...randomQuestion.incorrectAnswers, randomQuestion.correctAnswer]
              .sort(() => Math.random() - 0.5)
              .map((option, index) => (
                <li
                  className="option"
                  key={index}
                  onClick={() => handleClick(option)}
                 
                >
                  {option}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <p>Loading question...</p>
      )}

      {/* Modal with overlay */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)} className='close'>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Quize;




  //fetch data --complete
  //display single random data .......complete
  //needs to check if user was correct or incorrect
  //if user correct . use pop up box to congradulate them
  // if user was incorrect use pop up to encourage them to keep playing
  //track score 
  //multiply amount of questions by 100 to make it fun
  //display the amount of points user has gain in their experience
  //provide final score at the end.