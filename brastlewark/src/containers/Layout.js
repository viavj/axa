import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import './Layout.css';
import Home from './home/home';

class Layout extends React.Component {

    componentWillMount() {
        this.props.getLayoutType();
    }

    render() {
        return (
            <Home/>
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
        getLayoutType: () => dispatch(actionCreators.getLayoutType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);