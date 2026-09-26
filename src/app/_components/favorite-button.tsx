"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { PageId } from "../_lib/router";

const FAV_STORAGE_KEY = "favorite-pages-v1";
const FAVORITES_MAX = 100;

/**
 * FavoriteButton — star/unstar the current page.
 *
 * State persists to localStorage["favorite-pages-v1"] (Array<PageId>).
 * Renders a small icon button in the page header.
 *
 * Hydration-safe: reads localStorage on mount (after first paint),
 * not during SSR. The first render shows an unstarred button; if the
 * page is favorited, the icon fills after mount.
 */
export function FavoriteButton({ pageId }: { pageId: PageId }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      const list: PageId[] = raw ? JSON.parse(raw) : [];
      setIsFav(list.includes(pageId));
    } catch {
      /* best-effort */
    }
  }, [pageId]);

  const toggle = useCallback(() => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      const list: PageId[] = raw ? JSON.parse(raw) : [];
      const next = list.includes(pageId)
        ? list.filter((x) => x !== pageId)
        : [pageId, ...list].slice(0, FAVORITES_MAX);
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(next));
      setIsFav(next.includes(pageId));
    } catch {
      /* quota or privacy mode — skip */
    }
  }, [pageId]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFav}
      className="h-9 w-9 rounded-md border border-border/60"
      title={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Star
        className={`h-4 w-4 ${isFav ? "text-yellow-500 fill-yellow-500/50" : "text-muted-foreground"}`}
      />
    </Button>
  );
}
