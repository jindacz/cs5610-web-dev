import React from "react";
// another syntax of import

class Subtract extends React.Component {
    render(){
        return(
            <h1>
                {this.props.a} - {this.props.b} = {this.props.a - this.props.b}
            </h1>
        )
    }
}

export default Subtract; 