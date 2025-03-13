import styles from "./submitBtn.module.scss";

interface SubmitBtnProps {
  onclick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ onclick, disabled }) => {
  return (
    <button
      onClick={(e) => onclick(e)}
      className={styles.btn}
      disabled={disabled}
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
