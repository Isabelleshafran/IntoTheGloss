import React from 'react';


class ShadeShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <button className="shades" title={this.props.shade.name}>
                <img src={this.props.shade.imgUrl} alt={this.props.shade.name}/>
            </button>
         );
    }
}
 
export default ShadeShow;