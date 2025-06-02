import React from 'react';
import "./Tablets.css";
import tablet from '../../assets/iphone11promax.jpeg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../slice/cartSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Tablets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cartItem=({
      id: product.id,
      name: product.name,
      price: product.price,
      image: tablet,
      quantity: 1
    });
    
    dispatch(addToCart(cartItem));
    

    toast.success("Added to Cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleProductClick = (product) => {
    // Add detailed product information
    const detailedProduct = {
      ...product,
      image: tablet,
      originalPrice: product.oldPrice,
      discountedPrice: product.price,
      description: `The ${product.name} is a premium tablet designed for productivity and entertainment with a high-resolution display and powerful performance.`,
      specs: {
        storage: '256GB',
        display: '11-inch Liquid Retina display',
        battery: 'Up to 10 hours of web surfing',
        processor: 'High-performance processor',
        connectivity: 'Wi-Fi 6, Bluetooth 5.0',
        camera: '12MP Wide camera'
      }
    };
    
    // Navigate to product details with product data
    navigate('/productdetails', { state: { product: detailedProduct } });
  };

  const tabletProducts = [
    {
      id: "ipad-pro",
      name: "Apple iPad Pro",
      oldPrice: 60000,
      price: 55000,
      image: tablet
    },
    {
      id: "galaxy-tab-s8",
      name: "Samsung Galaxy Tab S8",
      oldPrice: 50000,
      price: 45000,
      image: tablet
    },
    {
      id: "surface-pro-7",
      name: "Microsoft Surface Pro 7",
      oldPrice: 70000,
      price: 65000,
      image: tablet
    },
    {
      id: "matepad-pro",
      name: "Huawei MatePad Pro",
      oldPrice: 40000,
      price: 35000,
      image: tablet
    },
    {
      id: "ipad-mini",
      name: "Apple iPad Mini",
      oldPrice: 35000,
      price: 32000,
      image: tablet
    },
    {
      id: "lenovo-tab-p11-pro",
      name: "Lenovo Tab P11 Pro",
      oldPrice: 40000,
      price: 38000,
      image: tablet
    },
    {
      id: "galaxy-tab-a8",
      name: "Samsung Galaxy Tab A8",
      oldPrice: 20000,
      price: 18000,
      image: tablet
    },
    {
      id: "fire-hd-10",
      name: "Amazon Fire HD 10",
      oldPrice: 15000,
      price: 13500,
      image: tablet
    }
  ];

  // First four tablets for first row
  const firstRowTablets = tabletProducts.slice(0, 4);
  // Last four tablets for second row
  const secondRowTablets = tabletProducts.slice(4, 8);

  return (
    <>
      <ToastContainer />
      <div className="Tablets-container">
        {firstRowTablets.map((item) => (
          <div key={item.id} className="Tablets-card">
            <img 
              src={item.image} 
              alt={item.name} 
              className="Tablets-image" 
              onClick={() => handleProductClick(item)}
              style={{ cursor: 'pointer' }}
            />
            <h2 className="Tablets-name">{item.name}</h2>
            <p className="Tablets-price">
              <span className="Tablets-old-price">RS.{item.oldPrice.toLocaleString()}</span> RS.{item.price.toLocaleString()}
            </p>
            <button 
              className="Tablets-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="Tablets-container">
        {secondRowTablets.map((item) => (
          <div key={item.id} className="Tablets-card">
            <img 
              src={item.image} 
              alt={item.name} 
              className="Tablets-image" 
              onClick={() => handleProductClick(item)}
              style={{ cursor: 'pointer' }}
            />
            <h2 className="Tablets-name">{item.name}</h2>
            <p className="Tablets-price">
              <span className="Tablets-old-price">RS.{item.oldPrice.toLocaleString()}</span> RS.{item.price.toLocaleString()}
            </p>
            <button 
              className="Tablets-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tablets;