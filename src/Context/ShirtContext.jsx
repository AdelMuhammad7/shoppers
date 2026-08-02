import { createContext, useEffect, useState } from "react";
import data from "../../db.json";

export const shirtContext = createContext();

export const ShirtContextProvider = ({ children }) => {
  const [shirt, setShirt] = useState([]);
  const [shirtItems, setShirtItems] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [loaderSkelton, setLoaderSkelton] = useState(false);
  const [sort, setSort] = useState(null);

  const getShirtData = async () => {
    setLoaderSkelton(true);

    // Loader لمدة 3 ثواني
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setShirt(data.Shirt);
    setShirtItems(data.Shirt);

    setLoaderSkelton(false);
  };

  useEffect(() => {
    getShirtData();
  }, []);

  // numbers of available items
  const availableItems = shirt.filter((el) => el.available);
  const notAvailableItems = shirt.filter((el) => !el.available);

  // Available Filter
  const handleChangeAvailable = (e, value) => {
    let updatedAvailable;

    if (e.target.checked) {
      updatedAvailable = [...selectedAvailable, value];
    } else {
      updatedAvailable = selectedAvailable.filter((v) => v !== value);
    }

    setSelectedAvailable(updatedAvailable);

    let filtered = [...shirt];

    if (updatedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        updatedAvailable.includes(item.available)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    setShirtItems(filtered);
  };

  // Brand Filter
  const handleChange = (e, el) => {
    let updatedBrands;

    if (e.target.checked) {
      updatedBrands = [...selectedBrands, el.brand];
    } else {
      updatedBrands = selectedBrands.filter((brand) => brand !== el.brand);
    }

    setSelectedBrands(updatedBrands);

    let filtered = [...shirt];

    if (updatedBrands.length > 0) {
      filtered = filtered.filter((item) => updatedBrands.includes(item.brand));
    }

    if (selectedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        selectedAvailable.includes(item.available)
      );
    }

    setShirtItems(filtered);
  };

  // Sorting
  function sortingData(e) {
    const state = e.target.value;

    let sorted = [...shirtItems];

    switch (state) {
      case "Alphabetically(AtoZ)":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        setSort(state);
        break;

      case "Alphabetically(ZtoA)":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        setSort(state);
        break;

      case "price(lowToHigh)":
        sorted.sort((a, b) => Number(a.price) - Number(b.price));
        setSort(state);
        break;

      case "price(Hightolow)":
        sorted.sort((a, b) => Number(b.price) - Number(a.price));
        setSort(state);
        break;

      default:
        setSort("Default");
        setShirtItems(shirt);
        return;
    }

    setShirtItems(sorted);
  }

  return (
    <shirtContext.Provider
      value={{
        shirt,
        loaderSkelton,
        shirtItems,
        selectedBrands,
        selectedAvailable,
        handleChangeAvailable,
        notAvailableItems,
        availableItems,
        handleChange,
        sortingData,
      }}>
      {children}
    </shirtContext.Provider>
  );
};
