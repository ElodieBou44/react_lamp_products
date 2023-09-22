import PropTypes from "prop-types";
import Button from "./Button";

const MainHeader = ({ title, showAdd, onAddBtn }) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4">
      <h1 className="Main-h1 display-1 mr-2">{title}</h1>
      <Button
        text={showAdd ? "Hide" : "Add"}
        color={"#393536"}
        onClick={onAddBtn}
      />
    </div>
  );
};

// La propriété de titre par défaut
MainHeader.defaultProps = {
  title: "lamps",
};

// Validation pour obliger à mettre un titre au MainHeader
MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeader;
