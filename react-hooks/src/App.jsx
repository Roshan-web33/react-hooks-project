import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar.jsx'


function App() {

  const shoes = [
    {
        img: 'https://cdn.shopify.com/s/files/1/0779/3380/5887/files/Maroon-Women_s-Slip-on-Shoes_600x600.jpg?v=1724921458',
        Name: 'Walkaroo Lightweight Sneakers',
        price : 600,   
    },
     {
        img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Photoshoot for Nike ',
        price : 1999,   
    },
    {
        img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'So impressed with how comfortable ',
        price : 1999,   
    },
    {
        img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Puma White Sneakers',
        price : 1499,   
    },
    {
        img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Sneaker Shots ',
        price : 599,   
    },
    {
        img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Niki shoes',
        price : 2499,   
    },
    {
        img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Name: 'Nike Air Force',
        price : 999,   
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ_u65MCX0KMgqaI21YUiwVGHZAfhPhizKXFrFINYvpVlDJw8fAJ8kqJxyoON1qk-7sgLtyGq6keEu5oEVAYJAE9O3N1FOmZk3hxnx0mnKMyKl2xDjVmZnRDCLQlwJ8utBwoJ9dw&usqp=CAc',
        Name: 'Bata Comfit Formal Shoes',
        price : 999,  

    }

]

 const [cart, setCart] = useState([]);

const addToCart = (item) => {
  const exist = cart.find((x) => x.Name === item.Name);

  if (exist) {
    // quantity increase
    const updatedCart = cart.map((x) =>
      x.Name === item.Name
        ? { ...x, qty: x.qty + 1 }
        : x
    );
    setCart(updatedCart);
  } else {
    // new item
    setCart([...cart, { ...item, qty: 1 }]);
  }
};

const increaseQty = (item) => {
  setCart(
    cart.map((x) =>
      x.Name === item.Name ? { ...x, qty: x.qty + 1 } : x
    )
  );
};

const decreaseQty = (item) => {
  const updatedCart = cart
    .map((x) =>
      x.Name === item.Name ? { ...x, qty: x.qty - 1 } : x
    )
    .filter((x) => x.qty > 0); // remove if 0

  setCart(updatedCart);
};

const total = cart.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);
 

  return <>
    <Navbar />
   <section>
        <div className="container">
          {shoes.map((itmes)=>(
             <div key={itmes.id} className="card">
                <div className="image"><img src={itmes.img} alt="" /></div>
                <h2 className="name">{itmes.Name}</h2>
                <h3 className="price">${itmes.price}</h3>
                <button   className="add" onClick={() => addToCart(itmes)}>Add to Cart</button>

            </div>

          ))}
           
        </div>
    </section>
    <div className='addtoCart'>
        <h3 className='heading'>Add To Cart</h3>

            {cart.map((itmes) =>(
                <div key={itmes.id} className='cart-item'>
                    <img src={itmes.img} alt="" />
                    <h4>{itmes.Name}</h4>
                    <div className="qty">
                        <button className='btn' onClick={() => decreaseQty(itmes)}>-</button>
                        <span>{itmes.qty}</span>
                        <button className='btn' onClick={() => increaseQty(itmes)}>+</button>
                    </div>
                    <p>${itmes.price}</p>
                </div>

            ))}

  
        <div className='total'>
            <h4>Total</h4>
            <h4>$ <span className='price'>{total}</span></h4>
        </div>
    </div>
  </>
}

export default App
