import { createContext, useEffect, useState } from "react";
import data from "../../db.json";

export const suitContext = createContext();

export const SuitContextProvider = ({ children }) => {
  const [suit, setSuit] = useState([]);
  const [suitItems, setSuitItems] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [loaderSkelton, setLoaderSkelton] = useState(false);
  const [sort, setSort] = useState(null);

  const getSuitData = async () => {
    setLoaderSkelton(true);

    // Loader لمدة 3 ثواني
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setSuit(data.Suit);
    setSuitItems(data.Suit);

    setLoaderSkelton(false);
  };

  useEffect(() => {
    getSuitData();
  }, []);

  // numbers of available items
  const availableItems = suit.filter((el) => el.available);
  const notAvailableItems = suit.filter((el) => !el.available);

  // Available Filter
  const handleChangeAvailable = (e, value) => {
    let updatedAvailable;

    if (e.target.checked) {
      updatedAvailable = [...selectedAvailable, value];
    } else {
      updatedAvailable = selectedAvailable.filter((v) => v !== value);
    }

    setSelectedAvailable(updatedAvailable);

    let filtered = [...suit];

    if (updatedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        updatedAvailable.includes(item.available)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    setSuitItems(filtered);
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

    let filtered = [...suit];

    if (updatedBrands.length > 0) {
      filtered = filtered.filter((item) => updatedBrands.includes(item.brand));
    }

    if (selectedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        selectedAvailable.includes(item.available)
      );
    }

    setSuitItems(filtered);
  };

  // Sorting
  function sortingData(e) {
    const state = e.target.value;

    let sorted = [...suitItems];

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
        setSuitItems(suit);
        return;
    }

    setSuitItems(sorted);
  }

  return (
    <suitContext.Provider
      value={{
        suit,
        loaderSkelton,
        setSuitItems,
        suitItems,
        selectedAvailable,
        handleChangeAvailable,
        notAvailableItems,
        availableItems,
        selectedBrands,
        handleChange,
        sortingData,
      }}>
      {children}
    </suitContext.Provider>
  );
};
