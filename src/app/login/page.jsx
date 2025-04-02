import Link from "next/link"
import Image from "next/image"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 bg-[#F3F6FF]">
        <div className="w-full max-w-md mx-auto text-center space-y-6">
        <div className="rounded-md bg-white p-6 border border-gray-200">
          <div className="space-y-2 mb-10">
            <h1 className="text-4xl font-bold">Welcome back!</h1>
            <h2 className="text-3xl font-bold">Login to your account</h2>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border mb-10">
            <form className="space-y-4">
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="email" className="text-sm flex">
                  Email
                </label>
                <input id="email" type="email" placeholder="Value" className="py-2 border border-gray-200 px-2 rounded-md" />
              </div>
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="password" className="text-sm flex">
                  Password
                </label>
                <input id="password" type="password" placeholder="Value" className="py-2 border border-gray-200 px-2 rounded-md" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label htmlFor="remember" className="text-sm">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-blue-500">
                  Forgot Password?
                </Link>
              </div>
              <button className="w-full rounded-lg text-white bg-zinc-800 py-2 hover:bg-zinc-700">Login</button>
            </form>
          </div>
          </div>

          <div className="space-y-4">
            <button className="flex items-center justify-center w-full bg-[#F7F2FA] hover:cursor-pointer border rounded-md p-3 hover:bg-gray-50">
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              Continue with Google
            </button>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center bg-[#F7F2FA] hover:cursor-pointer border rounded-md p-3 hover:bg-gray-50">
                <Image src="/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} className="mr-2" />
                LinkedIn
              </button>
              <button className="flex items-center justify-center bg-[#F7F2FA] hover:cursor-pointer border rounded-md p-3 hover:bg-gray-50">
                <Image src="/github-icon.svg" alt="GitHub" width={20} height={20} className="mr-2" />
                GitHub
              </button>
              <button className="flex items-center justify-center bg-[#F7F2FA] hover:cursor-pointer border rounded-md p-3 hover:bg-gray-50">
                <Image src="/facebook-icon.svg" alt="Facebook" width={20} height={20} className="mr-2" />
                Facebook
              </button>
            </div>
          </div>

          <p className="text-sm">
            Don't you have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

