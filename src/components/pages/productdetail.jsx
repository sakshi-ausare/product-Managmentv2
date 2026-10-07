import React from 'react'
import { useQuery } from '@tanstack/react-query';
import {useParams}from 'react-router-dom';

function productdetail() {
     const {id}=useParams();

    const { data, isPending, error } = useQuery({
    queryKey: ['post',id],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())

    })
    if (isPending) { return <h2>Loading...</h2> }

  if (error) { return <h2>Error: {error.message}</h2>}

  return (
    <div>
       <div className="products">
    <div className="card-item">
  <img src={data.thumbnail} alt={data.title}  style={{ display: "block", margin: "0 auto" }}/>
  <h3><strong>{data.title}</strong></h3>
  <p><strong>Price:</strong> ${data.price}</p>
<p><strong>Category:</strong> {data.category}</p>
<p><strong>Description:</strong> {data.description}</p>
    </div>
      </div>
      
    </div>
  )
}

export default productdetail
