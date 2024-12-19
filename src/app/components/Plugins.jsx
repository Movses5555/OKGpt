import Image from "next/image";

const plugins = [
  {
    title: 'Презентации',
    description: 'Плагин используется для создания презентаций под вашу конкретную задачу.',
    src: '/images/presentation.svg',
  },
  {
    title: 'Высшая математика',
    description: 'Плагин используется для решения профильных задач по высшей математике.',
    src: '/images/higher_mathematic.svg',
  },
  {
    title: 'Программирование',
    description: 'Плагин используется для создания кода на любом языке программирования.',
    src: '/images/programming.svg',
  },
  {
    title: 'Презентации',
    description: 'Плагин используется для создания презентаций под вашу конкретную задачу.',
    src: '/images/presentation.svg',
  },
  {
    title: 'Высшая математика',
    description: 'Плагин используется для решения профильных задач по высшей математике.',
    src: '/images/higher_mathematic.svg',
  },
  {
    title: 'Программирование',
    description: 'Плагин используется для создания кода на любом языке программирования.',
    src: '/images/programming.svg',
  },
]

export const Plugins = () => {
	return (
		<div className="w-full flex justify-center">
      <div className="w-full max-w-[1644px]">
        <div className="w-full flex justify-center mb-[85px]">
          <p className="text-white text-[70px] font-bold leading-[75px] -tracking-[3px]">
            У нас доступны плагины ChatGPT
          </p>
        </div>
        <div className="pb-[236px] flex gap-[55px]">
          <div className="flex">
            <button className="w-[70px] h-[205px] border flex items-center justify-center">
              <Image
                src='/icons/arrow_left_1.svg'
                width={19}
                height={34}
                alt="arrow_left"
                className=""
              />
            </button>
            <button className="w-[70px] h-[205px] border flex items-center justify-center">
              <Image
                src='/icons/arrow_right_1.svg'
                width={19}
                height={34}
                alt="arrow_right"
                className=""
              />
            </button>
          </div>
          <div className="h-[501px] flex overflow-x-scroll gap-[49px] no-scrollbar">
            {
              plugins.map((item, index) => {
                return (
                  <PluginCard
                    key={index.toString()}
                    title={item.title}
                    description={item.description}
                    src={item.src}
                    lastItem={index === plugins.length-1}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
		</div>
	)
}


const PluginCard = ({
  src,
  title,
  description,
  lastItem
}) => {
  return (
    <div className={`min-w-[503px] w-[503px] h-[499px] border border-white  bg-gradient_2 backdrop-blur-[50px] ${lastItem ? 'mr-[45px]' : ''}`}>
      <div className="p-[35px] h-[240px]">
        <p className="text-white mb-[30px] text-[40px] font-bold leading-[40px] -tracking-[1px]">
          {title}
        </p>
        <p className="text-[#C4C4C5] text-[24px] font-bold leading-[32.7px]">
          {description}
        </p>
      </div>
      <div className="h-[260px] py-[50px] border-t border-white flex items-center justify-center">
        <Image
          src={src}
          width={160}
          height={160}
          alt={`plugin_img_${src}`}
          className=""
        />
      </div>
    </div>
  )
}