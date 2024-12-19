import Image from "next/image";

export const GetAccess = () => {
  return (
    <div className="">
      <p className="text-white text-[70px]">
        Получите доступ к ChatGPT 3 и 4 прямо сейчас!
      </p>
      <p className="text-white mt-[42px] mb-[159px]">Просто подключите наш плагин и начните общаться с ИИ в любое время и в любом месте!</p>
      <div>
        {/* <Image
					src='/images/mockup_2.png'
					width={1046}
					height={631}
					alt='logo'
          className="w-[1046px] h-[631px]"
				/> */}
        <button
          className="bg-green-main w-[290px] h-[90px] flex items-center justify-center"
        >
          <Image
            src='/icons/arrow_right.svg'
            width={22}
            height={14}
            alt='logo'
            className=""
          />
          <span className="text-white text-">Начать сейчас</span>
        </button>
      </div>
    </div>
  )
}
