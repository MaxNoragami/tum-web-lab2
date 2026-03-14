import roHero from '../content/ro/hero.json';
import roAboutMe from '../content/ro/about-me.json';
import roGallery from '../content/ro/gallery.json';
import roHiw from '../content/ro/hiw.json';
import roGlobal from '../content/ro/global.json';
import roByoc from '../content/ro/byoc.json';
import roContacts from '../content/ro/contacts.json';

import enHero from '../content/en/hero.json';
import enAboutMe from '../content/en/about-me.json';
import enGallery from '../content/en/gallery.json';
import enHiw from '../content/en/hiw.json';
import enGlobal from '../content/en/global.json';
import enByoc from '../content/en/byoc.json';
import enContacts from '../content/en/contacts.json';

const translations = {
  ro: {
    hero: roHero,
    aboutMe: roAboutMe,
    gallery: roGallery,
    hiw: roHiw,
    global: roGlobal,
    byoc: roByoc,
    contacts: roContacts,
  },
  en: {
    hero: enHero,
    aboutMe: enAboutMe,
    gallery: enGallery,
    hiw: enHiw,
    global: enGlobal,
    byoc: enByoc,
    contacts: enContacts,
  }
};

export type Lang = keyof typeof translations;

export function getI18N(lang: Lang) {
  return translations[lang] || translations.ro;
}
