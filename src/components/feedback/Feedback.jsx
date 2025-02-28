import style from "./Feedback.module.css";
import ProgresBar from "../progressbar/ProgressBar";

const Feedback = ({
  dataObj: { good, bad, neutral },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <>
      <ul className={style.optionList}>
        <li className={style.optionItem}>
          <p className={style.feedbackTitle}>Total feedbacks:</p>
          <p className={style.feedbackNum}>{totalFeedback}</p>
        </li>
        <li className={style.optionItem}>
          <p className={style.feedbackTitle}>Good:</p>
          <p className={style.feedbackNum}>{good}</p>
        </li>
        <li className={style.optionItem}>
          <p className={style.feedbackTitle}>Bad:</p>
          <p className={style.feedbackNum}>{bad}</p>
        </li>
        <li className={style.optionItem}>
          <p className={style.feedbackTitle}>Neutral:</p>
          <p className={style.feedbackNum}>{neutral}</p>
        </li>
        <li className={style.optionItem}>
          <p className={style.feedbackTitle}>Average positive:</p>
          <p className={style.feedbackNum}>
            {positiveFeedback >= 0 ? `${positiveFeedback}%` : `0%`}
          </p>
          {positiveFeedback >= 0 && (
            <ProgresBar positiveFeedback={positiveFeedback} />
          )}
        </li>
      </ul>
    </>
  );
};

export default Feedback;
