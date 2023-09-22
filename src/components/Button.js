import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn btn-light text-light"
      onClick={onClick}
      color="#E9CBB1"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "#393536",
};

// Validation de ce qui est obligatoire pour utiliser le bouton
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
