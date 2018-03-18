import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, DropdownButton, MenuItem, Modal, Image } from 'react-bootstrap';

import Avatar from 'react-avatar-edit'

import Api from './api'

class CustomerEdit extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.data = props.location.state ? props.location.state.data || {} : {}
        this.index = (props.location.state == undefined) ? -1 : props.location.state.index

        this.state = {
            id: this.data.id,
            username: this.data.username,
            email: this.data.email,
            mobile_phone: this.data.mobile_phone,
            tex_phone: this.data.tex_phone,
            fullname: this.data.fullname,
            description: this.data.description,
            address: this.data.address,
            avatar: this.data.profile_pic || "img/user/02.jpg",
            city: this.data.city,
            country: this.data.country,



            editAvatar: false,
            preview: null,
            image: "img/user/01.jpg",
        }
    }
    componentDidMount() {
    }

    submitProfile(e) {
        e.preventDefault()
        e.stopPropagation()

        Api.postCustomer(this.state, (err, res) => {
            console.log(err, res)
        })
    }

    closeModal() {
        this.setState({ editAvatar: false })
    }

    showModal() {
        this.setState({ editAvatar: true })
    }

    renderModal() {
        return (
            <Modal show={this.state.editAvatar} onHide={this.closeModal.bind(this)}>
                <div style={{ margin: 50 }}>
                    <Avatar
                        width={'100%'}
                        height={200}
                        onCrop={(preview) => this.setState({ preview })}
                        onClose={() => this.setState({ preview: "img/user/01.jpg" })}
                        src={this.state.image}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20 }}>
                        <Image src={this.state.preview} alt="Preview" />
                    </div>

                    <div className="text-center mt-lg pt-lg">
                        <Button className="btn btn-Default m-lg" style={{ width: 160 }} onClick={() => this.setState({ editAvatar: false })}>Cancel</Button>
                        <Button className="btn btn-primary m-lg" style={{ width: 160 }} onClick={() => {
                            this.setState({ avatar: this.state.preview, editAvatar: false })
                        }}>Done</Button>
                    </div>
                </div>

            </Modal>
        )
    }
    render() {
        var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);
        return (
            <ContentWrapper>
                <Row>
                    <Col md={4}>
                        <div className="panel panel-default">
                            <div className="panel-body text-center">
                                <div className="pv-lg">
                                    <Image src={this.state.avatar} alt="Contact" className="center-block img-responsive img-circle img-thumbnail thumb96" />
                                </div>
                                <h3 className="m0 text-bold">{this.state.fullname}</h3>
                                <div className="text-center mt"><a className="btn btn-primary" onClick={() => this.showModal()}>Change Avatar</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default hidden-xs hidden-sm">
                            <div className="panel-heading">
                                {/* <div className="pull-right">
                                    <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                                        <MenuItem eventKey="1">View Services</MenuItem>
                                        <MenuItem eventKey="2">View Transaction</MenuItem>
                                    </DropdownButton>
                                </div> */}
                                <div className="panel-title text-center">Business Information</div>
                            </div>
                            <div className="panel-body">
                                <div className="media">
                                    <div className="media-left media-middle">
                                        <a href="#">
                                            <img src="img/user/04.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                        </a>
                                    </div>
                                    <div className="media-body pt-sm">
                                        <div className="text-bold">Floyd Ortiz
                                     <div className="text-sm text-muted">12m ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle">
                                        <a href="#">
                                            <img src="img/user/05.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                        </a>
                                    </div>
                                    <div className="media-body pt-sm">
                                        <div className="text-bold">Luis Vasquez
                                     <div className="text-sm text-muted">2h ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle">
                                        <a href="#">
                                            <img src="img/user/06.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                        </a>
                                    </div>
                                    <div className="media-body pt-sm">
                                        <div className="text-bold">Duane Mckinney
                                     <div className="text-sm text-muted">yesterday</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle">
                                        <a href="#">
                                            <img src="img/user/07.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                        </a>
                                    </div>
                                    <div className="media-body pt-sm">
                                        <div className="text-bold">Connie Lambert
                                     <div className="text-sm text-muted">2 weeks ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <div className="h4 text-center">{this.index < 0 ? "Add New Customer" : "Edit Customer Profile"}</div>
                                <Row className="pv-lg">
                                    <Col lg={2}></Col>
                                    <Col lg={8}>
                                        <form className="form-horizontal" onSubmit={this.submitProfile.bind(this)} >
                                            <div className="form-group">
                                                <label htmlFor="inputContact1" className="col-sm-3 control-label text-nowrap">User Name<span className="text-danger">*</span></label>
                                                <div className="col-sm-9">
                                                    <input id="username" type="text" placeholder="" defaultValue={this.state.username}
                                                        onChange={(e) => this.setState({ username: e.target.value })} className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputContact1" className="col-sm-3 control-label text-nowrap">Name<span className="text-danger">*</span></label>
                                                <div className="col-sm-9">
                                                    <input id="fullname" type="text" placeholder="" defaultValue={this.state.fullname}
                                                        onChange={(e) => this.setState({ fullname: e.target.value })} className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputContact2" className="col-sm-3 control-label text-nowrap">Email<span className="text-danger">*</span></label>
                                                <div className="col-sm-9">
                                                    <input id="email" type="email" defaultValue={this.state.email}
                                                        onChange={(e) => this.setState({ email: e.target.value })} className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputContact3" className="col-sm-3 control-label text-nowrap">Tex Phone</label>
                                                <div className="col-sm-9">
                                                    <input id="tex_phone" type="text" defaultValue={this.state.tex_phone}
                                                        onChange={(e) => this.setState({ tex_phone: e.target.value })} className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputContact4" className="col-sm-3 control-label text-nowrap">Mobile Phone</label>
                                                <div className="col-sm-9">
                                                    <input id="mobile_phone" type="text" defaultValue={this.state.mobile_phone}
                                                        onChange={(e) => this.setState({ mobile_phone: e.target.value })} className="form-control" />
                                                </div>
                                            </div>
                                            {this.index < 0 && <div className="form-group">
                                                <label htmlFor="inputContact5" className="col-sm-3 control-label text-nowrap">Password</label>
                                                <div className="col-sm-9">
                                                    <input id="password" type="password" className="form-control" />
                                                </div>
                                            </div>}
                                            {this.index < 0 && <div className="form-group">
                                                <label htmlFor="inputContact5" className="col-sm-3 control-label text-nowrap">Confirm</label>
                                                <div className="col-sm-9">
                                                    <input id="confirm" type="password" className="form-control" />
                                                </div>
                                            </div>}
                                            <div className="form-group">
                                                <label htmlFor="inputContact6" className="col-sm-3 control-label">Address</label>
                                                <div className="col-sm-9">
                                                    <textarea id="inputContact6" rows="4" className="form-control" defaultValue={this.state.address}
                                                        onClick={(e) => this.setState({ address: e.target.value })}></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputContact7" className="col-sm-3 control-label">City</label>
                                                <div className="col-sm-9">
                                                    <input id="inputContact7" type="text" defaultValue={this.state.city}
                                                        onClick={(e) => this.setState({ city: e.target.value })} className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputContact8" className="col-sm-3 control-label">Country</label>
                                                <div className="col-sm-9">
                                                    <input id="inputContact8" type="text" defaultValue={this.state.country}
                                                        onClick={(e) => this.setState({ country: e.target.value })} className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-3 col-sm-9">
                                                    <button type="submit" className="btn btn-info">{this.isNew ? "Create" : "Update"}</button>
                                                </div>
                                            </div>
                                        </form>
                                        {this.index >= 0 && <div className="text-right"><a href="#" className="text-muted">Delete this customer?</a>
                                        </div>}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                {this.renderModal()}
            </ContentWrapper>
        );
    }

}

export default CustomerEdit;
