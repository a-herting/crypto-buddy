import React, { createContext, useContext, useEffect, useState } from "react";

// Context created to contain values that we want all the children
// within Crypto.Provider to have access to. 
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  //States being monitored using useState
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");


  // useEffect used to run the code below after DOM has been rendered
  // in case the currency has been updated. 
  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    //React provider component that subscribes the children components to any context changes specified below in the value attribute. 
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

//Function created that returns the useContext call for the context that was created above. 
export const CryptoState = () => {
  return useContext(Crypto);
};
