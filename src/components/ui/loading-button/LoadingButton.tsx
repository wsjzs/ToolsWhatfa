'use client'

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  memo,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren & {
    onSubmit?: () => Promise<any>
  }

const LoadingButton = ({
  onSubmit,
  className = '',
  children,
  ...rest
}: Props) => {
  const [loading, setLoading] = useState(false)
  const handleClick = useCallback(() => {
    if (loading) return
    setLoading(true)
    onSubmit?.().finally(() => {
      setLoading(false)
    })
  }, [onSubmit])
  return (
    <button
      onClick={handleClick}
      className={`btn btn-outline btn-sm ${className}`}
      {...rest}
    >
      <span
        className={`loading loading-spinner loading-sm transition-all duration-700 ${
          loading ? 'opacity-100' : 'opacity-0 hidden'
        }`}
      />
      {children}
    </button>
  )
}

export default memo(LoadingButton)
