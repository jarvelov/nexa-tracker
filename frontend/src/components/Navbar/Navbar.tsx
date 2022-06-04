import Link from 'next/link';
import { Navbar as MantineNavbar } from '@mantine/core';
import { useAppSelector } from '../../store/store';

const Navbar = () => {
  const menuOpen = useAppSelector((state) => state.app.menuOpen);

  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!menuOpen}
      width={{
        sm: 200,
        lg: 300,
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/sensors">Sensors</Link>
      <Link href="/nodes">Nodes</Link>
    </MantineNavbar>
  );
};

export default Navbar;
