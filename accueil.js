 AOS.init();

function ouvrirpage() {
  var a = document.getElementById("recherche").value.toLowerCase();

   if (a === "leadership") {
    window.location.href = "pdfleadership.html";
  } 
  else if (a === "e-commerce" || a === "ecommerce") {
    window.location.href = "pdfecommerce.html";
  } 
  else if (a === "mécanique" || a === "mecanique") {
    window.location.href = "pdfmecanique.html";
  }
   else if (a === "javascript") {
    window.location.href = "pdfjavascript.html";
  }
  else if (a==="electronique" || a === "électronique") {
    window.location.href = "pdfelectronique.html";}
    else if(a==="electricité" || a === "électricité") {
    window.location.href = "pdfelectricite.html";}
    else if(a==="html" || a === "html") {
    window.location.href = "pdfhtml.html";}
    else if(a==="css" || a === "css") {
    window.location.href = "pdfcss.html";}
    else if(a==="python" || a === "python") {
    window.location.href = "pdfpython.html";}

   else if (a === "lien" || a === "liens" ) {
    window.location.href = "lien.html";
  }
  else if (a === "contact") {
    window.location.href = "contact.html";
  }
  
  else if (a === "leadership prof" || a === "leadership professionnel") {
    window.location.href = "pdfleaderprof.html";
  } 
  else if (a === "mécanique prof" || a === "mécanique professionnel") {
    window.location.href = "pdfmecaprof.html";
  } 
  else if (a === "javascript prof") {
    window.location.href = "pdfjavascriptprof.html";
  } 
  else if (a === "e-commerce professionnel" || a === "ecommerce professionnel") {
    window.location.href = "pdfecommerceprof.html";
  } 
  else if (a === "electronique prof" || a === "électronique professionnel") {
    window.location.href = "pdfelectroniqueprof.html";
  } 
  else if (a === "électricité prof" || a === "électricité professionnel") {
    window.location.href = "pdfelectriciteprof.html";
  } 
  else if (a === "html prof" || a === "html professionnel") {
    window.location.href = "pdfhtmlprof.html";
  } 
  else if (a === "css prof" || a === "css professionnel") {
    window.location.href = "pdfcssprof.html";
  } 
  else if (a === "python prof" || a === "python professionnel") {
    window.location.href = "pdfpythonprof.html";
  } 

  else if(a==="à propos" || a === "a propos" || a === "apropos") {
    window.location.href = "apropos.html";}

  else if (a === "recherche") {
    alert("Veuillez saisir un mot-clé pour la recherche.");
  }
  else if (a === "") {
    alert("Veuillez saisir un mot-clé pour la recherche.");
  }

  else {
    alert("Aucun résultat trouvé pour : " + a);
  }
}
