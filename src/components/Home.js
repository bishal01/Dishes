import React from 'react'
import h1 from '../image/h1.png'
import h2 from '../image/h2.png'
import h3 from '../image/h3.png'
import h4 from '../image/h4.png'
import h5 from '../image/h5.jpg'
import h6 from '../image/h6.jpg'
const Home = () => {
  return (
    <>
      <h2
  className="font-extrabold text-black absolute"
  style={{
    width: "108px",
    height: "22px",
    top: "58px",
    left: "16px",
  }}
>
 Dish Cards
</h2>
<div className="flex flex-wrap justify-center gap-4 p-4">
  {[
    { id: 1, title: "Bruschetta", img: h1, rating: "5.0" },
    { id: 2, title: "Caprese Salad", img: h2, rating: "4.8" },
    { id: 3, title: "Pasta Primavera", img: h3, rating: "4.7" },
    { id: 4, title: "Margherita Pizza", img: h4, rating: "5.0" },
  ].map((item) => (
    <div
      key={item.id}
      className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-[calc(50%-0.5rem)]"
    >
      <div className="relative h-40 overflow-hidden rounded-t-lg">
        <img
          src={item.img}
          alt={`${item.title} image`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <h6 className="text-slate-800 text-xl font-semibold">
            {item.title}
          </h6>
          <div className="flex items-center ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-slate-600 ml-1.5">{item.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <button className="px-2 py-1 text-sm text-black bg-[#B027004D] rounded shadow-sm">
            Add to Order
          </button>
          <span className="text-base font-medium text-red-700">$4.99</span>
        </div>
      </div>
    </div>
  ))}
</div>
<br/>
<br/>

<h2
  className="font-extrabold text-black absolute"
  style={{
    left:'35px'

   
  }}
>
    In Your Area
</h2>
<br/>
<div class="flex flex-wrap justify-center gap-4 p-4">
  <div class="relative w-[calc(50%-0.5rem)]">
    <img
      src={h5}
      class="w-full rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
      alt="City Image 1"
    />
    <button
      class="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-red-500 hover:text-white"
      aria-label="Add to Favorites"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        class="w-5 h-5 text-gray-700 hover:text-white"
      >
        <path
          d="M12 4.248C8.852-1.876 0 1.555 0 8.092c0 3.145 2.22 5.67 4.905 7.428C8.221 17.918 11.16 20 12 20s3.779-2.082 7.095-4.48C21.78 13.762 24 11.237 24 8.092 24 1.555 15.148-1.876 12 4.248z"
        ></path>
      </svg>
    </button>
  </div>
  <div class="relative w-[calc(50%-0.5rem)]">
    <img
      src={h6}
      class="w-full rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
      alt="City Image 2"
    />
    <button
      class="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-red-500 hover:text-white"
      aria-label="Add to Favorites"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        class="w-5 h-5 text-gray-700 hover:text-white"
      >
        <path
          d="M12 4.248C8.852-1.876 0 1.555 0 8.092c0 3.145 2.22 5.67 4.905 7.428C8.221 17.918 11.16 20 12 20s3.779-2.082 7.095-4.48C21.78 13.762 24 11.237 24 8.092 24 1.555 15.148-1.876 12 4.248z"
        ></path>
      </svg>
    </button>
  </div>
</div>
<br/>
<br/>
</>
  
  )
}

export default Home
