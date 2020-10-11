import React from 'react';
import './App.css';

class Photo extends React.Component{
  render(){
      return (
          <>
              <img className="picture" src={this.props.photo}/>
          </>
      )
  }
}

class Bio extends React.Component{
  render(){
      return (
          <>
              <div className="bio"><b>{this.props.name}</b></div>
              <div className="bio">{this.props.profession}</div>
              <div className="bio">{this.props.age} Years Old</div>
          </>
      )
  }
}

class Card extends React.Component{
  render(){
      return (
          <div className="card">
              <Photo photo={this.props.photo}/>
              <Bio name={this.props.name} profession={this.props.profession} age={this.props.age}/>
          </div>
      )
  }
}

class Profile extends React.Component {
  render() {
      const data = [
          { name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" }, 
          { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" }, 
          { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" }, 
          { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
      ]

      return (
          <div className="page">
              {data.map(el => {
                  return (
                      <Card photo={el.photo} name={el.name} profession={el.profession} age={el.age} />
                  )
              })}
          </div>
      )
  }
}

function App() {
  return (
    <>
      <Profile />
    </>
  );
}

export default App;