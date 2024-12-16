const Nav = () => {
  return (
    <nav className="flex justify-between text-white p-4 bg-slate-800 shadow-lg">
      {/* logo */}
      <img className="w-10" src="/images/bot.png" alt="BobTheBot" />

      {/* links */}
      <ul className="flex justify-center items-center">
        <li className="mr-2">
          <a href="/" className="hover:bg-blue-300 rounded p-2">
            Home
          </a>
        </li>

        <li>
          <a href="/contact" className="hover:bg-blue-300 rounded p-2">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
