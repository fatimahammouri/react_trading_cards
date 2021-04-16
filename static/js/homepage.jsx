"use strict";

function Homepage() {
  return (
    <div>
      <h1> Welocome </h1>
      <a href="/cards">Click here to view the trading cards.</a>
      <br></br>
      <a href="/about">Learn about the amazing authors of this site!</a>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
