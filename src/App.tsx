export default function AmazonCard() {
	return (
		<div className="flex h-screen w-screen justify-center items-center">
			<div className="gap-4 flex flex-col items-center bg-purple-500 rounded-md px-8 pb-16 w-96">
				<div className="w-16 h-8 bg-slate-900 rounded-b-3xl"></div>
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-bold text-white text-center">Amazon $100 Gift Card</h1>
					<p className="text-gray-300 text-center text-xs">Click the button below to redeem your amazon gift code.</p>
					
					<div className="bg-red-500 relative rounded-md h-16">
						<h1 className="text-white sticky top-0 left-0">Amazon.com</h1>
						<span className="text-white absolute top-0 right-0 size-16">$100</span>
						<div>
							<p className="text-white absolute left-0 right-0 bottom-0">AS!@#;42</p>
						</div>
					</div>

					<button className="text-center w-full hover:bg-green-700 rounded p-2">claim your coupon</button>
					<p className="text-gray-300 text-sm text-center">
						Grab this coupon Code and remember to use it within 30 days, so don't miss out
					</p>
				</div>	
			</div>
		</div>
	)
}