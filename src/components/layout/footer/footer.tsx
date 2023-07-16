import { ThemeSwitch } from '@/components/common/theme-switch'

export const Footer = () => (
  <footer className="p-6 border-t border-zinc-200/80 flex flex-col items-center">
    <div className='mb-3'>© 2020-2023 whatfa</div>
    <ThemeSwitch />
  </footer>
)