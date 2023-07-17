// import { Component } from "react";
// class Display extends Component {
//   constructor(name, color) {
//     super(name, color);
//     this.state = {
//       name: "shweta",
//       color: "pink",
//     };
//   }
//   render() {
//     //parent  it is life cycle method
//     const { name, color } = this.state;
//     return (
//       <>
//         <div>hiii</div>
//         <div>
//           My name is {name} and my favourite color is {color}
//         </div>
//       </>
//     );
//   }
// }
// export default Display;

import { Component } from "react";
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shweta",
      color: "pink",
    };
  }
  render() {
    //parent  it is life cycle method
    const { name, color } = this.state;
    return (
      <>
        <div>hiii</div>
        <div>
          My name is {name} and my favourite color is {color}
        </div>
      </>
    );
  }
}
export default Display;
