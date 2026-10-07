import React,{useState} from 'react';
import './product.css';
import { useQuery } from '@tanstack/react-query';
import {Link} from 'react-router-dom';
function Product() {

  const [searchText, setSearchText] = useState("");

  const { data, isPending, error } = useQuery({
    queryKey: ['post'],

    queryFn: () =>
      fetch(`https://dummyjson.com/products/?limit=100`)
        .then((res) => res.json())
     
  })
  console.log(data);

  if (isPending) { return <h2>Loading...</h2> }

  if (error) { return <h2>Error: {error.message}</h2>}
  const searchProduct=data.products.filter((item)=>item.title.toLowerCase().includes(searchText.toLowerCase()));
  let productlist
  if(searchText){
    productlist=searchProduct;
  }else{
    productlist=data.products;
  }

  return (
    <div>
       <div className="search-input">
            <input type="text" placeholder="Search Product" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          </div>
      <h1>Products</h1>
       <div className="products">
      {productlist.map((item) => (
         console.log(item.thumbnail),
        <Link to={`/product/${item.id}`} key={item.id}>
        <div className="card">
          <img src={item.thumbnail} alt={item.title}/>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Category: {item.category}</p>
        </div>
        </Link>
      ))}
      </div>
      
    </div>
  )
}

export default Product


