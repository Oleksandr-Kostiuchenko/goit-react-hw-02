import style from "./Notification.module.css";
import { BsEnvelopeDash } from "react-icons/bs";

const Notification = () => {
  return (
    <p className={style.notificationText}>
      <BsEnvelopeDash className={style.feedbackIcon} />
      No feedbacks yet
    </p>
  );
};

export default Notification;
