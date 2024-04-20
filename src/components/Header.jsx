import TopBar from "./TopBar";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <div className="">
      <header className="bg-primary">
          <TopBar />
          <HeaderLogo />
      </header>
      <HeaderNav />
    </div>
  )
}
