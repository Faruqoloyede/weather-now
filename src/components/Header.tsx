import { logo, unit, down, check } from "../constant"
import { useState } from "react"

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6">
        <img src={logo} alt="logo" />
            <div className="relative">
                <div className="bg-Neutral-700 text-Neutral-0 cursor-pointer rounded-[10px] flex items-center gap-3 p-3" onClick={() => setShowDropdown(!showDropdown)}>
                <img src={unit} alt="" />
                <span className="font-sans">Units</span>
                <img src={down} alt="" />
            </div>
            <div className={`absolute top-16 right-0 bg-Neutral-800 text-Neutral-0 p-6 rounded-[10px] w-48 ${showDropdown ? 'block' : 'hidden'}`}>
               <div className="flex flex-col items-start gap-y-3 capitalize">
                <p>Switch to imperial</p>
                <p className="text-Neutral-300">temperature</p>
                <p className="bg-Neutral-600 p-1 rounded-md w-full flex items-center">celcius(°C)
                    <img src={check} alt="" className="ml-10" />
                </p>
                <p>fahrenheit(°F)</p>
                <div className="bg-Neutral-600 h-[0.5px] w-full" />
                <p className="text-Neutral-300">wind speed</p>
                <p>km/h</p>
                <p>mph</p>
                <div className="bg-Neutral-600 h-[0.5px] w-full" />
                <p className="text-Neutral-300">precipitation</p>
                <p>Millimeters(mm)</p>
               </div>
            </div>
        </div>
    </nav>
  )
}

export default Header