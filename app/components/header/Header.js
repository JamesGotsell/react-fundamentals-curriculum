var React = require('react');
var ReactDOM = require('react-dom');
var ZipCode = require('../ZipCode/ZipCode');


class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>title</h1>
        <ZipCode />
      </div>

    )
  }
}

module.exports = Header