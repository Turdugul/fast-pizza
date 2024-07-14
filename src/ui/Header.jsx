import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/fast-pizza/" className="tracking-widest">
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
