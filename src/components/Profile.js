import React, { useState } from 'react'
import '../style/Profile.css'

const Profile = () => {

    const [favSelected, setFavSelected] = useState(false)

  return (
    <section className='maindiv'>
        <div className='innerForm'>
            <div>
                <h1>John Lee</h1>
                <p>Engenheiro Software</p>
            </div>

            <div>
                <button
                    onClick={() => setFavSelected(false)}
                    className={ favSelected === true ? ('defaultTab') : ('selectedTab')}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.67185 0.0317265C8.15993 0.249578 6.93158 1.44334 6.63747 2.98068C6.53183 3.53293 6.59828 4.34017 6.79164 4.85386C6.98293 5.36201 7.02564 5.42693 8.30228 7.14873C8.84056 7.87474 9.28096 8.47629 9.28096 8.48549C9.28096 8.49471 8.41198 8.5025 7.34993 8.50278C5.26026 8.50337 5.17683 8.50903 4.81527 8.67454C4.2091 8.95205 3.81048 9.57365 3.80888 10.244C3.80713 10.9809 4.25594 11.6019 5.01015 11.9061C5.12561 11.9527 5.5697 11.959 9.7813 11.9731C14.4082 11.9887 14.4256 11.989 14.5662 12.054C14.7366 12.1329 14.8884 12.2792 14.9807 12.4536C15.0773 12.636 15.0773 12.9987 14.9808 13.181C14.8923 13.3481 14.6652 13.5469 14.5094 13.5936C14.4174 13.6212 13.0508 13.6304 9.05442 13.6304H3.72223L3.65356 13.4468C3.4396 12.8747 2.91161 12.4139 2.30737 12.272C1.09303 11.9866 -0.0728375 12.977 0.00355917 14.229C0.0617245 15.1824 0.817779 15.9384 1.77128 15.9965C2.58782 16.0464 3.35716 15.5531 3.64439 14.7955L3.73023 14.5691L9.13079 14.5688L14.5314 14.5685L14.7778 14.4906C15.4494 14.2785 15.9337 13.6673 15.9939 12.9556C16.063 12.1396 15.5408 11.3813 14.7222 11.1088C14.5596 11.0547 14.2993 11.0507 9.92202 11.0355L5.29382 11.0194L5.14634 10.9327C4.8188 10.7402 4.67317 10.3649 4.78334 9.99713C4.8299 9.84172 5.02838 9.61465 5.196 9.525L5.32509 9.45595L7.84799 9.44032C10.3514 9.42481 10.3716 9.42419 10.4592 9.3589C10.5312 9.30524 12.7518 6.29274 13.1935 5.6495C13.9341 4.57097 14.0131 3.14447 13.3982 1.95249C13.0553 1.28759 12.4536 0.691473 11.7901 0.359395C11.2054 0.0666853 10.3488 -0.0658332 9.67185 0.0317265ZM10.671 0.982651C11.2412 1.08206 11.7296 1.34659 12.1304 1.77304C12.8973 2.58895 13.0923 3.7893 12.6163 4.76427C12.5174 4.96693 12.1625 5.48103 11.3634 6.5792C10.7503 7.4219 10.237 8.11539 10.2228 8.12026C10.2001 8.12811 8.24364 5.51695 7.97211 5.1164C7.4393 4.33042 7.37248 3.31886 7.7958 2.44689C8.32586 1.35494 9.46865 0.772961 10.671 0.982651ZM9.98457 2.19161C9.56593 2.24645 9.11224 2.5826 8.92624 2.97574C8.59905 3.66729 8.89153 4.49192 9.58564 4.83494C9.79906 4.94038 9.84991 4.95248 10.1267 4.96361C10.38 4.97378 10.4674 4.96415 10.6384 4.90727C11.7443 4.53926 11.9362 3.03187 10.9576 2.39949C10.6657 2.21081 10.351 2.14358 9.98457 2.19161ZM10.438 3.18472C10.7157 3.37808 10.7295 3.72883 10.468 3.94887C10.3899 4.01457 10.338 4.03076 10.2057 4.03076C9.98845 4.03076 9.85094 3.93983 9.76892 3.74196C9.71632 3.61504 9.71322 3.57843 9.74584 3.46951C9.79625 3.30135 9.89554 3.19303 10.0471 3.14094C10.1908 3.0915 10.3258 3.10664 10.438 3.18472ZM2.28126 13.2473C2.46455 13.3284 2.65008 13.5128 2.74759 13.711C2.80863 13.835 2.82336 13.9136 2.82336 14.1151C2.82336 14.4098 2.75284 14.5847 2.55386 14.7836C2.35488 14.9826 2.17994 15.0531 1.88521 15.0531C1.59047 15.0531 1.41554 14.9826 1.21656 14.7836C0.713395 14.2806 0.920976 13.4265 1.60051 13.2038C1.7741 13.1469 2.10167 13.1678 2.28126 13.2473Z" fill={favSelected === true ? ('#393C6A') : ('white')}/>
                    </svg>
                    As tuas rotas
                </button>

                <button
                    onClick={() => setFavSelected(true)}
                    className={ favSelected === true ? ('selectedTab') : ('defaultTab')}
                >
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.35727e-08 4.2005C-0.000198747 3.07305 0.465908 1.99286 1.29345 1.20297C2.12099 0.413084 3.24047 -0.0201577 4.4 0.000721143C5.77386 -0.00637183 7.08479 0.56005 8 1.5562C8.91521 0.56005 10.2261 -0.00637183 11.6 0.000721143C12.7595 -0.0201577 13.879 0.413084 14.7065 1.20297C15.5341 1.99286 16.0002 3.07305 16 4.2005C16 8.36607 10.8968 11.5112 8 14C5.1096 11.4902 6.35727e-08 8.36918 6.35727e-08 4.2005Z" fill={favSelected === true ? ('white') : ('#393C6A')}/>
                    </svg>
                    Favoritos
                </button>
            </div>
        </div>
    </section>
  )
}

export default Profile;