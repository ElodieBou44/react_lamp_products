import { FaTimes } from "react-icons/fa";
import UpdateButton from "./UpdateButton";

const SingleProduct = ({
  product,
  onDelete,
  onToggle,
  onUpdateBtn,
  showUpdate,
}) => {
  return (
    <div
      className={`product ${product.availability ? "available" : ""}`}
      onDoubleClick={() => onToggle(product.id)}
    >
      <div className="d-flex justify-content-between">
        <h3>{product.name}</h3>
        <div className="d-flex justify-content-between g-4">
          <UpdateButton
            color={"#393536"}
            onClick={() => onUpdateBtn(product)}
            text={showUpdate ? "Hide" : "Update"}
          />
          <div className="icon-btn-div"></div>
          <FaTimes
            style={{ color: "#f8f9fa" }}
            onClick={() => onDelete(product.id)}
          />
        </div>
      </div>
      <p>{product.color}</p>
    </div>
  );
};

export default SingleProduct;

