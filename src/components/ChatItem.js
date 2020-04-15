import React from 'react';
import {View, Text} from 'react-native';

export default ({title, description}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
