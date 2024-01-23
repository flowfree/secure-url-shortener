import { ShieldCheckIcon } from '.'

export { ShieldCheckIcon } from '@heroicons/react/24/outline'

export function Header() {
  return (
    <div className="p-2 flex bg-black text-gray-300 text-sm">
      <a href="/" className="grow flex flex-row gap-2 items-center">
        <ShieldCheckIcon className="w-6 h-6" />
        <h2 className="font-bold tracking-tight">
          Secure URL Shortener
        </h2>
      </a>
      <div>
        <a href="https://github.com/flowfree/secure-url-shortener" className="py-1 px-2 rounded-md border border-gray-500" target="_blank">
          Github
        </a>
      </div>
    </div>
  )
}
