import React from 'react'
import PricingTableItem from './PricingTableItem'
import { labelList, pricingList } from '@/constants'

const PricingTable = () => {
  return (
    <div className="w-full mx-5 my-20 md:my-40 py-5 flex md:justify-center overflow-x-auto">
        <div className="flex">
            <div className="w-56">
                <div className="flex items-end gap-3 py-5 h-40 font-bold">
                    <h3>Core Features</h3>
                </div>

                {labelList.map((item) => (
                    <div key={item.label} className={item.class}>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
            {pricingList.map((pricing) => <PricingTableItem key={pricing.id} {...pricing} />)}
        </div>   
    </div>
  )
}

export default PricingTable