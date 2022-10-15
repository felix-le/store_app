import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg',
  outline:
    'flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    indigo: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-indigo-600',
    white:
      'bg-white text-indigo-600 hover:text-indigo-700 focus-visible:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-indigo-50 active:text-indigo-900/80 disabled:opacity-40 disabled:hover:text-indigo-600',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    indigo: 'border-indigo-300 text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:text-indigo-600/70 disabled:opacity-40 disabled:hover:border-indigo-300 disabled:hover:bg-transparent',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
