import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import ManyProducts from "./ManyProducts";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const ProductsPage = () => {
  //**** FETCH DES DONNÉES GLOBALES ****
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };

  //**** DELETE ****
  const deleteProduct = async (id) => {
    // console.log(id);
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    // Réécriture de la variable "products" / Mise à jour
    setProducts(products.filter((product) => product.id !== id));
  };

  //**** UPDATE ****

  // Récupération d'une seule tâche
  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
    console.log(data);
  };

  // Mise à jour de la disponibilité au clic
  const toggleAvailability = async (id) => {
    const productToToggle = await fetchProduct(id);
    const updProduct = {
      ...productToToggle,
      availability: !productToToggle.availability,
    };
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updProduct),
    });
    const data = await res.json();
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, availability: data.availability }
          : product
      )
    );
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  const updateProduct = async (id, updatedData) => {
    const selectedProduct = await fetchProduct(id);
    if (selectedProduct) {
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id
            ? {
                ...product,
                ...updatedData,
              }
            : product
        )
      );
      setSelectedProduct(null);
      setShowUpdateProduct(false);
    }
  };

  const onUpdateBtn = (product) => {
    setSelectedProduct(product);
    setShowUpdateProduct(true);
  };

  //**** ADD ****
  const addProduct = async (product) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();
    setProducts([...products, newProduct]);
  };

  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <>
      <div className="container d-flex flex-column align-items-center Home-div">
        <MainHeader
          title="lamps"
          onAddBtn={() => setShowAddProduct(!showAddProduct)}
          showAdd={showAddProduct}
        />

        {showAddProduct && (
          <AddProduct onAdd={addProduct} addColor={"#393536"} />
        )}
        {showUpdateProduct && (
          <UpdateProduct
            onUpdate={updateProduct}
            updateColor={"#393536"}
            initialData={selectedProduct}
          />
        )}
        <ManyProducts
          products={products}
          onDeleteMany={deleteProduct}
          onToggleMany={toggleAvailability}
          onUpdateBtn={onUpdateBtn}
          showUpdate={showUpdateProduct}
        />
      </div>
    </>
  );
};

export default ProductsPage;
