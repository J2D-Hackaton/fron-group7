import React, { useContext, useState } from "react";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import districtsJSON from "../utilities/barrios.json";
import MapContext from "../context/map.context";

function InputAutoCompleted() {

  const { districtSelected, setDistrictSelected, districtslist} = useContext(MapContext);

  const [searchDistricts, setSearchDistricts] = useState(districtslist || districtsJSON)
  
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

    if (filteredDistricts.length === 1) {
      handleOptionClick(filteredDistricts[0]);
    }
  };

  const handleOptionClick = (selectedDistrict) => {
    setInput(selectedDistrict.name_borough);
    setDropdownOpen(false);
    setDistrictSelected(selectedDistrict);
  };

  const deleteSelection = () => {
    setInput("");
    setDistrictSelected(null);
  };

  return (
    <>
      <div className="relative w-full  border shadow rounded ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <AiOutlineSearch
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          className="block bg-base-neutral border-spacing-0  rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-blue-500 sm:text-sm w-full"
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleInputChange}
        />
        {isDropdownOpen && filteredDistricts.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg overflow-y-auto max-h-[50vh]">
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
      <span className="flex gap-2 items-center">
        <p className="italic"> Resultados de:</p>

        <p className="font-bold">{districtSelected?.name_borough}</p>
        {
          districtSelected && (
            <div className=" animate-bounce text-red-400 border p-1 cursor-pointer hover:bg-red-400 hover:text-white " onClick={() => deleteSelection()}>
          <AiOutlineDelete />
        </div>
          )
        }
      </span>
    </>
  );
}

export default InputAutoCompleted;
