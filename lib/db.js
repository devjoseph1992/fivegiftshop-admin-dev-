import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
 return firestore
  .collection('users')
  .doc(uid)
  .set({ uid, ...data }, { merge: true });
}

export function createBrand(data) {
 return firestore.collection('brands').add(data);
}

// export function createProduct(data) {
//  return firestore.collection('products').add(data);
// }
