 document.querySelectorAll('a').forEach((item) => {
     if (item.getAttribute('target')){
         item.setAttribute("rel", "noopener");
     }
 })
