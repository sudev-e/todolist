function login() {
  var un = document.getElementById("usr").value;
  var pw = document.getElementById("pwd").value;
  var username = "admin";
  var password = "12345";
  if (un == username && pw == password) {
    Swal.fire({
      title: "Login Successful",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./main.html";
      }
    });
  } else {
    Swal.fire({
      title: "Login Unsuccessful",
      text: "Please check your username and password",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
  return false;
}
