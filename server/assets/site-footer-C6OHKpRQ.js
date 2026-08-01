import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/hooks/use-in-view.ts
function useInView(threshold = .18) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setInView(true);
				observer.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		inView
	};
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/reveal.tsx
function Reveal({ children, delay = 0, className }) {
	const { ref, inView } = useInView(.15);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn("reveal", inView && "reveal-in", className),
		style: { animationDelay: `${delay}ms` },
		children
	});
}
//#endregion
//#region src/components/count-up.tsx
function CountUp({ to, duration = 1600, decimals = 0, prefix = "", suffix = "" }) {
	const { ref, inView } = useInView(.4);
	const [value, setValue] = useState(0);
	const frame = useRef(null);
	useEffect(() => {
		if (!inView) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(to);
			return;
		}
		const start = performance.now();
		const step = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(to * eased);
			if (p < 1) frame.current = requestAnimationFrame(step);
		};
		frame.current = requestAnimationFrame(step);
		return () => {
			if (frame.current) cancelAnimationFrame(frame.current);
		};
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [
			prefix,
			value.toFixed(decimals),
			suffix
		]
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border px-5 py-10 sm:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", { className: "block h-5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ jsx("span", {
						className: "font-display text-2xl leading-none tracking-[0.2em]",
						children: "PULSE"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Training that compounds · Est. 2006"
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/dashboard",
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
					children: "Open dashboard"
				})
			]
		})
	});
}
//#endregion
export { cn as i, CountUp as n, Reveal as r, SiteFooter as t };
