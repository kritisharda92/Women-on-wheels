import React from 'react';
import '../components/LocationsComponent.css';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../redux/actions/CustomerActions';
import { WoWAPI } from '../utils/WoWAPI';
import { setCustomer } from '../redux/actions/CustomerActions';
/**
 * Maps the state variables required in RouteReact Component
 * @param  {Object} state the state object fetched from store
 * @return {Object}       object of state variables to be excessable in
 *                        RouteReact Component
 */
const mapStateToProps = function (state) {
    console.log(state)
    return {
        locations: state.locations
    }
}

/**
 * Maps the dispatcher with the actions required in RouteReact Component
 * @param  {function} dispatch the function to dispatch an action to trigger a
 *                             state change.
 * @return {Ogject}            object of action functions
 */
const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        setWoman : customerActions.setCustomer
    }, dispatch)
}


class Locations extends React.Component {

    constructor(props){
        console.log(props);
        super(props);
        this.state ={
            l: [
                {
                    image: require("../images/login.png"),
                    location:{
                        city:"Rochester",
                        state:"NY"
                    },
                    safety:72
                },
                {
                    image:require("../images/login.png"),
                    location:{
                        city:"Rochester",
                        state:"NY"
                    },
                    safety:72
                },
                {
                    image:require("../images/login.png"),
                    location:{
                        city:"Rochester",
                        state:"NY"
                    },
                    safety:72
                },
                {
                    image:require("../images/login.png"),
                    location:{
                        city:"Rochester",
                        state:"NY"
                    },
                    safety:72
                }
            ]
        }
        this.createLocationRows = this.createLocationRows.bind(this);
        this.goToArea = this.goToArea.bind(this);
    }

    goToArea(){
        hashHistory.push('/area');
    }

    createLocationRows(){
        
        return this.props.locations
        .map((location, index) =>
            <div className='location-row' key={index} onClick={()=>this.goToArea()}>
                <div style={{backgroundImage: "url(" + location.image + ")",backgroundSize: 'cover', backgroundPosition: 'center', height:'100%',width:150, float:'left' }}/>
                <div className='location-details'>
                    <p className='location-details-state'>{location.name}, {location.state}</p>
                    <p>Safety Index:  {location.safety}</p>
                </div>
            </div>
        );
    }


    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        console.log(this.props.loginType);
        return (
                <div>
                    {this.createLocationRows()}
                </div>
        )
    }
}

Locations = connect(mapStateToProps, mapDispatchToProps)(Locations);
export default Locations