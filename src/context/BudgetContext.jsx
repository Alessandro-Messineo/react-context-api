import { createContext, useState, useContext  } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({children}) =>{

    const [ budgetMode, setBudgetMode ] = useState(false);

    return (<BudgetContext.Provider
        value={{
          budgetMode,
          setBudgetMode
        }}
    >
        {children}
    </BudgetContext.Provider>)

}

const useBudgetMode = () => {
    const context = useContext(BudgetContext);
    return context;
};

export  { BudgetProvider, useBudgetMode };