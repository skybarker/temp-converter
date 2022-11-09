import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({ label, id, value, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label || capitalize(id)}</label>
      <input id={id} type="number" value={value} onChange={handleChange} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequred,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  handleChange: () => {},
  celsius: 0,
  fahrenheit: 0,
};
