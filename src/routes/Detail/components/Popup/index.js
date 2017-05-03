import React,{Component} from 'react';
import {Button,Modal,FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

export default class Popup extends Component{
  constructor(props){
    super(props);
    this.state ={
      showModal: false,
      user:'',
      pwd:''
    }
  }
  getValidationState() {
    const user = this.state.user;
    if (!!user) return 'success';
    else return 'error';
  }
  getPwdValidationState() {
    const p = this.state.pwd;
    if (!!p) return 'success';
    else return 'error';
  }
  handleChange(v,e) {
    this.setState({
      [''+v+'']: e.target.value
    });
  }
  handlePwdChange(v,e) {
    console.log(v);
    this.setState({ pwd: e.target.value });
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render(){
    let {children} = this.props;
    return(
      <span className="pull-right">

        <Button bsStyle="primary" bsSize="sm" onClick={this.open.bind(this)}>
          {children}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
                >
                <ControlLabel>User</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.user}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this,'user')}
                  />
                <FormControl.Feedback />
                <HelpBlock>User is required.</HelpBlock>
              </FormGroup>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getPwdValidationState()}
                >
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.state.pwd}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this,'pwd')}
                  />
                <FormControl.Feedback />
                <HelpBlock>User is required.</HelpBlock>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>取消</Button>
            <Button onClick={this.close.bind(this)}>登录</Button>
          </Modal.Footer>
        </Modal>
      </span>
    )
  }
}
