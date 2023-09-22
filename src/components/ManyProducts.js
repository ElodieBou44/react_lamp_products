import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";
import UpdateProduct from "./UpdateProduct";

const ManyProducts = ({
  products,
  onDeleteMany,
  onToggleMany,
  showUpdate,
  onUpdateBtn,
}) => {
  return (
    <>
      {products.map((product) => (
        <SingleProduct
          product={product}
          key={product.id}
          onDelete={onDeleteMany}
          onToggle={onToggleMany}
          onUpdateBtn={onUpdateBtn}
          showUpdate={showUpdate}
        />
      ))}
    </>
  );
};

export default ManyProducts;
