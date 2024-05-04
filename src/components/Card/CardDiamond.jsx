import React from 'react';

const CardDiamond = (props) => {
    return (
        <svg width="78" height="121" viewBox="0 0 78 121" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="77.3047" height="120.704" rx="8" fill="url(#paint0_linear_251_1422)"/>
            <rect x="0.678223" y="0.678101" width="75.9485" height="119.348" rx="8"
                  fill="url(#paint1_linear_251_1422)"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M27.1245 60.3519L38.955 72.558L50.7854 60.3519L38.955 48.1459L27.1245 60.3519Z"
                  fill={`url(#paint2_linear_251_1422)`}/>
            <defs>
                <linearGradient id="paint0_linear_251_1422" x1="38.6524" y1="0" x2="38.6524" y2="120.704"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B3B47"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint1_linear_251_1422" x1="38.6525" y1="0.678101" x2="38.6525" y2="120.026"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#24242E"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint2_linear_251_1422" x1="38.955" y1="48.1459" x2="38.955" y2="72.558"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor={props.canTransition ? "#EFB155" : "#B2B2BC"}/>
                    <stop offset="1" stopColor={props.canTransition ? "#EFAB53" : "#91909E"}/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default CardDiamond