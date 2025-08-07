import styles from "./Display.module.css";
const Display = ({ value }) => {
  return (
    <>
      <input type="text" value={value}></input>;
    </>
  );
};
export default Display;
