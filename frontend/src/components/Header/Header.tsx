import { useCallback } from 'react';
import { Header as MantineHeader, MediaQuery, Burger } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';
import { setMenuOpen } from '../../store/slices/app';

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useAppSelector((state) => state.app.menuOpen);

  const onClick = useCallback(() => {
    dispatch(setMenuOpen(!menuOpen));
  }, [dispatch, menuOpen]);

  return (
    <MantineHeader height={60} p="md">
      <MediaQuery
        largerThan="sm"
        styles={{
          display: 'none',
        }}
      >
        <Burger opened={menuOpen} onClick={onClick} size="sm" mr="xl" />
      </MediaQuery>
      <span>Nexa Tracker</span>
    </MantineHeader>
  );
};

export default Header;
