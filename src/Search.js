import React from 'react'
import TextField from '@mui/material/TextField';

export const Search = ({ filterKeys, setfilterKeys }) => {
    return (
        <div className='searchFeild' >
            <TextField id="outlined-basic" label="SEARCH BY YEAR" variant="outlined" value={filterKeys}
                onChange={(e) => setfilterKeys(e.target.value)} />
        </div>
    )
}
