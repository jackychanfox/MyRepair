import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination, Modal, DropdownButton, MenuItem } from 'react-bootstrap';

import Api from './api'

class Devices extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            viewDetail: false,
        }
    }

    componentDidMount() {
        // Api.getDeviceList((err, res)=>{

        // })
    }

    closeModal() {
        this.setState({ viewDetail: false })
    }

    showModal() {
        this.setState({ viewDetail: true })
    }

    onSubmit(e){
        e.preventDefault()
        e.stopPropagation()
        this.setState({ viewDetail: false })
    }
    renderModal() {
        var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);
        return (
            <Modal show={this.state.viewDetail} onHide={this.closeModal.bind(this)}>
                <div className="mt-lg p-lg">
                    {/* <div className="pull-right">
                        <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                            <MenuItem eventKey="1">Edit Order</MenuItem>
                            <MenuItem eventKey="2">Delete Order</MenuItem>
                        </DropdownButton>
                    </div> */}
                    <div className="h4 text-center">Device Information</div>
                    <Row className="pv-lg">
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <form className="form-horizontal" onSubmit={this.onSubmit.bind(this)} >
                                <div className="form-group">
                                    <label htmlFor="inputContact3" className="col-sm-3 control-label">Device</label>
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
                                    <div className="col-sm-offset-3 col-sm-9">
                                        <button type="submit" className="btn btn-info">Update</button>
                                        <button type="button" className="btn btn-default ml-lg" onClick={() => this.closeModal()}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-right"><a href="#" className="text-muted">Delete this Device?</a>
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
                <h3>Devices
                    <small>You can add, edit and delete devices</small>
                </h3>
                { /* START panel */}
                <div className="panel panel-default">
                    <div className="panel-heading">Device List</div>
                    { /* START table-responsive */}
                    <Table id="table-ext-1" responsive bordered hover>
                        <thead>
                            <tr>
                                <th>UID</th>
                                <th>Image</th>
                                <th>Device Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                                <th data-check-all="data-check-all">
                                    <div data-toggle="tooltip" data-title="Check All" className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/01.jpg" alt="Image" className="img-responsive" />
                                    </div>
                                </td>
                                <td>iPhone</td>
                                <td width="50%"><div style={{ maxWidth: 600, overflow: 'hidden' }}>laskjd sdlfkjsd fksdjf lsdkjf sldkjf skdjf lskdjf lskdjf lksjd fkjsdl fkjsl dkjflks djflk sdlkfj sldkf Hlskd jfesoi asdkjf asiflkm  aejkla eijalkj ijfalkef aijeflkje ia felsjf aiejflaskefj i9ajfe lai faejfi alekjf aieflj</div> </td>
                                <td className="text-nowrap">
                                    <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                    <Button className="btn btn-danger fa fa-trash btn-sm" />
                                </td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/02.jpg" alt="Image" className="img-responsive" />
                                    </div>
                                </td>
                                <td>Android</td>
                                <td width="50%"><div style={{ maxWidth: 600, overflow: 'hidden' }}>laskjd sdlfkjsd fksdjf lsdkjf sldkjf skdjf lskdjf lskdjf lksjd fkjsdl fkjsl dkjflks djflk sdlkfj sldkf Hlskd jfesoi asdkjf asiflkm  aejkla eijalkj ijfalkef aijeflkje ia felsjf aiejflaskefj i9ajfe lai faejfi alekjf aieflj</div> </td>
                                <td className="text-nowrap">
                                    <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                    <Button className="btn btn-danger fa fa-trash btn-sm" />
                                </td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/03.jpg" alt="Image" className="img-responsive" />
                                    </div>
                                </td>
                                <td>iPad</td>
                                <td width="50%"><div style={{ maxWidth: 600, overflow: 'hidden' }}>laskjd sdlfkjsd fksdjf lsdkjf sldkjf skdjf lskdjf lskdjf lksjd fkjsdl fkjsl dkjflks djflk sdlkfj sldkf Hlskd jfesoi asdkjf asiflkm  aejkla eijalkj ijfalkef aijeflkje ia felsjf aiejflaskefj i9ajfe lai faejfi alekjf aieflj</div> </td>
                                <td className="text-nowrap">
                                    <Button className="btn btn-info fa fa-search btn-sm" onClick={() => this.showModal()} />
                                    <Button className="btn btn-danger fa fa-trash btn-sm" />
                                </td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="panel-footer">
                        <Row>
                            <Col lg={2}>
                                <div className="input-group">
                                    <input type="text" placeholder="Search" className="input-sm form-control" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-sm btn-default">Search</button>
                                    </span>
                                </div>
                            </Col>
                            <Col lg={8}></Col>
                            <Col lg={2}>
                                <div className="input-group pull-right">
                                    <select className="input-sm form-control">
                                        <option value="0">Export</option>
                                        <option value="1">Delete</option>
                                        <option value="2">Clone</option>
                                    </select>
                                    <span className="input-group-btn">
                                        <button className="btn btn-sm btn-default">Apply</button>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {this.renderModal()}
            </ContentWrapper>
        );
    }

}

export default Devices;
