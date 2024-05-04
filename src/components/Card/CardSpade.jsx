import React from 'react';

const CardSpade = (props) => {
    return (
        <svg width="78" height="122" viewBox="0 0 78 122" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="0.228027" y="0.904236" width="77.3047" height="120.704" rx="8"
                  fill="url(#paint0_linear_251_1415)"/>
            <rect x="0.90625" y="1.58234" width="75.9485" height="119.348" rx="8" fill="url(#paint1_linear_251_1415)"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M43.9463 68.1803C47.9568 68.2321 50.424 65.2809 49.0669 62.1746C47.7099 59.0682 46.357 58.3693 44.2267 56.1171C42.0954 53.865 38.9962 49.9691 39.0109 49.0502C39.0265 49.9691 36.055 53.865 33.9237 56.1171C31.7934 58.3693 30.4416 59.0682 29.0835 62.1746C27.7264 65.2809 30.1946 68.2321 34.2041 68.1803C36.9569 68.1447 38.1958 66.3284 38.7011 65.1928L38.7011 66.679C38.7011 66.679 37.8222 72.04 31.6197 72.6268L30.6309 72.6268L30.6309 73.4622L47.5205 73.4622L47.5205 72.6268L46.5307 72.6268C40.3292 72.04 39.4493 66.679 39.4493 66.679L39.4493 65.388C40.0446 66.5248 41.3462 68.1467 43.9463 68.1803Z"
                  fill="url(#paint2_linear_251_1415)"/>
            <defs>
                <linearGradient id="paint0_linear_251_1415" x1="38.8804" y1="0.904236" x2="38.8804" y2="121.608"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B3B47"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint1_linear_251_1415" x1="38.8805" y1="1.58234" x2="38.8805" y2="120.93"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#24242E"/>
                    <stop offset="1" stopColor="#131217"/>
                </linearGradient>
                <linearGradient id="paint2_linear_251_1415" x1="39.0752" y1="49.0502" x2="39.0752" y2="73.4622"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor={props.canTransition ? "#EFB155" : "#B2B2BC"}/>
                    <stop offset="1" stopColor={props.canTransition ? "#EFAB53" : "#91909E"}/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default CardSpade