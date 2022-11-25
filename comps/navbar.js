import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo-no-background.png'
import { useState } from 'react';







export default function Example() {

  const [active, setActive] = useState('Forside');

  let navigation = []

  navigation = [
    { name: 'Forside', href: '/', current: 'Forside' === active },
    { name: 'Tabel', href: '/table', current: 'Tabel' === active },
    { name: 'Favorithold', href: '/team/18', current: 'Favorithold' ===  active }, 
  ]


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  
  return (
    
   <>
      <div className='pl-10 pt-5 bg-blue-600'><Image src={logo} width={100} height={64}/></div>
      <div className='pt-5 flex items-center text-white text-xl bg-blue-600 sticky top-0 z-10 font-light'>
        {navigation.map((item) => (
          <>
            <Link href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={classNames(
                          item.current ? 'border-b-4 ml-10 pb-5 border-orange-400 font-bold -mb-2' : 'pb-5 ml-10 hover:text-white/70',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                      </>
                    ))}


      <form className='ml-10 mb-3'>
      {/* <i className='absolute'> <BiSearch /></i> */}
        {/* <input type="search" placeholder="Hold & spillere" className=" text-black/80 text-sm ml-10 bg-slate-200 rounded-full indent-3 py-3 pr-20 mb-5"/> */}
        <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="search" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2 rounded-full " placeholder="Hold & spillere" required/>
    </div>
      </form>
      </div>


    </> 
  )
  
}
