import { createContext, useEffect, useState } from "react";
import data from "../../db.json";

export const blazerContext = createContext();

export const BlazerContextProvider = ({ children }) => {
  const [blazer, setBlazer] = useState([]);
  const [blazerItems, setBlazerItems] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [loaderSkelton, setLoaderSkelton] = useState(false);
  const [sort, setSort] = useState(null);

  const getBlazerData = async () => {
    setLoaderSkelton(true);

    // Loader لمدة 3 ثواني
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setBlazer(data.Blazer);
    setBlazerItems(data.Blazer);

    setLoaderSkelton(false);
  };

  useEffect(() => {
    getBlazerData();
  }, []);

  // numbers of available items
  const availableItems = blazer.filter((el) => el.available);
  const notAvailableItems = blazer.filter((el) => !el.available);

  // available filter
  const handleChangeAvailable = (e, value) => {
    let updatedAvailable;

    if (e.target.checked) {
      updatedAvailable = [...selectedAvailable, value];
    } else {
      updatedAvailable = selectedAvailable.filter((v) => v !== value);
    }

    setSelectedAvailable(updatedAvailable);

    let filtered = [...blazer];

    if (updatedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        updatedAvailable.includes(item.available)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    setBlazerItems(filtered);
  };

  // Brand filter
  const handleChange = (e, el) => {
    let updatedBrands;

    if (e.target.checked) {
      updatedBrands = [...selectedBrands, el.brand];
    } else {
      updatedBrands = selectedBrands.filter((brand) => brand !== el.brand);
    }

    setSelectedBrands(updatedBrands);

    let filtered = [...blazer];

    if (updatedBrands.length > 0) {
      filtered = filtered.filter((item) => updatedBrands.includes(item.brand));
    }

    if (selectedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        selectedAvailable.includes(item.available)
      );
    }

    setBlazerItems(filtered);
  };

  // Sorting
  function sortingData(e) {
    const state = e.target.value;

    let sorted = [...blazerItems];

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
        setBlazerItems(blazer);
        return;
    }

    setBlazerItems(sorted);
  }

  return (
    <blazerContext.Provider
      value={{
        blazer,
        blazerItems,
        loaderSkelton,
        selectedBrands,
        selectedAvailable,
        availableItems,
        notAvailableItems,
        handleChange,
        handleChangeAvailable,
        getBlazerData,
        sortingData,
      }}>
      {children}
    </blazerContext.Provider>
  );
};
