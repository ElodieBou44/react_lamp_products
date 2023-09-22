import { useState } from "react";

const AddProduct = ({ addColor, onAdd }) => {
  // Définir les valeurs par défaut
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [availability, setAvailability] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a product.");
      return;
    }

    // Passage de la fonction onAdd vers App
    onAdd({ name, color, availability });

    // Remise à neuf du formulaire
    setName("");
    setColor("");
    setAvailability(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add your product here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Color</label>
        <input
          type="text"
          placeholder="Add the color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Is this product available?</label>
        <input
          type="checkbox"
          checked={availability}
          onChange={(e) => setAvailability(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        className="btn btn-light text-light"
        style={{ backgroundColor: addColor }}
        value="Save"
      ></input>
    </form>
  );
};

export default AddProduct;
