import React from 'react';

function CategoriesSearch() {
  return (

  
    <div
      className="flex flex-col  p-2  border-b-2 border-[white]-600 bg-slate-200 justify-center">
      <div className="flex flex-row w-[100%] justify-between">
        <div className=" flex border-b-2 p-2 border-blue-400 bg-red-700 w-full">
          <span className="text-white text-[16px] font-bold">
            Rechercher une catégorie
          </span>
        </div>
      </div>

      <div className="flex flex-column flex-wrap justify-between">
        <p className="border-b-2 border-blue-400 p-3 hover:bg-slate-600 w-full cursor-pointer text-black hover:text-[white] duration-100">
          Développement personnel
        </p>
        <p className="border-b-2 border-blue-400 p-3  text-black hover:text-[white] hover:bg-slate-600 w-full cursor-pointer duration-100">
          Séduction
        </p>
        <p className="border-b-2 border-blue-400 p-3 cursor-pointer hover:bg-slate-600  text-black hover:text-[white] duration-100 w-full">
          Education Financière
        </p>
        <p className="border-b-2 border-blue-400 cursor-pointer hover:bg-slate-600  text-black hover:text-[white] duration-100 p-3 w-full">
          Autres...
        </p>
      </div>

      <div className="flex flex-column flex-wrap justify-between"></div>

    </div>


  );
}

export default CategoriesSearch;
