const IncomeTrend = () => {
  return (
    <div className="my-4 mx-auto p-4 bg-white border-2 border-[#F2F2F2] rounded-[16px] w-full max-w-[358px] md:max-w-none h-[430px] flex flex-col" style={{marginTop:"20px"}}>
      <div>
        <h3 className="font-medium text-sm text-gray-700 leading-4" style={{ margin: "12px", marginTop: "10px" }}>
          Income Trend
        </h3>
      </div>

      <div>
        <p className="text-sm text-gray-500 leading-tight" style={{ margin: "0 12px" }}>
          Your monthly income and growth for the last 6 months.
        </p>
      </div>

      <div className="mt-2 flex-grow">
        <img
          src="chart.png"
          alt="Income Trend Chart"
          className="w-full h-[314px] object-cover rounded-xl mix-blend-multiply bg-gray-100"
          style={{ margin: "15px" }}
        />
      </div>
    </div>
  )
}

export default IncomeTrend
