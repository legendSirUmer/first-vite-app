import { useState,useEffect } from 'react'
export default function Child({onValueChange}){


    const handleChange = (event) => {
        onValueChange(event.target.value);
      };
    
      return (
        <div>
          <input type="text" onChange={handleChange} />
        </div>
      );
}