
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './Pages/App';
import LoginPage from './Pages/LoginPage';
export const history = createHistory();
console.log('Router', history);
const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/LoginPage" component={LoginPage} />
       
        </div>
    </Router>
);
export default Routes;

