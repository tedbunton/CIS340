import React from 'react';
import { Text, Image, View } from 'react-native';

export default function MyPuppy() {
  let pic = {
    uri: 'https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg'
  };

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image source={pic}
      style={{width: 200, height: 200}}
      />
      <Text>Hello, here is my dog!</Text>
    </View>
  );
}