import React from 'react';
import '../components/PageNotFoundComponent.css';

class PageNotFound extends React.Component {

    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        return (
                <div>
                    <div className='page-not-found-container'>
                        <p className='error-title'>Page Not Found</p>
                        <p className='error-desc'>The page address you have entered may have moved or does not exist.</p>
                    </div>
                </div>
        )
    }
}
export default PageNotFound;
