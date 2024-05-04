import React from 'react';

import {LinearProgress} from "@mui/material";

function Loader(props) {
    return (
        <div style={{minHeight: "80vh", display: "flex", alignItems: "center", justifyContent:"center"}}>

            <div style={{width: "60%", textAlign: "center", height: "fit-content", display: "block"}}>
                <LinearProgress/>
            </div>
        </div>
    );
}

export default Loader;