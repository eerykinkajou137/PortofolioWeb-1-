export default function NavBar() {
  return (
    <nav>
      <ul className="flex">
        <li className="mx-5 px-3 py-1 hover:bg-slate-200 hover:rounded-md  cursor-pointer transition-colors duration-300">
          <a href="#">Home</a>
        </li>
        <li className="mx-5 px-3 py-1 hover:bg-slate-200 hover:rounded-md  cursor-pointer transition-colors duration-300">
          <a href="#">Experince</a>
        </li>
        <li className="mx-5 px-3 py-1 hover:bg-slate-200 hover:rounded-md  cursor-pointer transition-colors duration-300">
          <a href="#">Projects</a>
        </li>
        <li className="ml-5 px-3 py-1 hover:bg-slate-200 hover:rounded-md  cursor-pointer transition-colors duration-300">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
