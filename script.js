let mybal = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var Name = document.getElementById("enterName").value;
   var Amount = parseInt(document.getElementById("enterAmount").value);

   if (Amount > 50000) 
   {
      alert("Amount Exceeds Balance");
   } 
   else {
      var find = Name;
      var final = parseInt(document.getElementById(find).innerHTML) +Amount;
      var mybal = parseInt(document.getElementById("myAccountBalance").innerText) - Amount;
      document.getElementById("myAccountBalance").innerText = mybal
      document.getElementById(find).innerHTML = final;
      alert(`Rs${Amount} is sent to ${Name}`);

      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rs${Amount} is sent to ${Name}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}