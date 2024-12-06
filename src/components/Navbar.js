import LogoImage from "../image/img/logo.png";

export default function Navbar() {
  return (
    <div className="bg-white mx-20 rounded-3xl">
      <nav className="flex items-center justify-between px-20">
        <a href="#">
          <img src={LogoImage} alt="Logo" />
        </a>
        <ul className="flex items-center gap-10 py-12">
          <a href="#" className="Active text-[#00E5CC]">
            <li>Home</li>
          </a>
          <a
            href="#"
            className="text-[#828297] hover:text-[#00E5CC] ease-in duration-200"
          >
            <li>About</li>
          </a>
          <a
            href="#"
            className="text-[#828297] hover:text-[#00E5CC] ease-in duration-200"
          >
            <li>Services</li>
          </a>
          <a
            href="#"
            className="text-[#828297] hover:text-[#00E5CC] ease-in duration-200"
          >
            <li>Reviews</li>
          </a>
          <a
            href="#"
            className="text-[#828297] hover:text-[#00E5CC] ease-in duration-200"
          >
            <li>Support</li>
          </a>
        </ul>
        <div className="flex items-center gap-8">
          <button className="text-black">Sign In</button>
          <button className="text-white bg-[#060640] py-4 px-8 rounded-lg hover:bg-white ease-in duration-200 hover:text-black hover:outline hover:outline-1">
            Free Trial
          </button>
        </div>
      </nav>
    </div>
  );
}
