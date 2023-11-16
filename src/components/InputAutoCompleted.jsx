import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import searchDistricts from "../utilities/barrios.json";

function InputAutoCompleted() {
  const [input, setInput] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const filteredResults = searchDistricts.filter((district) =>
      district.name_borough.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredDistricts(filteredResults);
    setDropdownOpen(inputValue !== ""); 
  };

  const handleOptionClick = (selectedDistrict) => {
    setInput(selectedDistrict.name_borough);
    setDropdownOpen(false);
  };

  return (
    <div className="relative w-full  border shadow rounded ">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <AiOutlineSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        className="block bg-base-neutral border-spacing-0  rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-blue-500 sm:text-sm w-full"
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleInputChange}
      />
      {isDropdownOpen && filteredDistricts.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
          {filteredDistricts.map((district, index) => (
            <li
              key={index}
              className="py-1 px-3 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(district)}
            >
              {district.name_borough}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InputAutoCompleted;
