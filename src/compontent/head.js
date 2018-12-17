import * as React from 'react';
import {Link} from 'react-router-dom'


class Myhead extends React.Component{
   
    render() {
        return (
            <div className="foot">
                <div className="home">
                    <Link to='/'>home</Link>
                </div>
                <div className="right">
                    <Link to='/right'>right</Link>
                </div>
            </div>
        )
    }
}

export default Myhead