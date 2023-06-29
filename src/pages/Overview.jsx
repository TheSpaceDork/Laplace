import Nav from "../components/Nav"
import { motion } from "framer-motion"
import {useState} from "react"
import TopNav from "../components/TopNav"
import Toyota from "../assets/Toyota.png"
import Fb from "../assets/Fb.png"
import btc from "../assets/btc.png"
import rand1 from "../assets/rand1.png"
import visa from "../assets/visa-blue.png"
import Arrow from "../assets/Arrow-right.png"
import Tesla from "../assets/Tesla.png"
import Amazon from "../assets/Amazon.png"
import Apple from "../assets/Apple.png"
import arrowup from "../assets/arrow-up.png"
import Eth from "../assets/Eth.png"
import arrowdown from "../assets/arrow-down.png"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js"
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
const Overview = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  
  const data = {
    labels: ["16th Nov", "17th Nov", "18th Nov", "19th Nov", "20th Nov", "21st Nov", "22nd Nov"],
    datasets: [{
      data: [8, 6, 7, 8, 7, 7, 6],
      backgroundColor: "transparent",
      borderColor: "#FFC266",
      color: "white",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5
    }]
  }

  const options = {
    plugins: {
      legend: false,
   
    },
    scales: {
      x: {
         drawBorder: false,
        grid: {
          display : false
        },
           chartAreaBorder: {
        borderColor: "white",
        borderWidth: 6
      }
      },
      y: {
        min: 2,
        max: 10,
        drawBorder: false,
        ticks: {
          stepSize: 2,
          callback: (value) => value + ",000"
        },
        grid: {
          borderColor: "#1d2747"
        },
           chartAreaBorder: {
        borderColor: "white",
        borderWidth: 6
      }
      }
    }
  }
  return (
    <div className="flex bg-[#081232] w-screen h-screen ">
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grow overflow-scroll no-scrollbar"
      >
        <div className="p-8 border-b border-b-[#1D2746] w-full flex justify-between items-center">
          <div>
          <h1>Overview</h1>
             <p className="text-[#A8B7D8] text-xs">
            Last update: {String(currentTime)}
          </p>
          </div>
         <TopNav/>
        </div>
        <div className="px-8 py-4 border-b border-b-[#1D2746] w-full ">
          <div className="flex items-center relative text-white px-8 space-x-4">
          <div className="absolute left-0 ">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="absolute right-0 ">
            <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="bg-[#121D3E] rounded-lg w-[13rem] h-[5rem] flex items-center space-x-2 px-3">
              <div>
                <img src={ Toyota} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >TM</p>
                  <p>178.88</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Toyota</p>
                  <p className="text-[#9FFFA9]">4.25 %</p>
                </div>
           </div>
            </div>
            <div className="bg-[#121D3E] rounded-lg w-[13rem] h-[5rem] flex items-center space-x-2 px-3">
              <div>
                <img src={ Fb} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >FB</p>
                  <p>332.25</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Facebook</p>
                  <p className="text-[#FE7474]">-0.21 %</p>
                </div>
           </div>
            </div>
            <div className="bg-[#121D3E] rounded-lg w-[13rem] h-[5rem] flex items-center space-x-2 px-3">
              <div>
                <img src={ btc} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >BTC</p>
                  <p>32,538.12</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Bitcoin</p>
                  <p className="text-[#FE7474]">-10.99 %</p>
                </div>
           </div>
            </div>
            <div className="bg-[#121D3E] rounded-lg w-[13rem] h-[5rem] flex items-center space-x-2 px-3">
              <div>
                <img src={ rand1} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >GE</p>
                  <p>13.19</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>General..</p>
                  <p className="text-[#9FFFA9]">0.19 %</p>
                </div>
           </div>
            </div>
            <div className="bg-[#121D3E] rounded-lg w-[13rem] h-[5rem] flex items-center space-x-2 px-3">
              <div>
                <img src={ visa} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >V</p>
                  <p>234.32</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Visa</p>
                  <p className="text-[#9FFFA9]">3.26 %</p>
                </div>
           </div>
            </div>

          </div>
        
        </div>
        {/* 3 column grid */}
        <div className="flex space-x-5 px-16 py-6 text-white">
          <div className="grow bg-[#121D3E] rounded-lg px-8 py-4 text-white">
            <div className="flex items-center justify-between pt-4 pb-6  border-b border-b-[#1D2746]">
              <div className="flex space-x-3 text-lg items-center">
                <i className="fa-solid fa-chart-pie"></i>
                <p className="text-lg" >My Portfolio</p>
              </div>
              <div className="cursor-pointer">
                <img src={Arrow} alt="" />
              </div>
            </div>
            <div className="border-b border-b-[#1D2746] flex items-center py-4 justify-between">
              <div className="flex flex-col space-y-4">
                <p className="text-sm">Invested Capital</p>
                <h1 className="text-xl">$ 13,032.19</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm">Absolute Change</p>
                <h1 className="text-xl text-[#9FFFA9]">+ 4,023.10</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm">Relative Change</p>
                <h1 className="text-xl">+ 30.87%</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm">Daily P&L</p>
                <h1 className="text-xl text-[#FE7474]">- 105.24</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm">Cash</p>
                <h1 className="text-xl ">$ 232.00</h1>
              </div>
            </div>
            {/* Line chart */}
            <div>
              <Line data={data} options={options}></Line>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="bg-[#121D3E] h-[20rem] w-[18rem] rounded-lg py-4 px-6">
              <div className="flex items-center w-full justify-between border-b border-b-[#1D2746] pb-4">
                <div className="flex items-center space-x-4">

                <i className="fa-solid fa-fire-flame-curved"></i>
                <p className="text-lg">Trending</p>
                <i className="fa-solid fa-circle-info"></i>
                </div>
                <div className="cursor-pointer">
                 <img src={Arrow} alt="" />
                </div>
              </div>
               <div className=" flex items-center space-x-2 px-3  border-b border-b-[#1D2746] py-4">
              <div>
                <img src={ Tesla} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >TSLA</p>
                  <p>620.83</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Tesla</p>
                  <p className="text-[#FE7474]">-3.12 %</p>
                </div>
           </div>
            </div>
               <div className=" flex items-center space-x-2 px-3  border-b border-b-[#1D2746] py-4">
              <div>
                <img src={ Amazon} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >AMZN</p>
                  <p>3,449.02</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Amazon</p>
                  <p className="text-[#9FFFA9]">1.50 %</p>
                </div>
           </div>
            </div>
               <div className=" flex items-center space-x-2 px-3   py-4">
              <div>
                <img src={ Apple} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <p >AAPL</p>
                  <p>132.30</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Apple</p>
                  <p className="text-[#9FFFA9]">-0.70 %</p>
                </div>
           </div>
            </div>
            </div>
            <div className="bg-[#121D3E] h-[26rem] w-[18rem] rounded-lg  py-4 px-6">
               <div className="flex items-center w-full justify-between  border-b border-b-[#1D2746] pb-4">
                <div className="flex items-center space-x-4">

               <i className="fa-solid fa-clock"></i>
                <p className="text-lg">Trades History</p>
                
                </div>
                <div className="cursor-pointer">
                 <img src={Arrow} alt="" />
                </div>
              </div>
               <div className=" flex items-center space-x-2 px-3  border-b border-b-[#1D2746] py-4">
              <div>
                <img src={ arrowup} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-md font-semibold">
                  <p >Withdraw</p>
                  <p> $2,000.02</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Fund TRansfer</p>
                  <p className="text-[#A3D3FF]">Pending</p>
                </div>
           </div>
            </div>
             <div className=" flex items-center space-x-2 px-3  border-b border-b-[#1D2746] py-4">
              <div>
                <img src={ Eth} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-md font-semibold">
                  <p >ETH</p>
                  <p>$1,928.16/1U</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Ethereum</p>
                  <p className="text-[#9FFFA9]">Accepted</p>
                </div>
           </div>
            </div>
             <div className=" flex items-center space-x-2 px-3  border-b border-b-[#1D2746] py-4">
              <div>
                <img src={ Toyota} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-md font-semibold">
                  <p >TM</p>
                  <p>$1,788.80/10U</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Toyota</p>
                  <p className="text-[#9FFFA9]">Accepted</p>
                </div>
           </div>
            </div>
             <div className=" flex items-center space-x-2 px-3   py-4">
              <div>
                <img src={ arrowdown} />
           </div>
              <div className="flex flex-col grow space-y-2">
                <div className="flex justify-between text-md font-semibold">
                  <p >Deposit</p>
                  <p>$2,000.00</p>
                </div>
                <div className="flex justify-between text-[0.6rem]">
                  <p>Fund Transfer</p>
                  <p className="text-[#9FFFA9]">Accepted</p>
                </div>
           </div>
            </div>
            </div>
          </div>
        </div>
         
      </motion.div>
     </div>
  )
}

export default Overview