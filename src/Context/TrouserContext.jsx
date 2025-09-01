import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const trouserContext = createContext()

export const TrouserContextProvider = ({children})=> {

    const [trouser , setTrouser] = useState([])
    const [trouserItems , setTrouserItems] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [loaderSkelton , setLoaderSkelton] = useState(false)


    const getTrouserData = async function (){
        setLoaderSkelton(true)
        const {data} = await axios.get('https://api-shopper-idgp.onrender.com/Trouser')
        setTrouserItems(data)
        setTrouser(data)
        setLoaderSkelton(false)
    }
    
    useEffect(()=> {
        getTrouserData()
    } , [])

    // numbers of available items
    const items = trouser.map((el)=> el)
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
        const filteredItems = trouser.filter(item =>
            updatedAvailable.includes(item.available)
        );
        setTrouserItems(filteredItems);
        } else {
        setTrouserItems(trouser); // رجّع الكل لو مفيش حاجة متعلم عليها
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
            const filteredItems = trouser.filter(item => updatedBrands.includes(item.brand));
            setTrouserItems(filteredItems);
        } else {
            // لو مفيش حاجة مختارة، رجّع كل المنتجات
            setTrouserItems(trouser);
        }
    };


        // this function to sorting data in select

        const [sort , setSort] = useState(null)

        function sortingData(e) {
            const state = e.target.value
    
            switch (state) {
                case "Alphabetically(AtoZ)" :
                    trouserItems.sort((a, b)=>{
                    return a.title > b.title ? 1 : -1
                })
                setSort("Alphabetically(AtoZ)")
                setTrouserItems([...trouserItems])
                break ;
    
                case "Alphabetically(ZtoA)" :
                    trouserItems.sort((a , b)=>{
                        return a.title < b.title ? 1 : -1
                    })
                setSort("Alphabetically(ZtoA)")
                setTrouserItems([...trouserItems])
                break ;
    
                case "price(lowToHigh)" :
                    trouserItems.sort((a , b)=>{
                        return a.price - b.price
                    })
                setSort("price(lowToHigh)")
                setTrouserItems([...trouserItems])  
                break ;
                
                case "price(Hightolow)" :
                    trouserItems.sort((a , b)=> {
                        return b.price - a.price
                    })
                setSort("price(Hightolow)")
                setTrouserItems([...trouserItems])
                break ;
    
                default :
                setSort("Default")
                getTrouserData()
            }
            
            
        }



    return (
        <trouserContext.Provider value={{trouser , loaderSkelton , trouserItems , selectedBrands , availableItems, notAvailableItems, handleChangeAvailable ,selectedAvailable , handleChange , getTrouserData ,sortingData}}>
            {children}
        </trouserContext.Provider >
    )
}