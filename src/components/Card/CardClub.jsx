import React from 'react';

const CardClub = (props) => {
    return (
        <svg width="78" height="121" viewBox="0 0 78 121" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="77.3047" height="120.704" rx="8" fill="url(#paint0_linear_251_1401)"/>
            <rect x="0.678223" y="0.678101" width="75.9485" height="119.348" rx="8"
                  fill="url(#paint1_linear_251_1401)"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M44.5352 56.3845C43.8592 56.3845 43.215 56.5354 42.6276 56.8076C43.1791 55.917 43.5029 54.838 43.5029 53.6744C43.5029 50.6211 41.2789 48.1459 38.5356 48.1459C35.7923 48.1459 33.5685 50.6211 33.5685 53.6744C33.5685 54.7823 33.8624 55.8131 34.3664 56.678C33.8653 56.4887 33.3286 56.3845 32.7699 56.3845C30.0265 56.3845 27.8027 58.8597 27.8027 61.913C27.8027 64.9663 30.0265 67.4415 32.7699 67.4415C33.3894 67.4415 33.9821 67.3141 34.529 67.0834C34.5289 67.0847 36.8407 66.3899 38.3603 63.3114V65.165C38.3603 65.165 37.5812 71.0078 32.0881 71.6474H31.2115V72.558H46.1714V71.6474H45.2949C39.8018 71.0078 39.0226 65.165 39.0226 65.165V63.4361C39.3056 64.1299 40.8705 67.5218 44.3876 67.4376C44.4367 67.4389 44.4856 67.4415 44.5352 67.4415C47.2785 67.4415 49.5023 64.9663 49.5023 61.913C49.5023 58.8597 47.2785 56.3845 44.5352 56.3845Z"
                  fill="url(#paint2_linear_251_1401)"/>
            <defs>
                <linearGradient id="paint0_linear_251_1401" x1="38.6524" y1="0" x2="38.6524" y2="120.704"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B3B47"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint1_linear_251_1401" x1="38.6525" y1="0.678101" x2="38.6525" y2="120.026"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#24242E"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint2_linear_251_1401" x1="38.6525" y1="48.1459" x2="38.6525" y2="72.558"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor={props.canTransition ? "#EFB155" : "#B2B2BC"}/>
                    <stop offset="1" stopColor={props.canTransition ? "#EFAB53" : "#91909E"}/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default CardClub