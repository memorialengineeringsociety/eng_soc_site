import { useState, useEffect } from "react";

export function CapstoneProjects({ data }) {
	const [classIdx, setClassIdx] = useState(0);
	const [discIdx, setDiscIdx] = useState(0);

	const currentClass = data.classes[classIdx];
	const safeDiscIdx = Math.min(discIdx, currentClass.disciplines.length - 1);
	const currentDisc = currentClass.disciplines[safeDiscIdx];
	const projects = currentDisc?.projects || [];

	const handleClassChange = (i) => {
		setClassIdx(i);
		setDiscIdx(0);
	};

	return (
		<div className="p-6">
			<h3 className="mb-2 text-2xl font-bold text-black">Capstone Projects</h3>
			<p className="mb-6 text-black">Explore final year engineering capstone projects from Memorial University students.</p>

			{data.classes.length > 1 && (
				<div className="mb-4">
					<p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 font-maven">Class Year</p>
					<div className="flex flex-wrap gap-2">
						{data.classes.map((cls, i) => (
							<button key={i} onClick={() => handleClassChange(i)}
								className={`px-4 py-2 rounded-full font-norwester text-sm transition ${classIdx === i ? "bg-mun-burgundy text-white" : "bg-stone-200 text-black hover:bg-stone-300"}`}>
								{cls.year}
							</button>
						))}
					</div>
				</div>
			)}

			{data.classes.length === 1 && (
				<>
					<p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1 font-maven">Class Year</p>
					<p className="font-norwester text-xl text-black mb-4">{currentClass.year}</p>
				</>
			)}

			<p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 font-maven">Discipline</p>
			<div className="flex flex-wrap gap-2 mb-6">
				{currentClass.disciplines.map((disc, i) => (
					<button key={i} onClick={() => setDiscIdx(i)}
						className={`px-4 py-2 rounded-full font-norwester text-sm transition ${safeDiscIdx === i ? "bg-mun-burgundy text-white" : "bg-stone-200 text-black hover:bg-stone-300"}`}>
						{disc.name}
					</button>
				))}
			</div>

			<p className="text-sm text-stone-500 mb-4 font-maven">{projects.length} project{projects.length !== 1 ? "s" : ""}</p>

			<div className="flex flex-col gap-4 pb-10 items-center">
				{projects.map((project, i) => (
					<CapstoneProjectCard key={i} project={project} />
				))}
			</div>
		</div>
	);
}

function CapstoneProjectCard({ project }) {
	const [expanded, setExpanded] = useState(false);
	const [showGroupPhoto, setShowGroupPhoto] = useState(true);
	const [lightboxOpen, setLightboxOpen] = useState(false);

	const DESCRIPTION_LIMIT = 220;
	const isLong = project.description.length > DESCRIPTION_LIMIT;
	const hasBothPhotos = !!(project.project_photo && project.group_photo);
	const displayPhoto = hasBothPhotos
		? (showGroupPhoto ? project.group_photo : project.project_photo)
		: (project.project_photo || project.group_photo);
	const hasLinks = (project.member_links && project.member_links.length > 0) || (project.links && project.links.length > 0);

	useEffect(() => {
		if (!lightboxOpen) return;
		const onKey = (e) => { if (e.key === "Escape") setLightboxOpen(false); };
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [lightboxOpen]);

	return (
		<>
			{/* Card — no overflow-hidden so the member link popup isn't clipped */}
			<div className="bg-white rounded-xl shadow-md border border-stone-200 flex flex-col w-full max-w-3xl">
				{displayPhoto && (
					<div
						className="relative w-full h-48 lg:h-80 overflow-hidden rounded-t-xl cursor-zoom-in group"
						onClick={() => setLightboxOpen(true)}
					>
						<img
							src={displayPhoto}
							alt={project.name}
							className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
							<span className="material-icons text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ fontSize: "28px" }}>zoom_in</span>
						</div>
						{hasBothPhotos && (
							<div className="absolute bottom-0 left-0 right-0 flex text-xs" onClick={(e) => e.stopPropagation()}>
								<button
									onClick={() => setShowGroupPhoto(false)}
									className={`flex-1 py-1 font-maven transition ${!showGroupPhoto ? "bg-mun-burgundy text-white" : "bg-black/50 text-white hover:bg-black/70"}`}>
									Project
								</button>
								<button
									onClick={() => setShowGroupPhoto(true)}
									className={`flex-1 py-1 font-maven transition ${showGroupPhoto ? "bg-mun-burgundy text-white" : "bg-black/50 text-white hover:bg-black/70"}`}>
									Group
								</button>
							</div>
						)}
					</div>
				)}

				<div className="p-4 flex flex-col gap-2 flex-1">
					<div>
						<span className="text-xs text-stone-400 font-maven">Group {project.group_number}</span>
						<h3 className="font-norwester text-lg text-black leading-tight">{project.name}</h3>
					</div>

					<p className="text-xs text-stone-500 font-maven">{project.members.join(", ")}</p>

					<p className={`text-sm text-black font-maven ${!expanded && isLong ? "line-clamp-4" : ""}`}>
						{project.description}
					</p>
					{isLong && (
						<button
							onClick={() => setExpanded(!expanded)}
							className="text-xs text-blue-500 hover:text-blue-700 underline text-left self-start font-maven">
							{expanded ? "Show less" : "Read more"}
						</button>
					)}

					{hasLinks && (
						<div className="mt-auto pt-2 border-t border-stone-100 flex flex-col gap-1">
							{project.member_links && project.member_links.map((member, i) => (
								<MemberLinkRow key={i} member={member} />
							))}
							{project.links && project.links.length > 0 && (
								<div className="flex flex-wrap gap-1 pt-1">
									{project.links.map((link, i) => (
										<a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
											className="text-xs bg-stone-100 hover:bg-stone-200 rounded-full px-2 py-1 text-blue-600 transition font-maven">
											{link.label}
										</a>
									))}
								</div>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Lightbox */}
			{lightboxOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
					onClick={() => setLightboxOpen(false)}
				>
					<div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
						<img
							src={displayPhoto}
							alt={project.name}
							className="max-h-[80vh] w-full object-contain rounded-lg"
						/>
						{hasBothPhotos && (
							<div className="flex mt-2 rounded-lg overflow-hidden">
								<button
									onClick={() => setShowGroupPhoto(false)}
									className={`flex-1 py-2 font-maven text-sm transition ${!showGroupPhoto ? "bg-mun-burgundy text-white" : "bg-stone-700 text-white hover:bg-stone-600"}`}>
									Project
								</button>
								<button
									onClick={() => setShowGroupPhoto(true)}
									className={`flex-1 py-2 font-maven text-sm transition ${showGroupPhoto ? "bg-mun-burgundy text-white" : "bg-stone-700 text-white hover:bg-stone-600"}`}>
									Group
								</button>
							</div>
						)}
						<button
							onClick={() => setLightboxOpen(false)}
							className="absolute -top-3 -right-3 bg-white hover:bg-stone-100 text-black rounded-full p-1 shadow-md transition">
							<span className="material-icons" style={{ fontSize: "20px" }}>close</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
}

function MemberLinkRow({ member }) {
	const [hovered, setHovered] = useState(false);
	const hasLinks = member.website || member.linkedin || member.github || member.youtube;

	if (!hasLinks) {
		return <span className="text-xs text-stone-600 font-maven">{member.name}</span>;
	}

	return (
		<div
			className="flex items-center gap-1"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<span className="text-xs text-stone-600 font-maven">{member.name}</span>
			<span className="text-stone-400 shrink-0 flex items-center">
				<ChainLinkIcon />
			</span>
			{hovered && (
				<div className="flex gap-1">
					{member.website && (
						<a href={member.website} target="_blank" rel="noopener noreferrer" title="Website"
							className="p-1 rounded bg-stone-300 hover:bg-stone-400 transition text-black">
							<WebsiteIcon />
						</a>
					)}
					{member.linkedin && (
						<a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
							className="p-1 rounded bg-blue-600 hover:bg-blue-700 transition text-white">
							<LinkedInIcon />
						</a>
					)}
					{member.github && (
						<a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub"
							className="p-1 rounded bg-stone-800 hover:bg-black transition text-white">
							<GitHubIcon />
						</a>
					)}
					{member.youtube && (
						<a href={member.youtube} target="_blank" rel="noopener noreferrer" title="YouTube"
							className="p-1 rounded bg-red-600 hover:bg-red-700 transition text-white">
							<YouTubeIcon />
						</a>
					)}
				</div>
			)}
		</div>
	);
}

function ChainLinkIcon() {
	return (
		<svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
		</svg>
	);
}

function WebsiteIcon() {
	return (
		<svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
		</svg>
	);
}

function LinkedInIcon() {
	return (
		<svg className="h-4 w-4 fill-current" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
			<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
		</svg>
	);
}

function GitHubIcon() {
	return (
		<svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
		</svg>
	);
}

function YouTubeIcon() {
	return (
		<svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
		</svg>
	);
}
