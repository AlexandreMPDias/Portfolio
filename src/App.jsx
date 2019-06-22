import React from "react";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Styles from "./appStyle";
import Home from "./scenes/home";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Styles.body>
            <Switch>
              <Route path="/" component={withRouter(Home)} />
              <Route path="/aboutme" component={withRouter(Home)} />
              <Route path="/myworks" component={withRouter(Home)} />
              <Route path="/contact" component={withRouter(Home)} />
            </Switch>
          </Styles.body>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
