import { createContext, useState,useEffect, useContext  } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({children}) =>{

    const [ budgetMode, setBudgetMode ] = useState(false);
    const [products, setProducts] = useState([]);

    function fetchProducts() {
        // eslint-disable-next-line no-undef
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    

    return (<BudgetContext.Provider
        value={{
          budgetMode,
          setBudgetMode,
          products
        }}
    >
        {children}
    </BudgetContext.Provider>)

}

const useBudgetMode = () => {
    const context = useContext(BudgetContext);
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export  { BudgetProvider, useBudgetMode };