import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const shirtContext = createContext()

export const ShirtContextProvider = ({children})=> {

    const [shirt , setShirt] = useState([])
    const [shirtItems , setShirtItems] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [loaderSkelton , setLoaderSkelton] = useState(false)

    const getShirtData = async function (){
        setLoaderSkelton(true)
        const {data} = await axios.get('https://api-shopper-idgp.onrender.com/Shirt')
        setShirtItems(data)
        setShirt(data)
        setLoaderSkelton(false)
    }
    
    useEffect(()=> {
        getShirtData()
    } , [])

    // numbers of available items
    const items = shirt.map((el)=> el)
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
          const filteredItems = shirt.filter(item =>
            updatedAvailable.includes(item.available)
          );
          setShirtItems(filteredItems);
        } else {
            setShirtItems(shirt); // رجّع الكل لو مفيش حاجة متعلم عليها
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
            const filteredItems = shirt.filter(item => updatedBrands.includes(item.brand));
            setShirtItems(filteredItems);
        } else {
            // لو مفيش حاجة مختارة، رجّع كل المنتجات
            setShirtItems(shirt);
        }
    };






        // this function to sorting data in select

        const [sort , setSort] = useState(null)

        function sortingData(e) {
            const state = e.target.value
    
            switch (state) {
                case "Alphabetically(AtoZ)" :
                shirtItems.sort((a, b)=>{
                    return a.title > b.title ? 1 : -1
                })
                setSort("Alphabetically(AtoZ)")
                setShirtItems([...shirtItems])
                break ;
    
                case "Alphabetically(ZtoA)" :
                    shirtItems.sort((a , b)=>{
                        return a.title < b.title ? 1 : -1
                    })
                setSort("Alphabetically(ZtoA)")
                setShirtItems([...shirtItems])
                break ;
    
                case "price(lowToHigh)" :
                    shirtItems.sort((a , b)=>{
                        return a.price - b.price
                    })
                setSort("price(lowToHigh)")
                setShirtItems([...shirtItems])  
                break ;
                
                case "price(Hightolow)" :
                    shirtItems.sort((a , b)=> {
                        return b.price - a.price
                    })
                setSort("price(Hightolow)")
                setShirtItems([...shirtItems])
                break ;
    
                default :
                setSort("Default")
                getShirtData()
            }
            
            
        }

    return (
        <shirtContext.Provider value={{shirt , loaderSkelton , shirtItems , selectedBrands , selectedAvailable ,handleChangeAvailable ,notAvailableItems, availableItems , handleChange , sortingData}}>
            {children}
        </shirtContext.Provider >
    )
}