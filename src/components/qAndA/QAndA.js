import React,{useState} from 'react';
import './qAndA.css';
import arrow from '../../assets/icon-arrow-down.svg';
const QAndA = ({qna}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="qnaStyle">
            <div className="row">
                <div className={showAnswer ? "textBold" : ""}>{qna.question}</div>
                <div><span onClick={()=> setShowAnswer(!showAnswer)}><img className={showAnswer? "arrowUp": "arrowDown"} src={arrow} alt="arrow" /></span></div>
            </div>
            <div className={showAnswer? "show": "hidden"}>{qna.answer}</div>
            <hr />
        </div>
    )
}

export default QAndA
