import * as React from 'react';
// import createHashHistory from 'history'
// const history = createHashHistory()
import store from '../redux/store'

class Myright extends React.Component{
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
    }
    render() {
        let list = this.state.arr.map((item,i)=>
            <p key={i} >{item.product}:{item.unitCost}</p>
        )
        return (
            <div className="home1">
                RIGHT
                {list}
            </div>
        )
    }
}

export default Myright