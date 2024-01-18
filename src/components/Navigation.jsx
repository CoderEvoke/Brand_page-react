const Navigation = () =>{
return (
    <nav className="contianer">
          <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
          </div>
          <ul>
            <li href='menu'>Menu</li>
            <li href='menu'>location</li>
            <li href='menu'>about</li>
            <li href='menu'>contact</li>
          </ul>
          <button>Login</button>
        </nav>
);
};
export default Navigation;