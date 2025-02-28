import style from "./Options.module.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { BsEmojiNeutral, BsEmojiNeutralFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

const Options = ({ updateFeedback, resetFeedback, totalFeedback, dataObj }) => {
  return (
    <ul className={style.optionsList}>
      <li>
        <button
          className={style.optionBtn}
          onClick={() => {
            updateFeedback("good");
          }}
        >
          {dataObj.good === 0 ? (
            <AiOutlineLike className={style.btnIcon} />
          ) : (
            <AiFillLike className={style.btnIcon} />
          )}{" "}
          Good
        </button>
      </li>
      <li>
        <button
          className={style.optionBtn}
          onClick={() => {
            updateFeedback("neutral");
          }}
        >
          {dataObj.neutral === 0 ? (
            <BsEmojiNeutral className={style.btnIcon} />
          ) : (
            <BsEmojiNeutralFill className={style.btnIcon} />
          )}{" "}
          Neutral
        </button>
      </li>
      <li>
        <button
          className={style.optionBtn}
          onClick={() => {
            updateFeedback("bad");
          }}
        >
          {dataObj.bad === 0 ? (
            <AiOutlineDislike className={style.btnIcon} />
          ) : (
            <AiFillDislike className={style.btnIcon} />
          )}{" "}
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button className={style.optionBtn} onClick={resetFeedback}>
            <GrPowerReset className={style.btnIcon} /> Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
