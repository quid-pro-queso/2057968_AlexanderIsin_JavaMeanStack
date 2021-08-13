var productArray = [];
var checkoutArray = [];
function addProduct(pName, pPrice, pUrl) {
    
    let product = {name:pName, price:pPrice, url:pUrl };
    productArray.push(product);
    checkoutArray.push(product);
    sessionStorage.setItem("productArray", JSON.stringify(productArray));
    sessionStorage.setItem("checkoutArray", JSON.stringify(checkoutArray));
  }

  function generateCart(){
      
      let prodObj = sessionStorage.getItem("productArray");
      let prodJson = JSON.parse(prodObj);
      document.getElementById("items").innerHTML = "Cart Size: " + prodJson.length;
      
      for(let i = 0; i<prodJson.length;i++){
        var div = document.createElement("div");
        var h2 = document.createElement("h3");
        var h22 = document.createElement("h3");
        var img = document.createElement("img");
        img.src = prodJson[i].url;
        img.width = 200;
        img.height = 200;
        h2.innerText = prodJson[i].name;
        h22.innerText = "$"+prodJson[i].price;
        div.appendChild(h2);
        div.appendChild(h22);
        div.appendChild(img);
        document.body.appendChild(div);
      document.body.appendChild(document.createElement("br"));

      }
     
      
      
  }

  function generateTable(){
    var totalBudget = 0;
   let prodObj = sessionStorage.getItem("checkoutArray");
   console.log(prodObj);
    let prodJson = JSON.parse(prodObj);
    var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);
  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);
  var col1 = document.createElement("TH");
  var col2 = document.createElement("TH");
  var title1 = document.createTextNode("Item Name");
  var title2 = document.createTextNode("Price");
  col1.appendChild(title1);
  col2.appendChild(title2);
  document.getElementById("myTr").appendChild(col1);
  document.getElementById("myTr").appendChild(col2);
  
  
  for (let i = 0; i<prodJson.length;i++){
    var dynam = document.createElement("TR");
    x.appendChild(dynam);
      var test1 = document.createElement("TD");
      var test2 = document.createElement("TD");
      var a = document.createTextNode(prodJson[i].name);
      var b = document.createTextNode("$" + prodJson[i].price);
      totalBudget += parseInt(prodJson[i].price);
      test1.appendChild(a);
      test2.appendChild(b);
      dynam.appendChild(test1);
      dynam.appendChild(test2);
      x.appendChild(dynam);
      
  }

  var h3 = document.createElement("h3");
  h3.innerText = "Total: $" + totalBudget;
  document.body.appendChild(h3);
  
}