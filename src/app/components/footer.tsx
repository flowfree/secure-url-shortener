import Link from 'next/link'

export function Footer() {
  return (
    <div className="mt-10 p-2 flex justify-center">
      <ul className="flex flex-row divide-x divide-slate-600">
        <li className="px-3">
          <Link href="/terms-of-use" className="text-indigo-600 hover:underline">
            Terms of Use
          </Link>
        </li>
        <li className="px-3">
          <Link href="/privacy-policy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  )
}
