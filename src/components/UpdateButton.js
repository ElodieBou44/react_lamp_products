import PropTypes from "prop-types";

const UpdateButton = ({ color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn btn-light text-light"
      onClick={onClick}
      color="#E9CBB1"
    >
      Update
    </button>
  );
};

UpdateButton.defaultProps = {
  color: "#393536",
};

// Validation de ce qui est obligatoire pour utiliser le bouton
UpdateButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default UpdateButton;
