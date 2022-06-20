import React from 'react'
import { useParams } from "react-router-dom";


function ProductList() {
    const { id } = useParams();

    return (
        <h1>This is details id {id}</h1>
    )
}

export default ProductList
