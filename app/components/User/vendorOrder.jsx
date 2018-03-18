import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination, Modal, DropdownButton, MenuItem } from 'react-bootstrap';

class VendorOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            viewDetail: false,
        }
    }

    componentDidMount() {
    }

    closeModal() {
        this.setState({ viewDetail: false })
    }

    showModal() {
        this.setState({ viewDetail: true })
    }

    renderModal() {
        var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);
        return (
            <Modal show={this.state.viewDetail} onHide={this.closeModal.bind(this)}>
                <div className="mt-lg p-lg">
                    <div className="pull-right">
                        <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                            <MenuItem eventKey="1">Edit Order</MenuItem>
                            <MenuItem eventKey="2">Delete Order</MenuItem>
                        </DropdownButton>
                    </div>
                    <div className="h4 text-center">Order Information</div>
                    <Row className="pv-lg">
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="inputContact1" className="col-sm-3 control-label">Vendor</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact1" type="text" placeholder="" defaultValue="Audrey Hunt" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact2" className="col-sm-3 control-label">Customer</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact2" type="email" defaultValue="Audrey Hunt" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact3" className="col-sm-3 control-label">Device</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact3" type="text" defaultValue="iPhone" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact4" className="col-sm-3 control-label">Make</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact4" type="text" defaultValue="iPhone X" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact5" className="col-sm-3 control-label">Model</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact5" type="text" defaultValue="SN5234" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact5" className="col-sm-3 control-label">Service</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact5" type="text" defaultValue="Storage" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact6" className="col-sm-3 control-label">Description</label>
                                    <div className="col-sm-9">
                                        <textarea id="inputContact6" rows="4" className="form-control" defaultValue="reason, when, etc..."></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact7" className="col-sm-3 control-label">Price</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact7" type="text" defaultValue="$ 100" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContact8" className="col-sm-3 control-label">Status</label>
                                    <div className="col-sm-9">
                                        <input id="inputContact8" type="text" placeholder="fixed" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-9">
                                        <button type="submit" className="btn btn-info">Update</button>
                                        <button className="btn btn-default ml-lg" onClick={()=>this.closeModal()}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-right"><a href="#" className="text-muted">Delete this order?</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal>
        )
    }
    
    render() {
        return (
            <ContentWrapper>
                <h3>Tedd Evans's Order
                </h3>
                <Row>
                    <Col lg={12}>
                        { /* START panel */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" className="pull-right">
                                    <em className="fa fa-refresh"></em>
                                </a>Search Results</div>
                            { /* START table-responsive */}

                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Sevice</th>
                                        <th>Customer</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Booking</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Display</td>
                                        <td>Otto</td>
                                        <td>$100.0</td>
                                        <td><span className="label label-primary">awaiting</span></td>
                                        <td>10 Jul, 2017 3:45 AM</td>
                                        <td>
                                            <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                            <Button className="btn btn-danger fa fa-trash btn-sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Broken</td>
                                        <td>Thornton</td>
                                        <td>$100.0</td>
                                        <td><span className="label label-danger">cancel</span></td>
                                        <td>10 Jul, 2017 3:45 AM</td>
                                        <td>
                                            <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                            <Button className="btn btn-danger fa fa-trash btn-sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Connection</td>
                                        <td>the Bird</td>
                                        <td>$100.0</td>
                                        <td><span className="label label-success">fixed</span></td>
                                        <td>10 Jul, 2017 3:45 AM</td>
                                        <td>
                                            <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                            <Button className="btn btn-danger fa fa-trash btn-sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Wifi</td>
                                        <td>Otto</td>
                                        <td>$100.0</td>
                                        <td><span className="label label-primary">awaiting</span></td>
                                        <td>10 Jul, 2017 3:45 AM</td>
                                        <td>
                                            <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                            <Button className="btn btn-danger fa fa-trash btn-sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Broken</td>
                                        <td>Thornton</td>
                                        <td>$100.0</td>
                                        <td><span className="label label-danger">cancel</span></td>
                                        <td>10 Jul, 2017 3:45 AM</td>
                                        <td>
                                            <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                            <Button className="btn btn-danger fa fa-trash btn-sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Connection</td>
                                        <td>the Bird</td>
                                        <td>$100.0</td>
                                        <td><span className="label label-success">fixed</span></td>
                                        <td>10 Jul, 2017 3:45 AM</td>
                                        <td>
                                            <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                            <Button className="btn btn-danger fa fa-trash btn-sm" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            { /* END table-responsive */}
                            <div className="panel-footer">
                                <Row>
                                    <Col lg={2}>
                                        <button className="btn btn-sm btn-default">Clear</button>
                                    </Col>
                                    <Col lg={7}></Col>
                                    <Col lg={3} className="text-right">
                                        <Pagination bsSize="small" prev next items={3} maxButtons={5} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        { /* END panel */}
                    </Col>
                    
                </Row>
                {this.renderModal()}
            </ContentWrapper>
        );
    }

}

export default VendorOrder;
