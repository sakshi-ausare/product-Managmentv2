import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import './Add-form.css'
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  title: z.string().min(1, "Product name is required"),
  price: z.number().positive("Price must be more than 0"),
  category: z.string().min(1, "Category is required"),
});
 
const AddProductApi=(data)=>{
  return fetch(`https://dummyjson.com/products/add`,{method:"POST",})
  .then((res)=>res.json());
  
}


function AddProduct() {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
       }=useForm({
        resolver:zodResolver(schema)
       });
       
    const addData = useMutation({
    mutationFn: AddProductApi,
    onSuccess: () => {
     alert("Add Product Successfully");
     reset();
    
    },
  });
 console.log(addData);

    const handleAdd=(data)=>{
      addData.mutate(data);
    }
  return (
    <>
     <form onSubmit={handleSubmit(handleAdd)}>
     <label>Product Name</label>
     <input  type="text" placeholder="Enter Product Name" {...register("title")} />
      <p>{errors.title?.message} </p>
      <label>Product Price</label>
     <input  type="number" placeholder="Enter Product price" {...register("price",{valueAsNumber:true})} />
     <p>{errors.price?.message} </p>
      <label>Product Category</label>
     <input  type="text" placeholder="Enter Product Category" {...register("category")} />
     <p>{errors.category?.message} </p>
     <button type="submit" >Submit</button>
     </form>

    </>
     
  )
 };

export default AddProduct
