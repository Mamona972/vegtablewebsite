import React from 'react'
import {  categories } from '../assets/assets'
import { useAppContext } from '../context/useAppContext';

function Categories() {
    const {navigate }=useAppContext()
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Categories</p>
<div className=' mt-6 gap-6 flex gap-6 overflow-x-auto scrollbar-hide'>
    
{categories.map((category , index)=>(
<div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'  
style={{backgroundColor: category.bgColor}}
onClick={()=>{navigate(`/products/${category.path.toLowerCase()}`); scrollTo(0,0)}}
>
        <img className='group-hover:scale-108 transition max-w-28' src={category.image} alt="" />
        <p className='text-sm font-medium'>{category.text}</p>
    </div>

))}

    

</div>
    </div>
  )
}

export default Categories