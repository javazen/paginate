(function() {
  'use strict';
  document.addEventListener("DOMContentLoaded", function(event) { 
    var doc = document;
    var g = doc.getElementById("graphic");
    var svgNS = g.namespaceURI;
    var r, t;
    for (var i=0; i<18; i++) {
      for (var j=0; j<12; j++) {
        r = doc.createElementNS(svgNS, "rect");
        r.setAttribute("width", "80");
        r.setAttribute("height", "80");
        r.setAttribute("x", (i*100 + 10));
        r.setAttribute("y", (j*100 + 10));
        r.style.setProperty("fill-opacity", ((i*j + 1)%20)/20, null);
        g.insertBefore(r, null);
        t = doc.createElementNS(svgNS, "text");
        t.setAttribute("x", (i*100 + 50));
        t.setAttribute("y", (j*100 + 50));
        t.setAttribute("class", "diagram");
        t.textContent = [i,j];
        g.insertBefore(t, null);
      }  
    }
  });
}());
