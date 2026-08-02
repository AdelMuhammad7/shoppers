import { createContext, useEffect, useState } from "react";
import data from "../../db.json";

export const casualContext = createContext();

export const CasualContextProvider = ({ children }) => {
  const [casual, setCasual] = useState([]);
  const [casualItems, setCasualItems] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [loaderSkelton, setLoaderSkelton] = useState(false);
  const [sort, setSort] = useState(null);

  const getCasualData = async () => {
    setLoaderSkelton(true);

    // Loader لمدة 3 ثواني
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setCasual(data.CasualWear);
    setCasualItems(data.CasualWear);

    setLoaderSkelton(false);
  };

  useEffect(() => {
    getCasualData();
  }, []);

  // numbers of available items
  const availableItems = casual.filter((el) => el.available);
  const notAvailableItems = casual.filter((el) => !el.available);

  // Available Filter
  const handleChangeAvailable = (e, value) => {
    let updatedAvailable;

    if (e.target.checked) {
      updatedAvailable = [...selectedAvailable, value];
    } else {
      updatedAvailable = selectedAvailable.filter((v) => v !== value);
    }

    setSelectedAvailable(updatedAvailable);

    let filtered = [...casual];

    if (updatedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        updatedAvailable.includes(item.available)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    setCasualItems(filtered);
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

    let filtered = [...casual];

    if (updatedBrands.length > 0) {
      filtered = filtered.filter((item) => updatedBrands.includes(item.brand));
    }

    if (selectedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        selectedAvailable.includes(item.available)
      );
    }

    setCasualItems(filtered);
  };

  // Sorting
  function sortingData(e) {
    const state = e.target.value;

    let sorted = [...casualItems];

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
        setCasualItems(casual);
        return;
    }

    setCasualItems(sorted);
  }

  return (
    <casualContext.Provider
      value={{
        casual,
        casualItems,
        loaderSkelton,
        selectedBrands,
        selectedAvailable,
        handleChangeAvailable,
        handleChange,
        getCasualData,
        sortingData,
        availableItems,
        notAvailableItems,
      }}>
      {children}
    </casualContext.Provider>
  );
};
