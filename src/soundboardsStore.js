import { writable } from "svelte/store";

export const soundboards = writable([
  {
    name: "Default",
    sounds: [
      { name: "Fart", soundFile: "sounds/fart.wav", key: "a" },
      { name: "Gay", soundFile: "sounds/gay.wav", key: "b" },
      { name: "Ok", soundFile: "sounds/ok.wav", key: "c" },
    ],
  },
  {
    name: "Second",
    sounds: [
      { name: "Second 1", soundFile: "sounds/fart.wav" },
      { name: "Second 2", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
      { name: "Other one very long", soundFile: "sounds/fart.wav" },
    ],
  },
]);
