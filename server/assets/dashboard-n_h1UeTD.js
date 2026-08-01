import { n as CountUp, r as Reveal, t as SiteFooter } from "./site-footer-C6OHKpRQ.js";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/lib/dashboard-data.ts
var todaySession = {
	title: "Lower — Heavy Squat",
	block: "Block 3 · Week 2",
	duration: "62 min",
	sets: [
		{
			id: "s1",
			label: "Back squat",
			target: "5 × 3 @ 140kg",
			done: true
		},
		{
			id: "s2",
			label: "Pause squat",
			target: "3 × 5 @ 105kg",
			done: true
		},
		{
			id: "s3",
			label: "Romanian deadlift",
			target: "4 × 8 @ 110kg",
			done: false
		},
		{
			id: "s4",
			label: "Walking lunge",
			target: "3 × 20 steps",
			done: false
		},
		{
			id: "s5",
			label: "Hanging leg raise",
			target: "3 × 12",
			done: false
		}
	]
};
var weeks = [
	"Week 1",
	"Week 2",
	"Week 3",
	"Week 4"
];
var volumeByWeek = {
	"Week 1": [
		{
			day: "Mon",
			value: 8.2
		},
		{
			day: "Tue",
			value: 4.1
		},
		{
			day: "Wed",
			value: 0
		},
		{
			day: "Thu",
			value: 9.4
		},
		{
			day: "Fri",
			value: 6
		},
		{
			day: "Sat",
			value: 11.2
		},
		{
			day: "Sun",
			value: 0
		}
	],
	"Week 2": [
		{
			day: "Mon",
			value: 9.6
		},
		{
			day: "Tue",
			value: 5.2
		},
		{
			day: "Wed",
			value: 2.4
		},
		{
			day: "Thu",
			value: 10.8
		},
		{
			day: "Fri",
			value: 7.1
		},
		{
			day: "Sat",
			value: 12.6
		},
		{
			day: "Sun",
			value: 0
		}
	],
	"Week 3": [
		{
			day: "Mon",
			value: 11.1
		},
		{
			day: "Tue",
			value: 6.4
		},
		{
			day: "Wed",
			value: 3
		},
		{
			day: "Thu",
			value: 12.2
		},
		{
			day: "Fri",
			value: 8.4
		},
		{
			day: "Sat",
			value: 13.9
		},
		{
			day: "Sun",
			value: 1.2
		}
	],
	"Week 4": [
		{
			day: "Mon",
			value: 6
		},
		{
			day: "Tue",
			value: 3.2
		},
		{
			day: "Wed",
			value: 0
		},
		{
			day: "Thu",
			value: 5.8
		},
		{
			day: "Fri",
			value: 4
		},
		{
			day: "Sat",
			value: 7.4
		},
		{
			day: "Sun",
			value: 0
		}
	]
};
var rings = [
	{
		label: "Volume",
		value: 78,
		unit: "%"
	},
	{
		label: "Intensity",
		value: 64,
		unit: "%"
	},
	{
		label: "Recovery",
		value: 91,
		unit: "%"
	}
];
var personalRecords = [
	{
		lift: "Back squat",
		value: "165kg",
		delta: "+7.5kg",
		when: "12 days ago"
	},
	{
		lift: "Deadlift",
		value: "205kg",
		delta: "+5kg",
		when: "3 weeks ago"
	},
	{
		lift: "Bench press",
		value: "115kg",
		delta: "+2.5kg",
		when: "5 weeks ago"
	},
	{
		lift: "Strict press",
		value: "72.5kg",
		delta: "+2.5kg",
		when: "6 weeks ago"
	}
];
var recentSessions = [
	{
		name: "Upper — Press focus",
		date: "Yesterday",
		tonnage: "9.6t",
		rpe: "7.5"
	},
	{
		name: "Engine — Zone 2",
		date: "Tue",
		tonnage: "—",
		rpe: "5.0"
	},
	{
		name: "Lower — Volume",
		date: "Mon",
		tonnage: "12.4t",
		rpe: "8.0"
	},
	{
		name: "Mobility flow",
		date: "Sun",
		tonnage: "—",
		rpe: "3.0"
	}
];
//#endregion
//#region src/routes/dashboard.tsx?tsr-split=component
function Dashboard() {
	const [sets, setSets] = useState(todaySession.sets);
	const [week, setWeek] = useState(weeks[1] ?? "Week 2");
	const done = sets.filter((s) => s.done).length;
	const progress = Math.round(done / sets.length * 100);
	const volume = volumeByWeek[week] ?? [];
	const maxVolume = useMemo(() => Math.max(...volume.map((v) => v.value), 1), [volume]);
	const total = volume.reduce((a, b) => a + b.value, 0);
	const toggle = (id) => setSets((prev) => prev.map((s) => s.id === id ? {
		...s,
		done: !s.done
	} : s));
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "aurora-blob pointer-events-none fixed -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[150px]"
			}),
			/* @__PURE__ */ jsx("header", {
				className: "relative border-b border-border px-5 py-5 sm:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", { className: "block h-5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ jsx("span", {
							className: "font-display text-2xl leading-none tracking-[0.2em]",
							children: "PULSE"
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-border px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground",
						children: "live data · resets on reload"
					})]
				})
			}),
			/* @__PURE__ */ jsx("main", {
				className: "relative px-5 py-8 sm:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
							className: "text-[0.65rem] uppercase tracking-[0.4em] text-glow",
							children: "Friday · Block 3"
						}), /* @__PURE__ */ jsx("h1", {
							className: "mt-3 font-display text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.88]",
							children: "GOOD SESSION AHEAD"
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 grid grid-cols-1 gap-3 md:grid-cols-6",
							children: [
								/* @__PURE__ */ jsx(Reveal, {
									className: "tile md:col-span-3 md:row-span-2",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex h-full flex-col p-6 sm:p-8",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
													className: "text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground",
													children: [
														todaySession.block,
														" · ",
														todaySession.duration
													]
												}), /* @__PURE__ */ jsx("h2", {
													className: "mt-2 font-display text-4xl leading-none",
													children: todaySession.title.toUpperCase()
												})] }), /* @__PURE__ */ jsxs("span", {
													className: "font-display text-4xl leading-none text-glow",
													children: [progress, "%"]
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted",
												children: /* @__PURE__ */ jsx("div", {
													className: "h-full rounded-full bg-primary transition-all duration-700 ease-out",
													style: { width: `${progress}%` }
												})
											}),
											/* @__PURE__ */ jsx("ul", {
												className: "mt-6 space-y-2",
												children: sets.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
													type: "button",
													onClick: () => toggle(s.id),
													"aria-pressed": s.done,
													className: "flex w-full items-center gap-4 rounded-xl border border-border px-4 py-3 text-left transition-all duration-300 hover:border-primary/60 hover:bg-secondary/40",
													children: [
														/* @__PURE__ */ jsx("span", {
															className: `flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${s.done ? "border-primary bg-primary" : "border-border"}`,
															children: s.done && /* @__PURE__ */ jsx("svg", {
																viewBox: "0 0 12 12",
																className: "h-3 w-3",
																"aria-hidden": true,
																children: /* @__PURE__ */ jsx("path", {
																	d: "M2 6.5 4.8 9 10 3.5",
																	fill: "none",
																	stroke: "currentColor",
																	strokeWidth: "2",
																	strokeLinecap: "round",
																	strokeLinejoin: "round",
																	className: "text-primary-foreground"
																})
															})
														}),
														/* @__PURE__ */ jsx("span", {
															className: `flex-1 text-sm transition-colors ${s.done ? "text-muted-foreground line-through" : "text-foreground"}`,
															children: s.label
														}),
														/* @__PURE__ */ jsx("span", {
															className: "text-xs uppercase tracking-[0.15em] text-muted-foreground",
															children: s.target
														})
													]
												}) }, s.id))
											})
										]
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 90,
									className: "tile md:col-span-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "p-6 sm:p-8",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center justify-between gap-3",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
												className: "text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground",
												children: ["Tonnage · ", week]
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-2 font-display text-4xl leading-none",
												children: /* @__PURE__ */ jsx(CountUp, {
													to: total,
													decimals: 1,
													suffix: "t"
												})
											})] }), /* @__PURE__ */ jsx("div", {
												className: "flex gap-1",
												children: weeks.map((w) => /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => setWeek(w),
													className: `rounded-full px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.15em] transition-colors ${w === week ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`,
													children: w.replace("Week ", "W")
												}, w))
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: "mt-8 flex h-40 items-stretch gap-2",
											children: volume.map((d) => /* @__PURE__ */ jsxs("div", {
												className: "flex h-full flex-1 flex-col items-center gap-2",
												children: [/* @__PURE__ */ jsx("div", {
													className: "flex w-full flex-1 items-end",
													children: /* @__PURE__ */ jsx("div", {
														className: "w-full rounded-t-md bg-gradient-to-t from-primary/40 to-glow transition-all duration-700 ease-out",
														style: { height: `${Math.max(d.value / maxVolume * 100, 2)}%` }
													})
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground",
													children: d.day
												})]
											}, d.day))
										})]
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 150,
									className: "tile md:col-span-3",
									children: /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-3 gap-4 p-6 sm:p-8",
										children: rings.map((r) => /* @__PURE__ */ jsx(ProgressRing, {
											label: r.label,
											value: r.value
										}, r.label))
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 200,
									className: "tile md:col-span-2",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex h-full flex-col justify-between p-6 sm:p-8",
										children: [
											/* @__PURE__ */ jsx("p", {
												className: "text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground",
												children: "Current streak"
											}),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "font-display text-6xl leading-none text-glow",
												children: /* @__PURE__ */ jsx(CountUp, { to: 23 })
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-2 text-xs text-muted-foreground",
												children: "weeks without a missed key session"
											})] }),
											/* @__PURE__ */ jsx("div", {
												className: "mt-6 flex gap-1",
												children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsx("span", { className: `h-8 flex-1 rounded-sm transition-colors ${i > 1 ? "bg-primary/70" : "bg-muted"}` }, i))
											})
										]
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 250,
									className: "tile md:col-span-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "p-6 sm:p-8",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Personal records"
										}), /* @__PURE__ */ jsx("ul", {
											className: "mt-5 divide-y divide-border",
											children: personalRecords.map((pr) => /* @__PURE__ */ jsxs("li", {
												className: "flex items-center justify-between gap-4 py-3",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-sm",
													children: pr.lift
												}), /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-4",
													children: [
														/* @__PURE__ */ jsx("span", {
															className: "font-display text-2xl leading-none",
															children: pr.value
														}),
														/* @__PURE__ */ jsx("span", {
															className: "rounded-full bg-primary/15 px-2 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-glow",
															children: pr.delta
														}),
														/* @__PURE__ */ jsx("span", {
															className: "hidden text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground sm:inline",
															children: pr.when
														})
													]
												})]
											}, pr.lift))
										})]
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 300,
									className: "tile md:col-span-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: "p-6 sm:p-8",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Recent sessions"
										}), /* @__PURE__ */ jsx("div", {
											className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
											children: recentSessions.map((s) => /* @__PURE__ */ jsxs("div", {
												className: "rounded-xl border border-border p-4 transition-colors hover:border-primary/60",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-sm",
													children: s.name
												}), /* @__PURE__ */ jsxs("p", {
													className: "mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
													children: [
														s.date,
														" · ",
														s.tonnage,
														" · RPE ",
														s.rpe
													]
												})]
											}, s.name))
										})]
									})
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
								children: "← Back to site"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
function ProgressRing({ label, value }) {
	const r = 34;
	const c = 2 * Math.PI * r;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative h-24 w-24",
			children: [/* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 80 80",
				className: "h-full w-full -rotate-90",
				children: [/* @__PURE__ */ jsx("circle", {
					cx: "40",
					cy: "40",
					r,
					fill: "none",
					strokeWidth: "6",
					className: "stroke-muted"
				}), /* @__PURE__ */ jsx("circle", {
					cx: "40",
					cy: "40",
					r,
					fill: "none",
					strokeWidth: "6",
					strokeLinecap: "round",
					className: "stroke-primary transition-all duration-1000 ease-out",
					strokeDasharray: c,
					strokeDashoffset: c - value / 100 * c
				})]
			}), /* @__PURE__ */ jsx("span", {
				className: "absolute inset-0 flex items-center justify-center font-display text-2xl",
				children: /* @__PURE__ */ jsx(CountUp, {
					to: value,
					suffix: "%"
				})
			})]
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { Dashboard as component };
