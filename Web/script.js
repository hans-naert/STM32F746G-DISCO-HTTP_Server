console.log("Hello, World!");

window.setInterval(() => {
    console.log("Hello, World!");
    let checkbox = document.getElementById("button");
    fetch("button.cgi")
    .then(response => response.text())
    .then(text => {
        console.log(text);
        if(text =="checked")
        {checkbox.setAttribute("checked", "checked");}
        else
        {checkbox.removeAttribute("checked");
    }});

}, 10000);

let button=document.getElementById("led1");
button.onclick = async () => {
    console.log("Button clicked!");
    let response = await fetch("index.htm", {
        method: "POST",
        body: "led0=on",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    let txt=await response.text();
    console.log(txt);
}