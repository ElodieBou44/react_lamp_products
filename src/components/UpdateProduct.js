import { useState } from "react";

const UpdateProduct = ({ updateColor, onUpdate, initialData }) => {
  // Définir les valeurs par défaut
  const [name, setName] = useState(initialData.name);
  const [color, setColor] = useState(initialData.color);
  const [availability, setAvailability] = useState(initialData.availability);

  const onSubmit = (e) => {
    e.preventDefault();
    // Passage de la fonction onUpdate vers App
    // onUpdate({ id, name, color, availability });
    onUpdate(initialData.id, { name, color, availability });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Color</label>
        <input
          type="text"
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
        style={{ backgroundColor: updateColor }}
        value="Update"
      ></input>
    </form>
  );
};

export default UpdateProduct;
