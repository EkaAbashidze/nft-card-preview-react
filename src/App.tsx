import Avatar from "./images/image-avatar.png";
import MainImg from "./images/image-equilibrium.jpg";
import IconClock from "./svg/IconClock";
import IconEthereum from "./svg/IconEthereum";
import IconView from "./svg/IconView";

function App() {




  return (
    <div className="bg-cardbg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-596 w-350 rounded-2xl flex flex-col p-6 font-outfit" >


      <div className="group relative" >
      
        <img src={MainImg} className="w-302 h-302 rounded-lg relative"  alt="" />

        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-cyan opacity-0 group-hover:opacity-50 cursor-pointer ease-in-out duration-300">
        </div>
          <IconView/>
      </div>


      <h1 className="text-white pt-6 pb-4 text-[22px] font-semibold leading-7 hover:text-cyan cursor-pointer ease-in-out duration-300">Equilibrium #3429</h1>

      <p className="text-softblue font-light text-lg leading-[26px]" >Our Equilibrium collection promotes balance and calm.</p>


    <div className="flex items-end justify-between w-full py-6" >

      <div className="flex items-center gap-x-[7px]" >
        <IconEthereum/>
        <h3 className="text-cyan font-semibold text-base leading-5" >0.041 ETH</h3>
      </div>

      <div className="flex items-center gap-x-[7px]">
        <IconClock/>
        <h3 className="text-softblue text-base leading-5 font-normal">0.041 ETH</h3>
      </div>

      </div>


    <div className="bg-line h-px w-302 mb-4" ></div>


      <div className="flex items-center w-full text-base leading-5 font-normal gap-x-4" >
        <img className="w-33 h-33 " src={Avatar} alt="" />
        <h3 className="text-softblue flex items-center gap-x-[5px]" >Creation of<h3 className="text-white hover:text-cyan cursor-pointer ease-in-out duration-300">Jules Wyvern</h3></h3>
      </div>


    </div>
  );
}

export default App;