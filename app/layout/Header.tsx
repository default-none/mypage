import Logo from "../components/logo/Logo";

export function Header() {
  return (
    <header className=" w-[100%] h-[75px] flex align-middle">
      <div className="headerWrap w-min mx-auto my-[10px]">
        <Logo />
      </div>
    </header>
  );
}
