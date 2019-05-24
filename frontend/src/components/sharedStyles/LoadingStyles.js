import React, { useEffect, useState } from 'react';

function loadingJSX(title) {
    return(
    <div>
        <h1>{ title }</h1>
        <h2>Loading...</h2>
    </div> 
    )
}

export { loadingJSX };