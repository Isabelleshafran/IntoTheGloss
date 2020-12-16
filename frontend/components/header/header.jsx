import React from 'react';
import { Link } from 'react-router-dom'



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleClick() {
        if(!this.props.currentUser) {
            this.props.openModal('signup')
        } else {
            this.props.openModal('account')
        }
    }

    handleCart(){

        // maybe add if logic to check if it exists else do that 

        localStorage.getItem('cartObj') 
        
        // localStorage.setItem('cartObj', '{}')

        // console.log(localStorage.getItem('cartObj'))
        this.props.openModal('cart')
    }

    handleSearch(e) {
        this.setState({search: e.currentTarget.value})
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    handleSubmit(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            let searchTerm = this.state.search;
            let search = searchTerm.split(' ').map(word => this.capitalize(word)).join(' ')
            this.props.fetchSearch(search).then(this.props.history.push('/search'))
        }

    }

    // componentDidUpdate(prevProps) {
    //     // debugger
    //     if (prevProps.match.path !== this.props.match.path) {
    //         this.setState({ search: ''})
    //     }
    // }


    render() { 
        return ( 
            <div>
                <nav className="main-header">
                    <div className="top-header">
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input onChange={this.handleSearch} onKeyPress={this.handleSubmit} type="text" className="searchtext" placeholder="search..." />
                        </div>
                        
                        <Link to="/"><div className="glossier">IntoTheGloss.</div></Link>
                        <div className="right-nav">
                            <div onClick={() => this.handleClick()}><i className="far fa-user"></i></div>
                            <div onClick={() => this.handleCart()}><i className="fas fa-shopping-cart"></i></div>
                        </div>
                    </div>
                    <div className="bottom-header">
                        <Link to="/shopall"><div className="shop-all">Shop All</div></Link>
                        <Link to="/makeup"><div className="makeup">Makeup</div></Link>
                        <Link to="/skincare"><div className="skincare">Skincare</div></Link>
                        <Link to="/body"><div className="body">Body</div></Link>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Header;

