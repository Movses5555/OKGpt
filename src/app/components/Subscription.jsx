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

const subscriptions = [
  {
    title: 'Пробный',
    description: 'Ограниченное количество запросов в день, базовые возможности.',
    src: '/images/presentation.svg',
    buttonText: 'Получить',
    price: 11,
    duration: '',
    profitable: false,
  },
  {
    title: 'Стандартный',
    description: 'Больший лимит запросов, дополнительные функции, и просто во всем лучше.',
    src: '/images/higher_mathematic.svg',
    buttonText: 'Приобрести',
    price: 249,
    duration: '',
    profitable: true,
  },
  {
    title: 'Премиум',
    description: 'Неограниченные запросы, персонализированное обслуживание.',
    src: '/images/programming.svg',
    buttonText: 'Приобрести',
    price: 990,
    duration: '',
    profitable: false,
  },
]

export const Subscription = () => {
	return (
		<div className="w-full flex justify-center">
      <div className="w-full max-w-[1644px]">
        <div className="w-full flex justify-center mb-[125px]">
          <p className="text-white text-[70px] font-bold leading-[75px] -tracking-[3px]">
            Выберите свой план подписки
          </p>
        </div>
        <div className="pb-[236px] flex flex-1 gap-[67px]">
          {
            subscriptions.map((item, index) => {
              return (
                <SubscriptionCard
                  key={index.toString()}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  profitable={item.profitable}
                  buttonText={item.buttonText}
                  firstItem={index === 0}
                />
              )
            })
          }
        </div>
      </div>
		</div>
	)
};



const SubscriptionCard = ({
  title,
  description,
  price,
  profitable,
  buttonText,
  firstItem,
}) => {
  return (
    <div className={`flex-1 basis-0 border border-white  bg-gradient_2 backdrop-blur-[50px] relative`}>
      {
        profitable && (
          <div className="absolute -top-[22px] right-[36px] bg-[#02CCCE] w-[130px] h-[45px] flex items-center justify-center">
            <p className="text-white text-[24px] font-medium leading-[24px] -tracking-[1px]">Выгодно</p>
          </div>
        )
      }
      <div className="p-[35px] h-[240px]">
        <p className="text-white mb-[30px] text-[40px] font-bold leading-[40px] -tracking-[1px]">
          {title}
        </p>
        <p className="text-[#C4C4C5] text-[24px] font-bold leading-[32.7px]">
          {description}
        </p>
      </div>
      <div className="h-[90px] border-t border-white flex items-center justify-between text-white text-[40px] leading-[40px] -tracking-[1px]">
        <div className="flex items-center pl-[38px]">
          <p className="">{price}</p>
        </div>
        <div className="h-full border-l pr-[29px] pl-[28px] flex items-center justify-center">
          <p className="text-[40px] font-normal leading-[40px]">
            { firstItem ? '₽/день' : '₽/мес' }
          </p>
        </div>
      </div>
      <div className={`h-[93px] py-[50px] pl-[38px] pr-[26px] ${firstItem ? 'bg-[#FFFFFF]' : 'bg-[#02CCCE]'} flex items-center justify-between`}>
        <p className={`${firstItem ? 'text-black' : 'text-white'} text-[40px] font-bold leading-[36px] -tracking-[1px]`}>
          {buttonText}
        </p>
        <Image
          src={firstItem ? '/icons/arrow_right_dark.svg' : '/icons/arrow_right_light.svg'}
          width={48}
          height={42}
          alt='arrow_right'
          className="text-black"
        />
      </div>
    </div>
  )
};

