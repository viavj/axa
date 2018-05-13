import * as actionTypes from '../actionTypes';
import axios from 'axios';
import endPoints from '../../shared/axios/endPoints';
import gnomeReducer from '../reducers/gnomeReducer';

export const getGnomes = () => {
    return (dispatch, getState) => {
        axios.get(endPoints.GET_GNOMES())
            .then(res => {
                dispatch({
                    type: actionTypes.GET_GNOMES,
                    gnomeList: res.data.Brastlewark
                })
            })
            .catch(err => console.log(err))
    }
}

// to see gnome's details 
export const getGnome = (id) => {
    return (dispatch, getState) => {
        const { gnomeReducer: { gnomeList } } = getState();
        const gnome = gnomeList.find(gnome => gnome.id === id);
        dispatch({
            type: actionTypes.GET_GNOME,
            gnome: gnome
        })
    }
}

/**
 * added additional array of gnomes 'filteredGnomes', because of infinite scroll
 * when u filter the data, and u have i.e. 300 results which u have to split into pages / infinite scroll
 * u need two sources: 1 - raw data (used by default), 2 - fitered data => 
 * which will be used to store those 300 filtered gnomes and pull them part by part
 */
export const fetchGnomes = (str) => {
    return (dispatch, getState) => {
        const { gnomeReducer: { searchString, filteredGnomes, fetchedGnomes, gnomeList, gnomesPerPage } } = getState();
        let _fetchedGnomes = [],
            _filteredGnomes = filteredGnomes,
            _searchString = str !== undefined ? str : searchString;
        //  user typed something
        if (str) {
            _filteredGnomes = gnomeList.filter(gnome => gnome.name.includes(str))
            _fetchedGnomes = _filteredGnomes.slice(0, gnomesPerPage)
        }
        // function is called by due to the scrolling and filter is still applied
        else if (_searchString) {
            _fetchedGnomes = fetchedGnomes.concat(filteredGnomes.slice(fetchedGnomes.length, fetchedGnomes.length + gnomesPerPage))
        }
        // user removed the filter, it's '' an empty string
        else if (str !== undefined) {
            _fetchedGnomes = gnomeList.slice(0, gnomesPerPage)
            _filteredGnomes = []
        }
        // just adding more gnomes to the list due to the scrolling
        else {
            _fetchedGnomes = fetchedGnomes.concat(gnomeList.slice(fetchedGnomes.length, fetchedGnomes.length + gnomesPerPage))
        }
        dispatch({
            type: actionTypes.FETCH_GNOMES,
            fetchedGnomes: _fetchedGnomes,
            filteredGnomes: _filteredGnomes,
            searchString: _searchString
        })
    }
}
