import Image from "next/image";

export function TeamCard(props) {
	return (
		<div className="ml-5 mr-5 flex flex-col place-items-center rounded-2xl drop-shadow-2xl ">
			{props.link ? (
				<a href={props.link}>
					<Image src={props.logo} alt={props.name} className="bg-grey-300 object-contain p-2 transition hover:scale-105 sm:h-96 sm:p-5" width={500} height={200} />
				</a>
			) : (
				<Image src={props.logo} alt={props.name} className="bg-grey-300 object-contain p-2 transition hover:scale-105 sm:h-96 sm:p-5" width={500} height={200}/>
			)}
			<section className="flex min-h-[460px] w-full flex-col justify-between rounded-b-2xl bg-stone-400">
				<div className="flex min-w-full flex-col place-items-center">
					<h1 className="pt-4 text-center font-norwester text-4xl font-extrabold">{props.name}</h1>
					<h1 className="text-center font-norwester text-2xl font-extrabold text-stone-600">{props.title}</h1>
					{props.date ? <h1 className="text-center font-norwester text-lg font-bold text-stone-700">Founded: {props.date}</h1> : null}
					<p className="pl-4 pr-4 text-center text-black">{props.text}</p>
					<div className="flex justify-center gap-x-3 p-5">
						{props.link ? (
							<a href={props.link} target="_blank" className="inline-flex items-center space-x-2 rounded bg-stone-200 p-2 font-semibold text-black hover:animate-pulse">
								<svg className="w-19 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"></path>
									</g>
								</svg>
							</a>
						) : null}
						{props.linkedin ? (
							<a href={props.linkedin} target="_blank" className="inline-flex items-center space-x-2 rounded bg-blue-600 p-2 font-semibold text-white hover:animate-pulse">
								<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
									</g>
								</svg>
							</a>
						) : null}
						{props.instagram ? (
							<a href={props.instagram} target="_blank" className="inline-flex items-center space-x-2 rounded bg-gradient-to-br from-pink-800 to-yellow-300 p-2 font-semibold text-white hover:animate-pulse">
								<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
									</g>
								</svg>
							</a>
						) : null}
						{props.facebook ? (
							<a href={props.facebook} target="_blank" className="inline-flex items-center space-x-2 rounded bg-blue-800 p-2 font-semibold text-white hover:animate-pulse">
								<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
									</g>
								</svg>
							</a>
						) : null}
						{props.twitter ? (
							<a href={props.twitter} target="_blank" className="inline-flex items-center space-x-2 rounded bg-blue-400 p-2 font-semibold text-white hover:animate-pulse">
								<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
									</g>
								</svg>
							</a>
						) : null}
						{props.discord ? (
							<a href={props.discord} target="_blank" className="inline-flex items-center space-x-2 rounded bg-[#7289da] p-2 font-semibold text-white hover:animate-pulse">
								<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
									</g>
								</svg>
							</a>
						) : null}
						{props.contact ? (
							<a href={`mailto:${props.contact}`} target="_blank" className="inline-flex items-center space-x-2 rounded bg-black p-2 font-semibold text-white hover:animate-pulse">
								<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"></path>
									</g>
								</svg>
							</a>
						) : null}
					</div>
				</div>
				<div className="pb-10">
					{props.disciplines ? (
						<div className="flex h-4 justify-center gap-x-3 p-5">
							{props.disciplines.includes("m") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-red-500 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">build</span>
								</div>
							) : null}
							{props.disciplines.includes("t") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-blue-500 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">precision_manufacturing</span>
								</div>
							) : null}
							{props.disciplines.includes("c") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-gray-600 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">construction</span>
								</div>
							) : null}
							{props.disciplines.includes("e") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-yellow-300 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">bolt</span>
								</div>
							) : null}
							{props.disciplines.includes("r") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-orange-500 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">memory</span>
								</div>
							) : null}
							{props.disciplines.includes("o") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-green-600 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">directions_boat</span>
								</div>
							) : null}
							{props.disciplines.includes("p") ? (
								<div className="flex h-10 w-10 place-items-center justify-center rounded-2xl border-2 border-black bg-pink-500 brightness-90 transition-transform hover:scale-105 hover:brightness-100 2xl:w-14">
									<span className="material-icons pointer-events-none">science</span>
								</div>
							) : null}
						</div>
					) : null}
				</div>
			</section>
		</div>
	);
}
