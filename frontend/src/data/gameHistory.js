/**
 * Mainline Project DIVA titles for the Game History page.
 * platformKeys / seriesKey are used internally for single-select tab filtering.
 */
export const GAMES = [
  {
    id: 1,
    title: 'Hatsune Miku: Project DIVA',
    platform: 'PSP',
    platformKeys: ['psp'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2009,
    coverImage: '/history/diva-psp.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_(video_game)',
  },
  {
    id: 2,
    title: 'Hatsune Miku: Project DIVA 2nd',
    platform: 'PSP',
    platformKeys: ['psp'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2010,
    coverImage: '/history/diva-2nd.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_2nd',
  },
  {
    id: 3,
    title: 'Project DIVA Arcade',
    platform: 'Arcade',
    platformKeys: ['arcade'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2011,
    coverImage: '/history/diva-arcade.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Arcade',
  },
  {
    id: 4,
    title: 'Project DIVA Extend',
    platform: 'PSP',
    platformKeys: ['psp'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2011,
    coverImage: '/history/diva-extend.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Extend',
  },
  {
    id: 5,
    title: 'Hatsune Miku: Project DIVA f',
    platform: 'PS Vita',
    platformKeys: ['ps-vita'],
    series: 'F',
    seriesKey: 'f',
    year: 2012,
    coverImage: '/history/diva-f-vita.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_f',
  },
  {
    id: 6,
    title: 'Hatsune Miku: Project DIVA F',
    platform: 'PS3',
    platformKeys: ['ps3'],
    series: 'F',
    seriesKey: 'f',
    year: 2013,
    coverImage: '/history/diva-f-ps3.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_F',
  },
  {
    id: 7,
    title: 'Hatsune Miku: Project DIVA f 2nd',
    platform: 'PS Vita · PS3',
    platformKeys: ['ps-vita', 'ps3'],
    series: 'F',
    seriesKey: 'f',
    year: 2014,
    coverImage: '/history/diva-f2nd.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_f_2nd',
  },
  {
    id: 8,
    title: 'Hatsune Miku: Project DIVA X',
    platform: 'PS Vita · PS4',
    platformKeys: ['ps-vita', 'ps4'],
    series: 'X',
    seriesKey: 'x',
    year: 2016,
    coverImage: '/history/diva-x.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_X',
  },
  {
    id: 9,
    title: 'Hatsune Miku: Project DIVA Future Tone',
    platform: 'PS4',
    platformKeys: ['ps4'],
    series: 'Future Tone',
    seriesKey: 'future-tone',
    year: 2017,
    coverImage: '/history/future-tone.jpg',
    coverHref: 'https://miku.sega.com/futuretone/',
  },
  {
    id: 10,
    title: 'Hatsune Miku: Project DIVA MegaMix',
    platform: 'Switch',
    platformKeys: ['switch'],
    series: 'Mega Mix',
    seriesKey: 'mega-mix',
    year: 2020,
    coverImage: '/history/megamix.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Mega_Mix',
  },
  {
    id: 11,
    title: 'Hatsune Miku: Project DIVA MegaMix+',
    platform: 'PC',
    platformKeys: ['pc'],
    series: 'Mega Mix',
    seriesKey: 'mega-mix',
    year: 2022,
    coverImage: '/history/megamix-plus.jpg',
    coverHref: 'https://miku.sega.com/megamixplus/',
  },
];

/** Single-select filter tab definitions (platform + series in one bar). */
export const FILTER_TABS = [
  { id: 'all', group: 'all' },
  { id: 'platform:psp', group: 'platform', key: 'psp' },
  { id: 'platform:arcade', group: 'platform', key: 'arcade' },
  { id: 'platform:ps-vita', group: 'platform', key: 'ps-vita' },
  { id: 'platform:ps3', group: 'platform', key: 'ps3' },
  { id: 'platform:ps4', group: 'platform', key: 'ps4' },
  { id: 'platform:switch', group: 'platform', key: 'switch' },
  { id: 'platform:pc', group: 'platform', key: 'pc' },
  { id: 'series:classic', group: 'series', key: 'classic' },
  { id: 'series:f', group: 'series', key: 'f' },
  { id: 'series:x', group: 'series', key: 'x' },
  { id: 'series:future-tone', group: 'series', key: 'future-tone' },
  { id: 'series:mega-mix', group: 'series', key: 'mega-mix' },
];

export const VALID_FILTER_IDS = FILTER_TABS.map((tab) => tab.id);

export function filterGames(games, activeFilter) {
  if (!activeFilter || activeFilter === 'all') return games;

  const [group, key] = activeFilter.split(':');
  if (group === 'platform') {
    return games.filter((g) => g.platformKeys?.includes(key));
  }
  if (group === 'series') {
    return games.filter((g) => g.seriesKey === key);
  }
  return games;
}