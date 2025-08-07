import styles from "./CalculatorButton.module.css";
const CalculatorButton = ({ label, type, onClick }) => {
  return (
    <>
      <button
        className={`${styles.button} ${styles[type]}`}
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    </>
  );
};
export default CalculatorButton;
