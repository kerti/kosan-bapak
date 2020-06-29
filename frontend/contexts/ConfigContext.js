import React, { createContext, useState } from "react";

export const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  const [config, setConfig] = useState({
    pricePerKwh: "1567",
    layout: [
      {
        floorNum: 1,
        rooms: [
          { name: "101" },
          { name: "102" },
          { name: "103" },
          { name: "104" },
        ],
      },
      {
        floorNum: 2,
        rooms: [
          { name: "201" },
          { name: "202" },
          { name: "203" },
          { name: "204" },
        ],
      },
    ],
  });
  const incrementPrice = () => {
    const oldPrice = parseInt(config.pricePerKwh);
    const newPrice = oldPrice + 1;
    setConfig({ ...config, pricePerKwh: newPrice.toString() });
  };
  return (
    <ConfigContext.Provider value={{ ...config, incrementPrice }}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
