import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Card/Cards";
import Chart from "./Components/Chart/Chart";
import Title from "./Title";

function App() {
  const [carts , setCarts] = useState([]);

  const handleAddToChart = (card) =>{
    // console.log('add',card);
    const newCarts = [...carts ,card]
    setCarts(newCarts)
  }
  console.log(carts);

  return (
    
    <>
      <Title />
      <section className="container pt-20 flex w-full justify-between flex-col lg:flex lg:flex-row gap-5 max-w-[1400px] mx-auto">
        <div
          id="productContainer"
          className="pt-7 w-full lg:w-[80%]  "
        >
              <Cards handleAddToChart={handleAddToChart}></Cards>
        </div>

        {/* <div className="flex flex-col lg:w-[20%] w-full h-[100vh]">
        <p className="text-center">Total Cart Item</p>
          <p className="text-center p-3" id="totalPriceDisplay"></p>
        {
          carts.map((cart,idx) => <Chart key={idx} cart={cart}></Chart>)
        }
        </div> */}
        <div className="lg:w-[20%] w-full h-[100vh]">
          <p className="text-center">Total Cart Item</p>
          <p className="text-center p-3" id="totalPriceDisplay"></p>
          <div id="cartContainer" className="cartContainer ">
            <table className="table-auto border w-full text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              {
          carts.map((cart,idx) => <Chart key={idx} cart={cart}></Chart>)
        }
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
