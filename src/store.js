import { writable } from 'svelte/store';

export const sections = writable([
  { id: 1, title: 'Section 1', content: 'Content 1', icon: '/assets/blue_rune.png' },
  { id: 2, title: 'Section 2', content: 'Content 2', icon: '/assets/green_rune.png' },
  { id: 3, title: 'Section 3', content: 'Content 3', icon: '/assets/red_rune.png' },
  { id: 4, title: 'Section 4', content: 'Content 4', icon: '/assets/yellow_rune.png' },
]);

export const selectedSection = writable(null);
