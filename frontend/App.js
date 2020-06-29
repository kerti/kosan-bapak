import React from "react";
import Container from "./components/Container";
import ConfigContextProvider from "./contexts/ConfigContext";

export default function App() {
  return (
    <ConfigContextProvider>
      <Container />
    </ConfigContextProvider>
  );
}
