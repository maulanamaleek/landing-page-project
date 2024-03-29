import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full bg-secondary md:h-96 flex flex-col md:flex-row justify-between px-10 lg:px-56 py-12 gap-16 md:gap-24 mt-12">
        <div className="md:flex-1">
            <Image src="/logo.png" alt="berry labs logo" width={272} height={85} />

            <p className="text-tertiary mt-5">Unlocking the power of AI precision, we revolutionize the way businesses  operate. Our innovative solution automates repetitive tasks, saving  valuable time and boosting productivity. </p>
        
            <div className="mt-6 flex gap-4">
                <Image src="/assets/fb.svg" width={24} height={24} alt='facebook' className="cursor-pointer" />
                <Image src="/assets/twitter.svg" width={24} height={24} alt='twitter className="cursor-pointer"' />
                <Image src="/assets/linkedin.svg" width={24} height={24} alt='linkedin' className="cursor-pointer" />
                <Image src="/assets/ig.svg" width={24} height={24} alt='instagram' className="cursor-pointer" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-14 md:gap-20 mt-8">
            <div className="flex flex-col gap-6">
                <h3 className="font-bold text-sm">Pages</h3>
                <div className="flex flex-col gap-2">
                    <span>Home</span>
                    <span>Pricing</span>
                    <span>Solution</span>
                    <span>Demo</span>
                </div>
            </div>

            <div className="flex flex-col gap-6 min-w-36">
                <h3 className="font-bold text-sm">Service</h3>
                <div className="flex flex-col gap-2">
                    <span>CV Screening</span>
                    <span>Bank Statement</span>
                    <span>Invoice Analyzer</span>
                    <span>Regulatory Auditor</span>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-fit">
                <h3 className="font-bold text-sm">Contact</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Image src="/assets/call.png" width={24} height={24} alt="contact" />
                        <span>+6282126753060</span>
                    </div>
                    <div className="flex gap-2 basis-full">
                        <Image src="/assets/email.png" width={24} height={24} alt="email" />
                        <span>contact@berrytrada.com</span>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/assets/location.png" width={24} height={24} alt="location" />
                        <span>Bandung, Indonesia</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer