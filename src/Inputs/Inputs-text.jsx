import PropTypes from 'prop-types';
import "./Inputs-text.css";
import { useState, useRef, useEffect } from 'react';

export default function Inputs_text({content, to_do, setTo_do, input_ref}) {
    // const [todos, setTodos] = useState("");
    // const handleInput = (e) => {
    //     setTodos(e.target.value)
    // }
    return (<input className="input-text" type="text" placeholder={content} value={to_do} onChange={setTo_do} ref={input_ref}/>)
}

Inputs_text.propTypes = {
    content: PropTypes.string.isRequired,
    to_do: PropTypes.string.isRequired,
    setTo_do: PropTypes.func.isRequired,
    input_ref: PropTypes.string.isRequired,
  };