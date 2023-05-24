import { writable } from 'svelte/store';

export const sections = writable([
  { id: 1, title: 'B', content: 'Content 1', icon: '/assets/bluerune.png' },
  { id: 2, title: 'G', content: 'Content 2', icon: '/assets/greenrune.png' },
  { id: 3, title: 'R', content: 'Content 3', icon: '/assets/redrune.png' },
  { id: 4, title: 'Y', content: 'Content 4', icon: '/assets/yellowrune.png' },
]);

export const selectedSection = writable(null);
