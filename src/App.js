import React from 'react';

import {Route,Switch,Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LandingPage from './components/pages/LandingPage';
import ScenariosPage from './components/pages/Scenarios';
import ScenarioPage from './components/pages/ScenarioPage';

import Adminpage from './admin/components/pages/adminpage';
import LoginPage from './components/pages/LoginPage';
import ApplyPage from './components/pages/ApplyPage';
import FAQPage from './components/pages/FAQPage';
import AdminBilgi from './admin/components/AdminBilgi';
import MainLayout from './components/MainLayout';
import AdminLayout from './components/AdminLayout';
import AppRoute from './components/AppRoute';
import PrivateRoute from './components/PrivateRoute';

export const history = createBrowserHistory();

function App() {
  
  return (
    
          <Router history={history}>
           
             <Switch>
                  <AppRoute exact path="/" layout={MainLayout} component={LandingPage}/>
                  <AppRoute exact path="/senaryo" layout={MainLayout}  component={ScenariosPage}/>
                  <AppRoute exact path ="/senaryo/:Id" layout={MainLayout} component={ScenarioPage}/>
                  <AppRoute exact path="/login" layout={MainLayout}  component ={LoginPage}/>
                  <AppRoute exact path="/applyform" layout={MainLayout} component={ApplyPage}/>
                  <AppRoute exact path="/faq" layout={MainLayout} component={FAQPage}/>
                  <PrivateRoute exact path="/admin" layout={AdminLayout}  component ={Adminpage}/>
                  <PrivateRoute exact path='/admin/bilgi' layout={AdminLayout} component={AdminBilgi}/>
             </Switch>
              
      
        </Router>

  );
}

export default App;
