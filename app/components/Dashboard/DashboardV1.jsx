import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';
import DashboardRun from './DashboardV1.run';

class DashboardV1 extends React.Component {

    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
    }

    componentWillUnmount() {
        $(this.refs.chartSpline).data('plot').shutdown();
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    { /* START Language list */}
                    <div className="pull-right">
                        <Dropdown id="dropdown-tr" pullRight>
                            <Dropdown.Toggle>
                                English
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="animated fadeInUpShort">
                                <MenuItem eventKey="1" data-set-lang="en">English</MenuItem>
                                <MenuItem eventKey="2" data-set-lang="es">Spanish</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    { /* END Language list */} Dashboard
                    <small data-localize="dashboard.WELCOME">Welcome to MyRepair!</small>
                </div>
                { /* START widgets box */}
                <Row>
                    <Col lg={3} sm={6}>
                        { /* START widget */}
                        <div className="panel widget bg-primary">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-primary-dark pv-lg">
                                    <em className="fa fa-mobile fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">6</div>
                                    <div className="text-uppercase">Devices</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        { /* START widget */}
                        <div className="panel widget bg-purple">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-purple-dark pv-lg">
                                    <em className="fa fa-cog fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">20</div>
                                    <div className="text-uppercase">Makes</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        { /* START widget */}
                        <div className="panel widget bg-green">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-green-dark pv-lg">
                                    <em className="fa fa-cogs fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">125</div>
                                    <div className="text-uppercase">Models</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        { /* START widget */}
                        <div className="panel widget bg-purple">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-purple-dark pv-lg">
                                    <em className="fa fa-shopping-cart fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">1723</div>
                                    <div className="text-uppercase">Services</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                { /* END widgets box */}
                <Row>
                    { /* START dashboard main content */}
                    <Col lg={9}>
                        { /* START chart */}
                        <Row>
                            <Col lg={12}>
                                { /* START widget */}
                                <div id="panelChart9" className="panel panel-default">
                                    <div className="panel-heading">
                                        <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" className="pull-right">
                                            <em className="fa fa-refresh"></em>
                                        </a>
                                        <div className="panel-title">Inbound visitor statistics</div>
                                    </div>
                                    <div className="panel-body">
                                        <div ref="chartSpline" className="chart-spline flot-chart"></div>
                                    </div>
                                </div>
                                { /* END widget */}
                            </Col>
                        </Row>
                        { /* END chart */}
                        <Row>
                            <Col lg={4}>
                                { /* START widget */}
                                <div className="panel widget">
                                    <div className="panel-body">
                                        <div className="clearfix">
                                            <h3 className="pull-left text-muted mt0">Earning</h3>
                                            <em className="pull-right text-muted fa fa-money fa-2x"></em>
                                        </div>
                                    </div>
                                </div>
                                { /* END widget */}
                            </Col>
                            <Col lg={8}>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="pull-right label label-danger">5</div>
                                        <div className="pull-right label label-success">12</div>
                                        <div className="panel-title">Top Vendors</div>
                                    </div>
                                    { /* START list group */}
                                    <div data-height="180" data-scrollable="" className="list-group">
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/02.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">2h</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-success circle-lg text-left"></span>Catherine Ellis</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/03.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">3h</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-success circle-lg text-left"></span>Jessica Silva</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/09.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">4h</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-danger circle-lg text-left"></span>Jessie Wells</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/12.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">1d</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-danger circle-lg text-left"></span>Rosa Burke</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/10.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">2d</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-danger circle-lg text-left"></span>Michelle Lane</strong>
                                                    <p className="mb-sm">
                                                        <small>Mauris eleifend, libero nec cursus lacinia...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                    </div>
                                    { /* END list group */}
                                    { /* START panel footer */}
                                    <div className="panel-footer clearfix">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search message .." className="form-control input-sm" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="btn btn-default btn-sm"><i className="fa fa-search"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    { /* END panel-footer */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    { /* END dashboard main content */}
                    { /* START dashboard sidebar */}
                    <Col lg={3}>
                        { /* START loader widget */}
                        { /* END loader widget */}
                        { /* START messages and activity */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">Latest Orders</div>
                            </div>
                            { /* START list group */}
                            <div className="list-group">
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-purple"></em>
                                                <em className="fa fa-cloud-upload fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">15m</small>
                                            <div className="media-box-heading"><a href="#" className="text-purple m0">NEW FILE</a>
                                            </div>
                                            <p className="m0">
                                                <small><a href="#">Bootstrap.xls</a>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-info"></em>
                                                <em className="fa fa-file-text-o fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">2h</small>
                                            <div className="media-box-heading"><a href="#" className="text-info m0">NEW DOCUMENT</a>
                                            </div>
                                            <p className="m0">
                                                <small><a href="#">Bootstrap.doc</a>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-danger"></em>
                                                <em className="fa fa-exclamation fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">5h</small>
                                            <div className="media-box-heading"><a href="#" className="text-danger m0">BROADCAST</a>
                                            </div>
                                            <p className="m0"><a href="#">Read</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-danger"></em>
                                                <em className="fa fa-exclamation fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">5h</small>
                                            <div className="media-box-heading"><a href="#" className="text-danger m0">BROADCAST</a>
                                            </div>
                                            <p className="m0"><a href="#">Read</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-danger"></em>
                                                <em className="fa fa-exclamation fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">5h</small>
                                            <div className="media-box-heading"><a href="#" className="text-danger m0">BROADCAST</a>
                                            </div>
                                            <p className="m0"><a href="#">Read</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-success"></em>
                                                <em className="fa fa-clock-o fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">15h</small>
                                            <div className="media-box-heading"><a href="#" className="text-success m0">NEW MEETING</a>
                                            </div>
                                            <p className="m0">
                                                <small>On
                                                                   <em>10/12/2015 09:00 am</em>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                                { /* START list group item */}
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-warning"></em>
                                                <em className="fa fa-tasks fa-stack-1x fa-inverse text-white"></em>
                                            </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">1w</small>
                                            <div className="media-box-heading"><a href="#" className="text-warning m0">TASKS COMPLETION</a>
                                            </div>
                                            <div className="progress progress-xs m0">
                                                <div role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={{ width: "22%" }} className="progress-bar progress-bar-warning progress-bar-striped">
                                                    <span className="sr-only">22% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */}
                            </div>
                            { /* END list group */}
                            { /* START panel footer */}
                            <div className="panel-footer clearfix">
                                <a href="#" className="pull-left">
                                    <small>Load more</small>
                                </a>
                            </div>
                            { /* END panel-footer */}
                        </div>
                        { /* END messages and activity */}
                    </Col>
                    { /* END dashboard sidebar */}
                </Row>
            </ContentWrapper>
        );

    }

}

export default DashboardV1;
