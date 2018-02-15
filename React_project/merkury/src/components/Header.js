import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="wrapp">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 navy p-0">
                            <aside>
                                <div className="logo"><img src="img/logo.png" alt="d" /></div>
                                <nav>
                                    <ul className="mainNav">
                                        <li><Link to="/home"><span className="fas fa-home"><span className="smallScreen">Home</span></span></Link></li>
                                        <li><Link to="/workflow"><span className="fas fa-bars"><span className="smallScreen">Workflow</span></span></Link></li>
                                        <li><Link to="/statistics"><span className="fas fa-chart-line"><span className="smallScreen">Statistics</span></span></Link></li>
                                    </ul>
                                </nav>
                            </aside>
                        </div>
                        <div className="col-10 mainContent p-0">
                            <header className="d-flex justify-content-between pr-3">
                                <div className="d-flex align-items-center">
                                    <div id="nav-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span className="fas fa-search"><input type="text" /></span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="/">+ Add project</a>
                                    <span className="fas fa-envelope ml-4"></span>
                                    <span className="fas fa-bell ml-4"></span>
                                    <div className="profileImg ml-4"></div>
                                </div>
                            </header>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;