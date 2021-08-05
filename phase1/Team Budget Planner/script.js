var clientArray = [];
function myFunction() {
    
    let client = {name:document.getElementById("cname").value, pname:document.getElementById("pname").value, budget:document.getElementById("budget").value };
    clientArray.push(client);
    localStorage.setItem("clientArray", JSON.stringify(clientArray));
    
    
  }
function generateTable(){
    var totalBudget = 0;
   let empObj = localStorage.getItem("clientArray");
   console.log(empObj);
   let empJson = JSON.parse(empObj);
    var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);
  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);
  var col1 = document.createElement("TH");
  var col2 = document.createElement("TH");
  var col3 = document.createElement("TH");
  var title1 = document.createTextNode("Client Name");
  var title2 = document.createTextNode("Project Name");
  var title3 = document.createTextNode("Budget");
  col1.appendChild(title1);
  col2.appendChild(title2);
  col3.appendChild(title3);
  document.getElementById("myTr").appendChild(col1);
  document.getElementById("myTr").appendChild(col2);
  document.getElementById("myTr").appendChild(col3);
  
  for (let i = 0; i<empJson.length;i++){
    var dynam = document.createElement("TR");
    x.appendChild(dynam);
      var test1 = document.createElement("TD");
      var test2 = document.createElement("TD");
      var test3 = document.createElement("TD");
      var a = document.createTextNode(empJson[i].name);
      var b = document.createTextNode(empJson[i].pname);
      var c = document.createTextNode(empJson[i].budget);
      totalBudget += parseInt(empJson[i].budget);
      test1.appendChild(a);
      test2.appendChild(b);
      test3.appendChild(c);
      dynam.appendChild(test1);
      dynam.appendChild(test2);
      dynam.appendChild(test3);
      x.appendChild(dynam);
      
  }
  var total = document.createElement("TR");
  x.appendChild(total);
  var total1 = document.createElement("TD");
  var total2 = document.createElement("TD");
  var total3 = document.createElement("TD");
  var l = document.createTextNode("Total");
  var m = document.createTextNode(" ");
  var n = document.createTextNode(totalBudget);
  total1.appendChild(l);
  total2.appendChild(m);
  total3.appendChild(n);
  total.appendChild(total1);
  total.appendChild(total2);
  total.appendChild(total3);
}