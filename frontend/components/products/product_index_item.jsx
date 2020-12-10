import { withRouter } from 'react-router-dom'
import React from 'react';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <div>
                {this.props.product.title}
            </div>
          );
    }
}
 
export default (ProductIndexItem);