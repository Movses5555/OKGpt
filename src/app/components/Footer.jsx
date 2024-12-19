import Image from "next/image";
import Link from 'next/link';

const payments = [
	{
		src: '/images/payment/visa.svg',
		label: 'visa',
		w: 122.5,
		h: 40,
	},
	{
		src: '/images/payment/mastercard.svg',
		label: 'mastercard',
		w: 66.1,
		h: 41,
	},
	{
		src: '/images/payment/mir.svg',
		label: 'mir',
		w: 130.8,
		h: 40,
	},
	{
		src: '/images/payment/sberpay.svg',
		label: 'sberpay',
		w: 85.3,
		h: 41,
	},
	{
		src: '/images/payment/yandex.svg',
		label: 'yandex',
		w: 100.4,
		h: 41,
	},
];

const links = [
	{
		path: '/',
		text: 'Правила возврата'
	},
	{
		path: '/',
		text: 'Договор оферты'
	},
	{
		path: '/',
		text: 'Политика обработки персональных данных'
	},
	{
		path: '/',
		text: 'Соглашение о присоединении к рекуррентной системе платежей'
	},
	{
		path: '/',
		text: 'Отмена подписки'
	},
];


export const Footer = () => {
	return (
		<div className="w-full h-[1040px] bg-[#080808] flex justify-center">
			<div className="mt-[145px] mb-[162px]">
				<div className="flex items-center justify-center">
					<p className="text-white font-black text-[55px] leading-tight mr-[15px]">
						Сделано командой
					</p>
					<Image
						src='/images/logo_2.svg'
						width={244}
						height={56}
						alt='logo'
						className="min-w-[244px]"
					/>
				</div>
				<div className=" mt-[69px]">
					<div className="text-center">
						<p className="text-white font-medium text-[32px] leading-10 mb-[11px]">
							Канал проекта:
						</p>
						<Link
							href="/"
							className="text-transparent bg-clip-text bg-gradient_1 text-[32px] font-medium"
						>
							https://t.me/okvpn_official
						</Link>
					</div>
					<div className="text-center my-[55px]">
						<p className="text-white font-medium text-[32px] leading-10 mb-[11px]">
							Контакт поддержки:
						</p>
						<Link
							href="/"
							className="text-transparent bg-clip-text bg-gradient_1 text-[32px] font-medium"
						>
							https://t.me/okvpn_support
						</Link>
					</div>
					<p className="text-white text-center font-medium text-[32px] leading-10">
						ИНН 500000000000
					</p>
				</div>
				<div className="mt-[108px] mb-[60px] flex justify-center">
					<div className=" w-[625px] flex justify-between items-center">
						{
							payments.map(payment => (
								<Image
									key={payment.label}
									src={payment.src}
									width={payment.w}
									height={payment.h}
									alt={payment.label}
								/>
							))
						}
					</div>
				</div>
				<div className="mb-[162px] flex justify-center">
					<div className="w-full flex justify-center">
						<div className="max-w-[1164px] w-full flex gap-x-[57px] gap-y-[10px] items-center flex-wrap">
							{
								links.map(link => {
									return (
										<Link
											key={link.text}
											href={link.path}
											className="text-[#999] text-2xl font-bold text-nowrap"
										>
											<p className="fontext-[#999] text-2xl leading-[29px] font-bold text-nowrap tracking-[1.36px]">
												{link.text}
											</p>
										</Link>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
