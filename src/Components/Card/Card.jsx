import { useState } from "react";


const Card = ({card,handleAddToChart}) => {
    // console.log(handleAddToChart);
    const {id,name,image,originalPrice,discountPrice,inStock,rating,reviews} = card;
    // console.log(card);
    return (
        <div
                key={name}
                className="relative flex w-full h-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img
                    src={image}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                  </h5>

                  <div>
                    <span>
                      <del>{originalPrice}</del>TK.
                    </span>
                    <span className="ml-3">{discountPrice} TK.</span>
                  </div>

                  <div className="rating">rating- {rating}</div>
                </div>
                <div className="p-6 pt-0">
                  <button onClick={()=>handleAddToChart(card)}
                    className="select-none rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
    );
};

export default Card;