import React from 'react';
import { Text, TextInput, View } from 'react-native';

function MyApp() {
  return(
    <View>
      <Text>
        Hello, I am a student in CIS340! {"\n"}
      </Text>
      <TextInput 
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1
      }}
      />
    </View>
  );
}

export default function MultiComp() {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> {"\n\n\n\n\n\n"}Welcome to my Class</Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}