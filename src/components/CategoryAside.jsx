import { FaAngleRight } from "react-icons/fa6";
import category from "../data/categoryData";
import { useState } from "react";

function CategoryAside() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  function handleCategory(id) {
    setSelectedCategory((curr) => (curr === id ? null : id));
  }
  const show = false;
  return (
    <>
      {show && (
        <div className="fixed top-0 bottom-0 left-0 z-[100] w-full bg-[#0000005c]">
          <div className=" w-[400px] h-full  bg-white p-5">
            <h2 className=" bg-white text-lg font-semibold mb-5">Filter</h2>
            <h4 className=" text-lg font-semibold mb-2">Categories</h4>
            {category.map((value) => (
              <ul key={value.id}>
                <li
                  onClick={() => handleCategory(value.id)}
                  className="flex items-center catgoriesPsuedo relative hover:text-green-600 cursor-pointer justify-between  text-sm font-medium text-gray-900 py-3"
                >
                  {value.title} <FaAngleRight className="ml-2 text-xs" />
                </li>
                {selectedCategory === value.id &&
                  value.sub_category.map((value) => (
                    <p
                      key={value}
                      className="text-sm mt-3 mb-5 transition-all duration-[0.5s] ml-2"
                    >
                      {value}
                    </p>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryAside;
