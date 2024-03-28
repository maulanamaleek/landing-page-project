import React, { FC, ReactNode } from 'react'

type Size = 's' | 'm' | 'l'

interface ButtonProps {
    type: 'primary' | 'secondary'
    size?: Size
    children: ReactNode
    className?: string
}

interface SizeItem {
    py: string
}

const sizeMap: Record<Size, SizeItem> = {
    s: {
        py: 'py-2'
    },
    m: {
        py: 'py-4'
    },
    l: {
        py: 'py-6',
    }
}

const Button: FC<ButtonProps> = ({
    type,
    size = 'm',
    children,
    className,
}) => {
  const { py } = sizeMap[size]

  if (type === 'primary') {
    return (
        <button className={`${className} bg-primary rounded h-fit md:${py} md:px-9 md:text-base text-xs py-2 px-4 font-semibold text-white`}>
            {children}
        </button>
    )
  }

  return (
    <button className={`border border-primary rounded h-fit ${py} px-9 text-base font-normal ${className}`}>
        {children}
    </button>
  )
}

export default Button