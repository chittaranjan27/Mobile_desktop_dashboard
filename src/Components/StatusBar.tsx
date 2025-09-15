const StatusBar = () => {
  return (
    <div className="w-full h-[54px] bg-[#E7CEE9] flex justify-between items-center" style={{ padding: "0 16px" }}>
      {/* Time */}
      <span className="font-['SF_Pro'] font-semibold text-[17px] text-black" style={{ marginLeft: "40px" }}>
        9:41
      </span>

      {/* Icons */}
      <div className="flex items-center gap-2">
        <img src="cellular.png" alt="Cellular Signal" className="h-3 w-4" />

        <img src="wifi.png" alt="Wi-Fi" className="h-3 w-4" />

        <img src="capacity.png" alt="Battery" className="h-2 w-5" />
      </div>
    </div>
  )
}

export default StatusBar
