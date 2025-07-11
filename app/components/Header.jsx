import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-600">
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
      {/* Right: Navigation */}
      <div className="flex items-center gap-6 text-white">
        <Link
          href="/"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header