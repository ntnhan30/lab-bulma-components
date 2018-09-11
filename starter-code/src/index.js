// jshint ignore: start
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <div>
      <Navbar></Navbar>
      <button class="button is-rounded my-class is-danger is-small">Button 1</button>
      <button class="button is-small is-success">Button 2</button>
      </div>

       <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
       <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div> 
      </div> 
     

    );
  }
}

class Button extends React.Component {
    render() {
      return (
        <div>
        <Button isSmall isDanger className="is-rounded my-class">Button 1</Button>
<Button isSmall isSuccess>Button 2</Button>
        </div>
      );
    }
  }

  class Navbar extends React.Component {
    render() {
      return (
      <div>
      <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-info" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Login
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Signup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
      </div>
      );
    }
  }

  class FormField extends React.Component {
    render() {
      return (
        
 <div class="field">
  <label class="label">{this.props.label}</label>
  <div class="control">
    <input class="input" type={this.props.type} placeholder={this.props.placeholder}/>
  </div>
  </div>

      );
    }
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);