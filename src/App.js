import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import "./App.css";


//Function to shuffle pictures - 
function randomizePics(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [array[i], array[k]] = [array[k], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    friendsClicked: []
  };

  //To handle "clicking" of friends
  clickedPic = id => {
    //Variables to be updated
    let friendsClicked = this.state.friendsClicked;

    //Handle clicked image- if not clicked, continue, if clicked, reset score
    if (friendsClicked.indexOf(id) === -1) {
      this.handleIncrement();
      //Store id in 'clicked array'
      friendsClicked.push(id)
      //randomize pics
      // .then(randomizePics(friends));
      this.randomize();
    } else {
      this.setState({
        score: 0,
        friendsClicked: []
      });
      alert("You clicked the same one twice!")
    }
  }

  //randomize pictures
  randomize = () => {
    this.setState({ friends: randomizePics(friends) })
  };
  //Increase score
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 })
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          title="Clicky Game"
          score={this.state.score}
        />

        <Title></Title>

        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clickedPic={this.clickedPic}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
