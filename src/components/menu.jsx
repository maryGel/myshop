import './menu.css';

function MenuList({GotoProductPage}){

  return(
    <div className="menu-container">
      <ul className = "menu-list">
        <li><a onClick={GotoProductPage}><span className="menu-item">TRENDING NOW</span></a></li>
        <li><a onClick={GotoProductPage}><span className="menu-item">NEW</span></a></li>
        <li><a onClick={GotoProductPage}><span className="menu-item">WOMEN</span></a></li>
        <li><a onClick={GotoProductPage}><span className="menu-item">MEN</span></a></li>
        <li><a onClick={GotoProductPage}><span className="menu-item">KIDS</span></a></li>
        <li><a onClick={GotoProductPage}><span className="menu-item">EXPLORE</span></a></li>
      </ul>
    </div>
  )

}

export default MenuList;