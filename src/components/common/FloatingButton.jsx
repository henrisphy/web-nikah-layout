import { HiArrowUp, HiHeart } from "react-icons/hi";
import { Link } from "react-scroll";

export default function FloatingButton() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col space-y-3 z-40">
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition"
      >
        <HiArrowUp size={20} />
      </Link>

      <button className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transition">
        <HiHeart size={20} />
      </button>
    </div>
  );
}
