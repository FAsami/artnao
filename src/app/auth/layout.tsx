import { LoginIllustration } from '../../assets/illustrations/Login'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-6 max-w-[850px] mx-auto border border-neutral-50">
      <div className="w-2/5 mt-56">
        <div className="max-w-[300px]">
          <LoginIllustration />
        </div>
      </div>
      <div className="w-3/5 p-6 bg-white rounded-lg mt-4 mb-24">{children}</div>
    </div>
  )
}

export default AuthLayout
