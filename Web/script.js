console.log("Hello from script.js");

window.setInterval(
    (async () => {
        console.log("Hello from timer.js");
        let response = await fetch("button.cgi");
        let text = await response.text();
        console.log(text);
        let checkbox=document.getElementById("checkbox-id");
        if(text=="checked") {
            checkbox.setAttribute("checked", "");
        }
        else {
            checkbox.removeAttribute("checked");
        }
    }),3000);