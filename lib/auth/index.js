import { firebaseAuth, db } from '@utils/firebase';
import { BASE_URL } from '@constants';

const administratorsCollection = db.collection('administrator');

export const isAdministrator = async (email) => {
  const snapshot = await administratorsCollection.where('email', '==', email).get();
  if (snapshot.empty) {
    return false;
  }

  return true;
};

export const sendSignInLinkToEmail = async (email) => {
  const url = BASE_URL + '/action';
  const actionCodeSettings = {
    url: url,
    handleCodeInApp: true,
  };

  return firebaseAuth.sendSignInLinkToEmail(email, actionCodeSettings);
};

export const isSignInWithEmailLink = async (url) => {
  return firebaseAuth.isSignInWithEmailLink(url);
};

export const signInWithEmailLink = async (email, url) => {
  await firebaseAuth.signInWithEmailLink(email, url);
};
