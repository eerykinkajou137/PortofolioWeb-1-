import NavBar from "./header-Components/navBar.jsx";

function Header() {
  return (
    <header className="flex justify-between font-lexend font-normal border-b-4 border-b-gray-500 text-sm pt-4 pb-1 mx-3">
      <NavBar></NavBar>
      <p className="text-gray-500 mx-5 inline-block py-2 px-4 hover:bg-gray-500 hover:text-white border-2 border-gray-500 rounded-3xl transition-colors duration-300 before:cursor-pointer">
        Let's Talk
      </p>
    </header>
  );
}

export default Header;
