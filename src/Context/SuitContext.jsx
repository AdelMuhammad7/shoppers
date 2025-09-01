import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const suitContext = createContext()

export const SuitContextProvider = ({children})=> {

    const [suit , setSuit] = useState([])
    const [suitItems , setSuitItems] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [loaderSkelton , setLoaderSkelton] = useState(false)

    const getSuitData = async function (){
        setLoaderSkelton(true)
        const {data} = await axios.get('https://api-shopper-idgp.onrender.com/Suit')
        setSuitItems(data)
        setSuit(data)
        setLoaderSkelton(false)
    }
    
    useEffect(()=> {
        getSuitData()
    } , [])

    // numbers of available items
    const items = suit.map((el)=> el)
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
          const filteredItems = suit.filter(item =>
            updatedAvailable.includes(item.available)
          );
          setSuitItems(filteredItems);
        } else {
            setSuitItems(suit); // رجّع الكل لو مفيش حاجة متعلم عليها
        }
      };



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
            const filteredItems = suit.filter(item => updatedBrands.includes(item.brand));
            setSuitItems(filteredItems);
        } else {
            // لو مفيش حاجة مختارة، رجّع كل المنتجات
            setSuitItems(suit);
        }
    };


    // this function to sorting data in select

    const [sort , setSort] = useState(null)

    function sortingData(e) {
        const state = e.target.value

        switch (state) {
            case "Alphabetically(AtoZ)" :
                suitItems.sort((a, b)=>{
                return a.title > b.title ? 1 : -1
            })
            setSort("Alphabetically(AtoZ)")
            setSuitItems([...suitItems])
            break ;

            case "Alphabetically(ZtoA)" :
                suitItems.sort((a , b)=>{
                    return a.title < b.title ? 1 : -1
                })
            setSort("Alphabetically(ZtoA)")
            setSuitItems([...suitItems])
            break ;

            case "price(lowToHigh)" :
                suitItems.sort((a , b)=>{
                    return a.price - b.price
                })
            setSort("price(lowToHigh)")
            setSuitItems([...suitItems])  
            break ;
            
            case "price(Hightolow)" :
                suitItems.sort((a , b)=> {
                    return b.price - a.price
                })
            setSort("price(Hightolow)")
            setSuitItems([...suitItems])
            break ;

            default :
            setSort("Default")
            getSuitData()
        }
           
    }


    return (
        <suitContext.Provider value={{suit , loaderSkelton , setSuitItems , suitItems , selectedAvailable , handleChangeAvailable ,notAvailableItems , availableItems , selectedBrands , handleChange , sortingData}}>
            {children}
        </suitContext.Provider >
    )
}