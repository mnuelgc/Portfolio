export type Locale = "en" | "es";

type Strings = {
	seo: {
		title: string;
		description: string;
	};
	nav: {
		summary: string;
		projects: string;
		timeline: string;
		contact: string;
		localeToggle: string;
	};
	hero: {
		title: string;
		role: string;
		summary: string[];
		metrics: { label: string; value: string }[];
		primaryCta: string;
		secondaryCta: string;
		emailLabel: string;
		email: string;
		linkedin: string;
	};
	sections: {
		stack: string;
		projects: string;
		timeline: string;
		contact: string;
	};
	projects: {
		viewCase: string;
	};
	contact: {
		headline: string;
		subtitle: string;
		cta: string;
	};
};

const ui: Record<Locale, Strings> = {
	en: {
		seo: {
			title: "Manuel Gómez Cámara — Mobile Engineer",
			description:
				"Senior mobile engineer specialized in Android, Unity, and immersive AR/VR experiences.",
		},
		nav: {
			summary: "About",
			projects: "Projects",
			timeline: "Timeline",
			contact: "Contact",
			localeToggle: "Ver en Español",
		},
		hero: {
			title: "Manuel Gómez Cámara",
			role: "Mobile Engineer",
			summary: [
				"Mobile software engineer with 4+ years building native and cross-platform apps with Unity, Kotlin, and Swift.",
				"I deliver AR/VR and Android products from concept to launch, currently shipping Kotlin + Jetpack Compose for a global retail project.",
			],
			metrics: [
				{ label: "Years shipping", value: "+7" },
				{ label: "Released apps", value: "15" },
				{ label: "Students impacted", value: "2K+" },
			],
			primaryCta: "Download CV",
			secondaryCta: "Let’s talk",
			emailLabel: "Email",
			email: "info@manuelgomezcamara.com",
			linkedin: "LinkedIn",
		},
		sections: {
			stack: "Core Stack",
			projects: "Highlighted Projects",
			timeline: "Experience Timeline",
			contact: "Let’s collaborate",
		},
		projects: {
			viewCase: "Open case study",
		},
		contact: {
			headline: "Ready to build your next product?",
			subtitle: "I’m currently partnering with enterprise teams and ambitious startups.",
			cta: "Book a call",
		},
	},
	es: {
		seo: {
			title: "Manuel Gómez Cámara — Ingeniero móvil",
			description:
				"Ingeniero móvil senior especializado en Android, Unity y experiencias inmersivas AR/VR.",
		},
		nav: {
			summary: "Perfil",
			projects: "Proyectos",
			timeline: "Trayectoria",
			contact: "Contacto",
			localeToggle: "View in English",
		},
		hero: {
			title: "Manuel Gómez Cámara",
			role: "Mobile Engineer",
			summary: [
				"Ingeniero de software móvil con más de 4 años creando aplicaciones nativas y multiplataforma con Unity, Kotlin y Swift.",
				"Desarrollo productos AR/VR y Android de principio a fin; actualmente trabajo con Kotlin y Jetpack Compose en un proyecto retail global.",
			],
			metrics: [
				{ label: "Años creando", value: "+7" },
				{ label: "Apps publicadas", value: "15" },
				{ label: "Estudiantes impactados", value: "2K+" },
			],
			primaryCta: "Descargar CV",
			secondaryCta: "Hablemos",
			emailLabel: "Email",
			email: "info@manuelgomezcamara.com",
			linkedin: "LinkedIn",
		},
		sections: {
			stack: "Stack principal",
			projects: "Proyectos destacados",
			timeline: "Línea temporal",
			contact: "Colaboremos",
		},
		projects: {
			viewCase: "Ver caso completo",
		},
		contact: {
			headline: "¿Listo para tu próximo producto?",
			subtitle: "Trabajo con equipos enterprise y startups con gran ambición.",
			cta: "Agenda una llamada",
		},
	},
};

export const getStrings = (locale: Locale = "en") => ui[locale] ?? ui.en;
