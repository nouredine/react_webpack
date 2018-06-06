import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';


// (old writing) 
// const Layout = ({ children }) => {
class Layout extends React.Component{
  constructor(){
    super()
    this.state = {count : 0}
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState({count : this.state.count+1})
  }
render() {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          react-starter-boilerplate-hmr
        </Header>
        {this.state.count}<br/>
        <button onClick={this.increment}>incrémenter</button><br/>
        {this.state.count > 15 && <div> bravo t'as dépassé 15 </div>}
      </Link><br/><br/>
      {this.props.children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>
  );
}
};

export default Layout;
