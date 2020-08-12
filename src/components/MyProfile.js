import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state={
    name:'',
    gender:'male',
    description:'',
    read:false
  };

  handleNameChange=event=>{
    this.setState({
      name:event.target.value
    })
  }
  handleDescriptionChange=event=>{
    this.setState({
      description:event.target.value
    })
  }
  handleGenderChange=event=>{
    this.setState({
      gender:event.target.value
    })
  }
  handleReadChange=event=>{
    this.setState({
      read:event.target.checked
    })
  }
  handleSubmit=event=>{
    event.preventDefault();
    console.log(this.state.name,this.state.gender,this.state.description);
  }
  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <p className='myprofile'>My Profile</p>
        <div>
          <p>Name</p>
          <input type='text' id='name'className='name' placeholder='Your name' value={this.state.name} onChange={this.handleNameChange}/>
        </div>
        <div>
          <p>Gender</p>
          <select className='gender' value={this.state.gender} onChange={this.handleGenderChange}>
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>
        <div>
          <p>Description</p>
          <textarea className='descripion' placeholder='Description about yourself' value={this.state.description} onChange={this.handleDescriptionChange}/>
        </div>
        <div>
          <input type="checkbox" value={this.state.read} onChange={this.handleReadChange}/><span className='read'>I have read the terms of product</span>
        </div>
        <div className="c">
          <button type='submit' className='submit' disabled={!this.state.name||!this.state.description||!this.state.read}>Submit</button>
        </div>
      </form>
    );
  }
}

export default MyProfile;


