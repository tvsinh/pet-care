import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ProductsRelated = ({ id }) => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        (async () => {
            const { data = [] } = await Axios.get(`http://localhost:5000/api/products/${id}/recommend`);
            console.log('data gi', data);
            setDataList(data);
            console.log('setDataList gi', setDataList);

        })()
    }, [])


    if (!id) return null;

    if (dataList.length = 0) return 'Nothing';

    return (
        <div className='products-related'>
            {dataList.map(({ name }) => <div>{name}</div>)}
        </div>
    )
}
