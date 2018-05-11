import React from 'react';
import {connect} from 'react-redux';
import GnomeDetails from '../../components/gnomeDetails/gnomeDetails';

class GnomePage extends React.Component{

    render(){
        return (
            <GnomeDetails/>
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


export default connect(mapStateToProps, mapDispatchToProps) (GnomePage);