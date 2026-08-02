import { createContext, useEffect, useState } from "react";
import data from "../../db.json";

export const trouserContext = createContext();

export const TrouserContextProvider = ({ children }) => {
  const [trouser, setTrouser] = useState([]);
  const [trouserItems, setTrouserItems] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [loaderSkelton, setLoaderSkelton] = useState(false);
  const [sort, setSort] = useState(null);

  const getTrouserData = async () => {
    setLoaderSkelton(true);

    // Loader لمدة 3 ثواني
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setTrouser(data.Trouser);
    setTrouserItems(data.Trouser);

    setLoaderSkelton(false);
  };

  useEffect(() => {
    getTrouserData();
  }, []);

  // numbers of available items
  const availableItems = trouser.filter((el) => el.available);
  const notAvailableItems = trouser.filter((el) => !el.available);

  // Available Filter
  const handleChangeAvailable = (e, value) => {
    let updatedAvailable;

    if (e.target.checked) {
      updatedAvailable = [...selectedAvailable, value];
    } else {
      updatedAvailable = selectedAvailable.filter((v) => v !== value);
    }

    setSelectedAvailable(updatedAvailable);

    let filtered = [...trouser];

    if (updatedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        updatedAvailable.includes(item.available)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    setTrouserItems(filtered);
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

    let filtered = [...trouser];

    if (updatedBrands.length > 0) {
      filtered = filtered.filter((item) => updatedBrands.includes(item.brand));
    }

    if (selectedAvailable.length > 0) {
      filtered = filtered.filter((item) =>
        selectedAvailable.includes(item.available)
      );
    }

    setTrouserItems(filtered);
  };

  // Sorting
  function sortingData(e) {
    const state = e.target.value;

    let sorted = [...trouserItems];

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
        setTrouserItems(trouser);
        return;
    }

    setTrouserItems(sorted);
  }

  return (
    <trouserContext.Provider
      value={{
        trouser,
        loaderSkelton,
        trouserItems,
        selectedBrands,
        availableItems,
        notAvailableItems,
        handleChangeAvailable,
        selectedAvailable,
        handleChange,
        getTrouserData,
        sortingData,
      }}>
      {children}
    </trouserContext.Provider>
  );
};
