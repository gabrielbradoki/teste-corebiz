import React from 'react';
import '../../scss/common.scss';

const SearchBarMobile = () => {
  return (
    <>
    <div className="header__search mobile">
      <input type="text" placeholder="O que está procurando?" />
      <button className="btn btn-search"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M12.021 2.05969C9.27509 -0.686237 4.8059 -0.686237 2.05997 2.05969C-0.685355 4.80621 -0.685355 9.27481 2.05997 12.0213C4.50529 14.466 8.31375 14.728 11.0579 12.819C11.1156 13.0922 11.2478 13.3529 11.4603 13.5654L15.4592 17.5644C16.042 18.1459 16.9837 18.1459 17.5635 17.5644C18.1456 16.9822 18.1456 16.0405 17.5635 15.4601L13.5645 11.46C13.3532 11.2493 13.0919 11.1165 12.8187 11.0588C14.7288 8.31406 14.4669 4.5062 12.021 2.05969ZM10.7585 10.7588C8.7084 12.8089 5.37199 12.8089 3.32251 10.7588C1.27364 8.70872 1.27364 5.37289 3.32251 3.32282C5.37199 1.27335 8.7084 1.27335 10.7585 3.32282C12.8085 5.37289 12.8085 8.70872 10.7585 10.7588Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
    </div>
    </>
  )
}

export default SearchBarMobile;