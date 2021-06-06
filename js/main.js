var getusername = prompt ("enter your name:");

console. log(getusername);

document.getElementById("username").innerText = getusername;

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })