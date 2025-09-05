export default function AmazonCard() {
	return (
		<div className="shadow-lg text flex flex-col h-screen w-screen justify-center items-center">
			<div className="bg-purple-500 rounded-md p-8 w-96">
			<div className="relative top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-8 bg-slate-900 rounded-b-3xl"></div>
				<h1 className="text-white flex justify-center">Amazon $100 Gift Card</h1>
				<p className="text-gray-300 flex justify-center text-xs">Click the button below to redeem your amazon gift code.</p>

				<div className="bg-red-500 relative rounded-md h-16">
					<h1 className="text-white sticky top-0 left-0">Amazon.com</h1>
					<span className="text-white absolute top-0 right-0 size-16">$100</span>
					<div>
						<p className="text-white absolute inset-x-0 bottom-0">AS!@#;42</p>
					</div>
				</div>

				<div className="bg-green-500">
					<button>claim your coupon</button>
				</div>
				<p>
					Grab this coupon Code and remember to use it within 30 days, so don't miss out
				</p>
			</div>
		</div>
	)
}