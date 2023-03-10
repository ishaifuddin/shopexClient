import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Total_Profit_() {

    var [profit_bellow, setprofit_bellow] = useState(true);
    var [profit_above, setprofit_above] = useState(false);
    var [profit_between, setprofit_between] = useState(false);

    var handleChange = e => {

        setprofit_between(false);
        setprofit_above(false);
        setprofit_bellow(false);

        if(e === 'profit_between') setprofit_between(true);
        if(e === 'profit_above') setprofit_above(true);
        if(e === 'profit_bellow') setprofit_bellow(true);
    }

    const options = [
        { value: 'profit_bellow', label: 'Less than' },
        { value: 'profit_above', label: 'More than' },
        { value: 'profit_between', label: 'In-Between' },
    ];
      

    
    return (
    
        <>
    
            <Grid> 

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Total Profit :  </strong>

                    <Select
                        placeholder="Less than"
                        defaultValue={'profit_bellow'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />
                </Grid.Col>

                <Grid.Col span={8} >
                    
                    {   
                        profit_bellow && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="pa" name="profit_amount_max"  /> 
                    }
                
        
                    { 
                        profit_above && 
                        <input style={{marginTop:'7px'}} defaultValue="0" type="number" id="pa" name="profit_amount_min"  /> 
                    }

                    { profit_between && 

                        <div id="profit_betwn" style={{display:'inline-flex'}}>
                            <input style={{marginTop:'7px'}} placeholder="From" type="number" id="pmin" name="profit_amount_minval"  />   
                            <input style={{marginTop:'7px'}} placeholder="To" type="number" id="pmax" name="profit_amount_maxval"  /> 
                        </div>
                    }

                </Grid.Col>

            </Grid>
        </>
    )
}

export default Total_Profit_