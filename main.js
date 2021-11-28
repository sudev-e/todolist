function main() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var output = "";
      var status = "";
      for (var i = 0; i < response.length; i++) {
        if (response[i].completed == true) {
          status = `<input type="checkbox" id ="check_box${
            i + 1
          }" checked disabled>`;
        } else if (response[i].completed == false) {
          status = `<input type="checkbox" id ="check_box${
            i + 1
          }" onchange="checkbox_status(${i + 1})">`;
        } else {
          console.log("Error");
        }
        output +=
          "<tr><td>" +
          response[i].title +
          "</td><td style='text-align: center;'>" +
          status +
          "</td></tr>";
      }
      document.getElementById("output").innerHTML = output;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

window.addEventListener("load", main);

var count = 0;

function checkbox_status(num) {
  var newly_checked = document.querySelector(`#check_box${num}`);
  if (newly_checked.checked) {
    count += 1;
    console.log(count);
  } else {
    count -= 1;
    console.log(count);
  }
  if (count >= 5) {
    Swal.fire({
      title: "Congratulations",
      text: "You have completed " + count + " tasks",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
}
