import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Product from "./pages/Product";
import OneProduct from "./pages/OneProduct";
import ProductSettingsDetails from "./pages/ProductSettingsDetails";
import Cabinet from "./pages/Cabinet";
import CabinSettings from "./pages/CabinSettings";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance"

class App extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h1 className={'my-5'}>React Routing</h1>
                    <Link to={'/product'}
                          className={'bg-dark text-white p-2 rounded text-decoration-none'}>Product</Link>
                    <Link to={'/cabinet'}
                          className={'bg-info mx-5 text-white p-2 rounded text-decoration-none'}>Cabinet</Link>
                </div>

                <Switch>
                    <Route path={'/product/:id/settings/details/:num?'} component={ProductSettingsDetails}/>
                    <Route path={'/product/:id'} component={OneProduct}/>
                    <Route path={'/product'} component={Product}/>

                    <Route path={'/cabinet/dashboard/balance'} component={Balance}/>
                    <Route path={'/cabinet/dashboard'} component={Dashboard}/>
                    <Route path={'/cabinet/settings'} component={CabinSettings}/>
                    <Route path={'/cabinet'} component={Cabinet}/>
                </Switch>
            </div>
        );
    }
}

export default App;