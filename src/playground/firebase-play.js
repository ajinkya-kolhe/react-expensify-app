import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD1H4dXKPsw9bFcfQyLSuz1_BpsYvJQhZw",
  authDomain: "expensify-ff2b2.firebaseapp.com",
  databaseURL: "https://expensify-ff2b2.firebaseio.com",
  projectId: "expensify-ff2b2",
  storageBucket: "expensify-ff2b2.appspot.com",
  messagingSenderId: "981890390707"
};
firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   console.log('snapshot', snapshot);
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'NA',
//   amount: 152000,
//   createdAt: 9852649859
// });

// database.ref('notes/-KvWsOyFRPP8ZxGotT7U').update({
//   body: 'PS4'
// });


// database.ref('notes').push({
//   title: 'Movie',
//   body: 'Watch'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (e) => {
//   console.log('Error: ', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(35);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 3500);
//
// setTimeout(() => {
//   database.ref('age').set(32);
// }, 3500);

// database.ref('job/title').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// database.ref().set({
//   name: 'Ajinkya',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software Devloper',
//     company: 'Google'
//   },
//   location: {
//     city: 'Melbourne',
//     country: 'Australia'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((error) => {
//   console.log('This failed', error);
// });
//

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null).then(() => {
//   console.log('Data is saved!');
// }).catch((error) => {
//   console.log('Error!', error);
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('Data is saved!');
// }).catch((error) => {
//   console.log('Error!', error);
// });
