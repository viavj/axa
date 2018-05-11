import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import * as routes from '../shared/navigation/routes';

import Home from './home/home';
import GnomePage from './gnomePage/gnomePage';

class Layout extends React.Component {

    render() {
        return (
            <Switch>
                <Route path={routes.BASE} exact component={Home} />
                <Route path={`${routes.GNOME_PAGE}/:id`} component={GnomePage} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        uiReducer: state.uiReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));