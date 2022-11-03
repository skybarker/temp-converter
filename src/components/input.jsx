import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({ label, id, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label || capitalize(id)}</label>
      <input id={id} type="number" onChange={handleChange} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
