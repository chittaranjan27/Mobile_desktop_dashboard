import type React from "react"
type CardProps = {
  title: string
  value: string
  size?: "small" | "large"
}

const Card: React.FC<CardProps> = ({ title, value, size }) => {
  const widthClass = size === "small" ? "w-full md:w-[172px]" : "w-full max-w-[358px] md:max-w-none"

  return (
    <div
      className={`box-border flex flex-col justify-center p-4 ${widthClass} h-[81px] bg-white border-2 border-[#F2F2F2] rounded-[16px] mx-auto`}
    >
      <div style={{ padding: "0", marginLeft: "16px" }} className="card-box flex flex-col items-start gap-2">
        <span className="font-medium text-[14px] leading-4 text-[#999999]">{title}</span>
        <p className="font-semibold text-[20px] leading-tight text-[#8134AF]">{value}</p>
      </div>
    </div>
  )
}

export default Card
