import React from 'react';
import {connect} from 'react-redux';
import Gnome from '../../components/gnome/gnome';

class Home extends React.Component{

    render(){
        return (
            <Gnome/>
        )
    }
}

const mapStateToProps = state => {
    return {
        uiReducer: state.uiReducer,
        gnomeReducer: state.gnomeReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGnomes: () => dispatch()
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);