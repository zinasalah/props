import React from 'react'
import PropTypes from "prop-types";

function User(props) {

    const show = () => {
        alert(props.fullName)
    }
    return (
        <div className='Header'>

            <img src={props.children} />


            <div className='header'>
                <h1>{props.fullName}</h1>
                <h4>{props.position}</h4>
                <h5>{props.mail}</h5>
                <h5>{props.phone}</h5>

            </div>
            <button onClick={show}>
                alert
            </button>
        </div>
    )
}
User.defaultProps = {

    fullName: "zina"

};
User.propTypes = {
    fullName: PropTypes.string
};
export default User;

