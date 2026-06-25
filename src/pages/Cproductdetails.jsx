import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import "./Cproductdetails.css";
import Footer from '../components/Footer'
import { useEffect } from "react";



const Cproductdetails = () => {
  const { id } = useParams();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const product = products.find( (item) => item._id === id );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  console.log(product);
console.log(product.sizes);
  

  return (
    <>
    <div className="product-details">
      <div className="product-image">
        <img src={product.image[0]} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <p>Select Size</p>
        <div className="sizess">
  {product.sizes.map((size) => (
    <button key={size}>
      {size}
    </button>
  ))}
</div>

<h1>TEST</h1>
        


        <p>{product.description}</p>

        <button className="add">Add to Cart</button>
      </div>
    </div>
    <Footer></Footer>
    </>
    

  );
};


export default Cproductdetails;