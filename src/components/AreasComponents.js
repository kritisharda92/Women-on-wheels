
import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBdHxOCuRFWk8bo7tCGlSTU_dFE0cKQ980'
});
/**
 * Maps the state variables required in RouteReact Component
 * @param  {Object} state the state object fetched from store
 * @return {Object}       object of state variables to be excessable in
 *                        RouteReact Component
 */

 
							
 
class Area extends React.Component {

    constructor(props){
    
        super(props);

        this.getLatLong = this.getLatLong.bind(this);
    
    }

    getLatLong(){
       // Geocode an address.
    googleMapsClient.geocode({
        address: '14623'
    }, function(err, response) {
        if (!err) {
            console.log(response.json.results);
            var lat = response[0].geometry.location.lat();
            var lng = response[0].geometry.location.lng();
            console.log(lat)
            console.log(lng)
        }

    });
        
    }


    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        this.getLatLong();
        console.log(this.props.loginType);
        return (
                <div>
                   
                </div>
        )
    }
}


export default Area