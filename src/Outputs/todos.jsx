// import PropTypes from 'prop-types';
import React,{ useState, useRef, useEffect } from 'react';
// import React, { useState } from "react";

export default function Todos() {
    // const initialTodos = ["My first todo", "My second todo"];
    // const [checkedbox, setCheckedbox] = useState();
    // const handleChange = (event) =>{
    //     if (event.target.checked == false) {
    //         setCheckedbox();
    //     } else if (event.target.checked == true) {
    //         setCheckedbox(checked);
    //     }
    // }
    return (
        <>
                <div>
                    <input type="checkbox" name="checked" id="" {checkedbox}/>
                    <label htmlFor="" className={(checkedbox=="checked") ? "checked" : ""}>{todo}</label>
                </div>

        </>
        )
}

// Todos.propTypes = {
//     content: PropTypes.string.isRequired,
//   };
