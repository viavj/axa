import React from 'react';
import { connect } from 'react-redux';

import Gnome from '../../components/gnome/gnome';
import Loader from '../../components/Loader/Loader';
import * as actionCreators from '../../store/actionCreators';
import * as layoutTypes from '../../shared/UI/layoutTypes';
import './home.css';
import GnomeDetails from '../../components/gnomeDetails/gnomeDetails';
import Aux from '../../HOC/Aux';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleModal: false,
        }
        this.modal = React.createRef();
    }

    componentDidMount() {
        this.props.getGnomes();
        window.addEventListener('click', (e) => {
            if (e.target == this.modal.current) this.toggleModal();
        })
        window.addEventListener('scroll', this.onScroll);
    }

    // the data received
    componentWillReceiveProps(nextProps) {
        if (nextProps.gnomeReducer.gnomeList !== this.props.gnomeReducer.gnomeList)
            this.props.fetchGnomes();
    }

    // hide / show the modal 
    toggleModal = () => {
        this.setState((prevState) => {
            return { toggleModal: !prevState.toggleModal }
        }, () => {
            if (this.modal.current)
                this.modal.current.style.display = this.state.toggleModal ? 'block' : 'none';
        })
    }

    // infinite scroll
    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500))
            this.props.fetchGnomes();
    }

    // open modal to see details
    handleGnomeClick = (id) => {
        this.props.getGnome(id);
        this.toggleModal();
    }

    render() {

        const actionBar = <div className='actionBar'>
            <input onChange={(e) => this.props.fetchGnomes(e.target.value)} placeholder='Search by name' />
        </div>
        const _class = this.props.uiReducer.layoutType === layoutTypes.MOBILE ? 'flex-item-mobile' : 'flex-item-desktop';

        const gnomeDetails = <div ref={this.modal} id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={this.toggleModal} className="close">&times;</span>
                <div className="modal-body">
                    <div className='flex-container wrap'>
                        <GnomeDetails gnome={this.props.gnomeReducer.gnome} className={_class}/>
                    </div>
                </div>
            </div>
        </div>


        const gnomes = this.props.gnomeReducer.fetchedGnomes.length ?
            this.props.gnomeReducer.fetchedGnomes.map(gnome => {
                return <Gnome key={gnome.id}
                    gnome={gnome}
                    className={_class}
                    handleGnomeClick={() => this.handleGnomeClick(gnome.id)}
                />
            })
            : <Loader />


        return (
            <Aux>
                {gnomeDetails}
                {actionBar}
                <div className={'flex-container wrap padding-top'}>
                    {gnomes}
                </div>
            </Aux>
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
        getGnomes: () => dispatch(actionCreators.getGnomes()),
        getGnome: (id) => dispatch(actionCreators.getGnome(id)),
        fetchGnomes: (str) => dispatch(actionCreators.fetchGnomes(str)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);