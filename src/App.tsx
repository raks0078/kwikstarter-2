import React, { useState } from "react";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyle } from "./themes";
import LightBg from "./images/world_map_light.png";
import DarkBg from "./images/world_map.png";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import FeaturedPoolNext from "./pages/FeaturedPoolNext";
import VabFeatured from "./pages/VabFeatured";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Litepaper from "./pages/LitePaper";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Projects from "./pages/Projects";
import getPartiCiplesParams from "utils/getParticlesParams";
import Web3Modal from "./components/Web3Modal";
import store from "./state/index";
import { Provider } from "react-redux";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "./components/Web3ReactManager";
import Staking from "pages/Staking";

const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.sidebarBgColor};
`;

const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const getLibrary = (library: any) => {
    return new Web3Provider(library);
  };

  const particlesParams = getPartiCiplesParams(theme);

  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <StyledDiv>
            {/* <Router> */}
              <Particles params={particlesParams} />
              <div
                className="wrapper"
                style={{
                  backgroundImage: `url(${
                    theme === "light" ? LightBg : DarkBg
                  })`,
                }}
              >
                <Header /> 
                <Switch>
                  <Route exact path="/" component={() => <Homepage />} />
                  <Route
                    exact
                    path="/featured-pool-next/:id"
                    component={() => <FeaturedPoolNext />}
                  />
                  <Route
                    exact
                    path="/featured-pool-next"
                    component={() => <FeaturedPoolNext />}
                  />
                  <Route
                    exact
                    path="/vab-featured"
                    component={() => <VabFeatured />}
                  />
                  <Route
                    exact
                    path="/litepaper"
                    component={() => <Litepaper />}
                  />
                  <Route
                    exact
                    path="/policy"
                    component={() => <Privacy/>}
                  />
                  <Route
                    exact
                    path="/terms"
                    component={() => <Terms />}
                  />
                  <Route exact path="/projects">
                    <Projects />
                  </Route>
                  <Route exact path="/staking">
                  <Staking />
                </Route>
              </Switch>
              <Web3Modal />
              <Web3ReactManager />
              <Footer />
            </div>
            {/* </Router> */}
          </StyledDiv>
        </ThemeProvider>
      </Web3ReactProvider>
    </Provider>
  );
};

export default App;
