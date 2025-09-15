import type React from "react"
type InvoiceStatus =
  | "Paid"
  | "Disputed"
  | "Partially Paid"
  | "Overdue"
  | "Awaited"
  | "Draft"
  | "Unpaid"
  | "Update Status"

type Invoice = {
  id: number
  clientName: string
  amount: string
  dueDate: string
  status: InvoiceStatus
  icon?: "bell" | "pencil"
}

const invoiceData: Invoice[] = [
  { id: 1, clientName: "Client Name", amount: "1,25,000", dueDate: "2024-06-15", status: "Update Status" },
  { id: 2, clientName: "Client Name", amount: "1,25,000", dueDate: "2024-06-15", status: "Unpaid" },
  { id: 3, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Disputed" },
  { id: 4, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Paid" },
  { id: 5, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Partially Paid" },
  { id: 6, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Paid" },
  { id: 7, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Overdue", icon: "bell" },
  { id: 8, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Awaited", icon: "bell" },
  { id: 9, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Draft", icon: "pencil" },
  { id: 10, clientName: "Income Trend", amount: "1,25,000", dueDate: "2024-06-15", status: "Paid" },
]

const BellIcon = () => <img src="bell.png" alt="Bell Icon" className="h-5 w-4" />

const PencilIcon = () => <img src="pencil.png" alt="Pencil Icon" className="h-4 w-4" />

const ChevronDownIcon: React.FC = () => <img src="drop.png" alt="Chevron Down" className="h-2 w-3" />

type StatusBadgeProps = {
  status: InvoiceStatus
}

const statusStyles: Record<Exclude<InvoiceStatus, "Update Status">, string> = {
  Paid: "bg-[#9CEFB8] text-[#34C759]",
  Disputed: "bg-[#FFB1B1] text-[#FF2D55]",
  "Partially Paid": "bg-[#FFFAE5] text-[#FFCC00]",
  Overdue: "bg-[#FFB1B1] text-[#FF2D55]",
  Awaited: "bg-[#FFFAE5] text-[#FFCC00]",
  Draft: "bg-[#F2F2F2] text-[#999999]",
  Unpaid: "bg-[#F2F2F2] text-[#999999]",
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === "Update Status") {
    return (
      <button
        className="flex items-center justify-center gap-[7.5px] text-xs font-medium text-white bg-[#8134AF] rounded-full"
        style={{ padding: "9px 15px" }}
      >
        <span>{status}</span>
        <img src="drop1.png" className="h-2 w-3" alt="dropdown" />
      </button>
    )
  }

  return (
    <span
      className={`flex justify-center items-center text-xs font-medium rounded-full ${statusStyles[status]}`}
      style={{ padding: "9px 15px" }}
    >
      {status}
    </span>
  )
}

const InvoiceList: React.FC = () => {
  return (
    <div
      className="flex flex-col items-start gap-2.5 w-full max-w-[377px] md:max-w-none mx-auto"
      style={{ padding: "0", marginTop: "15px" }}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-base leading-[19px] text-[#999999]">Your Invoices</h2>
        <ChevronDownIcon />
      </div>

      <div className="space-y-3 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-4 md:space-y-0 w-full">
        {invoiceData.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between w-full h-[68px] bg-white border-2 border-[#F2F2F2] rounded-2xl"
            style={{ padding: "16px 12px", marginBottom: "6px" }}
          >
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm leading-4 text-gray-500">{invoice.clientName}</p>
              <p className="text-xs font-normal leading-[14px] text-[#999999]">
                ₹{invoice.amount}, Due: {invoice.dueDate}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={invoice.status} />
              {invoice.icon === "bell" && <BellIcon />}
              {invoice.icon === "pencil" && <PencilIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvoiceList
