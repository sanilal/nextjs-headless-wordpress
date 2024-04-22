import TopBar from "./TopBar";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <div className="">
      <header className="bg-primary">
          <TopBar />
          <HeaderLogo />
      </header>
      
    </div>
  )
}
