import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalState } from '../GlobalStateProvider';

Nav.propTypes = {
  itemGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  numOfOrders: PropTypes.number.isRequired,
};

export default function Nav({ itemGroups, numOfOrders }) {
  const { state, dispatch } = useGlobalState();

  const groupOptions = itemGroups.map((groupName) => (
    <option key={groupName} value={groupName}>
      {capitalizeFirstLetter(groupName)}
    </option>
  ));
  const handleGroupChange = (event) =>
    dispatch({ type: 'set_group_filter', payload: event.target.value });
  const handleQueryChange = (event) =>
    dispatch({ type: 'set_query_filter', payload: event.target.value });

  return (
    <nav className="flex flex-col md:flex-row bg-gray-300 rounded shadow overflow-hidden p-2 mb-8 text-sm">
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <input
        className="mb-2 md:mb-0 p-2 rounded flex-grow"
        type="search"
        placeholder="Search for foods"
        id="search"
        onChange={handleQueryChange}
        value={state.searchQuery}
      />
      <select
        value={state.groupFilter}
        onChange={handleGroupChange}
        className="mb-2 md:ml-2 md:mb-0"
      >
        <option>Food Groups</option>
        {groupOptions}
      </select>
      <button
        className="md:ml-2 p-2 rounded"
        style={{ backgroundColor: 'var(--concert-blue)' }}
      >
        {`Place Order (${numOfOrders})`}
      </button>
    </nav>
  );
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
