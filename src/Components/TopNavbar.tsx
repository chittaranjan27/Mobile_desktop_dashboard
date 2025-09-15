const TopNavBar = () => {
  return (
    <div className="w-full h-14 bg-[#E7CEE9] flex items-center justify-between relative" style={{ padding: "0 16px" }}>
      {/* Left: Back arrow + text */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-base font-medium text-black">Back</span>
      </div>

      {/* Center: Dashboard */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <span className="text-lg font-semibold text-black">Dashboard</span>
      </div>

      {/* Right: Profile picture */}
      <div>
        <img src="profile.png" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
      </div>
    </div>
  )
}

export default TopNavBar
