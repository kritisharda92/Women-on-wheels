import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../redux/actions/CustomerActions';
import Header from '../components/HeaderComponent'
import '../components/MoodComponent.css';
import { WoWAPI } from '../utils/WoWAPI';
/**
 * Maps the state variables required in RouteReact Component
 * @param  {Object} state the state object fetched from store
 * @return {Object}       object of state variables to be excessable in
 *                        RouteReact Component
 */
const mapStateToProps = function (state) {
    return {
        
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
        setLocations : customerActions.setLocations,    
    }, dispatch)
}

class Mood extends React.Component {

    constructor(){
        super();
        this.makeAChoice = this.makeAChoice.bind(this);
        this.searchViaLocation = this.searchViaLocation.bind(this);
        this.setLocation = this.setLocation.bind(this);
    }

    makeAChoice(mood, isSearchingViaLocation){
        
        let wowAPI = new WoWAPI();
        let self = this;

        wowAPI.getLocations(mood).then(function (result) {

            self.props.setLocations(result);
            hashHistory.push("/locations");
            

        }, function (err) {

            console.log("error");
        })
       
       
    }

    searchViaLocation(){
        //make api call
        hashHistory.push('/locations')
    }

    setLocation(e){
        this.setState({
            location: e
        })
    }

    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        return (
                <div className="mood-container">
                    <Header/>
                    <div className="mood-tile-container">
                        <div className='mood-tile' onClick={()=>this.makeAChoice('relax',false)}>
                            <img src={require("../images/pamper.jpeg")} className="pamper-image" />
                            <p className='mood-tile-title'><p className='mood-tile-title-sub'>Pamper Me</p></p>
                        </div>

                        <div className='mood-tile' onClick={()=>this.makeAChoice('adventure',false)}>
                            <img src={require("../images/adventure.jpg")} className="pamper-image" />
                            <p className='mood-tile-title'><p className='mood-tile-title-sub'>Adventure</p></p>
                        </div>

                        <div className='mood-tile' onClick={()=>this.makeAChoice('party',false)}>
                            <img src={require("../images/party.jpg")} className="pamper-image" />
                            <p className='mood-tile-title'><p className='mood-tile-title-sub'>Party</p></p>
                        </div>

                        <div className='mood-tile' onClick={()=>this.makeAChoice('romantic',false)}>
                            <img src={require("../images/romance.jpg")} className="pamper-image" />
                            <p className='mood-tile-title'><p className='mood-tile-title-sub'>Love Me!</p></p>
                        </div>

                        <div className='mood-tile' onClick={()=>this.makeAChoice('shopping',false)}>
                            <img src={require("../images/shopping.jpg")} className="pamper-image" />
                            <p className='mood-tile-title'><p className='mood-tile-title-sub'>Shopping</p></p>
                        </div>      
                    </div>
                    <div className="search-by-city">
                        <h1 className="search-by-city-title">OR</h1>
                        <input
                                className="search-by-city-input"
                                type="text"
                                placeholder="Enter City"
                                onChange={this.setLocation}
                                maxLength={50}
                        />
                        <button
                            className="search-button"  
                        >
                        Search
                        </button>
                    </div>    
                </div>
        )
    }
}


Mood = connect(mapStateToProps, mapDispatchToProps)(Mood);
export default Mood