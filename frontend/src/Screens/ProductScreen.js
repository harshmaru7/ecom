import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import data from '../data';
import { cleanup } from 'axe-core';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props){
    // console.log(props.match.params.id);
    // const product = data.products.find(x => x._id === props.match.params.id);
    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state=>state.productDetails);
    const {product , loading ,error } = productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return () =>{
            //
        };
    },[]);


    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
        console.log(qty)
    };


    return <div >
        
        <div className="back-to-result"><Link to="/">Back </Link></div>  
        {loading? <div>Loading....</div>:
         error ? <div>{error} </div>:
         (
            <div className="details">
        <div className="details-image">
            <img src={product.image} alt="product "></img>
        </div>
        <div className="details-info">
            <ul>
                <li><h4>{product.name}</h4></li>
                <li><h4>{product.brand}</h4></li>
                <li><b>Price : {product.price} INR</b></li>
                <li>
                    <div><h6>Description: {product.description}</h6></div>
                </li>
            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Price: {product.price}
                </li>
                <li>
                    Quantity: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                        {[...Array(product.stock).keys()].map(x=>
                            <option key={x+1} value={x+1}>{x+1}</option>)}
                        {/* <option key={1} value={1}>1</option>
                        <option key={2} value={2}>2</option>
                        <option key={3} value={3}>3</option>
                        <option key={4} value={4}>4</option>
                        <option key={5} value={5}>5</option>
                        <option key={6} value={6}>6</option>
                        <option key={7} value={7}>7</option> */}
                    </select>
                </li>
                <li>
                    <button onClick={handleAddToCart} className="button">Add to Cart</button>
                </li>
            </ul>
        </div>
        </div>
         )
        }
        
    </div>
}

export default ProductScreen;