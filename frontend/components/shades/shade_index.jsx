import React from 'react';


class ShadeShow extends React.Component {
    constructor(props) {
        super(props);
    }


    handleColor(){
        selected = true;
        
    }
    
    render() { 
        return ( 
            <button className="shades" title={this.props.shade.name} onClick={() => this.handleColor()}>
                <img src={this.props.shade.imgUrl} />
            </button>
         );
    }
}
 
export default ShadeShow;