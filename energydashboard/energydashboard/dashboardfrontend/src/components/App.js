import React, {Component} from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.less';
import BasicLayout from "../containers/Layout";
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import BaseRouter from './routes';

class App extends Component {
    render() {
        return (

            <div className='APP'>
            {/* <RoleContext.Provider value={{ role, setRole: setRoles }}> */}
            {/* <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}> */}
                <Router>
                    <Switch>
                        <BasicLayout>
                            <BaseRouter />
                        </BasicLayout>
                    </Switch>
                </Router>
            {/* </AuthContext.Provider> */}
            {/* </RoleContext.Provider> */}
        </div>


        );

        }
}

ReactDOM.render(<App />, document.getElementById('app'));