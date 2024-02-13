import Home from "./pages/Home";


export default function App(){

  let products = [
    {
      title:'Product 1',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/burger.png',
      price:250
    },
    {
      title:'Product 2',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod.',
      image:'/images/fri.png',
      price:350
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
    {
      title:'Product 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod rerum adipisci.',
      image:'/images/twister.png',
      price:550
    },
  ]
  
  return <div>
    <Home products={products}/>
    
  </div>
}


