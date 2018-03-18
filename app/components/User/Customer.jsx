import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';

import Api from './api'
class Customer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            customers: [],
            count: 0,
        }
    }

    componentDidMount() {
        Api.getCustomerList((err, res) => {
            console.log(err, res)
            this.setState({ count: res.total, customers: res.items })
        })
    }

    deleteItem(index) {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this customer!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
        ()=> {
            Api.deleteCustomer(this.state.customers[index].id, (err, res)=>{
                if ( err == null ){
                    this.state.customers.splice(index,1)
                    this.setState({customers:[...this.state.customers]})
                    swal("Deleted!", "The customer has been deleted.", "success");
                }
            })
        });
    }

    addCustomer(){
        this.props.history.push("customer-edit", {data:null, index: -1})
    }

    editItem(index){
        this.props.history.push("customer-edit", {data:this.state.customers[index], index: index})
    }

    render() {
        return (
            <ContentWrapper>
                <h3>Customer
                <small>You can check customers' profile and history</small>
                </h3>
                { /* START panel */}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div role="button" className="pull-right text-muted" onClick={()=>this.addCustomer()}>
                                    <em className="fa fa-plus text-muted mr"></em>Add</div>
                        Customer List
                    </div>
                    { /* START table-responsive */}
                    <Table id="table-ext-1" responsive bordered hover>
                        <thead>
                            <tr>
                                <th>UID</th>
                                <th>Avatar</th>
                                <th>Rating</th>
                                <th>User Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
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
                            {this.state.customers.map((item, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>
                                        <div className="media">
                                            <img src="img/user/01.jpg" alt="Image" className="img-responsive img-circle" />
                                        </div>
                                    </td>
                                    <td>3.7</td>
                                    <td>{item.username}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td><div className="text-nowrap">{item.mobile_phone}</div></td>
                                    <td>
                                        {item.city}
                                    </td>
                                    <td className="text-nowrap">
                                        <Button className="btn btn-info fa fa-search btn-sm" onClick={()=>this.editItem(index)}/>
                                        <Button className="btn btn-danger fa fa-trash btn-sm" onClick={() => this.deleteItem(index)} />
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
                            )}

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

            </ContentWrapper>
        );
    }

}

export default Customer;
