import React from "react";
import css from './ItemList.css'


// const Item = (props) => {
//     return <li>{props.item}</li>
// }
// class ItemList extends React.Component {
//     render() {
//         return (<div className='page'>
//         <div className="container">
//             <header>
//                 <h1>To Do List</h1>
//             </header>

//             <form>
//                 <input type='text' placeholder='add your todo' />
//                 <button type='submit'>Add</button>
//             </form>

//             <ul className='item-list'>
//                 <div className="item-wrapper">
//                     <li>{this.props.item}</li>
//                     <button>Remove</button>
//                 </div>


//             </ul>
//         </div>
//     </div>)
//     }
// }
const ItemList = (props) => {
    const items = props.products.map((product) => <div className='products'>{product.product}<button>Remove</button></div>);
    return (
        <div className='page'>
            <div className="container">
                <header>
                    <h1>To do list</h1>
                </header>
                <form>
                    <input type='text' placeholder='add your todo' />
                    <button type='submit'>Add</button>
                </form>
                <div className="item-wrapper">
                    {items}
                </div>
            </div>
        </div>
    )
}
export default ItemList;