import React from 'react';
function LeftSectio({imageUrl,productName,productDescription,tryDemo,learnMore,GooglePlay,Apple}) {
    return ( <>
    <div className='container'>
        <div className='row'>
            <div className='col-7 p-5 ' style={{textAlign:"center"}}>
                <img src={imageUrl}/>
            </div>
            <div className='col-5 p-5 mt-5'>
                <h1>{productName}</h1>
                <p className='fs-5 mt-4'>{productDescription}</p>
                <div className='fs-5'>
                <a href={tryDemo} style={{textDecoration:"none",marginRight:"50px"}} >Try demo→ </a>
                <a href={learnMore} style={{textDecoration:"none"}}>Learn Demo→ </a>
                </div>
                <div className='mt-5'>
                <a href={GooglePlay} style={{marginRight:"50px"}}><img src='Media/googlePlay.svg'/> </a>
                <a href={Apple}><img src='Media/appstore.svg'/> </a>
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default LeftSectio;