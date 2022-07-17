import React, { useCallback, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from './constants';
import RouteButton from './RouteButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { green } from '@mui/material/colors';
import debounce from 'lodash.debounce';
import TemporaryDrawer from './Drawer';
import { DataContext } from '../../../context/DataContext';

const TopBar = () => {
  const { array, setSearchValue, serachValue, fillArray,error,isLoading} = useContext(DataContext);
  const [value, setValue] = useState('');
  const [dbValue, saveToDb] = useState('');
  const navigate = useNavigate();
  const debouncedSave = useCallback(
    debounce((nextValue) => saveToDb(nextValue), 1000),
    [] // will be created only once initially
  );

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    // Even though handleChange is created on each render and executed
    // it references the same debouncedSave that was created initially
    debouncedSave(nextValue);
  };
  const performSearch = async() => {
    setSearchValue(value);
    await fillArray(value);
  };
  console.log(array);
  return (
    <div className='py-4 px-2 drop-shadow bg-black backdrop-opacity-20 sticky top-0 z-10 '>
      <nav className='container mx-auto text-cyan-400 flex justify-between'>
        <div onClick={() => navigate('/')} className='flex-none'>
          Your Logo!
        </div>
        <div className='hidden md:block flex-auto mx-6'>
          {/* serach Bar */}
          <label className='relative block grow'>
            <span
              onClick={performSearch}
              className='absolute inset-y-0 left-0 flex items-center pl-2'
            >
              <svg className='h-5 w-5 fill-slate-300' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
            <span className='sr-only'>Search</span>
            <input
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  performSearch();
                }
              }}
              value={value}
              onChange={handleChange}
              type='text'
              name='search'
              className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              placeholder='Search for anything...'
            />
          </label>
        </div>
        <div>
          <div className='hidden md:block '>
            <Badge
              onClick={() => navigate('/cart')}
              badgeContent={4}
              color='primary'
            >
              <ShoppingCartIcon sx={{ color: green[400] }} />
            </Badge>
            {routes.map((route, index) => {
              return (
                <Link key={index} to={route.path}>
                  <Badge className='pl-2' badgeContent={0} color='secondary'>
                    <RouteButton
                      Icon={route.icon}
                      name={route.name}
                      color={route.color}
                    />
                  </Badge>
                </Link>
              );
            })}
          </div>

          <div className='visible md:hidden'>
            <TemporaryDrawer
              Icon={IconButton}
              sx={{ color: green[500] }}
              Menu={MenuIcon}
              font='large'
            />
          </div>
        </div>
      </nav>
      <label className='relative block grow visible md:hidden container mx-auto '>
        <span
          onClick={performSearch}
          className='absolute inset-y-0 left-0 flex items-center pl-2'
        >
          <svg className='h-5 w-5 fill-slate-300' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </svg>
        </span>
        <span className='sr-only'>Search</span>
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              performSearch();
            }
          }}
          value={value}
          onChange={handleChange}
          type='text'
          name='search'
          className='w-[98%] block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Search for anything...'
        />
      </label>
    </div>
  );
};

export default TopBar;
