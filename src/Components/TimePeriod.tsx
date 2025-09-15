"use client"

import { useState } from "react"

const TimePeriod = () => {
  const [selected, setSelected] = useState<"1month" | "3months" | "1year" | "custom">("3months")

  const dateRange = "dd:mm:yyyy - dd:mm:yyyy"

  const selectedButtonStyle = {
    border: "1px solid #8134AF",
    background:
      "linear-gradient(159.79deg, rgba(221, 42, 123, 0.05) -5.47%, rgba(151, 71, 255, 0.05) 74.41%, rgba(51, 76, 202, 0.05) 147%)",
  }

  const gradientTextStyle = {
    background: "linear-gradient(169.7deg, #DD2A7B 1.49%, #9747FF 42.07%, #334CCA 99.84%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "Roboto, sans-serif",
  }

  const baseButtonClasses =
    "box-border flex justify-center items-center border border-[#F2F2F2] rounded-2xl bg-white font-['Roboto'] text-sm leading-5 text-[#999999] cursor-pointer transition-all duration-200 ease-in-out flex-1"

  return (
    <div
      className="box-border flex flex-col items-start gap-2 w-full max-w-[358px] md:max-w-none bg-white border-2 border-[#F2F2F2] rounded-2xl mx-auto"
      style={{
        padding: "16px 12px",
        fontFamily: "Roboto, sans-serif",
        marginBottom: "20px",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <span style={{ fontFamily: "Roboto, sans-serif"}} className="font-medium text-sm leading-4 text-[#999999]">
          Time Period
        </span>
        <span
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="font-normal text-xs leading-[14px] text-[#999999]"
        >
          {dateRange}
        </span>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <button
          className={baseButtonClasses}
          style={{
            padding: "4px 12px",
            ...(selected === "1month" ? selectedButtonStyle : {}),
          }}
          onClick={() => setSelected("1month")}
        >
          <span style={selected === "1month" ? gradientTextStyle : { fontFamily: "Roboto, sans-serif" }}>1Month</span>
        </button>

        <button
          className={baseButtonClasses}
          style={{
            padding: "4px 12px",
            ...(selected === "3months" ? selectedButtonStyle : {}),
          }}
          onClick={() => setSelected("3months")}
        >
          <span style={selected === "3months" ? gradientTextStyle : { fontFamily: "Roboto, sans-serif" }}>3Months</span>
        </button>

        <button
          className={baseButtonClasses}
          style={{
            padding: "4px 12px",
            ...(selected === "1year" ? selectedButtonStyle : {}),
          }}
          onClick={() => setSelected("1year")}
        >
          <span
            style={selected === "1year" ? gradientTextStyle : { fontFamily: "Roboto, sans-serif" }}
            className="flex items-center gap-1"
          >
            1Year
            <img src="crown.png" alt="Crown" className="h-4 w-4 ml-1" />
          </span>
        </button>
      </div>

      {/* Custom Button */}
      <button
        className="flex items-center gap-1 border border-[#F2F2F2] rounded-2xl bg-white text-sm leading-5 text-[#999999] cursor-pointer"
        style={{ padding: "6px 12px", fontFamily: "Roboto, sans-serif" }}
        onClick={() => setSelected("custom")}
      >
        <img src="calendar.png" alt="Calendar" className="h-5 w-5" />
        <span style={{ fontFamily: "Roboto, sans-serif" }}>Custom</span>
      </button>
    </div>
  )
}

export default TimePeriod
