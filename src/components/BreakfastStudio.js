import React from 'react';

import Layout from './Layout';
import Nav from './Nav';
import MenuItemsList from './MenuItemsList';
import { useGlobalState } from '../GlobalStateProvider';

// Get alphabetically sorted list of uniques
const itemGroupsReducer = (allGroups, menuItem) => [
  ...allGroups,
  ...menuItem.groups,
];

export default function BreakfastStudio() {
  const { state } = useGlobalState();
  const itemGroups = [
    ...new Set(state.menu.reduce(itemGroupsReducer, []).sort()),
  ];
  const numOfOrders = state.menu.filter(
    (menuItem) => menuItem.isInCart === true
  ).length;
  const isInFilteredGroup = (menuItem) =>
    state.groupFilter !== ''
      ? menuItem.groups.includes(state.groupFilter)
      : true;
  const displayedMenuItems = state.menu.filter(
    (menuItem) =>
      menuItem.name.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
      isInFilteredGroup(menuItem)
  );

  return (
    <Layout>
      <Nav itemGroups={itemGroups} numOfOrders={numOfOrders} />
      <MenuItemsList menuItems={displayedMenuItems} />
      <Nav itemGroups={itemGroups} numOfOrders={numOfOrders} />
    </Layout>
  );
}
