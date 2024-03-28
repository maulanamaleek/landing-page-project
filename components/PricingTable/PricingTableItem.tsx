import React, { FC } from 'react'
import Image from 'next/image'
import Button from '../Button'
import { PricingItem } from '@/constants'

const PricingTableItem: FC<PricingItem> = ({
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

export default PricingTableItem