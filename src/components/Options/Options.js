import PropTypes from "prop-types";
import styles from "../Options/Options.module.css";

const Options = ({ options, handleIncrement }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          className={styles.OptionsBtn}
          key={option}
          name={option}
          type="button"
          onClick={handleIncrement}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Options;
