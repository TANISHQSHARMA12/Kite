import React from 'react';
function Pricing() {
    return ( <>
    <div className='container p-5 mt-0 pt-0'>
        <div className='row p-5 mt-0'>
            <div className='col-6 p-5'>
                <h2 className='text-muted,mb-4'>Unbeatable pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' style={{textDecoration:"none"}} >See Pricing<i class="fa-solid fa-right-long"></i></a>
            </div>
            <div className='col-2 d-flex align-items-center' >
            <img 
                src='Media/pricing-eq.svg' 
                style={{width:"50%"}} 
                alt="Free equity" 
            />
            <p style={{ margin: 0, fontSize: "11px", lineHeight: "1.3" }} className='text-muted'>
                Free equity <br/> delivery
            </p>
        </div>
            <div className='col-2 d-flex align-items-center' >
                <img src='Media/pricing-eq.svg'style={{width:"50%"}}/>
                <p className='text-muted' style={{ margin: 0, fontSize: "11px", lineHeight: "1.3" }}>Direct mutual funds</p>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <img src='Media/other-trades.svg' style={{width:"50%"}}/>
                <p className='text-muted' style={{ margin: 0, fontSize: "11px", lineHeight: "1.3" }}>Intraday and<br/>
F&O</p>
            </div>
        </div>
    </div>
    </> );
}

export default Pricing;