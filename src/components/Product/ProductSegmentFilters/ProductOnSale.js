import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

function ProductOnSale() {

    var[onsale,setOS]=useState(0);

    return (
    
        <div style={{margin:'15px'}}>
            
            <strong > Product Type </strong>

            <RadioGroup style={{display: 'inline-block'}} onChange={(e) => {setOS(e.target.value)}}>
                <Radio value="1" name="onsale"/> Yes
                <Radio value="0" name="onsale"/> No
            </RadioGroup>
            <input name="os" style={{display:'none'}} value={onsale} />
            

        </div>
    )
}

export default ProductOnSale