// Языки сайта. Немецкий — основной (адрес "/"), русский — "/ru/".
// Компоненты получают тексты через getContent(Astro.url).
import deSite from "./content/de/site.json";
import deTraining from "./content/de/training.json";
import deCourses from "./content/de/courses.json";
import deTeam from "./content/de/team.json";
import deReviews from "./content/de/reviews.json";
import deFaq from "./content/de/faq.json";

import ruSite from "./content/ru/site.json";
import ruTraining from "./content/ru/training.json";
import ruCourses from "./content/ru/courses.json";
import ruTeam from "./content/ru/team.json";
import ruReviews from "./content/ru/reviews.json";
import ruFaq from "./content/ru/faq.json";

export type Lang = "de" | "ru";

const content = {
  de: { site: deSite, training: deTraining, courses: deCourses, team: deTeam, reviews: deReviews, faq: deFaq },
  ru: { site: ruSite, training: ruTraining, courses: ruCourses, team: ruTeam, reviews: ruReviews, faq: ruFaq },
};

export function getLang(url: URL): Lang {
  return url.pathname === "/ru" || url.pathname.startsWith("/ru/") ? "ru" : "de";
}

export function getContent(url: URL) {
  return content[getLang(url)];
}

// Адрес главной на каждом языке — для переключателя
export const langHome: Record<Lang, string> = { de: "/", ru: "/ru/" };
