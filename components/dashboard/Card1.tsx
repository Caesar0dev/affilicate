
export default function Card1() {
  return (
    <div className="bg-gray-50">
      <div className="p-4 flex flex-row w-full space-x-4">
        <div>Icon</div>
        <div>
          <p className="text-xs">Referrals</p>
          <div className="flex flex-row w-full space-x-2 items-end">
            <div className="text-2xl font-bold">5.77%</div>
            <div className="flex flex-row flex-grow items-end text-green-500 text-sm">
              <div>up</div>
              <div>9.8%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-200">View all</div>
    </div>
  )
}
