import React from 'react';
import '../components/HomeComponent.css';
import Header from '../components/HeaderComponent'
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../redux/actions/CustomerActions';


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
        setLoginType : customerActions.setLoginType,    
    }, dispatch)
}

class Home extends React.Component {

    constructor(){
        super();
        this.goToLogin = this.goToLogin.bind(this);
    }

    goToLogin(whereTo){
        if(whereTo=='signUp'){
           this.props.setLoginType(false);
        }   
        else{
            this.props.setLoginType(true);
        }
        hashHistory.push('/login');
    }

    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        return (
                <div>
                <Header/>
                <div className="home-component">
                    
                    <div className='login-tile' onClick={()=>this.goToLogin('signUp')}>
                        <img src={require("../images/beAWoW.png")} className="" />
                        <p className='login-tile-title'><p>Be a WoW!</p></p>
                    </div>
                    <div className='login-tile' onClick={()=>this.goToLogin('login')}>
                        <img src={require("../images/alreadyAWoW.png")} className="already-a-wow" />
                        <p className='login-tile-title'><p>Already a WoW?</p></p>
                    </div>
                </div>
                </div>
        )
    }
}


Home = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home