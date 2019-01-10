import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        let fentityMatch = this.props.match.params.fentities
        let fentities = this.props.state[fentityMatch]
        console.log(fentities)
        return (
            <div>
                <h1 id="fentities-title">{fentityMatch}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <Link to={`/directory/${fentityMatch}/${f.name}`}>
                            <div className="mini">
                                <img className="directory-img" src={f.imgUrl} alt="" />
                                <span>{f.name}</span>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities