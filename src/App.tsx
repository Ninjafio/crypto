import React from 'react';
import "./style/global.css"
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components/index'
import { IntroPage, TrendingBlock, CreatorsBlock, BrowseBlock, DiscoverBlock, IventBlock, HowBlock, JoinBlock, CreateBlock, WalletBlock, MarketPlaceBlock } from "./Pages/index"

function App() {
  return (
    <Routes>
    <Header/>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <IntroPage/>
          <TrendingBlock/>
          <CreatorsBlock/>
          <BrowseBlock/>
          <DiscoverBlock/>
          <IventBlock/>
          <HowBlock/>
          <JoinBlock/>
        </Route>
        <Route exact path="/wallet">
          <WalletBlock/>
        </Route>
        <Route exact path="/marketplace">
          <MarketPlaceBlock/>
        </Route>
        <Route exact path="/createAcc">
          <CreateBlock/>
        </Route>
        </Switch>
      </div>
      <Footer/>
    </Routes>
  );
}

export default App;
