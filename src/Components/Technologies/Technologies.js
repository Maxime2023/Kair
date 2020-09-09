import React, { Component } from 'react';
import "./Technologies.scss"
import sample from '../images/trailer.mp4';

class Technologies extends Component {
    render() {
        return (
            <div>
            {/* <div className="techno-wrapper">
                Techno
            </div>
            <div>
                Techno
            </div> */}
            <div >
                <video style={{width: "100%"}} className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
            </div>
        );
    }
}

export default Technologies;