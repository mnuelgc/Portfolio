import type { Item } from "../types/items";

export type SupportedLocale = "en" | "es";

type TimelineEntry = {
	id: string;
	tagColor?: Item["tagColor"];
	logo?: string;
	period: { start: Date; end: Date };
	content: Record<SupportedLocale, {
		tag: string;
		title: string;
		subtitle?: string;
		date: string;
		description: string;
	}>;
};

const createPeriod = (start: string, end?: string): { start: Date; end: Date } => {
	const startDate = new Date(start);
	const endDate = end ? new Date(end) : startDate;
	return { start: startDate, end: endDate };
};

const entries: TimelineEntry[] = [
	{
		id: "ntt",
		tagColor: "green",
		logo: "/logos/nttIcon.jpeg",
		period: createPeriod("2025-01-01"),
		content: {
			en: {
				tag: "DEVELOPMENT",
				title: "NTTData",
				subtitle: "Android Application Developer",
				date: "Jan 2025 — Present",
				description:
					"Develop Android applications using Jetpack Compose and Kotlin, and maintain legacy applications with Java/Kotlin and XML.",
			},
			es: {
				tag: "DESARROLLO",
				title: "NTTData",
				subtitle: "Desarrollador de aplicaciones Android",
				date: "ene 2025 — Actualidad",
				description:
					"Desarrollo de aplicaciones Android con Jetpack Compose y Kotlin y mantenimiento de aplicaciones legacy en Java/Kotlin y XML.",
			},
		},
	},
	{
		id: "ies-la-nucia",
		logo: "/logos/gvicon.png",
		period: createPeriod("2023-09-01", "2024-09-01"),
		content: {
			en: {
				tag: "TEACHING",
				title: "IES La Nucia",
				subtitle: "Computer Science Teacher",
				date: "Sep 2023 — Sep 2024",
				description: "Taught Programming and Robotics to High School and Baccalaureate students.",
			},
			es: {
				tag: "DOCENCIA",
				title: "IES La Nucia",
				subtitle: "Profesor de Informática",
				date: "sept 2023 — sept 2024",
				description: "Profesor de Programación y Robótica de ESO y Bachiller.",
			},
		},
	},
	{
		id: "ua-master-mobile",
		tagColor: "blue",
		logo: "/logos/uaicon.png",
		period: createPeriod("2023-09-01", "2024-07-01"),
		content: {
			en: {
				tag: "EDUCATION",
				title: "University of Alicante",
				subtitle: "Master’s in Software for Mobile Devices",
				date: "Sep 2023 — Jul 2024",
				description: "Master’s program focused on Android and iOS application development.",
			},
			es: {
				tag: "TITULACIÓN",
				title: "Universidad de Alicante",
				subtitle: "Máster en Desarrollo de Software para dispositivos móviles",
				date: "sept 2023 — jul 2024",
				description: "Máster centrado en el desarrollo de aplicaciones Android e iOS.",
			},
		},
	},
	{
		id: "ies-pere",
		logo: "/logos/gvicon.png",
		period: createPeriod("2022-10-01", "2023-09-01"),
		content: {
			en: {
				tag: "TEACHING",
				title: "IES Pere Maria Orts i Bosch",
				subtitle: "Computer Science Teacher",
				date: "Oct 2022 — Sep 2023",
				description: "Taught programming to High School, Baccalaureate, and Intermediate Vocational students.",
			},
			es: {
				tag: "DOCENCIA",
				title: "IES Pere Maria Orts i Bosch",
				subtitle: "Profesor de Informática",
				date: "oct 2022 — sept 2023",
				description: "Profesor de Programación en ESO, Bachillerato y Grado Medio.",
			},
		},
	},
	{
		id: "crisalix",
		tagColor: "green",
		logo: "/logos/crisalixicon.jpg",
		period: createPeriod("2022-04-01", "2022-10-01"),
		content: {
			en: {
				tag: "DEVELOPMENT",
				title: "Crisalix",
				subtitle: "Unity 3D VR Developer",
				date: "Apr 2022 — Oct 2022",
				description: "Developed 3D and VR applications to preview cosmetic surgeries for patients.",
			},
			es: {
				tag: "DESARROLLO",
				title: "Crisalix",
				subtitle: "Desarrollador Unity 3D VR",
				date: "abr 2022 — oct 2022",
				description: "Desarrollo de aplicaciones 3D y VR para mostrar resultados de cirugías estéticas.",
			},
		},
	},
	{
		id: "ua-master-docencia",
		tagColor: "blue",
		logo: "/logos/uaicon.png",
		period: createPeriod("2021-09-01", "2022-07-01"),
		content: {
			en: {
				tag: "EDUCATION",
				title: "University of Alicante",
				subtitle: "Master’s in Secondary & Vocational Teaching",
				date: "Sep 2021 — Jul 2022",
				description: "Qualified to teach in secondary schools and vocational centers.",
			},
			es: {
				tag: "TITULACIÓN",
				title: "Universidad de Alicante",
				subtitle: "Máster Profesorado Secundaria y FP",
				date: "sept 2021 — jul 2022",
				description: "Cualificación oficial para impartir docencia en institutos.",
			},
		},
	},
	{
		id: "cype",
		tagColor: "green",
		logo: "/logos/cypeIcon.png",
		period: createPeriod("2018-01-01", "2021-07-01"),
		content: {
			en: {
				tag: "DEVELOPMENT",
				title: "CypeSoft",
				subtitle: "Unity 3D AR/VR Developer",
				date: "Jan 2018 — Jul 2021",
				description: "Built AR/VR tools using BIM models to help construction teams.",
			},
			es: {
				tag: "DESARROLLO",
				title: "CypeSoft",
				subtitle: "Desarrollador Unity 3D AR/VR",
				date: "ene 2018 — jul 2021",
				description: "Aplicaciones AR/VR basadas en BIM para apoyar a constructoras.",
			},
		},
	},
	{
		id: "ua-degree",
		tagColor: "blue",
		logo: "/logos/uaicon.png",
		period: createPeriod("2013-09-01", "2017-12-01"),
		content: {
			en: {
				tag: "EDUCATION",
				title: "University of Alicante",
				subtitle: "Multimedia Engineering",
				date: "Sep 2013 — Dec 2017",
				description: "Bachelor’s degree in Multimedia Engineering.",
			},
			es: {
				tag: "TITULACIÓN",
				title: "Universidad de Alicante",
				subtitle: "Ingeniería Multimedia",
				date: "sept 2013 — dic 2017",
				description: "Grado universitario en Ingeniería Multimedia.",
			},
		},
	},
];

export const getTimeline = (locale: SupportedLocale): Item[] =>
	entries.map((entry) => {
		const content = entry.content[locale];
		return {
			tag: content.tag,
			tagColor: entry.tagColor,
			title: content.title,
			subtitle: content.subtitle,
			date: content.date,
			startDate: entry.period.start,
			endDate: entry.period.end,
			description: content.description,
			logo: entry.logo,
		};
	});
