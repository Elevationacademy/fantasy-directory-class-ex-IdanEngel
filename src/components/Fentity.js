import React, { Component } from 'react';
import '../styles/fentity.css'
import { Link } from 'react-router-dom'


class Fentity extends Component {
    render() {
        let fentity = this.props.state
        let fentityClass = this.props.match.params.name
        let fentitiesMatch = this.props.match.params.fentities
        let newFentity = fentity[fentitiesMatch].find(f => f.name === fentityClass)
        fentity = newFentity
        console.log(fentity)
        return (
            <div id="creature-container">
                <div><span><Link to={`/directory/${fentitiesMatch}`}>Back to {fentitiesMatch}</Link></span></div>
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
