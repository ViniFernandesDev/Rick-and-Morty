import logo from '../../assets/logo.png'

export function Initial() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-yellowJedi flex items-center justify-center flex-col">
        <div className="flex flex-col items-center text-center gap-6">
          <img src={logo} className="max-w-[500px]" />

          <p className="font-starWars max-w-[630px] text-white lg tracking-[1px]">
            "Explore os heróis, vilões e criaturas do universo Star Wars.
            Embarque nesta galáxia muito, muito distante e descubra personagens
            icônicos que marcaram gerações."
          </p>
        </div>
      </div>
    </div>
  )
}
