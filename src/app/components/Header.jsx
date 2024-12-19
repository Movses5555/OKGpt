import Image from "next/image";

import { NavBar } from '@/components/NavBar';

export const Header = () => {
	return (
		<div className='pt-[46px] px-12 flex justify-around items-center'>
			<div className="">
				<Image
					src='/images/logo.svg'
					width={176}
					height={52}
					alt='logo'
					className="min-w-[176px]"
				/>
			</div>
			<NavBar />
			<div className="w-[176px]"></div>
		</div>
	)
}
