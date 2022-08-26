function changeFunction() {

  if (document.getElementById("check").checked) {
    document.documentElement.style.setProperty("--mainTextColor", "#000");
    document.documentElement.style.setProperty(
      "--secondaryTextColor",
      "rgb(51 51 51)"
    );
    document.documentElement.style.setProperty("--mainLinkColor", "#0da2b8");
    document.documentElement.style.setProperty(
      "--mainBorderColor",
      "rgb(218, 218, 218)"
    );
    document.documentElement.style.setProperty(
      "--mainBgColor",
      "rgb(249, 250, 251)"
    );
  } else {
    document.documentElement.style.setProperty("--mainTextColor", "#fff");
    document.documentElement.style.setProperty(
      "--secondaryTextColor",
      "#adb0b1"
    );
    document.documentElement.style.setProperty(
      "--mainLinkColor",
      "rgb(30, 190, 214)"
    );
    document.documentElement.style.setProperty("--mainBorderColor", "#2b3031");
    document.documentElement.style.setProperty("--mainBgColor", "#131415");
  }

  // alert(test);
  // alert(typeof test);

  // alert(rs.getPropertyValue("--mainTextColor"));
}

// var y = document.getElementById('check');

// y.onchange = function (value) {
//   alert('Tester');
// }
