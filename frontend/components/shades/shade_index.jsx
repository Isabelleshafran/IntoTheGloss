import React from 'react';


class ShadeShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.shade
        
    }
    render() { 
        // console.log(this.)
        return ( 
            <button className="shades">
                <img src={this.props.shade.imgUrl} alt={this.props.shade.name}/>
            </button>
         );
    }
}
 
export default ShadeShow;