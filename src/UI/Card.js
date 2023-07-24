import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <main
      className={`${classes.card} ${
        props.className ? props.className : classes.card
      }`}
    >
      {props.children}
    </main>
  );
};

export default Card;
