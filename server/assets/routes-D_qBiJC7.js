import { i as cn, n as CountUp, r as Reveal, t as SiteFooter } from "./site-footer-C6OHKpRQ.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site-nav.tsx
var links = [
	{
		label: "Programs",
		href: "/#programs"
	},
	{
		label: "Method",
		href: "/#method"
	},
	{
		label: "Coaches",
		href: "/#coaches"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"),
		children: /* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "group flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", { className: "block h-5 w-1.5 rounded-full bg-primary transition-all duration-300 group-hover:h-6" }), /* @__PURE__ */ jsx("span", {
						className: "font-display text-2xl leading-none tracking-[0.2em] text-foreground",
						children: "PULSE"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-9 md:flex",
					children: links.map((l) => /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "relative text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full",
						children: l.label
					}, l.label))
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/dashboard",
					className: "glow-button rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-300 hover:scale-[1.04]",
					children: /* @__PURE__ */ jsx("span", {
						className: "relative z-10",
						children: "Dashboard"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/lib/site-data.ts
var programs = [
	{
		id: "strength",
		name: "Strength",
		tagline: "Absolute force. Barbell first, ego last.",
		sessions: "4 sessions / week",
		focus: "Squat · Bench · Deadlift · Press"
	},
	{
		id: "hypertrophy",
		name: "Hypertrophy",
		tagline: "Tissue built through volume you can actually recover from.",
		sessions: "5 sessions / week",
		focus: "Progressive overload blocks"
	},
	{
		id: "conditioning",
		name: "Conditioning",
		tagline: "Engine work that carries into every other lift.",
		sessions: "3 sessions / week",
		focus: "Intervals · Zone 2 · Sled"
	},
	{
		id: "mobility",
		name: "Mobility",
		tagline: "Range you own, not range you borrow.",
		sessions: "Daily 12 min",
		focus: "Hips · T-spine · Ankles"
	},
	{
		id: "hybrid",
		name: "Hybrid",
		tagline: "Lift heavy on Monday, run long on Sunday.",
		sessions: "6 sessions / week",
		focus: "Strength + endurance periodisation"
	}
];
var coaches = [
	{
		name: "Mara Ellison",
		role: "Head of Strength",
		detail: "11 years coaching powerlifters. Built 40+ national qualifiers.",
		stat: "205kg DL"
	},
	{
		name: "Dane Oyelaran",
		role: "Performance Lead",
		detail: "Ex pro rugby S&C. Specialises in return-to-load programming.",
		stat: "9 yrs pro S&C"
	},
	{
		name: "Iker Ruiz",
		role: "Conditioning Coach",
		detail: "Endurance physiologist. Designs every engine block in the app.",
		stat: "2:31 marathon"
	}
];
var testimonials = [{
	quote: "Six months in and I've added 60kg to my total without a single missed week from injury. The programming is unreasonably good.",
	name: "Priya N.",
	meta: "Member since 2024"
}, {
	quote: "The dashboard is the first tracker I've actually kept using. It tells me what to do, then shows me it worked.",
	name: "Tom B.",
	meta: "Hybrid track"
}];
var tiers = [{
	name: "Core",
	price: "INR2900",
	period: "/ month",
	blurb: "Full programme library and the training dashboard.",
	features: [
		"All 5 training tracks",
		"Adaptive weekly volume",
		"Progress dashboard",
		"Form video library"
	],
	highlight: false
}, {
	name: "Signature",
	price: "INR8900",
	period: "/ month",
	blurb: "Everything in Core plus a coach in your corner.",
	features: [
		"Everything in Core",
		"1:1 coach, weekly check-ins",
		"Form review within 24h",
		"Custom deload planning",
		"Nutrition framework"
	],
	highlight: true
}];
//#endregion
//#region src/assets/hero-athlete.jpg
var hero_athlete_default = "/animatedwebsites/assets/hero-athlete-DMa7RU88.jpg";
//#endregion
//#region src/assets/program-strength.jpg
var program_strength_default = "/animatedwebsites/assets/program-strength-D6TIg0No.jpg";
//#endregion
//#region src/assets/program-conditioning.jpg
var program_conditioning_default = "/animatedwebsites/assets/program-conditioning-B7TPcDM3.jpg";
//#endregion
//#region src/assets/program-mobility.jpg
var program_mobility_default = "/animatedwebsites/assets/program-mobility-B8768XH1.jpg";
//#endregion
//#region src/assets/coach-1.jpg
var coach_1_default = "/animatedwebsites/assets/coach-1-XlyHwnpF.jpg";
//#endregion
//#region src/assets/coach-2.jpg
var coach_2_default = "/animatedwebsites/assets/coach-2-B1lruNYC.jpg";
//#endregion
//#region src/assets/coach-3.jpg
var coach_3_default = "/animatedwebsites/assets/coach-3-BM6ba5cX.jpg";
//#endregion
//#region src/assets/cta-gym.jpg
var cta_gym_default = "/animatedwebsites/assets/cta-gym-By0IHS41.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var coachPhotos = [
	coach_1_default,
	coach_2_default,
	coach_3_default
];
function Landing() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(SiteNav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Marquee, {}),
				/* @__PURE__ */ jsx(Programs, {}),
				/* @__PURE__ */ jsx(Method, {}),
				/* @__PURE__ */ jsx(Coaches, {}),
				/* @__PURE__ */ jsx(Results, {}),
				/* @__PURE__ */ jsx(Membership, {}),
				/* @__PURE__ */ jsx(ClosingCta, {})
			] }),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
function Hero() {
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		const onScroll = () => setOffset(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative px-5 pb-10 pt-24 sm:px-8 sm:pt-28",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "aurora-blob pointer-events-none absolute -top-32 left-1/3 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[140px]"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto grid max-w-7xl auto-rows-[minmax(0,auto)] grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[repeat(6,7.2rem)]",
			children: [
				/* @__PURE__ */ jsx(Reveal, {
					className: "tile group col-span-1 md:col-span-4 md:row-span-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative h-full min-h-[26rem] w-full overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: hero_athlete_default,
								alt: "Athlete pulling a heavy deadlift in a dark gym",
								width: 1280,
								height: 1600,
								className: "absolute inset-0 h-full w-full object-cover object-center opacity-80",
								style: { transform: `translate3d(0, ${offset * .12}px, 0) scale(1.12)` }
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex h-full flex-col justify-end p-6 sm:p-10",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-glow",
										children: "Strength · Conditioning · Longevity"
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "font-display text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.82] tracking-tight",
										children: [
											"BUILT",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "text-glow",
												children: "UNDER"
											}),
											" LOAD"
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base",
										children: "Coached programming that adapts to the week you actually had. Heavy when you are ready, honest when you are not."
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-8",
										children: /* @__PURE__ */ jsx(Link, {
											to: "/dashboard",
											className: "glow-button inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03]",
											children: /* @__PURE__ */ jsx("span", {
												className: "relative z-10",
												children: "Start training"
											})
										})
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 120,
					className: "tile col-span-1 md:col-span-2 md:row-span-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex h-full flex-col justify-between p-6",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground",
							children: "Average 12-month total gain"
						}), /* @__PURE__ */ jsx("p", {
							className: "font-display text-6xl leading-none text-foreground",
							children: /* @__PURE__ */ jsx(CountUp, {
								to: 68,
								suffix: "kg"
							})
						})]
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 200,
					className: "tile col-span-1 md:col-span-2 md:row-span-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex h-full flex-col justify-between gap-4 p-6",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground",
							children: "Members training now"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-6xl leading-none",
							children: /* @__PURE__ */ jsx(CountUp, { to: 4218 })
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Across 32 states, 5 training tracks."
						})] })]
					})
				}),
				/* @__PURE__ */ jsxs(Reveal, {
					delay: 280,
					className: "tile group col-span-1 md:col-span-2 md:row-span-2",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: program_strength_default,
							alt: "Loaded barbell on a dark gym floor",
							width: 1024,
							height: 1024,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-[1200ms] group-hover:scale-110"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background to-transparent" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative flex h-full min-h-[9rem] flex-col justify-end p-6",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-3xl leading-none",
								children: "EVERY REP LOGGED"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Sets, tonnage and RPE, tracked automatically."
							})]
						})
					]
				})
			]
		})]
	});
}
function Marquee() {
	const words = [
		"SQUAT",
		"PULL",
		"PRESS",
		"SPRINT",
		"BREATHE",
		"RECOVER",
		"REPEAT"
	];
	return /* @__PURE__ */ jsx("div", {
		className: "relative overflow-hidden border-y border-border py-4",
		children: /* @__PURE__ */ jsx("div", {
			className: "ticker-track flex w-max gap-10 whitespace-nowrap",
			children: [0, 1].map((rep) => /* @__PURE__ */ jsx("div", {
				className: "flex gap-10",
				children: words.map((w) => /* @__PURE__ */ jsx("span", {
					className: "font-display text-3xl tracking-[0.25em] text-muted-foreground/45",
					children: w
				}, `${rep}-${w}`))
			}, rep))
		})
	});
}
function Programs() {
	const images = {
		strength: program_strength_default,
		conditioning: program_conditioning_default,
		mobility: program_mobility_default
	};
	const spans = [
		"md:col-span-4 md:row-span-2",
		"md:col-span-2 md:row-span-1",
		"md:col-span-2 md:row-span-1",
		"md:col-span-3 md:row-span-1",
		"md:col-span-3 md:row-span-1"
	];
	return /* @__PURE__ */ jsx("section", {
		id: "programs",
		className: "scroll-mt-20 px-5 py-24 sm:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				eyebrow: "Five tracks",
				title: "PICK YOUR STIMULUS",
				copy: "Each track is a full periodised system, not a workout list. Switch whenever your goal shifts."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[repeat(3,11rem)]",
				children: programs.map((p, i) => /* @__PURE__ */ jsxs(Reveal, {
					delay: i * 90,
					className: `tile group col-span-1 ${spans[i]}`,
					children: [images[p.id] && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
						src: images[p.id],
						alt: "",
						"aria-hidden": true,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-[1200ms] group-hover:scale-110"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" })] }), /* @__PURE__ */ jsxs("div", {
						className: "relative flex h-full min-h-[10rem] flex-col justify-between p-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-4xl leading-none",
								children: p.name.toUpperCase()
							}), /* @__PURE__ */ jsx("span", {
								className: "mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-glow",
								children: p.sessions
							})]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "max-w-sm text-sm text-muted-foreground",
							children: p.tagline
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70",
							children: p.focus
						})] })]
					})]
				}, p.id))
			})]
		})
	});
}
function Method() {
	return /* @__PURE__ */ jsx("section", {
		id: "method",
		className: "scroll-mt-20 border-y border-border px-5 py-24 sm:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				eyebrow: "The method",
				title: "THREE MOVES, REPEATED",
				copy: "A loop we run every six weeks, for every member, on every track."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-1 gap-3 md:grid-cols-3",
				children: [
					{
						n: "01",
						title: "ASSESS",
						copy: "A 20-minute movement and strength baseline sets your starting loads — no guesswork."
					},
					{
						n: "02",
						title: "ADAPT",
						copy: "Weekly volume shifts with your logged RPE and recovery. Bad week? The plan pulls back."
					},
					{
						n: "03",
						title: "ADVANCE",
						copy: "Every block ends in a retest. You either moved the number or we change the approach."
					}
				].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 120,
					className: "tile",
					children: /* @__PURE__ */ jsxs("div", {
						className: "p-8",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-display text-7xl leading-none text-primary/45",
								children: s.n
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-6 font-display text-3xl leading-none",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: s.copy
							})
						]
					})
				}, s.n))
			})]
		})
	});
}
function Coaches() {
	return /* @__PURE__ */ jsx("section", {
		id: "coaches",
		className: "scroll-mt-20 px-5 py-24 sm:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				eyebrow: "Who writes your week",
				title: "THE COACHES",
				copy: "Small team, deep specialisation. You are assigned one, not passed around."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3",
				children: coaches.map((c, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 110,
					className: "tile group",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[4/5] w-full overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: coachPhotos[i],
								alt: `${c.name}, ${c.role}`,
								width: 800,
								height: 1024,
								loading: "lazy",
								className: "h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-0 bottom-0 p-6",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-[0.6rem] uppercase tracking-[0.3em] text-glow",
										children: c.role
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-2 font-display text-3xl leading-none",
										children: c.name.toUpperCase()
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]",
										children: /* @__PURE__ */ jsx("div", {
											className: "overflow-hidden",
											children: /* @__PURE__ */ jsx("p", {
												className: "pt-3 text-sm text-muted-foreground",
												children: c.detail
											})
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70",
										children: c.stat
									})
								]
							})
						]
					})
				}, c.name))
			})]
		})
	});
}
function Results() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border px-5 py-24 sm:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				eyebrow: "Receipts",
				title: "THE NUMBERS MOVED"
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 grid grid-cols-1 gap-3 md:grid-cols-6",
				children: [[
					{
						label: "Avg. squat gain / 6 months",
						to: 27,
						suffix: "kg"
					},
					{
						label: "Sessions completed",
						to: 1.42,
						suffix: "M",
						decimals: 2
					},
					{
						label: "Members retained past year 1",
						to: 92,
						suffix: "%"
					}
				].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 100,
					className: "tile md:col-span-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "p-8",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-6xl leading-none text-foreground",
							children: /* @__PURE__ */ jsx(CountUp, {
								to: s.to,
								suffix: s.suffix,
								decimals: s.decimals ?? 0
							})
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground",
							children: s.label
						})]
					})
				}, s.label)), testimonials.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: 200 + i * 120,
					className: "tile md:col-span-3",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex h-full flex-col justify-between p-8",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-lg leading-relaxed text-foreground/90",
							children: [
								"“",
								t.quote,
								"”"
							]
						}), /* @__PURE__ */ jsxs("p", {
							className: "mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground",
							children: [
								t.name,
								" · ",
								t.meta
							]
						})]
					})
				}, t.name))]
			})]
		})
	});
}
function Membership() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-5 py-24 sm:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionHead, {
				eyebrow: "Membership",
				title: "TWO WAYS IN",
				copy: "Cancel any time. Both tiers include the full training dashboard."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-1 gap-3 md:grid-cols-2",
				children: tiers.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 120,
					className: "tile",
					children: /* @__PURE__ */ jsxs("div", {
						className: `flex h-full flex-col p-8 ${t.highlight ? "bg-primary/10" : ""}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-4xl leading-none",
									children: t.name.toUpperCase()
								}), /* @__PURE__ */ jsxs("p", {
									className: "font-display text-4xl leading-none text-glow",
									children: [t.price, /* @__PURE__ */ jsx("span", {
										className: "ml-1 text-sm text-muted-foreground",
										children: t.period
									})]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: t.blurb
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-8 space-y-3",
								children: t.features.map((f) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), f]
								}, f))
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/dashboard",
								className: `mt-10 inline-flex justify-center rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-300 hover:scale-[1.02] ${t.highlight ? "glow-button bg-primary text-primary-foreground" : "border border-border text-foreground hover:border-primary"}`,
								children: /* @__PURE__ */ jsxs("span", {
									className: "relative z-10",
									children: ["Choose ", t.name]
								})
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function ClosingCta() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-5 pb-24 sm:px-8",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "tile mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: cta_gym_default,
					alt: "",
					"aria-hidden": true,
					loading: "lazy",
					className: "drift absolute inset-0 h-full w-full object-cover opacity-40"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative flex flex-col items-start gap-6 p-10 sm:p-16",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.85]",
							children: [
								"THE BAR IS",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-glow",
									children: "STILL LOADED"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-md text-sm text-muted-foreground",
							children: "Take the baseline assessment today and your first block is written tonight."
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/dashboard",
							className: "glow-button rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03]",
							children: /* @__PURE__ */ jsx("span", {
								className: "relative z-10",
								children: "See the dashboard"
							})
						})
					]
				})
			]
		})
	});
}
function SectionHead({ eyebrow, title, copy }) {
	return /* @__PURE__ */ jsxs(Reveal, { children: [
		/* @__PURE__ */ jsx("p", {
			className: "text-[0.65rem] uppercase tracking-[0.4em] text-glow",
			children: eyebrow
		}),
		/* @__PURE__ */ jsx("h2", {
			className: "mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.88]",
			children: title
		}),
		copy && /* @__PURE__ */ jsx("p", {
			className: "mt-4 max-w-xl text-sm text-muted-foreground sm:text-base",
			children: copy
		})
	] });
}
//#endregion
export { Landing as component };
