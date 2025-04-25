window.setInterval(
      (() => {
        console.log('Hello World!');
        fetch("button.cgi")
          .then((res) => res.text())
          .then((res) =>
            { 
            console.log(res);
            if(res="checked")
                document.getElementById("checkboxButton").setAttribute("checked",'');
            else
                document.getElementById("checkboxButton").removeAttribute("checked"); 
            });
      })
      , 3000
    );
    