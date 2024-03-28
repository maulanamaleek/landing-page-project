import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className="h-24 md:h-32 flex justify-between w-full items-center px-5 md:px-32">
        <div className="flex gap-10 items-center">
            <Image src="/logo.png" alt="berry labs logo" width={182} height={51} className="md:mx-12" />
            <div className="hidden md:flex gap-10 items-center">
              <div className="flex items-center gap-3 cursor-pointer">
                <span className="text-2xl font-medium">Product</span>
                <Image src="/assets/chevron-down.png" width={13} height={8} alt="expand" />
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <span className="text-2xl font-medium">Solution</span>
                <Image src="/assets/chevron-down.png" width={13} height={8} alt="expand" />
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <span className="text-2xl font-medium">Pricing</span>
                {/* <Image src="/assets/chevron-down.png" width={13} height={8} alt="expand" /> */}
              </div>
            </div>
        </div>
        <Button type="primary" size="m">Get Started</Button>
    </div>
  )
}

export default Navbar