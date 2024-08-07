

function ContractCard({contract}) {
    return (
  
      <div className="w-48 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <a href="#">
            <div className="pb-1">
              <img className="lg mx-auto" src= {contract.thumbnail} alt="Document Thumbnail" />
            </div>
          </a>
          <div className="px-2 pb-2">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">{contract.title}</h5>
            </a>
            <p className="mt-2 text-sm text-gray-600">{new Date(contract.updatedAt).toLocaleDateString()}</p>
            <div className="mt-3 flex justify-between items-center">
              <a href="#" className="text-blue-600 hover:text-blue-800">Open</a>
              <div>
                <button className="ml-2 text-gray-600 hover:text-gray-900 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
    );
  }
  
  export default ContractCard;