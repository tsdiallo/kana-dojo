'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns `true` only after the component has mounted on the client.
 * Use to gate UI that depends on persisted (localStorage) state to
 * avoid SSR/CSR hydration mismatches. Built on `useSyncExternalStore`
 * to keep the hook free of state-in-effect cascades.
 */
export const useIsMounted = () =>
  useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
