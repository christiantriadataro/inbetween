import React from 'react';

const CardHeart = (props) => {
    return (
        <svg width="78" height="121" viewBox="0 0 78 121" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="77.3047" height="120.704" rx="8" fill="url(#paint0_linear_251_1408)"/>
            <rect x="0.678223" y="0.678101" width="75.9485" height="119.348" rx="8"
                  fill="url(#paint1_linear_251_1408)"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M44.1209 48.1468C39.8267 48.2128 38.9731 53.1017 38.9731 53.1017C38.9731 53.1017 37.9821 48.2128 33.6879 48.1468C29.3936 48.0807 26.7509 51.8464 28.2044 55.8104C29.6578 59.7742 31.106 60.6662 33.3879 63.54C35.6698 66.4139 38.9896 71.3853 38.9731 72.558C38.9566 71.3853 42.139 66.4139 44.4209 63.54C46.7029 60.6662 48.151 59.7742 49.6044 55.8104C51.0578 51.8464 48.4153 48.0807 44.1209 48.1468Z"
                  fill="url(#paint2_linear_251_1408)"/>
            <defs>
                <linearGradient id="paint0_linear_251_1408" x1="38.6524" y1="0" x2="38.6524" y2="120.704"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B3B47"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint1_linear_251_1408" x1="38.6525" y1="0.678101" x2="38.6525" y2="120.026"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#24242E"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint2_linear_251_1408" x1="38.9044" y1="48.1459" x2="38.9044" y2="72.558"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor={props.canTransition ? "#EFB155" : "#B2B2BC"}/>
                    <stop offset="1" stopColor={props.canTransition ? "#EFAB53" : "#91909E"}/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default CardHeart