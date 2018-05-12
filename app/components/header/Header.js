var React = require('react');
var ReactDOM = require('react-dom');
var ZipCode = require('../ZipCode/ZipCode');


class Header extends React.Component {
  render() {
    return (
      <div className='top-header'>
        <h1 className="title">title</h1>
        <ZipCode />
      </div>

    )
  }
}

module.exports = Header