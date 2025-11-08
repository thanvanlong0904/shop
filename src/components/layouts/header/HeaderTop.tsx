import Container from "../Container";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm font-sans">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              className="w-24 object-contain"
              src="https://pos.nvncdn.com/4ef0bf-108661/store/20250429_Ya1OrcUS.png?v=1745897293"
              alt="Logo"
            />
          </a>

          {/* Menu */}
          <nav>
            <ul className="flex gap-6 text-sm font-semibold text-gray-700">
              <li className="hover:text-red-600 transition-colors cursor-pointer">PRE - BLACK FRIDAY</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">ĐẦM</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">ÁO</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">QUẦN</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">CHÂN VÁY</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">ÁO KHOÁC</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">LOOKBOOK</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">BST MỚI</li>
            </ul>
          </nav>

          {/* Icons */}
          <ul className="flex gap-4 items-center text-lg text-gray-700">
            <li className="relative flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer">
              <CiHeart size={22} />
              <span className="text-xs absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                0
              </span>
            </li>
            <li className="relative flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer">
              <FiShoppingCart size={20} />
              <span className="text-xs absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                0
              </span>
            </li>
            <li className="hover:text-red-600 transition-colors cursor-pointer">
              <FaRegUser size={20} />
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
