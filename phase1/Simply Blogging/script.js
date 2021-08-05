
function generateTable(){
  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  var img = document.createElement("img");
  h2.innerText = document.getElementById("title").value;
  p.innerText = document.getElementById("articles").value;
  img.src = document.getElementById("image").value;
  img.width = "200";
  img.height = "200";
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(img);
  document.body.appendChild(div);
  document.body.appendChild(document.createElement("br"));

  
}