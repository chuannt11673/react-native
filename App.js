import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import AuthContext from './app/utils/context/auth.context';
import HomeStack from './app/routes/HomeStack';
import AuthStack from './app/routes/AuthStack';

const Context = AuthContext;

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null
          };
      }
    },
    {
      userToken: null
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', token: 'dummy_token' });
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' })
      }
    }),
    []
  );

  return (
    <Context.Provider value={authContext}>
      <NavigationContainer>
        {
          !state.userToken ? <HomeStack /> : <AuthStack />
        }
      </NavigationContainer>
    </Context.Provider> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
