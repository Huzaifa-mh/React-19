import React from "react";
import "./index.css";

export const Filter = () => {
  const [filter, setFilter] = React.useState('');

  const allItem = ["Apple", "Banana", "Cherry", "Date", "Grape", "Mango"];

  const filterItems = allItem.filter((item) => 
  item.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <div>
        <input className="searchfield" type="text"
        value={filter}
        onChange={(e)=> setFilter(e.target.value)}
        placeholder="Enter the fruit name"
        
        /> 

        <ul>
            {filterItems.map((item, index)=> (
                <li key={index}>{item}</li>
            ))}
        </ul>

        {filterItems.length === 0 && <p>No results Found.</p>}
    </div>
  )
};
