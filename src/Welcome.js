import React from "react";
class Welcome extends React.Component {
 state = {
   name: "Sara"
 };
 render() {
   return <h1>hello {this.state.name}</h1>;
 }
}
export default Welcome;