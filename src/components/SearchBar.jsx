import { useState } from "react";
import usePrdouct from "../stores/useProduct";
import { Link } from "react-router";

function SearchBar() {
  const [outline, setOutline] = useState(false);
  const [inputEl, setInputEl] = useState("");
  const { allProduct } = usePrdouct();

  window.addEventListener("click", function () {
    setOutline(false);
  });

  function handleChange(e) {
    setInputEl(e);
  }

  const res = allProduct.filter((value) =>
    value.title.toLowerCase().includes(inputEl.toLowerCase())
  );

  return (
    <>
      {inputEl.length > 1 && (
        <div className="absolute  w-full h-fit  border border-gray-200 shadow-2xl z-50   p-3 bg-white top-full  rounded-lg">
          {res.map((value) => (
            <Link
              to={`/shop/?search=${value.title}`}
              onClick={() => setInputEl("")}
              key={value.id}
            >
              <p className=" hover:bg-gray-100 py-2 px-2">{value.title}</p>
            </Link>
          ))}
        </div>
      )}
      <div
        onClick={(e) => {
          setOutline(true);
          e.stopPropagation();
        }}
        className={`border relative border-gray-300 h-11 w-full ${
          outline
            ? "outline-4 outline-green-200 transition-all duration-[0.2s]"
            : "outline-0 outline-green-200 transition-all duration-[0.2s]"
        }   rounded-lg overflow-hidden transition-all duration-75 `}
      >
        <input
          value={inputEl}
          onChange={(e) => handleChange(e.target.value)}
          className="h-full px-3 outline-none w-full placeholder:text-slate-400 placeholder:font-medium placeholder:text-base "
          type="text"
          placeholder="Search for products"
        />
      </div>
    </>
  );
}

export default SearchBar;
