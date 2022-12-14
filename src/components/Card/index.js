import { useEffect, useState } from "react";
// import WishListContext from "../../hooks/context";
import axios from "axios";

import "./style.css"

import { BsCart4 } from "react-icons/bs";

const baseURL = "https://run.mocky.io/v3/91af60d6-7265-4aa5-ae9b-c13ee3d247a8";

const Cards = (props) => {
  const [ecom, setEcom] = useState([]);
  // const {wishListProducts, updatewishListProducts} = useContext(WishListContext);

  // const onCartClick = () => {
  //   updatewishListProducts(ecom.name)
  // }

  const getProv = async () => {
    await axios
      .get(baseURL)
      .then((result) => {
        setEcom(result.data);
      })
      .then((res) => {
        if (!res.ok) {
          return Error("Erro no Fetch, ERROR");
        }
        return res.json();
      })
      .then((data) => setEcom(data));
  };

  useEffect(() => {
    getProv();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* usando o map para fazer um mapeando em todo a api e retornar um array, fazendo a tabela */}
            {ecom.map((item) => (
              <div className="col" key={item.sku}>
                <div className="card">
                  {/* IMAGE */}
                  <figure>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="Hollywood Sign on The Hill"
                    />
                  </figure>
                  {/* END IMAGE */}
                  {/* PRICE AND DESCRIPTION */}
                  <div className="card-body">
                    <h5 className="card-title">
                      ${item.priceSpecification.price}
                    </h5>
                    {/* PRICE */}
                    <p className="card-text">
                      {/* DESCRIPTION */}
                      {item.name}
                    </p>
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                      <button type="button" className="btn button-cart">
                        <div className="btn cart">
                          <span className="text-white">
                            <BsCart4 />
                          </span>
                        </div>
                        <div className="btn btn-wishlist">
                          ADD TO CARD
                        </div>
                      </button>
                    </div>
                    {/* Right elements */}
                  </div>
                  {/* END PRICE AND DESCRIPTION */}
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
