import React, { Component } from "react";
import Header from "./Header";
import Box from "./atoms/Box";
import Select from "./atoms/Select";
import ReactHighcharts from "react-highcharts";

//config
import SalesChart from "../config/pieChart.config";
import ReportGraph from "../config/graphChart.config";

class Home extends Component {
    render() {
        let dataSelect = ["Period: Last week", "Period: Last month", "Period: Last year"];
        let userValue = JSON.parse(localStorage.getItem("user"));
        return (
            <div>
                <Header history={this.props.history} >
                <section>
                    <p>Hello, {userValue}!</p>
                    <div className="row activity m-0">
                        <div className="col-12 col-md-5 p-2">
                            <div className="sales">
                                <Box>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3>Your Sales</h3>
                                        <Select data={dataSelect}>
                                        </Select>
                                    </div>
                                    <ReactHighcharts config = {SalesChart}></ReactHighcharts>
                                </Box>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-2">
                            <div className="period">
                                <Box>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3>Report</h3>
                                        <Select data={dataSelect}>
                                        </Select>
                                    </div>
                                    <ReactHighcharts config = {ReportGraph}></ReactHighcharts>
                                </Box>
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