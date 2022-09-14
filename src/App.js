import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import Product from "./component/Product/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Header></Header>
        <Home></Home>
      </div>
      <div className="container">
        <Product></Product>
      </div>
    </>
  );
}

export default App;
