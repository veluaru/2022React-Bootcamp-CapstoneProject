import React from 'react'
import { useProduct } from '../utils/hooks/useProduct';
import { useParams } from "react-router-dom";


function ProductList() {
    const { id } = useParams();
    const { dataProduct, isLoadingProduct } = useProduct(id);

    React.useEffect(() => {
        console.log(dataProduct)
      }, [dataProduct])

    return (
        <div>
            <h1>This is details id {id}</h1>
            {isLoadingProduct && <span>Loading...</span>}
            {!isLoadingProduct && <span>{dataProduct.results[0].data.name}</span>}  
        </div>
    )
}

export default ProductList
