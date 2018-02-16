import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header>
                <section>
                    <p>Hello Anthony</p>
                    <div className="row activity m-0">
                        <div className="col-12 col-md-5 p-2">
                            <div className="sales">
                                <div className="d-flex align-items-center justify-content-between flex-wrap p-3">
                                    <p className="m-0">Your Sales</p>
                                    <select name="salesPeriod" id="sales">
                                        <option value="year">Period: Last Year</option>
                                        <option value="month">Period: Last Month</option>
                                        <option value="week">Period: Last Week</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center m-0">
                                    <div><img className="circleImg" src="img/report.jpg" alt="f" /></div>
                                    <ul className="description">
                                        <li>Websites</li>
                                        <li>Logo</li>
                                        <li>Social Media</li>
                                        <li>Adwords</li>
                                        <li>E-Commerce</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-2">
                            <div className="period">
                                <div className="d-flex align-items-center justify-content-between flex-wrap p-3">
                                    <p className="m-0">Report</p>
                                    <select title="sel" name="salesPeriod" id="report">
                                        <option value="year">Period: Last Year</option>
                                        <option value="month">Period: Last Month</option>
                                        <option value="week">Period: Last Week</option>
                                    </select>
                                </div>
                                <div><img src="img/sales.jpg" alt="ef" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Tasks<span className="bg-info counter float-right">5</span><span className="bg-danger counter float-right">2</span></li>
                                    <li className="list-group-item d-flex align-items-center"><span className="bg-info counter float-left">N</span>Dapibus ac facilisis ins</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="bg-info counter float-left">F</span>Vestibulum at eros</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="bg-info counter float-left">N</span>Vestibulum at eros</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="bg-info counter float-left">F</span>Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Messages<span className="bg-info counter float-right">2</span></li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto"></span>Dapibus ac facilisis in</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto"></span>Vestibulum at eros</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto"></span>Vestibulum at eros</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto"></span>Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 mx-auto mb-3">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Activity<span className="bg-info counter float-right">10</span></li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto2"></span>Dapibus ac facilisis in</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto2"></span>Vestibulum at eros</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto2"></span>Vestibulum at eros</li>
                                    <li className="list-group-item d-flex align-items-center"><span className="userPhoto2"></span>Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                </Header>
            </div>
        );
    }
}

export default Home;