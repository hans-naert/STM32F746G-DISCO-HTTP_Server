console.log('Hello, world from script!');

window.addEventListener('load', () => {   
  console.log('The page has loaded!');

  let checkbox = document.getElementById('checkbox-id');

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