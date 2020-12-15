import React from 'react';


class ShadeShow extends React.Component {
    constructor(props) {
        super(props);

    }

    
    render() { 
        return ( 
            <button className="shades" title={this.props.shade.name}>
                <img src={this.props.shade.imgUrl} data-shade={this.props.shade.name}/>
            </button>

         );
    }
}
 
export default ShadeShow;