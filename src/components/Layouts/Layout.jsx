import Header from "../Header/Header";
import Main from "../Main/Main";
const Layout = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/backgroundImage.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative max-w-screen-sm w-screen border-2">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
