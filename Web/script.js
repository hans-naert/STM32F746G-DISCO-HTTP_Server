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
    

    window.addEventListener(('load'), (event) => {
          document.getElementById("button1On").onclick = async () => {
              let response = await fetch("index.htm",
              {
                  method: "POST",
                  headers: {
                  //'Content-Type': 'application/json'
                  'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: "button1On=true"
              });
              let txt= await response.text();
              console.log(txt);
          };
        
          document.getElementById("button1Off").onclick = async () => {
            let response = await fetch("index.htm",
            {
                method: "POST",
                headers: {
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: "button1On=false"
            });
            let txt= await response.text();
            console.log(txt);
        };
      
        
        
        });
      