import React from 'react'
import cr1 from '../image/course1.png'
import cr2 from '../image/course2.png'
import cr3 from '../image/course3.png'
import cr4 from '../image/course4.jpg'
import p1 from '../image/p1.png'
import p2 from '../image/p2.png'
import p3 from '../image/p3.png'
import s1 from '../image/s1.png'
import s2 from '../image/s2.png'
import s3 from '../image/s3.png'

const MainCourse = () => {
  return (
    <>
      <div>
<h2
  className="font-extrabold text-black absolute"
  style={{
    width: "108px",
    height: "22px",
    top: "58px",
    left: "16px",
  }}
>
  Main Course
</h2>
<div className="overflow-x-auto">

  <div className="flex space-x-4 p-4">
    {/* Card Template */}
    <div className="flex flex-col items-center w-36">
      {/* Image */}
      <img
        src={cr1}
        alt="Card Image"
        className="w-[150px] h-[150px] rounded-[8px] object-cover"
      />
      {/* Text */}
      <p
        className="mt-2 text-[16px] font-normal leading-[24px] tracking-[-0.28px]"
        style={{ fontFamily: "'Abyssinica SIL', sans-serif" }}
      >
       Cookie Sandwich
      </p>
    </div>
    {/* Duplicate the above card 5 times */}
    <div className="flex flex-col items-center w-36">
      <img
        src={cr2}
        alt="Card Image"
        className="w-[150px] h-[150px] rounded-[8px] object-cover"
      />
      <p
        className="mt-2 text-[16px] font-normal leading-[24px] tracking-[-0.28px]"
        style={{ fontFamily: "'Abyssinica SIL', sans-serif" }}
      >
        Choumin
      </p>
    </div>
    <div className="flex flex-col items-center w-36">
      <img
        src={cr3}
        alt="Card Image"
        className="w-[150px] h-[150px] rounded-[8px] object-cover"
      />
      <p
        className="mt-2 text-[16px] font-normal leading-[24px] tracking-[-0.28px]"
        style={{ fontFamily: "'Abyssinica SIL', sans-serif" }}
      >
Dim Sum
      </p>
    </div> 
    <div className="flex flex-col items-center w-36">
      <img
        src={cr4}
        alt="Card Image"
        className="w-[150px] h-[150px] rounded-[8px] object-cover"
      />
      <p
        className="mt-2 text-[16px] font-normal leading-[24px] tracking-[-0.28px]"
        style={{ fontFamily: "'Abyssinica SIL', sans-serif" }}
      >
      Korean Ramen
      </p>
    </div> 
  
  
     </div>
</div>

</div>

<div>
<h2
  className="font-bold text-black absolute"
  style={{
    height: "22px",
  }}
>
  Most Populars
</h2>
<br/>
<div>
    
<a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
  <img
    className="object-cover w-[110px] h-[110px] rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={p1}
    alt="Combo Burger"
  />
  <div className="flex flex-col justify-between p-4">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Combo Burger</h5>
    <p className="mb-3 font-normal text-gray-700">Shortbread, chocolate turtle cookies, and red velvet.</p>
    <div className="flex items-center justify-between">
    <button className="px-4 py-2 text-black bg-[#B027004D] rounded ">
      Add to Order
    </button>
    <span className="text-lg font-semibold text-red-700">$4.99</span>

  </div>
  </div>
</a>

<a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
  <img
    className="object-cover w-[110px] h-[110px] rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={p2}
    alt="Combo Sandwich"
  />
  <div className="flex flex-col justify-between p-4">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Combo Sandwich</h5>
    <p className="mb-3 font-normal text-gray-700">Shortbread, chocolate turtle cookies, and red velvet.</p>
    <div className="flex items-center justify-between">
    <button className="px-4 py-2 text-black bg-[#B027004D] rounded ">
      Add to Order
    </button>
    <span className="text-lg font-semibold text-red-700">$4.99</span>

  </div>
  </div>
</a>

<a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
  <img
    className="object-cover w-[110px] h-[110px] rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={p3}
    alt="Cookie Sandwich"
  />
  <div className="flex flex-col justify-between p-4">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Cookie Sandwich</h5>
    <p className="mb-3 font-normal text-gray-700">Shortbread, chocolate turtle cookies, and red velvet.</p>
    <div className="flex items-center justify-between">
    <button className="px-4 py-2 text-black bg-[#B027004D] rounded ">
      Add to Order
    </button>
    <span className="text-lg font-semibold text-red-700">$4.99</span>

  </div>
  </div>
</a>

</div>
</div>
<br/>

<div>
<h2
  className="font-bold text-black absolute"
  style={{
    height: "22px",
  }}
>
  Sea Foods
</h2>
<br/>
<div>
    
<a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
  <img
    className="object-cover w-[110px] h-[110px] rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={s1}
    alt="Oyster Dish"
  />
  <div className="flex flex-col justify-between p-4">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Oyster Dish</h5>
    <p className="mb-3 font-normal text-gray-700">Shortbread, chocolate turtle cookies, and red velvet.</p>
    <div className="flex items-center justify-between">
    <button className="px-4 py-2 text-black bg-[#B027004D] rounded ">
      Add to Order
    </button>
    <span className="text-lg font-semibold text-red-700">$4.99</span>

  </div>
  </div>
</a>

<a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
  <img
    className="object-cover w-[110px] h-[110px] rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={s2}
    alt="Oyster On Ice"
  />
  <div className="flex flex-col justify-between p-4">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Oyster On Ice</h5>
    <p className="mb-3 font-normal text-gray-700">Shortbread, chocolate turtle cookies, and red velvet.</p>
    <div className="flex items-center justify-between">
    <button className="px-4 py-2 text-black bg-[#B027004D] rounded ">
      Add to Order
    </button>
    <span className="text-lg font-semibold text-red-700">$4.99</span>

  </div>
  </div>
</a>

<a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
  <img
    className="object-cover w-[110px] h-[110px] rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={s3}
    alt="Fried Rice on Pot"
  />
  <div className="flex flex-col justify-between p-4">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Fried Rice on Pot</h5>
    <p className="mb-3 font-normal text-gray-700">Shortbread, chocolate turtle cookies, and red velvet.</p>
    <div className="flex items-center justify-between">
    <button className="px-4 py-2 text-black bg-[#B027004D] rounded ">
      Add to Order
    </button>
    <span className="text-lg font-semibold text-red-700">$4.99</span>

  </div>
  </div>
</a>

</div>
</div>


    </>
  )
}

export default MainCourse
