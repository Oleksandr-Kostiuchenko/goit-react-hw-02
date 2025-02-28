import style from "./Description.module.css";

const Description = () => {
  return (
    <div className={style.descriptionWrapper}>
      <h1 className={style.pageTitle}>Welcome to Sip Happens Café</h1>
      <p className={style.pageDescitption}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
