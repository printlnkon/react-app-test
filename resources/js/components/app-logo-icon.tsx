import { SVGAttributes } from 'react';

// export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
//     return (
//         <svg {...props} viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg">
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M17.2 5.63325L8.6 0.855469L0 5.63325V32.1434L16.2 41.1434L32.4 32.1434V23.699L40 19.4767V9.85547L31.4 5.07769L22.8 9.85547V18.2999L17.2 21.411V5.63325ZM38 18.2999L32.4 21.411V15.2545L38 12.1434V18.2999ZM36.9409 10.4439L31.4 13.5221L25.8591 10.4439L31.4 7.36561L36.9409 10.4439ZM24.8 18.2999V12.1434L30.4 15.2545V21.411L24.8 18.2999ZM23.8 20.0323L29.3409 23.1105L16.2 30.411L10.6591 27.3328L23.8 20.0323ZM7.6 27.9212L15.2 32.1434V38.2999L2 30.9666V7.92116L7.6 11.0323V27.9212ZM8.6 9.29991L3.05913 6.22165L8.6 3.14339L14.1409 6.22165L8.6 9.29991ZM30.4 24.8101L17.2 32.1434V38.2999L30.4 30.9666V24.8101ZM9.6 11.0323L15.2 7.92117V22.5221L9.6 25.6333V11.0323Z"
//             />
//         </svg>
//     );
// }

export default function EagleIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            {/* Letter A */}
            <path d="M32 4L6 60h12l4-10h20l4 10h12L32 4zm-4 34l4-10 4 10h-8z"/>
            
            {/* Eagle Head integrated into the "A" */}
            <path d="M50 20c-2-4-6-6-10-6s-8 2-10 6c-2 3-2 6-2 8h4c0-2 0-3 1-5 1-3 4-5 7-5s6 2 7 5c1 2 1 3 1 5h4c0-2 0-5-2-8zm-8 2c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
        </svg>
    );
}
