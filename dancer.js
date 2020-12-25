var images = [
    "ahaan.jpg","pushkar.jpg","pooja.jpg"
  ];
  var i = 0;
  
  function walk() {
    
    if(i == 3)
       {
         i=0;
         
    
        
       };
    document.getElementById("alb").src = images[i];
    i++;
    if(i == 1){
      document.getElementById("spangblob").innerHTML="Ahaan Jain";
    };
    if(i == 2){
      document.getElementById("spangblob").innerHTML="Pushkar Jain";
    };
    if(i == 3){
      document.getElementById("spangblob").innerHTML="Pooja Jain";
    };
  };