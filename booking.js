function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address in Valid";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
  }
}

var kiIrt = document.getElementById("form");

kiIrt.addEventListener("submit", function (e) {
  e.preventDefault();
  var writeName = kiIrt.querySelector('input[type="text"]').value;
  var writePeople = kiIrt.querySelector('input[type="number"]').value;
  var writeDate = kiIrt.querySelector('input[type="datetime-local"]').value;
  var writeEmail = kiIrt.querySelector('input[type="email"]').value;

  console.log(
    "Az asztal foglalás sikerült!",
    writeName,
    "szeretettel várjuk",
    writeDate,
    "időpontban!",
    "Ön egy",
    writePeople,
    "fős asztal foglalt",
    writeEmail,
    "-ra elküldtük a foglalás számát"
  );
});
