import React from "react";
import Layout from "./components/layout";
import { theme } from "./Providers/theme";
import Theme from "./Providers/ThemeProvider";
import { AppContainer } from "./styled";

const App = () => {
  return (
    <Theme theme={theme}>
      <AppContainer>
        <Layout />
      </AppContainer>
    </Theme>
  );
};

export default App;
