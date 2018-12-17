import * as React from 'react';
// import createHashHistory from 'history'
// const history = createHashHistory()
import addToCart from '../redux/actions/index'
import store from '../redux/store'

class Myhome extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            arr:[]
		}
      };
    componentDidMount() { //类似mounted
        this.setState({
            arr:store.getState().shoppingCart.cart
        })
        setTimeout(()=>{
            store.dispatch(addToCart('Flour 1kg', 5, 110));
            console.log(store.getState())
            this.setState({
                arr:store.getState().shoppingCart.cart
            })
        },3000)
        
		
    };
    show(aa,event){
        alert(aa)
    };
    render() {
        let list = this.state.arr.map((item,i)=>
            <p key={i}  onClick={this.show.bind(this,item.product)}>{item.product}:{item.unitCost}</p>
        )
        return (
            <div className="home1">
                HOME
                {
                    this.state.arr.length>=3?(<div>{list}</div>):('')
                }
                
            </div>
        )
    }
}

export default Myhome