import React from 'react';
import {StyleSheet, View, Button, TextInput, Keyboard} from 'react-native';
import {
  KeyboardProvider,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <TestComponent />
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}

function TestComponent(): React.JSX.Element {
  const {bottom} = useSafeAreaInsets();

  return (
    <>
      <View style={styles.root}>
        <TextInput style={styles.input} value={'1'} onChange={() => {}} />
        <Button title={'Hide keyboard'} onPress={Keyboard.dismiss} />
      </View>
      <KeyboardStickyView offset={{closed: -1 * bottom, opened: 0}}>
        <View style={{marginHorizontal: 15}}>
          <Button title={'Sticky button'} onPress={() => {}} />
        </View>
      </KeyboardStickyView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 50,
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  buttonStyle: {
    backgroundColor: 'yellow',
  },
});

export default App;
