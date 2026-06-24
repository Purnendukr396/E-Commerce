import { useParams } from "react-router-dom";
import { products } from "../assets/Homeproduct";
import "./ProductDetails.css";
import Footer from '../components/Footer'


const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
        <p>Select Size</p>
        <div className="sizes">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        </div>
        


        <p>{product.description}</p>

        <button className="add">Add to Cart</button>
      </div>
    </div>
    <Footer></Footer>
    </>

  );
};

export default ProductDetails;