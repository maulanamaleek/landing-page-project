import Image from 'next/image'
import React, { FC } from 'react'
import Button from './Button'

interface PricingItem {
    id: number
    name: string
    is_free?: boolean
    description: string
    formatted_price: string
    files_amount: number
    free_generations: number
    file_per_upload: number
    pages_per_file: number
    max_file_size: string
    high_accuracy: boolean
    mobile_friendly: boolean
    priority_support: boolean
    is_best_seller: boolean
}

const pricingList: PricingItem[] = [
    {
        id: 1,
        name: 'Free',
        is_free: true,
        description: 'Suitable for Starter',
        formatted_price: 'IDR 0',
        files_amount: 100,
        free_generations: 100,
        file_per_upload: 25,
        pages_per_file: 2,
        max_file_size: '4MB',
        high_accuracy: true,
        mobile_friendly: true,
        priority_support: true,
        is_best_seller: false,
    },
    {
        id: 2,
        name: 'Basic',
        description: 'Suitable for Starter',
        formatted_price: 'IDR 299,000',
        files_amount: 250,
        free_generations: 100,
        file_per_upload: 50,
        pages_per_file: 5,
        max_file_size: '4MB',
        high_accuracy: true,
        mobile_friendly: true,
        priority_support: true,
        is_best_seller: false,
    },
    {
        id: 3,
        name: 'Pro',
        description: 'Suitable for Starter',
        formatted_price: 'IDR 590,000',
        files_amount: 500,
        free_generations: 100,
        file_per_upload: 100,
        pages_per_file: 10,
        max_file_size: '4MB',
        high_accuracy: true,
        mobile_friendly: true,
        priority_support: true,
        is_best_seller: true,
    },
    {
        id: 4,
        name: 'Premium',
        description: 'Suitable for Starter',
        formatted_price: 'IDR 999,000',
        files_amount: 1000,
        free_generations: 150,
        file_per_upload: 150,
        pages_per_file: 15,
        max_file_size: '16MB',
        high_accuracy: true,
        mobile_friendly: true,
        priority_support: true,
        is_best_seller: false,
    },
]

const PricingBox: FC<PricingItem> = ({
    id,
    name,
    is_free,
    description,
    formatted_price,
    files_amount,
    free_generations,
    file_per_upload,
    pages_per_file,
    high_accuracy,
    mobile_friendly,
    priority_support,
    is_best_seller,
    max_file_size,
}) => {
    const isOdd = id % 2 !== 0

    const mainBackgroundClass = isOdd ? 'bg-secondary' : 'bg-white'
    const secondaryBackgroundClass = isOdd ? 'bg-white' : 'bg-secondary'
    const borderClass = is_best_seller ? 'border border-primary' : ''

    const reccomendedTag = (() => {
        if (is_best_seller) {
            return (
                <div className="bg-primary text-xs font-normal py-2 px-6 text-white rounded-full absolute -top-4">Best Seller</div>
            )
        }
        return null
    })()

    const ctaButton = (() => {
        if (is_free) {
            return (
                // <button className="bg-primary rounded h-fit py-2 px-9 text-base font-semibold text-white absolute bottom-6">
                //     Get Started Free
                // </button>
                <Button type="primary" size="s" className="absolute bottom-6 py-2">
                    Get Started Free
                </Button>
            )
        }

        return (
            <Button type="secondary" size="s" className="absolute bottom-6">
                Select
            </Button>
        )
    })()

    const getBooleanElement = (value: boolean) => {
        if (value) {
            return <Image src="/assets/check.png" alt="Yes" width={16} height={16} />
        }

        // no icon in design
        return 'No'
    }

    const InfoIcon = (
        <Image src="/assets/info.png" width={8} height={8} alt="info" className="self-center cursor-pointer" />
    )
    return (
        <div className={`pricing-box flex flex-col items-center relative ${mainBackgroundClass} ${borderClass} pt-4`}>
            {reccomendedTag}

            <div className="flex flex-col items-center gap-3 py-5">
                <h3 className="text-xl font-normal">{name}</h3>
                <p className="text-xs font-normal">{description}</p>
                <h2 className="text-3xl font-bold">{formatted_price}</h2>
            </div>

            <div className={`w-full h-14 flex justify-center py-4 gap-1 ${secondaryBackgroundClass}`}>
                <span>{files_amount} Files</span>
                {InfoIcon}
            </div>

            <div className="py-2 h-10 flex gap-1">
                <span>{free_generations}</span>
                {InfoIcon}
            </div>
            <div className="py-2 h-10">
                <span>Up to {file_per_upload} files</span>
            </div>

            <div className="py-2 h-10 flex gap-1">
                <span>{pages_per_file} page per File</span>
                {InfoIcon}
            </div>
            <div className="py-2 h-10 flex gap-1">
                <span>{max_file_size}</span>
                {InfoIcon}
            </div>

            <div className="py-2 h-10 flex">
                <span>{getBooleanElement(high_accuracy)}</span>
            </div>

            <div className="py-2 h-10">
                <span>{getBooleanElement(mobile_friendly)}</span>
            </div>

            <div className="py-2 h-10">
                <span>{getBooleanElement(priority_support)}</span>
            </div>

            {ctaButton}
        </div>
    )
}

const PricingTable = () => {
  return (
    <div className="w-full mx-5 my-20 md:my-40 py-5 flex md:justify-center overflow-x-auto">
        <div className="flex">
            <div className="w-56">
                <div className="flex items-end gap-3 py-5 h-40 font-bold">
                    <h3>Core Features</h3>
                </div>

                <div className="py-4 h-14">
                    <span>Files Included</span>
                </div>

                <div className="py-2 h-10">
                    <span>Free Generations</span>
                </div>
                <div className="py-2 h-10">
                    <span>Files per Upload</span>
                </div>

                <div className="py-2 h-10">
                    <span>Pages per File</span>
                </div>

                <div className="py-2 h-10">
                    <span>File Size Limit</span>
                </div>

                <div className="py-2 h-10">
                    <span>High-accuracy responses</span>
                </div>

                <div className="py-2 h-10">
                    <span>Mobile-friendly interface</span>
                </div>

                <div className="py-2 h-10">
                    <span>Priority support</span>
                </div>
            </div>
            {pricingList.map((pricing) => <PricingBox key={pricing.id} {...pricing} />)}
        </div>   
    </div>
  )
}

export default PricingTable