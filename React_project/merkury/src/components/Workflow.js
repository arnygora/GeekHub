import React, { Component } from 'react';

class Workflow extends Component {
    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <p>To Do <span className="text-secondary">(6)</span>
                            <span className="fas fa-angle-right text-secondary float-right"><a href="#0"></a></span>
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">N</span>Dapibus ac facilisis ins
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">F</span>Vestibulum at eros rthrb
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">N</span>Vestibulum at eros fvr 44f
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">N</span>Vestibulum at eros fvr 44f
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">F</span>Vestibulum at eros rthrb
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">I</span>Vestibulum at eros 4fgrtb
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <p>In Progress <span className="text-secondary">(3)</span>
                            <span className="fas fa-angle-right text-secondary float-right"><a href="#0"></a></span>
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">N</span>Dapibus ac facilisis ins
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">D</span>Vestibulum at eros rthrb
                                <span className="far fa-clock d-block"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">B</span>Vestibulum at eros fvr 44f
                                <span className="far fa-clock d-block  text-danger"> 5 days left</span></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-10 col-lg-4 mx-auto">
                        <p>Completed <span className="text-secondary">(4)</span>
                            <span className="fas fa-angle-right text-secondary float-right"><a href="#0"></a></span>
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">N</span>Dapibus ac facilisis thmd
                                <span className="far fa-clock d-block text-success"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">D</span>Vestibulum at eros ervvr
                                <span className="far fa-clock d-block text-success"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">B</span>Vestibulum at erosr 44f
                                <span className="far fa-clock d-block text-success"> 5 days left</span></li>
                            <li className="list-group-item border mb-2">
                                <span className="bg-primary counter float-left">I</span>Vestibulum at gbrtn fvr 44f
                                <span className="far fa-clock d-block text-success"> 5 days left</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Workflow;