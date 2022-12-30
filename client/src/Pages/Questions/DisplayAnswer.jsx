import React from 'react'
import QuestionDetails from '../DisplayQuestion/QuestionDetails'
import Avatar from '../../component/Avatar/Avatar'
import { Link } from 'react-router-dom'
const DisplayAnswer = ({question}) => {
  return (
    <div>
        {
        question.answer.map((ans)=>(
            <div className='display-ans' key={ans._id}>
                <p>{ans.answerBdoy}</p>
                <div className='question-action-user'>
                    <div>
                      <button type='button' >Share</button>
                      <button type='button' >Delete</button>
                    </div>

                    <div>
                        <p>answered {question.askedOn}</p>
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
        ))
        }
    </div>
  )
}

export default DisplayAnswer    