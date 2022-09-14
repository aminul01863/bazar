import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import Product from "./component/Product/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Product></Product>
    </div>
  );
}

export default App;
