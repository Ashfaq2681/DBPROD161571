import { memo } from "react";
import Explore from "./Explore";
import {
  Dialog,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const MobileNav = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  user,
  handleClick,
}) => {
  return (
    <>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white text-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <img
                loading="lazy"
                src="./header/close.svg"
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                {user ? (
                  <div className="flex flex-row gap-3 justify-start items-center">
                    <div>
                      <Menu>
                        <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10">
                          <img
                            loading="lazy"
                            src={user.email ? userpic : user.picture}
                            alt="user"
                            className="w-10 h-10 p-1 rounded-full bg-[#7195cf]"
                          />
                          <img
                            loading="lazy"
                            src="../assets/icons/arrowdown.png"
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
                            className="w-52 z-50 origin-top-right border border-gray-300 bg-white rounded-lg p-1 shadow-lg text-sm/6 text-[#505153] [--anchor-gap:var(--spacing-1)] focus:outline-none"
                          >
                            <MenuItem>
                              <Link
                                to={`/admin`}
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                              >
                                <img
                                  loading="lazy"
                                  src="../assets/icons/admin.svg"
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
                                  src="../assets/icons/edit.svg"
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
                                  src="../assets/icons/edit.svg"
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
                              <button
                                onClick={handleClick}
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                              >
                                <img
                                  loading="lazy"
                                  src="../assets/icons/out.svg"
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
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#discover"
                  className={`-mx-3 block rounded-lg px-3 py-2 leading-7 text-gray-800 hover:bg-gray-50`}
                >
                  Discover
                </a>
                <Explore />
                <Link to={`/login`} onClick={() => setMobileMenuOpen(false)}>
                  <button className="nav-btn text-[#3b82f6] border border-[#3b82f6]">
                    Login
                  </button>
                </Link>
                <Link to={`/signup`} onClick={() => setMobileMenuOpen(false)}>
                  <button className="nav-btn bg-[#3b82f6] text-white border border-[#3b82f6]">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default memo(MobileNav);
