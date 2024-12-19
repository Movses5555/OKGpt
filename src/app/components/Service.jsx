import Image from "next/image";

const data = [
  {
    title: 'Решение рутинных задач',
    description: 'Создание текстов, перевод текста итд.',
    icon: '/icons/check_dark.svg',
    maxW: 445,
    w: 42,
    h: 42,
    ml: 16,
  },
  {
    title: 'Решение творческих задач',
    description: 'Написание сочинения, рассказа или композиции.',
    icon: '/icons/check_dark.svg',
    maxW: 358,
    w: 42,
    h: 42,
    ml: 16,
  },
  {
    title: 'Пересказы произведений',
    description: 'Бот знаком со всеми нужными вам произведениями и напишет детальный пересказ.',
    icon: '/icons/check_dark.svg',
    maxW: 378,
    w: 42,
    h: 42,
    ml: 16,
  },
  {
    title: 'Помощь в программировании',
    description: 'ChatGPT поможет вам написать код на нужном языке, даже если запрос очень длинный.',
    icon: '/icons/minus.svg',
    maxW: 378,
    w: 26,
    h: 5,
    ml: 23,
  },
  {
    title: 'Огромные запросы',
    description: 'Если вам нужен длинный запрос, или развернутый и детальный ответ на ваш запрос.',
    icon: '/icons/minus.svg',
    maxW: 378,
    w: 26,
    h: 5,
    ml: 23,
  },
];


export const Service = () => {
  return (
    <div className="text-white mb-[206px] mt-[200px] flex justify-center">
      <div className="max-w-[1458px] w-full h-[810px] border flex">
        <div className="w-[578px] flex flex-col justify-center p-[60px] gap-[35px]">
          <p className="text-[70px] font-bold leading-[90%] -tracking-[1px]">
            Как можно использовать наш сервис?
          </p>
          <p className="max-w-[326px] text-[#C4C4C4] text-[28px] font-bold">
            и почему мы лучше конкурентов
          </p>
        </div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-full p-[60px]">
          <div className="w-full flex justify-end gap-[44px]">
            <p className="text-[20px] font-bold leading-[26px]">Другие</p>
            <p className="text-[20px] font-bold leading-[26px]">OKGpt</p>
          </div>
          <div className="flex flex-col gap-[40px]">
            {
              data.map(item => (
                <div className="flex items-center justify-between">
                  <div className="flex justify-items-center">
                    <Image
                      src='/icons/service_icon.svg'
                      width={47}
                      height={47}
                      alt='service_icon'
                      className="w-[47px] h-[47px] mr-[30px] mt-[6px]"
                    />
                    <div className="">
                      <p className="max-w-[445px] mb-[5px] text-[32px] font-bold leading-[28.8px] -tracking-[1.41px]">
                        {item.title}
                      </p>
                      <p className={`max-w-[${item.maxW}px] text-[#C4C4C5] text-[20px] font-bold leading-[26px]`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between w-[179px] mt-[9px]">
                    <Image
                      src={item.icon}
                      width={item.w}
                      height={item.h}
                      alt='check_dark'
                      className={`w-[${item.w}px] h-[${item.h}px] ml-[${item.ml}px]`}
                    />
                    <Image
                      src='/icons/check_light.svg'
                      width={42}
                      height={42}
                      alt='check_light'
                      className="w-[42px] h-[42px] mr-[10px]"
                    />
                  </div>
                </div>
              ))
            }
            {/* <div className="flex items-center justify-between">
              <div className="flex justify-items-center">
                <Image
                  src='/icons/service_icon.svg'
                  width={47}
                  height={47}
                  alt='service_icon'
                  className="w-[47px] h-[47px] mr-[30px]"
                />
                <div className="">
                  <p className="mb-[5px] text-[32px] font-bold leading-[28.8px] -tracking-[1px]">
                    Решение рутинных задач
                  </p>
                  <p className="text-[#C4C4C5] text-[20px] font-bold leading-[26px]">
                    Создание текстов, перевод текста итд.
                  </p>
                </div>
              </div>
              <div className="flex gap-[43px]">
                <Image
                  src='/icons/check_dark.svg'
                  width={42}
                  height={42}
                  alt='check_dark'
                  className="w-[42px] h-[42px] mx-[16px]"
                />
                <Image
                  src='/icons/check_light.svg'
                  width={42}
                  height={42}
                  alt='check_light'
                  className="w-[42px] h-[42px] mx-[10px]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
