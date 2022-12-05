import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleAddQuestion(question) {
    setQuestions(() => [...questions, question]);
  }

  function handleDeleteItem(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  }

  function handleQuestionUpdate(question) {
    const updatedQuestions = questions.map((ques) =>
      ques.id === question.id ? question : ques
    );
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteItem={handleDeleteItem}
          onUpdateQuestion={handleQuestionUpdate}
        />
      )}
    </main>
  );
}

export default App;
