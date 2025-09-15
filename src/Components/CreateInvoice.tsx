const CreateInvoice = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[358px] md:max-w-none md:w-full h-[160px] bg-[#F2F2F2] rounded-[32px] py-4 px-8 space-y-[14px] shadow-sm mx-auto">
      <div className="w-[50px] h-[65px] flex items-center justify-center">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circleGradient" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DD2A7B" />
              <stop offset="0.5" stopColor="#9747FF" />
              <stop offset="1" stopColor="#334CCA" />
            </linearGradient>
          </defs>
          <circle cx="25" cy="25" r="20" stroke="url(#circleGradient)" strokeWidth="4" fill="none" />
          <rect x="17.5" y="24" width="15" height="3" rx="1.5" fill="url(#circleGradient)" />
          <rect x="24" y="17.5" width="3" height="15" rx="1.5" fill="url(#circleGradient)" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#5c3ee2dc] via-[#873ffa] to-[#334CCA] bg-clip-text text-transparent">
        Create New Invoice
      </h2>
      <p className="text-sm text-gray-400 font-medium" style={{ marginTop: "6px" }}>
        Start by creating and sending new invoice
      </p>
    </div>
  )
}

export default CreateInvoice
