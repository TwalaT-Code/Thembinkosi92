$(window).resize(function () {
  var windowHeight = $( window ).height();

  var newHeaderHeight = windowHeight * 0.75;
  $('#header').height(newHeaderHeight);

  var newContentHeight = windowHeight * 0.75;
  var newContentHeightMargin = (windowHeight * 0.75);
  $('#content').height(newContentHeight);
});

function calcIncomeTax() {

    var TypeOfPay=document.getElementById("SelType");
    var selpay=TypeOfPay.options[TypeOfPay.selectedIndex].text;

    var selectAge=document.getElementById("Age").value;

  var TotalEarnings = document.getElementById("Amount").value;
  var TotalAmount = TotalEarnings.replace(/[^\d.-]/g, '');

if(TypeOfPay.selectedIndex==0){
    alert("please select type of payment");
}
else
if(TypeOfPay.selectedIndex==1)
{
    if(selectAge < 18)
    {
        alert("Age must be 18 and above");
        document.getElementById("Age").focus();
    }else
    if(selectAge < 65)
    {
      if (TotalAmount >= 0 && TotalAmount < 205900) {
       
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.18;
          var totalnet = (Netinc - 14958)/12;
          var initialamnt = (incomeTax / 12) - totalnet ;
  
        }
      else
      if (TotalAmount >= 205901 && TotalAmount < 321600){
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var initialamnt = incomeTax / 12;
          var Netinc = incomeTax * 0.26;
          var totalnet = (Netinc - 14958)/12;
      }else
      if (TotalAmount >= 321601 && TotalAmount < 445100) {
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var initialamnt = incomeTax / 12;
          var Netinc = incomeTax * 0.31;
          var totalnet =  (Netinc - 14958)/12;
      }else
      if (TotalAmount >= 445101 && TotalAmount >= 584200 ) {
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var initialamnt = incomeTax / 12;
          var Netinc = incomeTax * 0.36;
          var totalnet = (Netinc - 14958)/12;
      }
      else
      if (TotalAmount >= 584201 && TotalAmount >= 744800 ){
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var initialamnt = incomeTax / 12;
          var Netinc = incomeTax * 0.39;
          var totalnet = (Netinc - 14958)/12;
      }
      else
      if (TotalAmount >= 744801 && TotalAmount >= 1577300 )
      {
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var initialamnt = incomeTax / 12;
          var Netinc = incomeTax * 0.41;
          var totalnet = (Netinc - 14958)/12;
      }else
      {   
          //R1577300 and over
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var initialamnt = incomeTax / 12;
          var Netinc = incomeTax * 0.45;
          var totalnet = (Netinc - 14958)/12;
      }
      document.getElementById("total").innerHTML = initialamnt.toFixed(2);
      document.getElementById("totalNet").innerHTML = totalnet.toFixed(2);
  }
      
  
      if(selectAge > 65 && selectAge <=75)
        {
          if (TotalAmount >= 0 && TotalAmount < 205900) {
       
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.18;
              var totalnet = (Netinc - 23157)/12;
      
            }
          else
          if (TotalAmount >= 205901 && TotalAmount < 321600){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.26;
              var totalnet = (Netinc - 23157)/12;
          }else
          if (TotalAmount >= 321601 && TotalAmount < 445100) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.31;
              var totalnet = (Netinc - 23157)/12;
          }else
          if (TotalAmount >= 445101 && TotalAmount >= 584200 ) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.36;
              var totalnet = (Netinc - 23157)/12;
          }
          else
          if (TotalAmount >= 584201 && TotalAmount >= 744800 ){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.39;
              var totalnet = (Netinc - 23157)/12;
          }
          else
          if (TotalAmount >= 744801 && TotalAmount >= 1577300 )
          {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.41;
              var totalnet = (Netinc - 23157)/12;
          }else
          {   
              //R1577300 and over
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.45;
              var totalnet = (Netinc - 23157)/12;
          }
          document.getElementById("total").innerHTML = incomeTax.toFixed(2);
          document.getElementById("totalNet").innerHTML = totalnet.toFixed(2);
          
        }
  
        if(selectAge > 75)
        {
          if (TotalAmount >= 0 && TotalAmount < 205900) {
       
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.18;
              var totalnet = (Netinc - 25893)/12;
      
            }
          else
          if (TotalAmount >= 205901 && TotalAmount < 321600){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.26;
              var totalnet = (Netinc - 25893)/12;
          }else
          if (TotalAmount >= 321601 && TotalAmount < 445100) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.31;
              var totalnet = (Netinc - 25893)/12;
          }else
          if (TotalAmount >= 445101 && TotalAmount >= 584200 ) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.36;
              var totalnet = (Netinc - 25893)/12;
          }
          else
          if (TotalAmount >= 584201 && TotalAmount >= 744800 ){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.39;
              var totalnet = (Netinc - 25893)/12;
          }
          else
          if (TotalAmount >= 744801 && TotalAmount >= 1577300 )
          {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.41;
              var totalnet = (Netinc - 25893)/12;
          }else
          {   
              //R1577300 and over
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var initialamnt = incomeTax / 12;
              var Netinc = incomeTax * 0.45;
              var totalnet = (Netinc - 25893)/12;
          }
          document.getElementById("total").innerHTML = initialamnt.toFixed(2);
          document.getElementById("totalNet").innerHTML = totalnet.toFixed(2);
         
          
        }
}
else
if(TypeOfPay.selectedIndex==2)
{


    if(selectAge < 65)
    {
      if (TotalAmount >= 0 && TotalAmount < 205900) {
       
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.18;
          var totalnet = Netinc - 14958;
  
        }
      else
      if (TotalAmount >= 205901 && TotalAmount < 321600){
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.26;
          var totalnet = Netinc - 14958;
      }else
      if (TotalAmount >= 321601 && TotalAmount < 445100) {
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.31;
          var totalnet =  Netinc - 14958;
      }else
      if (TotalAmount >= 445101 && TotalAmount >= 584200 ) {
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.36;
          var totalnet = Netinc - 14958;
      }
      else
      if (TotalAmount >= 584201 && TotalAmount >= 744800 ){
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.39;
          var totalnet = Netinc - 14958;
      }
      else
      if (TotalAmount >= 744801 && TotalAmount >= 1577300 )
      {
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.41;
          var totalnet = Netinc - 14958;
      }else
      {   
          //R1577300 and over
          document.getElementById("SType").innerHTML = selpay;
          document.getElementById("SAge").innerHTML = selectAge;
          var incomeTax = TotalAmount * 12;
          var Netinc = incomeTax * 0.45;
          var totalnet = Netinc - 14958;
      }
      document.getElementById("total").innerHTML = incomeTax.toFixed(2);
      document.getElementById("totalNet").innerHTML = totalnet.toFixed(2);
  }
      
  
      if(selectAge > 65 && selectAge <=75)
        {
          if (TotalAmount >= 0 && TotalAmount < 205900) {
       
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.18;
              var totalnet = Netinc - 23157;
      
            }
          else
          if (TotalAmount >= 205901 && TotalAmount < 321600){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.26;
              var totalnet = Netinc - 23157;
          }else
          if (TotalAmount >= 321601 && TotalAmount < 445100) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.31;
              var totalnet = Netinc - 23157;
          }else
          if (TotalAmount >= 445101 && TotalAmount >= 584200 ) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.36;
              var totalnet = Netinc - 23157;
          }
          else
          if (TotalAmount >= 584201 && TotalAmount >= 744800 ){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.39;
              var totalnet = Netinc - 23157;
          }
          else
          if (TotalAmount >= 744801 && TotalAmount >= 1577300 )
          {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.41;
              var totalnet = Netinc - 23157;
          }else
          {   
              //R1577300 and over
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.45;
              var totalnet = Netinc - 23157;
          }
          document.getElementById("total").innerHTML = initialamnt.toFixed(2);
          document.getElementById("totalNet").innerHTML = totalnet.toFixed(2);
          
        }
  
        if(selectAge > 75)
        {
          if (TotalAmount >= 0 && TotalAmount < 205900) {
       
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.18;
              var totalnet = Netinc - 25893;
      
            }
          else
          if (TotalAmount >= 205901 && TotalAmount < 321600){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.26;
              var totalnet = Netinc - 25893;
          }else
          if (TotalAmount >= 321601 && TotalAmount < 445100) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.31;
              var totalnet = (Netinc - 25893)/12;
          }else
          if (TotalAmount >= 445101 && TotalAmount >= 584200 ) {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.36;
              var totalnet = Netinc - 25893;
          }
          else
          if (TotalAmount >= 584201 && TotalAmount >= 744800 ){
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.39;
              var totalnet = Netinc - 25893;
          }
          else
          if (TotalAmount >= 744801 && TotalAmount >= 1577300 )
          {
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.41;
              var totalnet = Netinc - 25893;
          }else
          {   
              //R1577300 and over
              document.getElementById("SType").innerHTML = selpay;
              document.getElementById("SAge").innerHTML = selectAge;
              var incomeTax = TotalAmount * 12;
              var Netinc = incomeTax * 0.45;
              var totalnet = Netinc - 25893;
          }
          document.getElementById("total").innerHTML = incomeTax.toFixed(2);
          document.getElementById("totalNet").innerHTML = totalnet.toFixed(2);
         
          
        }
}
  
      
  }
