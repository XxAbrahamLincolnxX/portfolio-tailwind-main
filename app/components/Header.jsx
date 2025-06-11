import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto w-100dvw px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 134.4 40"
                className="h-10 w-auto fill-white"
              >
                <g>
                  <path fill="currentColor" d="M45.49,6.18h0s3.62,17.04,3.62,17.04l2.52-12.48s-.74-3.04-1.09-4.55h-5.05Z" />
                  <path fill="currentColor" d="M58.77,6.18h0s-4.44,15.62-4.44,15.62v.02s0,.02-.01.03c0,0,0,.01-.01.02.01.01,0,.02,0,.02l-.23.79v.02l-.15.51-1.68,5.91h0s5.04,0,5.04,0l6.51-22.93c-1.68-.01-3.36-.01-5.03-.01Z" />
                </g>
                <g>
                  <polygon fill="currentColor" points="32.57 29.11 32.57 29.12 37.62 29.12 37.62 24.08 32.57 24.08 32.57 29.11" />
                  <path fill="currentColor" d="M32.57,6.19h0v4.98h5.05v-4.97c-1.69,0-3.37,0-5.05,0Z" />
                  <rect fill="currentColor" x="26.15" y="11.17" width="5.05" height="3.6" />
                  <path fill="currentColor" d="M26.15,24.08c1.68,0,3.37,0,5.05-.01v-4.33h-5.05v4.34Z" />
                  <rect fill="currentColor" x="32.1" y="14.77" width="5.04" height="4.97" />
                </g>
                <g>
                  <path fill="currentColor" d="M78.29,6.17h0v4.99h5.03v-4.98c-1.67-.01-3.35-.01-5.03-.01Z" />
                  <rect fill="currentColor" x="71.85" y="11.16" width="5.04" height="3.6" />
                  <rect fill="currentColor" x="71.85" y="19.75" width="5.04" height="4.34" />
                  <rect fill="currentColor" x="77.82" y="14.76" width="5.03" height="4.99" />
                  <polygon fill="currentColor" points="78.29 29.13 78.29 29.14 83.32 29.14 83.32 24.09 78.29 24.09 78.29 29.13" />
                </g>
                <g>
                  <path fill="currentColor" d="M118.61,6.16v17.97h5.02V6.16c-1.68,0-3.35,0-5.02-.01h0Z" />
                  <path fill="currentColor" d="M126.3,24.14v5.02c1.67-.01,3.34,0,5.01,0v-5.03c-1.67,0-3.34,0-5.01,0Z" />
                </g>
                <g>
                  <path fill="currentColor" d="M110.49,29.15l-6.58-23.08h-5.03l1.09,3.8.23.83h0s1.23,4.3,1.23,4.3c0,0,0,.02.01.03l4.03,14.11h0s5.02.01,5.02.01Z" />
                  <path fill="currentColor" d="M92.18,29.12h5.05c.35-1.51,1.09-4.55,1.09-4.55l-2.52-12.48-3.62,17.03Z" />
                </g>
                <g>
                  <path fill="currentColor" d="M12.73,19.13c.21-.14.41-.28.61-.44.23-.19.45-.4.65-.61.11-.11.21-.23.31-.34.09-.12.19-.24.28-.36.09-.12.18-.24.26-.37.08-.13.16-.26.24-.39.15-.25.28-.5.39-.77.03-.05.05-.1.07-.15.07-.16.13-.32.19-.48.08-.25.16-.49.22-.74s.11-.51.15-.76c.07-.49.09-.99.05-1.48,0-.15-.03-.3-.05-.45-.01-.15-.04-.3-.07-.45-.03-.14-.06-.28-.1-.42-.02-.09-.05-.17-.08-.26-.03-.1-.07-.2-.11-.3-.05-.13-.1-.25-.16-.38-.06-.12-.12-.24-.19-.36-.02-.04-.04-.08-.07-.11-.08-.15-.18-.29-.27-.43-.04-.06-.09-.12-.14-.18-.1-.14-.21-.26-.3-.38-.39-.42-.83-.78-1.3-1.07-2.6-1.62-6.38-1.45-9.53-1.31.36.03.71.07,1.06.13.19.03.39.06.58.11.11.02.22.04.33.07.14.03.28.07.42.11.15.04.31.09.46.14.17.06.34.12.5.18.98.4,1.86.98,2.55,1.81.07.08.14.16.19.24.07.08.13.16.18.25.1.14.19.29.28.44,1.83,3.23.3,7.61-2.66,9.51l5.76,9.97c1.68,0,3.37.01,5.06.01l-5.76-9.98Z" />
                  <path fill="currentColor" d="M2.79,10.89h-.97v5.23h.57c3.93-.15,4.24-4.88.4-5.23Z" />
                  <polygon fill="currentColor" points="1.82 20.77 1.82 29.1 7.37 29.11 3.18 20.77 1.82 20.77" />
                </g>
              </svg>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}