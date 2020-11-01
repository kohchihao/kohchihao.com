import { firebaseAuth, db } from '@utils/firebase';
const statusCollection = db.collection('status');

export const getStatus = async () => {
  return statusCollection.doc('me').get();
};
