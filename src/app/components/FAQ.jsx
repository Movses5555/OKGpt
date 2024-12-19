"use client"

import Image from "next/image";
import { useState } from "react";


export const FAQ = () => {
	return (
		<div className="w-full flex justify-center px-[64px]">
      <div className="w-full max-w-[1644px]">
        <div className="w-full flex justify-center mb-[85px]">
          <p className="text-white text-[70px] font-bold leading-[75px] -tracking-[3px]">Вопросы и ответы</p>
        </div>
          <Accordion />
      </div>
		</div>
	)
};


const data = [
  {
    id: 1,
    question: 'Как подключиться?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.'
  },
  {
    id: 2,
    question: 'Что делать, если бот не отвечает?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor.'
  },
  {
    id: 3,
    question: 'Как отменить подписку?',
    answer: 'Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor.'
  }
];


const Accordion = () => {
  const [activeId, setActiveId] = useState(0);

  const handleChange = (id) => {
    setActiveId(activeId === id ? 0 : id);
  }

  return (
    <div className="flex flex-col gap-[45px] mb-[150px]">
      {
        data.map(item => {
          const active = item.id === activeId;
          return (
            <div
              key={item.id}
              onClick={() => handleChange(item.id)}
              className="cursor-pointer"
            >
              <div className="w-full h-[110px] pl-[38px] flex justify-between items-center border border-gray-200 bg-gradient_2 backdrop-blur-[50px]">
                <p className="text-white text-[40px] font-bold -tracking-[1px] leading-[40px]c">
                  {item.question}
                </p>
                <div className="w-[110px] h-[110px] bg-white flex justify-center items-center">
                  <Image
                    src="/icons/arrow_down.svg"
                    width={19}
                    height={34}
                    alt="arrow_down"
                    className={`select-none transform transition-transform duration-300 ${
                      active ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <div
                className={`w-full overflow-y-auto transition-all border border-t-0 duration-300 ${
                  active ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-[38px] text-white">
                  {item.answer}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};
