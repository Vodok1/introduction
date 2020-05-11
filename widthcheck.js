//const myname = document.querySelectorAll("#myname path");
//for (let i = 0; i < myname.length; i++) {
//  console.log(`Litera ${i} is ${myname[i].getTotalLength()}`);
//}
//window.onload = () => {

if (window.innerWidth <= 800) {
  const name = document.getElementById("myname");
  console.log(window.innerWidth);
  name.setAttribute("width", "350");
}
