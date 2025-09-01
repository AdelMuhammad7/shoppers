import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const blazerContext = createContext()

export const BlazerContextProvider = ({children})=> {

    const [blazer , setBlazer] = useState([])
    const [blazerItems , setBlazerItems] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [loaderSkelton , setLoaderSkelton] = useState(false)

    const getBlazerData = async function (){
        setLoaderSkelton(true)
        const {data} = await axios.get('https://api-shopper-idgp.onrender.com/Blazer')
        setBlazerItems(data)
        setBlazer(data)
        setLoaderSkelton(false)
    }
     
    useEffect(()=> {
        getBlazerData()
    } , [])


    // numbers of available items
    const items = blazer.map((el)=> el)
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
        const filteredItems = blazer.filter(item =>
            updatedAvailable.includes(item.available)
        );
        setBlazerItems(filteredItems);
        } else {
        setBlazerItems(blazer); // رجّع الكل لو مفيش حاجة متعلم عليها
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
            console.log(true)
            const filteredItems = blazer.filter(item => updatedBrands.includes(item.brand));
            setBlazerItems(filteredItems);
        } else {
            console.log(false)
            // لو مفيش حاجة مختارة، رجّع كل المنتجات
            setBlazerItems(blazer);
        }
    };


    // this function to sorting data in select

    const [sort , setSort] = useState(null)

    function sortingData(e) {
        const state = e.target.value

        switch (state) {
            case "Alphabetically(AtoZ)" :
            blazerItems.sort((a, b)=>{
                return a.title > b.title ? 1 : -1
            })
            setSort("Alphabetically(AtoZ)")
            setBlazerItems([...blazerItems])
            break ;

            case "Alphabetically(ZtoA)" :
                blazerItems.sort((a , b)=>{
                    return a.title < b.title ? 1 : -1
                })
            setSort("Alphabetically(ZtoA)")
            setBlazerItems([...blazerItems])
            break ;

            case "price(lowToHigh)" :
                blazerItems.sort((a , b)=>{
                    return a.price - b.price
                })
            setSort("price(lowToHigh)")
            setBlazerItems([...blazerItems])  
            break ;
            
            case "price(Hightolow)" :
                blazerItems.sort((a , b)=> {
                    return b.price - a.price
                })
            setSort("price(Hightolow)")
            setBlazerItems([...blazerItems])
            break ;

            default :
            setSort("Default")
            getBlazerData()
        }
        
        
    }



    return (
        <blazerContext.Provider value={{blazer , loaderSkelton ,blazerItems , selectedBrands , handleChangeAvailable, notAvailableItems , availableItems , handleChange , getBlazerData ,sortingData , selectedAvailable}}>
            {children}
        </blazerContext.Provider >
    )
}