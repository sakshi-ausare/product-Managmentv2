import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import './Add-form.css'
import {z} from "Zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  title: z.string().min(1, "Product name is required"),
  price: z.number().positive("Price must be more than 0"),
  category: z.string().min(1, "Category is required"),
});


function AddProduct() {
    const {
        register,
        handleSubmit,
        formState:{errors}
       }=useForm({
        resolver:zodResolver(schema)
       });
       

       
    
    const handleAdd=(data)=>{
        console.log(data);
    }
  return (
    <>
     <form onSubmit={handleSubmit(handleAdd)}>
     <label>Product Name</label>
     <input  type="text" placeholder="Enter Product Name" {...register("title")} />
      <label>Product Price</label>
     <input  type="number" placeholder="Enter Product price" {...register("price")} />
      <label>Product Category</label>
     <input  type="text" placeholder="Enter Product Category" {...register("category")} />
     <button type="submit" >Submit</button>
     </form>

    </>
     
  )
 };

export default AddProduct
