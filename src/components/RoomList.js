
import React from 'react';
import { Link } from 'react-router-dom'

const RoomList = () => (
  <section className="roomlist">
  render() {
    return (

      this.state = {
    rooms: []
    this.roomsRef = this.props.firebase.database().ref('rooms');
  };

 componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
         const room = snapshot.val();
     room.key = snapshot.key;
     const room = snapshot.val();
     room.key = snapshot.key;
     this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }



              {
                this.state.rooms.map( (index) =>
               <li class= "" className="room" key={index} 
 				<div  class = "">{room.name)} </li>
 
             }

               </div>



            )
              }
              </tbody

  </section>
);

export default RoomList;