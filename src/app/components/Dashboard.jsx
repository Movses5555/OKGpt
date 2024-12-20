import { Header } from "@/components/Header";
import { GetAccess } from "@/components/GetAccess";
import { FAQ } from "@/app/components/FAQ";
import { Plugins } from "@/app/components/Plugins";
import { Service } from "@/app/components/Service";
import { Subscription } from "@/app/components/Subscription";

export const Dashboard = () => {
	return (
		<div className="bg-[#080808] w-full">
			<Header />
			{/* <GetAccess /> */}
			<Subscription />
			<Service />
			<Plugins />
			<FAQ />
		</div>
	)
}
