"use client";
import React, { useState } from "react";
import SharpButton from "./SharpButton";

// Define the structure of the products
type Product = { id: number; name: string };
type Section = "wine" | "beer" | "liquor";

const AllProducts: Record<Section, Product[]> = {
  wine: [
    { id: 1, name: "Chardonnay" },
    { id: 2, name: "Merlot" },
    { id: 3, name: "Pinot Noir" },
  ],
  beer: [
    { id: 4, name: "IPA" },
    { id: 5, name: "Stout" },
    { id: 6, name: "Pilsner" },
  ],
  liquor: [
    { id: 7, name: "Vodka" },
    { id: 8, name: "Whiskey" },
    { id: 9, name: "Rum" },
  ],
};

const ProductsList = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  return (
    <div className="p-5/12  flex justify-center items-center flex-col">
      <p className="text-5xl  font-black -rotate-12 m-10">Products</p>
      <div className="flex gap-4 mb-6">
        {Object.keys(AllProducts).map((section) => (
          <ul key={section}>
            <SharpButton onClick={() => setSelectedSection(section as Section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </SharpButton>
          </ul>
        ))}
      </div>

      {/* Display products for the selected section */}
      <div>
        {selectedSection ? (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full  rounded-lg shadow-md">
              <thead>
                <tr className="bg-theme-secondary/25 ">
                  <th className="py-3 px-6 text-left ">Product Name</th>
                </tr>
              </thead>
              <tbody>
                {AllProducts[selectedSection].map((product, index) => (
                  <tr
                    key={product.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-theme-secondary/25"
                    } hover:bg-gray-200 transition-colors duration-200`}
                  >
                    <td className="py-3 px-6">{product.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-center text-gray-600 font-medium">
            Select a category to view products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
