import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startGoogleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
}

export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider)
        .catch((error) => handleError(error));
  };
}

const getProvider = (provider) => {
  switch (provider) {
    case 'facebook.com':
      return facebookAuthProvider;
    default:
      return googleAuthProvider;
  }
}

const handleError = (error) => {
  const pendingCredential = error.credential;
  if (error.code === 'auth/account-exists-with-different-credential') {
    firebase.auth().fetchProvidersForEmail(error.email)
      .then((providers) => {
        const provider = getProvider(providers[0]);
        provider.setCustomParameters( {'login_hint': error.email} );
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            return result.user;
          })
          .then((user) => {
            return user.linkWithCredential(pendingCredential);
          })
      });
  }
}

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
}
