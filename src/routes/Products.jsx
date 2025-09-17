import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>{" "}
      <p>
        Go to <Link to="/">the list of products</Link>.
      </p>
    </>
  );
};

export default Products;
