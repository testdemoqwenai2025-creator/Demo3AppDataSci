"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { hrefFor, pageById, type PageId } from "../_lib/router";
import { THOUGHT_COUNTS } from "../_lib/thought-counts";
import { PAGE_DATES } from "../_lib/page-dates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "../_components/icon";
import { Star, Trash2 } from "lucide-react";

const FAV_STORAGE_KEY = "favorite-pages-v1";

export function FavoritesPage() {
  const [favorites, setFavorites] = useState<PageId[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      /* best-effort */
    }
  }, []);

  const removeFavorite = useCallback((id: PageId) => {
    setFavorites((prev) => {
      const next = prev.filter((x) => x !== id);
      try {
        localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* best-effort */
      }
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setFavorites([]);
    try {
      localStorage.removeItem(FAV_STORAGE_KEY);
    } catch {
      /* best-effort */
    }
  }, []);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Platform tools · your starred pages"
        title="Favorites"
        description="Pages you've starred (via the star button on any PageHeader). Stored locally in your browser — survives session restarts. Useful for keeping your top-5 reference pages one click away."
        right={
          favorites.length > 0 ? (
            <Button variant="outline" size="sm" onClick={clearAll} className="gap-1.5">
              <Trash2 className="h-3.5 w-3.5" />
              Clear all
            </Button>
          ) : null
        }
      />

      <SectionCard
        title="Your starred pages"
        description={`${favorites.length} ${favorites.length === 1 ? "page" : "pages"} starred`}
        icon={<Star className="h-5 w-5" />}
      >
        {favorites.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Star className="h-10 w-10 mx-auto mb-3 opacity-50" />
            <p className="text-sm font-medium">No favorites yet</p>
            <p className="text-xs mt-1">
              Visit any page and click the star button (top-right, next to the
              theme toggle) to add it here.
            </p>
            <Button asChild size="sm" className="mt-4">
              <Link href={hrefFor("home")}>Browse pages →</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-3">
            {favorites.map((id) => {
              const page = pageById(id);
              return (
                <div
                  key={id}
                  className="group flex items-start gap-3 rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Link href={hrefFor(id)} className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted/40 border border-border/60">
                      <Icon name={page.icon} className="h-4 w-4 text-primary/80" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{page.shortLabel}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{page.group}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{page.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {THOUGHT_COUNTS[id] && (
                          <Badge variant="outline" className="text-[10px]">{THOUGHT_COUNTS[id]} thoughts</Badge>
                        )}
                        {PAGE_DATES[id] && (
                          <Badge variant="outline" className="text-[10px] font-mono">{PAGE_DATES[id]}</Badge>
                        )}
                      </div>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFavorite(id)}
                    aria-label="Remove from favorites"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>

      <NextSteps relatedPages={[
        { id: "recent", reason: "Recently visited pages — your navigation history" },
        { id: "constellation", reason: "Interactive graph of all topics" },
        { id: "home", reason: "Return to the platform overview" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("recent")} className="text-sm text-primary hover:underline">
          → Recently visited
        </Link>
      </div>
    </div>
  );
}
