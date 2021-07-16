import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import logo from "./Arash.png";
import Link from "next/link";

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <Link href='/'>
          <HeaderItem Icon={HomeIcon} title='HOME' />
        </Link>
        <HeaderItem Icon={LightningBoltIcon} title='TRENDING' />
        <HeaderItem Icon={BadgeCheckIcon} title='VERIFIED' />
        <HeaderItem Icon={CollectionIcon} title='COLLECTIONS' />
        <HeaderItem Icon={SearchIcon} title='SEARCH' />
        <HeaderItem Icon={UserIcon} title='ACCOUNT' />
      </div>
      <Image
        className='object-contain'
        // src='https://links.papareact.com/ua6'
        src={logo}
        width={150}
        height={75}
      />
    </header>
  );
}

export default Header;
