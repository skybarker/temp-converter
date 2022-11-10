import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({ id, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{capitalize(id)}</label>
      <input id={id} type="number" value={value} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Input.defaultProps = {};
