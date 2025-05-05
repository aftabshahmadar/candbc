import React from "react";
import { motion } from "framer-motion";
import prdct1 from "../assets/images/prdct1.png";
import prdct2 from "../assets/images/prdct2.png";
import prdct3 from "../assets/images/prdct3.png";
import prdct4 from "../assets/images/prdct4.png";
import prdct5 from "../assets/images/prdct5.png";
import prdct6 from "../assets/images/prdct6.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCardLayout = () => {
  const cardsData = [
    { title: "CAST IRON MONOBLOCK", description: "One piece | Plain rotor face", image: prdct1 },
    { title: "PIN-DRIVE BRAKE DISC ROTOR", description: "Lightweight | Pin-Drive | Slotted face", image: prdct2 },
    { title: "CAST IRON MONOBLOCK", description: "One-Piece | Cross-Drilled", image: prdct3 },
    { title: "PIN-DRIVE BRAKE DISC ROTOR", description: "Lightweight | Pin-Drive | Drilled-Bell", image: prdct4 },
    { title: "PIN-DRIVE BRAKE DISC ROTOR", description: "Lightweight | Pin-Drive | Cross-Drilled", image: prdct5 },
    { title: "PIN-DRIVE BRAKE DISC ROTOR", description: "Lightweight | Pin-Drive | wavy | Cross-Drilled", image: prdct6 }
  ];

  return (
    <>
    <hr className="custom-hr" />
      <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {cardsData.map((card, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <motion.div
              className="card h-100 bg-transparent w-75"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={card.image} className="card-img-top rounded-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title fw-semi-bolds text-white">{card.title}</h5>
                <p className="card-text fw-light text-white">{card.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  );
};

export default ProductCardLayout;
