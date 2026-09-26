"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { PAGES, pageById, type PageId } from "../_lib/router";

/**
 * useRecentPages — track the user's navigation history in localStorage.
 *
 * Every time the route changes, the new page is unshifted onto the list
 * (deduped). The list is capped at RECENT_PAGES_MAX entries.
 *
 * Format: Array<{ id: PageId; ts: number }>
 */

const STORAGE_KEY = "recent-pages-v1";
export const RECENT_PAGES_MAX = 30;

export interface RecentEntry {
  id: PageId;
  ts: number;  // epoch milliseconds
}

export function useRecentPages() {
  const [recent, setRecent] = useState<RecentEntry[]>([]);
  const pathname = usePathname();

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {
      /* best-effort */
    }
  }, []);

  // Append new entry on pathname change
  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;

    // Map pathname -> PageId
    const cleaned = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
    if (!cleaned) return;  // skip home — no point tracking
    const match = PAGES.find((p) => p.id === cleaned);
    if (!match) return;

    const entry: RecentEntry = { id: match.id, ts: Date.now() };
    setRecent((prev) => {
      // Dedupe by id — move existing entry to front
      const filtered = prev.filter((e) => e.id !== entry.id);
      const next = [entry, ...filtered].slice(0, RECENT_PAGES_MAX);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* quota or privacy mode — skip */
      }
      return next;
    });
  }, [pathname]);

  const clear = useCallback(() => {
    setRecent([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* best-effort */
    }
  }, []);

  return { recent, clear };
}

/**
 * useFavorites — track the user's starred pages in localStorage.
 * Independent of routing — toggled by a button on each page.
 */

const FAV_STORAGE_KEY = "favorite-pages-v1";
export const FAVORITES_MAX = 100;

export function useFavorites() {
  const [favorites, setFavorites] = useState<PageId[]>([]);

  // Load on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      /* best-effort */
    }
  }, []);

  const toggle = useCallback((id: PageId) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [id, ...prev].slice(0, FAVORITES_MAX);
      try {
        localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* quota or privacy mode — skip */
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback((id: PageId) => favorites.includes(id), [favorites]);

  return { favorites, toggle, isFavorite };
}
