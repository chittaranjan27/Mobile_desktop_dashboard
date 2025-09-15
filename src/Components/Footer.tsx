const PawIcon = () => <img src="logo.png" alt="Paw Icon" className="w-2.5 h-2.5 inline-block mx-1" />

const Footer = () => {
  return (
    <footer className="w-full mt-10 py-8 flex flex-col items-center">
      <div className="w-full max-w-lg border-t border-gray-200" style={{ marginTop: "90px", marginBottom: "10px" }} />
      <div className="mt-8 flex flex-col items-center">
        <h3 className="text-2xl text-gray-500 flex items-center">
          <span className=" text-sm font-semibold">Spark</span>
          <PawIcon />
          <span className="text-sm font-normal">nomy</span>
        </h3>
        <p className="mt-1 text-xs text-gray-400" style={{ marginBottom: "20px" }}>
          sparking the creator economy
        </p>
      </div>
    </footer>
  )
}

export default Footer
