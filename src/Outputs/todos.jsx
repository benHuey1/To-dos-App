import PropTypes from 'prop-types';

export default function Todos() {
    return (
        <>
            <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Learn React</label>
            </div>
            <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Be Awesome</label>
            </div>
        </>
        )
}

Todos.propTypes = {
    content: PropTypes.string.isRequired,
  };
