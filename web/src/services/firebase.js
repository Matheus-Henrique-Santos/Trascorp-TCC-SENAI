import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAoN2mhW2ZPDmjDfNAMMmH107pS9waOXnY",
  authDomain: "senai-overflow.firebaseapp.com",
  databaseURL: "https://senai-overflow.firebaseio.com",
  projectId: "senai-overflow",
  storageBucket: "senai-overflow.appspot.com",
  messagingSenderId: "1037260275379",
  appId: "1:1037260275379:web:46b3e7613a7a79e32f3ac6",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const uploadImage = async (file, callback) => {
  const fileName = new Date().getTime() + "." + file.name.split(".").pop();
  const uploadTask = storage.ref(`/images/${fileName}`).put(file);
  uploadTask.on("state_changed", console.log, console.error, () => {
    storage
      .ref("images")
      .child(fileName)
      .getDownloadURL()
      .then((url) => {
        callback(url, fileName);
      });
  });
};
const removeImage = async (fileName, callback) => {
  storage.ref(`/images/${fileName}`).delete();
};

const downloadImage = async (fileName, callback) => {
  storage
    .ref("images")
    .child(fileName)
    .getDownloadURL()
    .then((url) => {
      callback(url);
    });
};

export {
  storage,
  uploadImage,
  removeImage,
  downloadImage,
  firebase as default,
};
