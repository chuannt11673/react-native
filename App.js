import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './app/routes/HomeStack';
import SignInStack from './app/routes/SignInStack';
import AuthContext from './app/shared/contexts/AuthContext';

const Context = AuthContext;

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isLoading: false,
            userToken: action.token
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isLoading: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null
    }
  )
  const authContext = React.useMemo(() => ({
    signIn: async data => {
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
    signUp: async data => {
      // Register user then sign in
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    }
  }), [])

  return (
    <>
      <Context.Provider value={authContext}>
        <NavigationContainer>
          {
            state.userToken ? (
              <HomeStack />
            ) : (
              <SignInStack />
            )
          }
        </NavigationContainer>
      </Context.Provider>
    </>
  );
}
