import React,{useState} from 'react';
import './qAndA.css';
import arrow from '../../assets/icon-arrow-down.svg';
const QAndA = ({qna}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="qnaStyle">
            <div className="row" onClick={()=> setShowAnswer(!showAnswer)}>
                <div className={showAnswer ? "textBold" : ""}>{qna.question}</div>
                <div><img className={showAnswer? "arrowUp": "arrowDown"} src={arrow} alt="arrow" /></div>
            </div>
            <div className={showAnswer? "show": "hidden"}>{qna.answer}</div>
            <hr />
        </div>
    )
}

export default QAndA
