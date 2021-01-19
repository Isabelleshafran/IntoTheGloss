# README

## IntoTheGloss

IntoTheGloss is a beauty and skincare e-commerce site inspired by Glossier. 

Live site: [IntoTheGloss](https://isabelle-glossier.herokuapp.com/#/)

![splash](./app/assets/images/ShareLink.png)

## Technologies Used 
* Ruby on Rails
* Postgres SQL 
* Javascript
* React 
* Redux
* LocalStorage

## Functionality 

### Splash Page 
 * Users are able to view featured items on main page.
 
 ![text](./app/assets/images/readme/Splash.gif)

### Sign In/Sign Up
 * Users are able to sign in to an existing acctount, create a new account, or use demo user log in feature all within the modal.
 
![text](./app/assets/images/readme/signup_signin.png)

### Product Index 
 * Displays all products available 
 * Users are able to filter by category 
 * Users are able to cart to bag directly from index
 * Filters products by grabbing category from the URL params and passing information to product index controller logic
```
    def index 
        if params[:name] === 'shopall'
            @products = Product.all
            render "api/products/index"
        elsif params[:name] === "/"
            @products = Product.where(:title => ["Futuredew", "Boy Brow", "Cloud Paint", "Hand Cream", "Generation G", "Milk Jelly Cleanser", "Solution"])
            render "api/products/index"  
        else 
            @products = Product.joins(:category).where(categories: { name: params[:name]} )
            render "api/products/index"
        end
    end
```
 
 ![text](https://github.com/Isabelleshafran/IntoTheGloss/blob/master/app/assets/images/readme/productindex.gif?raw=true)

### Product Show
 * Displays the product information 
 * If applicable, users are able to select a shade 
 
 ![text](https://github.com/Isabelleshafran/IntoTheGloss/blob/master/app/assets/images/readme/productshow.png?raw=true)

### Shopping Bag
 * Users can add, and remove cart items 
 * Utilizes localstorage 
 
 ![text](https://github.com/Isabelleshafran/IntoTheGloss/blob/master/app/assets/images/readme/addtocart.gif?raw=true)

### Search Bar
 * Users can search for products and if there is no match, they are given popular search terms to try 
 * Utlizes custom search logic in products controller 

Product Controller: 
```
    def search 
        @products = Product.where("title LIKE ?", "%#{params[:search_term]}%")
        render "api/products/index"
    end
```

Header Component Logic To Sanitze Search: 
```
    handleSubmit(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            let searchTerm = this.state.search;
            let search = searchTerm.split(' ').map(word => this.capitalize(word)).join(' ')
            this.props.fetchSearch(search)
            this.props.history.push('/search')
            this.setState({ search: "" })
        }
    }
```
 ![text](./app/assets/images/readme/search.gif)
