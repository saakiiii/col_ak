export default function Button({btname, id, type, onclick}) {
  return (
    <button className="w-[100%] pt-2 pb-2 bg-[#e71a68] text-white rounded-md hover:bg-[#d2165e] duration-300" id={id} type={type} onClick={onclick}>{btname}</button>
  )
}
