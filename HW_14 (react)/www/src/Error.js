import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <div>
                <div className="error-block">
                    <div className="error-block_text">
                        <p>404</p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="error-block_description">
                        <img src="img/404.jpg" alt="error" />
                        <p className="upper-text">oops!!!</p>
                        <p>The page you are looking for cannot found</p>
                        <a className="btn-style" href="/">back to home page</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Error;