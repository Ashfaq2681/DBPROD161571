import { memo } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";
import { useAuthContext } from "../CustomHooks/useAuthContext";

const UserPanel = ({ handleClick, user }) => {

  const { plan } = useAuthContext();
  const user2 = user.user;

  return (
    <>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10">
          <img
            loading="lazy"
            src={user2.email ? user2.picture : user2.pic}
            alt="user"
            className="w-10 h-10 p-1 rounded-full bg-[#7195cf]"
          />
          <img
            loading="lazy"
            src="./header/arrowdown.svg"
            className="size-4 fill-white/60"
          />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right border border-gray-300 bg-white rounded-lg p-1 shadow-lg text-sm/6 text-[#505153] [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <Link
                to={user2.email == "admin@app.com" ? "/admin" : user2.isDesigner == true ? "/designer" : "/customer"}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              >
                <img
                  loading="lazy"
                  src="./header/admin.svg"
                  className="size-4 fill-white/30"
                />
                Dashboard
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘E
                </kbd>
              </Link>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <img
                  loading="lazy"
                  src="./header/edit.svg"
                  className="size-4 fill-white/30"
                />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <img
                  loading="lazy"
                  src="./header/edit.svg"
                  className="size-4 fill-white/30"
                />
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘A
                </kbd>
              </button>
            </MenuItem>
            <div className="my-1 mx-2 h-px bg-gray-300" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <img
                  loading="lazy"
                  src="./header/edit.svg"
                  className="size-4 fill-white/30"
                />
                Plan: <p>{plan ? plan.plan : 'None'}</p>
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘A
                </kbd>
              </button>
            </MenuItem>
            <div className="my-1 mx-2 h-px bg-gray-300" />
            <MenuItem>
              <button
                onClick={handleClick}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              >
                <img
                  loading="lazy"
                  src="./header/out.svg"
                  className="size-4 fill-white/30"
                />
                Sign out
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default memo(UserPanel);
