const Steps = ({ headerBlock, items }) => {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {headerBlock}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={item.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <span className="font-bold text-white">
                          {index + 1}
                        </span>
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-gray-900">
                      {item.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
