console.log('Hello, world from script!');

window.addEventListener('load', () => {   
  console.log('The page has loaded!');

  let checkbox = document.getElementById('checkbox-id');
  let buttonOn= document.getElementById('button-on');
  let buttonOff= document.getElementById('button-off');

  buttonOn.addEventListener('click', () => {
    fetch('index2.cgi',{
      method: "POST",
      headers: {
      //'Content-Type': 'application/json'​
      'Content-Type': 'application/x-www-form-urlencoded',
      },body: "extled1=on"
  }).then(response => { response.text();}).then(text => {console.log('The server said:', text);}).catch(error => {console.error('An error occurred:', error);});
  });

  buttonOff.addEventListener('click', () => {
    fetch('index2.cgi',{
      method: "POST",
      headers: {
      //'Content-Type': 'application/json'​
      'Content-Type': 'application/x-www-form-urlencoded',
      },body: "extled1=off"
  }).then(response => { response.text();}).then(text => {console.log('The server said:', text);}).catch(error => {console.error('An error occurred:', error);});
  });

  window.setInterval(() => {
    console.log('The page has been open for 5 seconds!');
    fetch('button.cgi').then(response => {
      console.log('The server responded!');
      return response.text();
    }).then(text => {
      console.log('The server said:', text);
      if(text=="checked"){
        checkbox.setAttribute("checked","");
        }
    else{
      checkbox.removeAttribute("checked");
    }
    }).catch(error => {
      console.error('An error occurred:', error);
    });
  }, 5000);
});