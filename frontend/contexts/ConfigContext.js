import React, { createContext, useState } from "react";

export const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  const [config, setConfig] = useState({
    pricePerKwh: "1567",
  });
  const incrementPrice = () => {
    const oldPrice = parseInt(config.pricePerKwh);
    const newPrice = oldPrice + 1;
    setConfig({ pricePerKwh: newPrice.toString() });
    // alert(newPrice);
  };
  return (
    <ConfigContext.Provider value={{ ...config, incrementPrice }}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
