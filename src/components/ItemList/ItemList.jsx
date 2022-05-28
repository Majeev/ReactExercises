import React from "react";
import css from './ItemList.css'

const ItemList = () => {
    return (
        <div className='page'>
            <div className="container">
                <header>
                    <h1>To Do List</h1>
                </header>

                <form>
                    <input type='text' placeholder='add your todo' />
                    <button type='submit'>Add</button>
                </form>

                <ul className='item-list'>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                    <div className="item-wrapper">
                        <li>Lorem Ipsum</li>
                        <button>Remove</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default ItemList;