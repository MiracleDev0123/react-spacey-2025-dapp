import { BrowserRouter, Switch, Route } from "react-router-dom";

import { locations } from "../../locations";
import { SignInPage as SignIn } from "../../pages/SignInPage";
import { HomePage as Home } from "../../pages/HomePage";
import { CommunityPage as Community } from "../../pages/CommunityPage";
import { InventoryPage as Inventory } from "../../pages/InventoryPage";
// import PollPage from "../../pages/PollPage";

// import { Web3ModalContext } from "../../contexts/Web3ModalProvider";

import { ItemDetails as Item } from "../../pages/ItemDetails";
import { NavBar } from "../NavBar";
import { GetSpay } from "../../pages/GetSpay";
import { AccountPage } from "../../pages/Account";
import { TestFaucetPage as Faucet } from "../../pages/TestFaucetPage";
import Market from "../../pages/Market/MarketPage";
import MarketItemDetail from "../../pages/Market/MarketItemDetail";

// import { Web3ModalContext } from '../../contexts/Web3ModalProvider';

const Routes = () => {
  // const { account } = useContext(Web3ModalContext);
  // const isConnected : boolean = account ? true : false;
  // if (!isConnected) {
  //   // TODO asset Page Link
  //   return (
  //     <BrowserRouter>
  //       <Switch>
  //         <Route exact path={locations.signIn()} component={SignIn} />
  //         <Redirect to={locations.root()} />
  //       </Switch>
  //     </BrowserRouter>
  //   )

  // }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={locations.root()} component={Home} />
        <Route exact path={locations.signIn()} component={SignIn} />
        <Route exact path={locations.home()} component={Home} />
        <Route exact path={locations.inventory()} component={Inventory} />
        <Route exact path={locations.community()} component={Community} />
        <Route exact path={locations.account()} component={AccountPage} />
        <Route exact path={locations.getSpay()} component={GetSpay} />
        <Route exact path={locations.faucet()} component={Faucet} />
        <Route exact path={locations.market()} component={Market} />
        <Route
          exact
          path={locations.marketDetail()}
          component={MarketItemDetail}
        />

        {/* <Route exact path={locations.proposals()} component={PollPage} /> */}

        <Route exact path={locations.item()} component={Item} />

        {/* <Redirect to={locations.home()} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
