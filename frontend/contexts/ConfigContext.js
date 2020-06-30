import React, { createContext, useState } from "react";

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
  });
  const incrementPrice = () => {
    const oldPrice = parseInt(config.pricePerKwh);
    const newPrice = oldPrice + 1;
    setConfig({ ...config, pricePerKwh: newPrice.toString() });
  };
  const updateKwh = (floorNum, roomName, kwh) => {
    let floors = [...config.layout];
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
    setConfig({ ...config, layout: floors });
  };
  const calculateBills = () => {
    let floors = [...config.layout];
    for (var i = 0; i < floors.length; i++) {
      let floor = floors[i];
      for (var j = 0; j < floor.rooms.length; j++) {
        let room = floor.rooms[j];
        room.bill = parseInt(config.pricePerKwh) * parseFloat(room.kwh);
        floor.rooms[j] = room;
      }
      floors[i] = floor;
    }
    setConfig({ ...config, layout: floors });
  };
  return (
    <ConfigContext.Provider
      value={{ ...config, incrementPrice, updateKwh, calculateBills }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
