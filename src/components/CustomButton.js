function Button({ name, url = "#", icon = true }) {
    return (
        <a href={url} className="cmn_btn cmn_btn_alt text-center">
            <span className="position-relative">
                <span className='c-first'>{name}</span>
                <span className='c-second'>{name}</span>
                <span className='c-third'>{name}</span>
            </span>
            {icon && <span className="position-relative ms-1 mb-1">
                <span className="c-first">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={14} height={14} viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(197, 106, 24)" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="c-second">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={14} height={14} viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(197, 106, 24)" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="c-third">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={14} height={14} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </span>}
        </a>
    )
}

export default Button
// function Button({ name, url = "#" }) {
//     return (
//         <a href={url} className="cmn_btn cmn_btn_alt text-center">
//             <span className="position-relative">
//                 <span className='c-first'>{name}</span>
//                 <span className='c-second'>{name}</span>
//                 <span className='c-third'>{name}</span>
//             </span>
//             <span className="position-relative ms-1 mb-1">
//                 <span className="c-first">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(197, 106, 24)" class="size-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
//                     </svg>
//                 </span>
//                 <span className="c-second">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(197, 106, 24)" class="size-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
//                     </svg>
//                 </span>
//                 <span className="c-third">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
//                     </svg>
//                 </span>
//             </span>
//         </a>
//     )
// }

// export default Button