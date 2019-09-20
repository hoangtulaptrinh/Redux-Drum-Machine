import React from 'react';
import './App.css'

import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { FaDrum } from 'react-icons/fa';
import className from 'classnames'
import { CustomInput, FormGroup, Label } from 'reactstrap';

import * as actions from './actions/index';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props)
    this.on = this.on.bind(this);
    this.audio = this.audio.bind(this);
    this.setKeyCode = this.setKeyCode.bind(this);
    this.volume = this.volume.bind(this);
  }

on(){
  this.props.ChangePower();
}

audio(sukien){
  for( let i = 0 ; i < 9 ; i ++ )
  {
    if( this.props.SourceSound[i].name === sukien.target.value && this.props.Power)
    {
      var audio = new Audio(this.props.SourceSound[i].url);
      audio.volume = this.props.Volume/100;
      this.props.ChangeDisplay(this.props.SourceSound[i].display)
      return audio.play();
    }
    else if(this.props.Power === false)
    {
      return -1;
    }
  }
}

componentDidMount() {
  document.addEventListener("keydown", this.setKeyCode);
}

componentWillUnmount() {
  document.removeEventListener('keydown', this.setKeyCode);
}

setKeyCode(sukien){
  for( let i = 0 ; i < 9 ; i ++ )
  {
    if( this.props.SourceSound[i].keyCode === sukien.keyCode && this.props.Power)
    {
      var audio = new Audio(this.props.SourceSound[i].url);
      audio.volume = this.props.Volume/100;
      this.props.ChangeDisplay(this.props.SourceSound[i].display)
      return audio.play();
    }
    if(this.props.Power === false || i>8)
    {
      return -1;
    }
  }
}

volume(sukien){ 
  this.props.ChangeVolume(sukien.target.value);
}

  render() {
    const { Display,Power } = this.props;
    if(Power === false){
      this.props.Off()
    }
    return (
      <Container id="drum-machine">
        <Container className='total-drum'>
        <Row>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='Q' >Q</Button>{' '}</Col>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='W' >W</Button>{' '}</Col>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='E' >E</Button>{' '}</Col>
        </Row>
        <Row>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='A' >A</Button>{' '}</Col>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='S' >S</Button>{' '}</Col>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='D' >D</Button>{' '}</Col>
        </Row>
        <Row>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='Z' >Z</Button>{' '}</Col>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='X' >X</Button>{' '}</Col>
          <Col sm='4'><Button className = 'drum-pad' color="secondary" onClick={this.audio} value ='C' >C</Button>{' '}</Col>
        </Row>
        </Container>
        <div id='display'>
          <div id='title'>
            <p> Drum Simulater <FaDrum /> </p>
          </div>
          <div id='total-on-off'>
            <h3>Power</h3>
            <div id='on-off1' onClick = {this.on}>
               <div className={className('on-off',{'on': Power === true})}/>
               <div className={className('on-off',{'on': Power === false})}/>
            </div>
          </div>
          <div id='screen'>
          {Display}
          </div>
          <FormGroup id='form'>
          <Label for="exampleCustomRange" className='label'>Volume</Label>
          <CustomInput id='volume-value'
          onChange = {this.volume}
          type="range" id="exampleCustomRange" name="customRange" className='volume'/>
        </FormGroup>
        </div>
      </Container>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    Power : state.Power,
    Volume : state.Volume,
    Display : state.Display,
    SourceSound : state.SourceSound
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    ChangePower : () =>  dispatch(actions.Power()),
    ChangeVolume : (value) =>  dispatch(actions.Volume({value : value})),
    ChangeDisplay : (value) => dispatch(actions.Display({value : value})),
    Off : () => dispatch(actions.Off())
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (App);