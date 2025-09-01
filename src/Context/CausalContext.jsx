import { createContext, useEffect, useState } from "react";

import axios from "axios"

export const casualContext = createContext()


export const CasualContextProvider = ({children})=> {

    const [casual , setCasual] = useState([])
    const [casualItems , setCasualItems] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [loaderSkelton , setLoaderSkelton] = useState(false)

    const getCasualData = async function (){
        setLoaderSkelton(true)
        const {data} = await axios.get('https://api-shopper-idgp.onrender.com/CasualWear')
        setCasual(data)
        setCasualItems(data)
        setLoaderSkelton(false)
    }
    
    useEffect(()=> {
        getCasualData()
    } , [])


    // numbers of available items
    const items = casual.map((el)=> el)
    const availableItems = items.filter((el) => el.available);
    const notAvailableItems = items.filter((el) => !el.available);
    
    // available Filters
    const handleChangeAvailable = (e, el) => {
        let updatedAvailable;
      
        if (e.target.checked) {
          updatedAvailable = [...selectedAvailable, el];
        } else {
          updatedAvailable = selectedAvailable.filter(val => val !== el);
        }
      
        setSelectedAvailable(updatedAvailable);
      
        if (updatedAvailable.length > 0) {
          // فلترة المنتجات حسب حالة التوفر للمنتج
          const filteredItems = casual.filter(item =>
            updatedAvailable.includes(item.available)
          );
          setCasualItems(filteredItems);
        } else {
          setCasualItems(casual); // رجّع الكل لو مفيش حاجة متعلم عليها
        }
      };

    // Brand Filters
    const handleChange = (e, el) => {
        let updatedBrands;
        
        if (e.target.checked) {
            // أضف البراند المختار
            updatedBrands = [...selectedBrands, el.brand];
        } else {
            // شيل البراند اللي اتشال التحديد عنه
            updatedBrands = selectedBrands.filter(brand => brand !== el.brand);
        }
    
        setSelectedBrands(updatedBrands);
    
        // فلترة المنتجات حسب البراندات المختارة
        if (updatedBrands.length > 0) {
            const filteredItems = casual.filter(item => updatedBrands.includes(item.brand));
            setCasualItems(filteredItems);
        } else {
            // لو مفيش حاجة مختارة، رجّع كل المنتجات
            setCasualItems(casual);
        }
    };

    // Availabillity filters



    // this function to sorting data in select
    const [sort , setSort] = useState(null)

    function sortingData(e) {
        const state = e.target.value

        switch (state) {
            case "Alphabetically(AtoZ)" :
            casualItems.sort((a, b)=>{
                return a.title > b.title ? 1 : -1
            })
            setSort("Alphabetically(AtoZ)")
            setCasualItems([...casualItems])
            break ;

            case "Alphabetically(ZtoA)" :
                casualItems.sort((a , b)=>{
                    return a.title < b.title ? 1 : -1
                })
            setSort("Alphabetically(ZtoA)")
            setCasualItems([...casualItems])
            break ;

            case "price(lowToHigh)" :
                casualItems.sort((a , b)=>{
                    return a.price - b.price
                })
            setSort("price(lowToHigh)")
            setCasualItems([...casualItems])  
            break ;
            
            case "price(Hightolow)" :
                casualItems.sort((a , b)=> {
                    return b.price - a.price
                })
            setSort("price(Hightolow)")
            setCasualItems([...casualItems])
            break ;

            default :
            setSort("Default")
            getCasualData()
        }
        
        
    }



    return (
        <casualContext.Provider value={{casual , loaderSkelton , selectedBrands , handleChangeAvailable , selectedAvailable , casualItems , handleChange , getCasualData , sortingData , availableItems , notAvailableItems}}>
            {children}
        </casualContext.Provider >
    )
}