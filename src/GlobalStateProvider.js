import React from 'react';

import { MENU } from './kitchen';

const GlobalStateContext = React.createContext();

function stateReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const menu = state.menu.map((menuItem) =>
        menuItem.name === action.payload
          ? { ...menuItem, isInCart: true }
          : menuItem
      );
      return { ...state, menu };
    }

    case 'remove': {
      const menu = state.menu.map((menuItem) =>
        menuItem.name === action.payload
          ? { ...menuItem, isInCart: false }
          : menuItem
      );
      return { ...state, menu };
    }

    case 'set_query_filter': {
      return { ...state, searchQuery: action.payload };
    }

    case 'set_group_filter': {
      const groupFilter =
        action.payload === 'Food Groups' ? '' : action.payload;
      return { ...state, groupFilter };
    }

    default: {
      throw Error('Unknown dispatch action!');
    }
  }
}

function GlobalStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(stateReducer, {
    menu: MENU.map((menuItem) => ({ ...menuItem, isInCart: false })),
    groupFilter: '',
    searchQuery: '',
  });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

function useGlobalState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}

export { GlobalStateProvider, useGlobalState };
