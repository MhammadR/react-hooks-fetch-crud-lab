import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteItem, onUpdateQuestion }) {
  const displayQuestions = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteItem={onDeleteItem}
      onUpdateQuestion={onUpdateQuestion}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
