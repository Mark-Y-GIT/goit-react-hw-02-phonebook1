import PropTypes from 'prop-types';
export default function Filter({ filter, handleFilterChange }) {
  return (
    <>
      <h2>Filter</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};
