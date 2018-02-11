import React, { Component } from 'react';
import {Router, Route, hashHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './../../components/HomeComponent';
import Locations from './../../components/LocationsComponent';
import PageNotFound from './../../components/PageNotFoundComponent';
import LoginSignUp from './../../components/LoginSignUpComponent';
import Area from './../../components/AreasComponents';
import Mood from './../../components/MoodComponent';
/**
 * Maps the state variables required in RouteReact Component
 * @param  {Object} state the state object fetched from store
 * @return {Object}       object of state variables to be excessable in
 *                        RouteReact Component
 */
const mapStateToProps = function(state){
  return {
  }
}

/**
 * Maps the dispatcher with the actions required in RouteReact Component
 * @param  {function} dispatch the function to dispatch an action to trigger a
 *                             state change.
 * @return {Object}            object of action functions
 */
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
  }, dispatch)
}

/**
 * This Component defines the route paths and their matching components for
 * navigation purposes
 */
class RouteReact extends Component {

  /**
   * This function returns a single React element to be displayed in RouteReact
   * component
   * @return {Router} a Router react component displaying a matching component
   * based on the URL path
   */
  render() {

    return(
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={LoginSignUp}/>
        <Route path="/mood" component={Mood}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/area" component={Area}/>
        <Route path="*" component={PageNotFound}/>
      </Router> 
    );
  }
}


RouteReact = connect(mapStateToProps, mapDispatchToProps)(RouteReact);
export default RouteReact;
