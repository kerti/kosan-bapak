import React, { createContext, useState, useCallback } from "react";

export const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  const [config, setConfig] = useState({
    pricePerKwh: "1567",
    layout: [
      {
        floorNum: 1,
        rooms: [
          { name: "101", kwh: "1", bill: "0" },
          { name: "102", kwh: "2", bill: "0" },
          { name: "103", kwh: "3", bill: "0" },
          { name: "104", kwh: "4", bill: "0" },
        ],
      },
      {
        floorNum: 2,
        rooms: [
          { name: "201", kwh: "5", bill: "0" },
          { name: "202", kwh: "6", bill: "0" },
          { name: "203", kwh: "7", bill: "0" },
          { name: "204", kwh: "8", bill: "0" },
        ],
      },
    ],
    totalBilled: "2000000",
  });

  const setPricePerKwh = useCallback(
    (newPrice) => {
      setConfig((prevConfig) => ({
        ...prevConfig,
        pricePerKwh: newPrice,
      }));
    },
    [setConfig]
  );

  const setRoomKwh = useCallback(
    (floorNum, roomName, kwh) => {
      setConfig((prevConfig) => {
        let floors = [...prevConfig.layout];
        const floorIndex = floors.findIndex((fl) => {
          return fl.floorNum === floorNum;
        });
        let floor = { ...floors[floorIndex] };
        const roomIndex = floor.rooms.findIndex((room) => {
          return room.name === roomName;
        });
        let room = { ...floor.rooms[roomIndex] };
        room.kwh = kwh;
        floor.rooms[roomIndex] = room;
        floors[floorIndex] = floor;
        return { ...prevConfig, layout: floors };
      });
    },
    [setConfig]
  );

  const calculateBills = useCallback(() => {
    setConfig((prevConfig) => {
      let floors = [...prevConfig.layout];
      for (let i = 0; i < floors.length; i++) {
        let floor = floors[i];
        for (let j = 0; j < floor.rooms.length; j++) {
          let room = floor.rooms[j];
          room.bill = parseInt(prevConfig.pricePerKwh) * parseFloat(room.kwh);
          floor.rooms[j] = room;
        }
        floors[i] = floor;
      }
      return { ...prevConfig, layout: floors };
    });
  }, [setConfig]);

  return (
    <ConfigContext.Provider
      value={{ ...config, setPricePerKwh, setRoomKwh, calculateBills }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
