export const ListInpertretationMap = () => {
  return (
    <div className="flex">
      <ul className="w-96 flex flex-col gap-4 pt-4 ps-4">
        <li className="flex items-center text-xl">
          <span className='flex rounded-full w-2 h-2 2xl:w-3 2xl:h-3 me-6 bg-red-500'></span>
          Zonas con poca vegetación
        </li>
        <li className="flex items-center text-xl">
          <span className='flex rounded-full w-2 h-2 2xl:w-3 2xl:h-3 me-6 bg-amber-500'></span>
          Zonas en las que se esta trabajando
        </li>
        <li className="flex items-center text-xl">
          <span className='flex rounded-full w-2 h-2 2xl:w-3 2xl:h-3 me-6 bg-green-500'></span>
          Zonas con menos urgencia de vegetación
        </li>
      </ul>
    </div>
  )
}
