import Image from "next/image";

const advantages = [
  {
    title: 'Количество',
    description: 'Собраны версии ChatGPT 3.0 и 4.0',
    src: '/images/quantity.svg',
  },
  {
    title: 'Поддержка',
    description: 'Круглосуточная поддержка 24/7.',
    src: '/images/support.svg',
  },
  {
    title: 'Свобода',
    description: 'Нет ограничений по символам.',
    src: '/images/freedom.svg',
  },
  {
    title: 'Понятность',
    description: 'Интуитивно понятный интерфейс.',
    src: '/images/clarity.svg',
  }
]

export const Advantages = () => {
	return (
		<div className="w-full flex justify-center mb-[255px]">
      <div className="w-full max-w-[1644px]">
        <div className="w-full flex justify-center mb-[85px]">
          <p className="text-white text-[70px] font-bold leading-[75px] -tracking-[3px]">
            У нас доступны плагины ChatGPT
          </p>
        </div>
        <div className="h-[501px] flex  gap-[98px]">
          {
            advantages.map((item, index) => {
              return (
                <AdvantagesCard
                  key={index.toString()}
                  title={item.title}
                  description={item.description}
                  src={item.src}
                />
              )
            })
          }
        </div>
      </div>
		</div>
	)
}


const AdvantagesCard = ({
  src,
  title,
  description,
}) => {
  return (
    <div className={`min-w-[362px] w-[362px] h-[493px] border border-white  bg-gradient_2 backdrop-blur-[50px] `}>
      <div className="p-[38px] h-[219px]">
        <p className="text-white mb-[30px] text-[40px] font-bold leading-[40px] -tracking-[1px]">
          {title}
        </p>
        <p className="text-[#C4C4C5] text-[24px] font-bold leading-[32.7px]">
          {description}
        </p>
      </div>
      <div className="h-[272px] border-t border-white flex items-center justify-center">
        <Image
          src={src}
          width={146}
          height={146}
          alt={`plugin_img_${src}`}
          className=""
        />
      </div>
    </div>
  )
}