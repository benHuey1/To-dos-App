import PropTypes from 'prop-types';
import "./Inputs-text.css"

export default function Inputs_text({content}) {
    return (<input className="input-text" type="text" placeholder={content}/>)
}

Inputs_text.propTypes = {
    content: PropTypes.string.isRequired,
  };