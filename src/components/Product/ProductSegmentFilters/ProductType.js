import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

function ProductType() {
  
    var[ptype,setPtype]=useState('simple');

    return (
    
        <div style={{margin:'15px'}}>
            
            <strong > Product Type </strong>

            <RadioGroup style={{display: 'inline-block'}} onChange={(e) => {setPtype(e.target.value)}}>
                <Radio value="grouped"  name="type"/> grouped
                <Radio value="external" name="type"/> external
                <Radio value="simple"   name="type"/> simple
                <Radio value="variable" name="type"/> variable
            </RadioGroup>
            <input name="type" style={{display:'none'}} value={ptype} />
            

        </div>
    )
}

export default ProductType