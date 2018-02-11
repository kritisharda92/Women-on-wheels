import React from 'react';
import '../components/HeaderComponent.css';


class Header extends React.Component {

    
    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        return (
                <div className="header-component">
                    <p className="header-component-content">
                        <span className="header-title-abbr">W</span>
                        <span >
                            <img className="header-image" src={require("../images/wheel")} />
                            </span>
                        <span className="header-title-abbr">W</span>
                    </p>
                    <p className="header-title">Women On Wheels</p>
                </div>
        )
    }
}

export default Header;