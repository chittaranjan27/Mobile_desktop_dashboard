import "./App.css"

// Components
import StatusBar from "./Components/StatusBar"
import TopNavBar from "./Components/TopNavbar"
import CreateInvoice from "./Components/CreateInvoice"
import TimePeriod from "./Components/TimePeriod"
import Card from "./Components/Card"
import IncomeTrend from "./Components/IncomeTrend"
import InvoiceList from "./Components/Invoice"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen" style={{ padding: "20px" }} >
      <div className="container w-full max-w-[400px] md:max-w-4xl lg:max-w-6xl bg-white shadow-lg min-h-screen">
        <div className="md:hidden">
          <StatusBar />
        </div>
        <TopNavBar />
        <div
          className="card-container px-6 py-6 md:px-8 lg:px-12"
          style={{ color: "#999999", fontFamily: "Roboto, sans-serif", backgroundColor: "#fff" }}
        >
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
            {/* Left column - main actions */}
            <div className="md:col-span-2 lg:col-span-2">
              <CreateInvoice />
              <p className="line text-[12.5px] text-gray-900 mt-2 md:mt-4" style={{ marginLeft: "50px", margin: "20px"}}>
                Or Upload an existing invoice and set payment reminder
              </p>

              <div className="mt-6">
                <TimePeriod />
              </div>

              <div className="mt-6 ">
                <Card title="Total Earnings" value="$1,25,000" size={undefined} />

                <div className="flex md:flex-row gap-3 mt-3" style={{marginTop: "20px"}}>
                  <Card title="Payment Awaited" value="$25,000" size="small" />
                  <Card title="Payment Overdue" value="$25,000" size="small" />
                </div>
              </div>
            </div>

            {/* Right column - charts and data */}
            <div className="lg:col-span-1 mt-6 md:mt-0">
              <IncomeTrend />
            </div>
          </div>

          <div className="mt-8">
            <InvoiceList />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
