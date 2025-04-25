window.setInterval(
      (() => {
        console.log('Hello World!');
        fetch("button.cgi")
          .then((res) => res.text())
          .then((res) => console.log(res));
      })
      , 3000
    );
    