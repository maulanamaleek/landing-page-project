
export interface PricingItem {
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

export const pricingList: PricingItem[] = [
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

export const labelList = [
    {
        label: 'Files Included',
        class: 'py-4 h-14'
    },
    {
        label: 'Free Generations',
        class: 'py-2 h-10'
    },
    {
        label: 'Files per Upload',
        class: 'py-2 h-10'
    },
    {
        label: 'Pages per File',
        class: 'py-2 h-10'
    },
    {
        label: 'File Size Limit',
        class: 'py-2 h-10'
    },
    {
        label: 'High-accuracy responses',
        class: 'py-2 h-10'
    },
    {
        label: 'Mobile-friendly interface',
        class: 'py-2 h-10'
    },
    {
        label: 'Priority support',
        class: 'py-2 h-10'
    },
]
