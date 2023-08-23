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
				<a href={"/admin"} className="inline-flex items-center space-x-2 rounded p-2 font-semibold text-white hover:animate-pulse">
					<svg className="h-5 w-5 fill-current" role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path d="M315.392 507.904c-81.92-40.96-137.216-122.88-137.216-221.184 0-135.168 110.592-245.76 245.76-245.76s245.76 110.592 245.76 245.76c0 133.12-104.448 241.664-237.568 245.76h-2.048c-202.752 0-368.64 165.888-368.64 368.64 0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48c0-186.368 124.928-344.064 294.912-393.216z m108.544-16.384c112.64 0 204.8-92.16 204.8-204.8s-92.16-204.8-204.8-204.8-204.8 92.16-204.8 204.8 92.16 204.8 204.8 204.8z m561.152 135.168l4.096 10.24-49.152 59.392c-8.192 10.24-8.192 26.624 0 36.864l49.152 57.344-4.096 10.24c-10.24 28.672-24.576 57.344-45.056 79.872l-8.192 8.192-75.776-12.288c-12.288-2.048-26.624 6.144-30.72 18.432l-26.624 73.728-10.24 2.048c-38.912 8.192-77.824 8.192-116.736 0l-12.288-2.048-24.576-71.68c-4.096-12.288-18.432-20.48-30.72-18.432l-77.824 12.288-8.192-8.192c-10.24-10.24-18.432-22.528-24.576-34.816-8.192-14.336-16.384-30.72-20.48-47.104l-4.096-10.24 51.2-57.344c8.192-10.24 8.192-26.624 0-34.816l-49.152-59.392 4.096-10.24c10.24-30.72 26.624-57.344 47.104-81.92l8.192-8.192 73.728 12.288c12.288 2.048 26.624-6.144 32.768-18.432l26.624-71.68 10.24-2.048c36.864-8.192 75.776-8.192 114.688 0l12.288 2.048 24.576 69.632c4.096 12.288 18.432 22.528 32.768 20.48l75.776-10.24 8.192 8.192c10.24 12.288 18.432 22.528 24.576 36.864 6.144 10.24 12.288 26.624 18.432 40.96z m-57.344-24.576c-4.096-8.192-8.192-14.336-14.336-22.528l-53.248 6.144c-32.768 4.096-65.536-16.384-75.776-47.104L768 491.52c-24.576-4.096-49.152-4.096-73.728 0l-18.432 49.152c-10.24 30.72-45.056 51.2-77.824 45.056l-51.2-8.192c-12.288 14.336-20.48 32.768-28.672 49.152l34.816 40.96c20.48 24.576 20.48 63.488 0 88.064l-34.816 40.96c4.096 10.24 8.192 18.432 14.336 28.672 4.096 8.192 8.192 14.336 14.336 20.48l55.296-8.192c32.768-4.096 65.536 16.384 75.776 47.104l16.384 49.152c24.576 4.096 51.2 4.096 75.776 0l18.432-51.2c10.24-30.72 45.056-51.2 75.776-45.056l51.2 8.192c10.24-14.336 20.48-30.72 26.624-49.152l-32.768-38.912c-20.48-24.576-22.528-63.488-2.048-88.064l34.816-40.96c-4.096-8.192-8.192-16.384-14.336-26.624z m-196.608 204.8c-51.2 0-92.16-40.96-92.16-92.16s40.96-92.16 92.16-92.16 92.16 40.96 92.16 92.16-43.008 92.16-92.16 92.16z m0-40.96c28.672 0 51.2-22.528 51.2-51.2s-22.528-51.2-51.2-51.2-51.2 22.528-51.2 51.2 22.528 51.2 51.2 51.2z" />
						</g>
					</svg>
				</a>
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
