import React from 'react';
import { Link } from 'react-router-dom'


class Checkout extends React.Component {
    constructor(props) {
        super(props);
    
    }
    render() { 
        return (  
            <div>
                <div className="checkout">
                    Thank you for shopping at IntoTheGloss
                </div>
                <div className="return-to-homepage" onClick={() => this.props.closeModal()}>return to hompage</div>
            </div>
        );
    }
}
 
export default Checkout;