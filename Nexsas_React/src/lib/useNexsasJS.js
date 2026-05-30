import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Re-initializes all original Nexsas template behaviors after React mounts the DOM.
 * Runs on every route change so newly mounted page content is animated/bound correctly.
 *
 * Behaviors handled here:
 *  - data-ns-animate reveal animations (gsap + ScrollTrigger) with safe fallback
 *  - Desktop nav mega-menu / dropdown hover open-close
 *  - Sticky header scroll state
 *  - buttonV3 hover icon slide effect
 */
export function useNexsasJS() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change (SPA behavior)
    window.scrollTo(0, 0);

    const cleanups = [];

    // ---------------------------------------------------------------
    // 1. Desktop navigation dropdown / mega-menu hover behavior
    // ---------------------------------------------------------------
    const navItems = document.querySelectorAll(".nav-item[data-menu]");
    navItems.forEach((item) => {
      const menuId = item.getAttribute("data-menu");
      const menu = document.getElementById(menuId);
      if (!menu) return;

      const showMenu = () => {
        document.querySelectorAll(".dropdown-menu, .mega-menu").forEach((m) => m.classList.remove("active"));
        menu.classList.add("active");
      };
      const hideMenu = () => menu.classList.remove("active");

      const onItemEnter = showMenu;
      const onItemLeave = (e) => {
        if (!menu.contains(e.relatedTarget)) setTimeout(hideMenu, 150);
      };
      const onMenuEnter = () => menu.classList.add("active");
      const onMenuLeave = (e) => {
        if (!item.contains(e.relatedTarget)) hideMenu();
      };

      item.addEventListener("mouseenter", onItemEnter);
      item.addEventListener("mouseleave", onItemLeave);
      menu.addEventListener("mouseenter", onMenuEnter);
      menu.addEventListener("mouseleave", onMenuLeave);

      cleanups.push(() => {
        item.removeEventListener("mouseenter", onItemEnter);
        item.removeEventListener("mouseleave", onItemLeave);
        menu.removeEventListener("mouseenter", onMenuEnter);
        menu.removeEventListener("mouseleave", onMenuLeave);
      });
    });

    // ---------------------------------------------------------------
    // 2. Sticky header scroll state
    // ---------------------------------------------------------------
    const header = document.querySelector(".financial-management-platform-header");
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 100) {
          header.style.transition = "all 0.5s ease-in-out";
          header.classList.add("financial-management-platform-header-scroll");
        } else {
          header.classList.remove("financial-management-platform-header-scroll");
        }
      };
      window.addEventListener("scroll", onScroll);
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // ---------------------------------------------------------------
    // 3. Reveal animations (data-ns-animate)
    //    Mirrors the original main.js initRevealElements logic.
    //    Setting inline opacity:1 first guarantees content is visible
    //    even if gsap fails for any reason.
    // ---------------------------------------------------------------
    const revealEls = document.querySelectorAll("[data-ns-animate]");
    revealEls.forEach((elem) => {
      const duration = elem.getAttribute("data-duration") ? parseFloat(elem.getAttribute("data-duration")) : 0.6;
      const delay = elem.getAttribute("data-delay") ? parseFloat(elem.getAttribute("data-delay")) : 0;
      const offset = elem.getAttribute("data-offset") ? parseFloat(elem.getAttribute("data-offset")) : 60;
      const instant = elem.hasAttribute("data-instant") && elem.getAttribute("data-instant") !== "false";
      const start = elem.getAttribute("data-start") || "top 90%";
      const end = elem.getAttribute("data-end") || "top 50%";
      const direction = elem.getAttribute("data-direction") || "down";

      // Make visible (fallback + correct end state for gsap.from)
      elem.style.opacity = "1";
      elem.style.filter = "blur(0)";

      const props = {
        opacity: 0,
        filter: "blur(16px)",
        duration,
        delay,
        ease: "power2.out",
      };
      if (!instant) {
        props.scrollTrigger = { trigger: elem, start, end, scrub: false };
      }
      if (direction === "left") props.x = -offset;
      else if (direction === "right") props.x = offset;
      else if (direction === "down") props.y = offset;
      else props.y = -offset; // up / default

      try {
        gsap.from(elem, props);
      } catch {
        elem.style.opacity = "1";
      }
    });

    // Recalculate trigger positions once layout settles
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    // ---------------------------------------------------------------
    // 4. buttonV3 hover icon slide effect
    // ---------------------------------------------------------------
    const buttonWrappers = document.querySelectorAll("[data-button-v3]");
    buttonWrappers.forEach((buttonWrapper) => {
      const iconWrapper = buttonWrapper.querySelector("[data-button-v3-icon]");
      const buttonText = buttonWrapper.querySelector("[data-button-v3-text]");
      if (!iconWrapper || !buttonText) return;

      const onEnter = () => {
        const wrapperWidth = Math.ceil(buttonWrapper.clientWidth);
        const iconWidth = iconWrapper.clientWidth;
        iconWrapper.style.transform = `translateX(${wrapperWidth - (iconWidth + 9)}px)`;
        buttonText.style.transform = `translateX(-${iconWidth}px)`;
      };
      const onLeave = () => {
        iconWrapper.style.transform = "translateX(0)";
        buttonText.style.transform = "translateX(0)";
      };
      buttonWrapper.addEventListener("mouseenter", onEnter);
      buttonWrapper.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        buttonWrapper.removeEventListener("mouseenter", onEnter);
        buttonWrapper.removeEventListener("mouseleave", onLeave);
      });
    });

    // ---------------------------------------------------------------
    // Cleanup on unmount / route change
    // ---------------------------------------------------------------
    return () => {
      window.clearTimeout(refreshId);
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);
}
