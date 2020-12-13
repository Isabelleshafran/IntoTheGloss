import React from 'react';


class ShadeShow extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div>
                {/* {this.props.shade.name} */}
                <img src={this.props.shade.imgUrl} alt={this.props.shade.name}/>
            </div>
         );
    }
}
 
export default ShadeShow;