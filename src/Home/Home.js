import React, { useEffect, useState } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateArray } from '../Store/Slice';

const Home = () => {
    const [list, setList] = useState();

    const state = useSelector(({ data }) => data);
    console.log("home", state);

    let updatedValues = state.arr;
    console.log(updatedValues);
    
    const dispatch = useDispatch();

    useEffect(() => {
        setList(updatedValues);
    }, [])

    const deleteItem = (index) => {
        let arrayData = list;
        let newData = arrayData.filter((e, i) => {
            return i !== index;
        })
        setList(newData);
        dispatch(updateArray(newData));
    }
    return (
        <div>
            {list?.map((e, index) => {
                return (
                    <div key={index}>
                        <div>
                            <h1>PRODUCT DETAILS</h1>
                            <p>Product Name:{e.name}</p>
                            <p>Product Price:{e.price}</p>
                            <p>Product Weight:{e.weight}</p>
                            <p>Product Item:{e.item}</p>
                            <button onClick={() => deleteItem(index)}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Home