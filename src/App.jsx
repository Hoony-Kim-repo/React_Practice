import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContextProvdider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvdider>
      <Header />
      <Shop />
    </CartContextProvdider>
  );
}

export default App;
