const React = require("react");
const createReactClass = require("create-react-class");

module.exports = createReactClass({
  handleClick() {
    alert("hi carlton");
  },
  render() {
    return (
      <html>
        <head>
          <title>Universal App With React</title>
          <link rel="stylesheet" type="text/css" href="/styles.css" />
        </head>
        <body>
          <div>
            <h1>Hello World</h1>
            <p>Click button below for an alert.</p>
            <button onClick={this.handleClick}>Click Me</button>
          </div>
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
});
