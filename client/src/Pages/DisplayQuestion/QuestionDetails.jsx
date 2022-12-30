import React from "react";
import { Link, useParams } from "react-router-dom";
import downvote from "../../assests/sort-down-solid.svg";
import upvote from "../../assests/sort-up-solid.svg";
import "./Question.css";
import Avatar from '../../component//Avatar/Avatar'
import DisplayAnswer from "../Questions/DisplayAnswer";
const QuestionDetails = () => {
  const { id } = useParams();
  console.log(id);
  var questionList = [
    {
      _id: "1",
      // votes: 3,
      upVotes: 3,
      downVotes: 2,
      userId: 1,

      noOfAnswers: 2,
      questionTitle: "what is a function",
      questionBody: "It meant to be",
      questionTags: ["java", "Node js", "react js", "mongo db"],
      userPosted: "mano",
      askedOn: "jan 1",

      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: "2",
      // votes: 0,
      upVotes: 3,
      downVotes: 2,
      userId: 1,

      noOfAnswers: 2,
      questionTitle: "what is a function",
      questionBody: "It meant to be",
      questionTags: ["java", "Node js", "react js", "mongo db"],
      userPosted: "mano",
      askedOn: "jan 1",

      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: "3",
      // votes: 1,
      upVotes: 3,
      downVotes: 2,
      userId: 1,

      noOfAnswers: 2,
      questionTitle: "what is a function",
      questionBody: "It meant to be",
      questionTags: ["java", "Node js", "react js", "mongo db"],
      userPosted: "mano",
      askedOn: "jan 1",

      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  return (
    <div className="question-details-page">
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <br />
                  <br />
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvote} alt="" width="18" className="votes-icon" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downvote} alt="" width="18" className="votes-icon"/>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                    <div className="question-details-tag">
                      {
                        question.questionTags.map((tag)=>(
                          <p key={tag}>{tag}</p>
                        ))
                      }
                    </div>
                    <div className="question-action-user">
                      <div>                        
                      <button type="button">Share</button>
                      <button type="button">Delete</button>
                      </div>
                      <div>
                        <p>asked {question.askedOn}</p>
                        <Link to={`/user/${question.userId}`}
                        className='user-link'  style={{color: '#0086d8'}}>
                          <Avatar backgroundColor='orange'  px='10px' py='7px' borderRadius='2px' color='white'>
                            {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                        
                        </Link>
                      </div>
                    </div>
                    </div>
                  </div>
                </section>
                {
                  question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} answer</h3>
                      <DisplayAnswer key={question._id} question={question} />
                    </section>
                  )
                }
                <section className="post-ans-container">
                  <h3>your answer</h3>
                  <form>
                    <textarea name="" id="" col="30" rows="10" ></textarea>
                    <input type="submit" className="post-ans-btn" value="Post your answer" />
                  <form>
                  <p>
                    Browse other Question tagged 
                    {
                      question.questionTags.map((tag)=>(
                        <Link to="/Tags" key={tag} className='ans-tag'>{tag}</Link>
                      ))
                    } or&nbsp;
                    <Link to="/AskQuestion"  style={{textDecoration: 'none', color: "#009dff"}}>
                      ask your own.
                    </Link>
                  </p>

                  </form>
                 
                 
                  </form>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
