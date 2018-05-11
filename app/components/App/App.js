var React = require('react');
var ReactDOM = require('react-dom');
var ZipCode = require('../ZipCode/ZipCode');
var Header = require('../header/Header')


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='home-container' style={{ backgroundImage: "url('../../../app/images/pattern.svg')" }}>
          <h1 className='header'>Enter a City and State</h1>
          <ZipCode
            direction='column'
            onSubmitZipcode={function () { }}
            onUpdateZipcode={function () { }}
            zipcode={123} />
        </div>
      </div>
    )
  }
}

module.exports = App;