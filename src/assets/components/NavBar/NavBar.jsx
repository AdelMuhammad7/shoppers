import "./NavBar.css"
import TopNav from "./TopNav";
import BotNav from "./BotNav";

function NavBar() {
  return (
    <nav className="container">
      <TopNav />
      <BotNav />      
    </nav>
  )
}

export default NavBar