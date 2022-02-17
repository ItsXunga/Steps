import React from 'react'
import { Link } from 'react-router-dom';
import { theme } from '../assets/gradient';

const Landing = () => {
    return(
            <div style={theme}>
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <svg width="87" height="112" viewBox="0 0 87 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7676 57.0811C39.1458 57.3687 41.5979 57.5125 44.1239 57.5125C46.8274 57.5125 49.3542 57.344 51.7044 57.0068C49.3062 59.3815 46.802 61.6542 44.1985 63.8182C41.6221 61.6768 39.1429 59.4289 36.7676 57.0811Z" fill="#393C6A"/>
                    <path d="M20.177 35.2444C22.8525 40.7119 27.8261 44.7449 33.724 46.2504V46.2504C37.4781 47.2 41.1307 47.6748 44.6819 47.6748C49.0448 47.6748 52.3423 46.8587 54.5745 45.2266C56.8066 43.5647 57.9227 41.1906 57.9227 38.1043C57.9227 34.0089 54.8112 31.1749 48.5882 29.602C48.1485 29.4833 46.9141 29.1717 44.8848 28.6672C42.8556 28.1331 40.9447 27.6286 39.1522 27.1537C37.3936 26.6492 36.1253 26.2635 35.3474 25.9964C25.3703 22.91 20.3817 17.1529 20.3817 8.72481C20.3817 8.3595 20.3909 7.99935 20.4091 7.64437C17.9148 11.7324 16.5209 16.4745 16.5234 21.4384C16.5234 26.0582 17.9919 30.7788 20.177 35.2444Z" fill="#393C6A"/>
                    <path d="M70.3247 30.1663C69.6142 28.6013 68.6594 27.2262 67.4602 26.0409C64.5516 23.1326 59.6983 20.6992 52.9003 18.7405C51.9534 18.4734 49.8903 17.8948 46.7112 17.0045C43.532 16.1142 41.5366 15.5355 40.7249 15.2684C36.6326 14.1704 34.5864 11.8111 34.5864 8.19064C34.7217 5.25269 35.8209 3.16052 37.884 1.91412C39.9808 0.638039 43.0754 0 47.1677 0V0C59.2291 0 71.3872 8.28937 71.8542 20.3417C71.8683 20.7064 71.8748 21.072 71.8736 21.4384C71.8736 24.3373 71.2954 27.2759 70.3247 30.1663Z" fill="#393C6A"/>
                    <path d="M9.03 104.35C6.11333 104.35 3.76833 103.977 1.995 103.23V99.87C2.99833 100.243 4.07167 100.547 5.215 100.78C6.38167 101.013 7.53667 101.13 8.68 101.13C10.4767 101.13 11.8183 100.92 12.705 100.5C13.615 100.08 14.07 99.24 14.07 97.98C14.07 97.21 13.8833 96.5917 13.51 96.125C13.1367 95.6583 12.5183 95.2617 11.655 94.935C10.7917 94.585 9.60167 94.2233 8.085 93.85C5.65833 93.22 3.955 92.4267 2.975 91.47C1.995 90.49 1.505 89.1483 1.505 87.445C1.505 85.4617 2.22833 83.91 3.675 82.79C5.12167 81.67 7.28 81.11 10.15 81.11C11.4567 81.11 12.6817 81.2033 13.825 81.39C14.9917 81.5767 15.9017 81.7867 16.555 82.02V85.38C14.7817 84.7033 12.8217 84.365 10.675 84.365C8.995 84.365 7.68833 84.5867 6.755 85.03C5.82167 85.4733 5.355 86.2783 5.355 87.445C5.355 88.1217 5.51833 88.67 5.845 89.09C6.17167 89.51 6.73167 89.8717 7.525 90.175C8.34167 90.4783 9.46167 90.8167 10.885 91.19C12.7283 91.6567 14.1517 92.2167 15.155 92.87C16.1817 93.5 16.8933 94.2467 17.29 95.11C17.71 95.95 17.92 96.9067 17.92 97.98C17.92 99.9633 17.185 101.527 15.715 102.67C14.245 103.79 12.0167 104.35 9.03 104.35ZM27.4414 104.35C25.668 104.35 24.338 103.883 23.4514 102.95C22.588 101.993 22.1564 100.698 22.1564 99.065V90.385H19.7064V87.41H22.1564V83.595L25.9364 82.44V87.41H30.3464L30.1014 90.385H25.9364V98.855C25.9364 99.8117 26.158 100.488 26.6014 100.885C27.0447 101.258 27.768 101.445 28.7714 101.445C29.4014 101.445 30.0664 101.328 30.7664 101.095V103.79C29.8564 104.163 28.748 104.35 27.4414 104.35ZM42.0845 104.35C39.1912 104.35 36.9512 103.638 35.3645 102.215C33.7778 100.792 32.9845 98.61 32.9845 95.67C32.9845 93.01 33.6612 90.91 35.0145 89.37C36.3678 87.83 38.4212 87.06 41.1745 87.06C43.6945 87.06 45.5845 87.725 46.8445 89.055C48.1278 90.3617 48.7695 92.0533 48.7695 94.13V97.21H36.6245C36.8112 98.82 37.3945 99.9283 38.3745 100.535C39.3545 101.142 40.8478 101.445 42.8545 101.445C43.6945 101.445 44.5578 101.363 45.4445 101.2C46.3312 101.037 47.1012 100.827 47.7545 100.57V103.37C47.0078 103.697 46.1445 103.942 45.1645 104.105C44.2078 104.268 43.1812 104.35 42.0845 104.35ZM36.6245 94.725H45.4095V93.57C45.4095 92.4267 45.0945 91.54 44.4645 90.91C43.8345 90.2567 42.7728 89.93 41.2795 89.93C39.5062 89.93 38.2812 90.315 37.6045 91.085C36.9512 91.855 36.6245 93.0683 36.6245 94.725ZM52.4833 111.56V87.41H55.7733L55.9833 89.055C56.73 88.3783 57.5467 87.8767 58.4333 87.55C59.32 87.2233 60.37 87.06 61.5833 87.06C63.9633 87.06 65.8183 87.7133 67.1483 89.02C68.4783 90.3033 69.1433 92.4383 69.1433 95.425C69.1433 98.4117 68.455 100.652 67.0783 102.145C65.7017 103.615 63.8233 104.35 61.4433 104.35C59.4367 104.35 57.7217 103.883 56.2983 102.95V111.56H52.4833ZM60.4633 101.48C63.6833 101.48 65.2933 99.45 65.2933 95.39C65.2933 93.43 64.9317 92.0417 64.2083 91.225C63.485 90.385 62.2717 89.965 60.5683 89.965C58.865 89.965 57.4417 90.5483 56.2983 91.715V100.01C56.835 100.453 57.43 100.815 58.0833 101.095C58.76 101.352 59.5533 101.48 60.4633 101.48ZM78.2135 104.35C77.0702 104.35 75.9735 104.268 74.9235 104.105C73.8968 103.942 73.0452 103.743 72.3685 103.51V100.29C73.1618 100.593 74.0368 100.827 74.9935 100.99C75.9502 101.153 76.8602 101.235 77.7235 101.235C79.0302 101.235 79.9635 101.118 80.5235 100.885C81.0835 100.652 81.3635 100.197 81.3635 99.52C81.3635 99.03 81.1885 98.645 80.8385 98.365C80.5118 98.085 80.0102 97.8283 79.3335 97.595C78.6802 97.3617 77.8402 97.0817 76.8135 96.755C75.8335 96.4283 74.9818 96.0783 74.2585 95.705C73.5352 95.3083 72.9752 94.8067 72.5785 94.2C72.1818 93.5933 71.9835 92.8 71.9835 91.82C71.9835 90.3033 72.5318 89.1367 73.6285 88.32C74.7252 87.48 76.4868 87.06 78.9135 87.06C79.8702 87.06 80.7802 87.13 81.6435 87.27C82.5068 87.41 83.2418 87.585 83.8485 87.795V90.98C83.1952 90.7233 82.4718 90.525 81.6785 90.385C80.9085 90.245 80.1852 90.175 79.5085 90.175C78.2952 90.175 77.3735 90.28 76.7435 90.49C76.1368 90.7 75.8335 91.12 75.8335 91.75C75.8335 92.4033 76.1485 92.87 76.7785 93.15C77.4318 93.4067 78.4702 93.7683 79.8935 94.235C81.2002 94.6317 82.2385 95.0517 83.0085 95.495C83.7785 95.9383 84.3269 96.475 84.6535 97.105C85.0035 97.7117 85.1785 98.505 85.1785 99.485C85.1785 101.118 84.5835 102.343 83.3935 103.16C82.2035 103.953 80.4768 104.35 78.2135 104.35Z" fill="#393C6A"/>
                    </svg>  
                </div>

                <div style={{position: 'absolute', bottom: 0, right: 0, margin: '.75rem', padding: '.75rem'}}>
                    <Link to={'/login'}>
                    <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.179464 26.3799C0.545982 26.9135 1.24918 27.1482 1.74505 26.9024C1.98737 26.7823 14.7521 14.2714 14.8878 14.0211C14.9495 13.9072 15 13.6728 15 13.5C15 13.3272 14.9495 13.0928 14.8878 12.9789C14.7521 12.7286 1.98737 0.217684 1.74505 0.0976028C1.24918 -0.148228 0.545982 0.0864906 0.179464 0.620071C-0.0159812 0.904524 -0.05996 1.43573 0.0880688 1.72309C0.135485 1.81513 2.83328 4.50256 6.0832 7.69523L11.9922 13.5L6.0832 19.3048C2.83328 22.4974 0.135485 25.1849 0.0880691 25.2769C-0.0599597 25.5643 -0.0159809 26.0955 0.179464 26.3799Z" fill="white"/>
                    </svg>
                    </Link> 
                </div>
            </div>

    )
}

export default Landing;
