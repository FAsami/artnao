import { BiMailSend } from 'react-icons/bi'

const ForgotPasswordPage = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Forgot password ? </h3>
      <div className="space-y-4">
        <div>
          <input
            id="Email"
            placeholder="Email"
            className="w-full border border-gray-100 py-4 text-sm px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          />
        </div>
        <div>
          <input
            id="firstName"
            placeholder="Last name"
            className="w-full border border-gray-100 text-sm p-4 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          />
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-3 text-white text-base font-bold bg-amber-400 rounded">
          <BiMailSend className="text-lg" />
          SEND
        </button>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
