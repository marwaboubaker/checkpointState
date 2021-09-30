import React, { Component } from 'react'
import "./profil.css"
// import img from './image.jpg'
export default class Profile extends Component {
    state={
        name : "marwa Boubaker" ,
        profession: 'Développeur Full-Stack React / Js',
        bio : "Développeur web et mobile depuis 2 ans, entrepreneur passionné, j'ai réalisé plusieurs projets web et mobiles pour des startups", 
        image: "./imageInPublic.jpeg",
        // photo : img
    }
    render() {
        return (
            <div className="sect">
                <div Id="section1"> 
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.profession}</h2>
                    <p>{this.state.bio}</p>
                </div>
                <div id="section2">
                 <img id="img" src = {this.state.image}/>
             {/* <img src= {this.state.photo}/> */}
                 </div>
            </div>
        )
    }
}
