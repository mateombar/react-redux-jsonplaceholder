import React from 'react';
import './styles/Error.css';
import ErrorImage from '../assets/error.svg';
const Error = (props) => (
    <div className="error center">
        <h3>An error has ocurred</h3>
        <h5>{props.message}</h5>
        <img src={ErrorImage} alt="Error image"/>
    </div>
)

export default Error;