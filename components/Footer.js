export function Footer(props) {
	return (
		<footer className="bottom-0 left-0 z-20 flex w-full flex-col items-center justify-between border-t border-gray-600 bg-stone-800 p-4 shadow md:flex-row">
			<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
				© 2023{" "}
				<a href="/" className="hover:underline">
					MUN Engineering Student Society
				</a>
				. All Rights Reserved.
			</span>
			<div className="space-x-2">
				<a href={"/links"} className="inline-flex items-center space-x-2 rounded bg-mun-burgundy p-2 font-semibold text-white hover:animate-pulse">
					<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" /> <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
						</g>
					</svg>
				</a>
				<a href={"https://www.linkedin.com/company/memorial-university-engineering-society/"} target="_blank" className="inline-flex items-center space-x-2 rounded bg-blue-600 p-2 font-semibold text-white hover:animate-pulse">
					<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
						</g>
					</svg>
				</a>
			</div>
		</footer>
	);
}
