console.log("Hello, World!");

window.setInterval(() => {
    console.log("Hello, World!");
    let checkbox = document.getElementById("button");
    let progress = document.getElementById("progress1");
    fetch("button.cgi")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        if(json[0])
        {checkbox.setAttribute("checked", null);
        progress.value=100;}
        else
        {checkbox.removeAttribute("checked");
        progress.value=0;
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