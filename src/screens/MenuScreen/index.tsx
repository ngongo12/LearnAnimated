import { View, Text, FlatList } from 'react-native';
import React from 'react';
import data from './data';
import MenuButton from './MenuButton';

const index = () => {

  return (
    <FlatList
      data={data}
      renderItem={MenuButton}
    />
  );
};

export default index;
