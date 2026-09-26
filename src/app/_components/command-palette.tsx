"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { PAGES, hrefFor, type PageId } from "../_lib/router";
import { Icon } from "./icon";
import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";

/**
 * CommandPalette — global Cmd+K / Ctrl+K search.
 *
 * Mounts once in AppShell. Listens for Cmd+K (Mac) or Ctrl+K (others).
 * Opens a CommandDialog (built on cmdk + Radix Dialog).
 *
 * Searches across:
 *   - All platform pages (label + description + group)
 *   - Favorites (starred pages — quick access at the top)
 *
 * Selecting any item navigates to the corresponding page via Next router.
 */

const FAV_STORAGE_KEY = "favorite-pages-v1";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [favorites, setFavorites] = useState<PageId[]>([]);
  const router = useRouter();

  // Load favorites on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      /* best-effort */
    }
  }, []);

  // Global keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      // Also support "/" as a shortcut (Gmail/GitHub convention) — but only
      // when not already focused in an input.
      if (e.key === "/" && !isTypingTarget(e.target)) {
        e.preventDefault();
        setOpen(true);
      }
      // Esc closes (handled by cmdk, but defensive)
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const navigate = (id: PageId) => {
    setOpen(false);
    router.push(hrefFor(id));
  };

  // Group pages by their topic group, in declaration order
  const groups: Record<string, typeof PAGES> = {};
  for (const p of PAGES) {
    if (p.id === "home") continue;
    if (!groups[p.group]) groups[p.group] = [];
    groups[p.group].push(p);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border/60 bg-muted/40 hover:bg-muted text-xs text-muted-foreground transition-colors"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search…</span>
        <kbd className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-background/60 border border-border/40">⌘K</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, topics, equations…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {favorites.length > 0 && (
            <>
              <CommandGroup heading="Starred (favorites)">
                {favorites.slice(0, 5).map((id) => {
                  const page = PAGES.find((p) => p.id === id);
                  if (!page) return null;
                  return (
                    <CommandItem
                      key={`fav-${id}`}
                      value={`fav ${page.shortLabel} ${page.label} ${page.description}`}
                      onSelect={() => navigate(id)}
                    >
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/30" />
                      <span className="font-medium">{page.shortLabel}</span>
                      <span className="text-xs text-muted-foreground ml-1 truncate">{page.description}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          {Object.entries(groups).map(([group, pages]) => (
            <CommandGroup key={group} heading={group}>
              {pages.map((page) => (
                <CommandItem
                  key={page.id}
                  value={`${page.shortLabel} ${page.label} ${page.description} ${page.group}`}
                  onSelect={() => navigate(page.id)}
                >
                  <Icon name={page.icon} className="h-4 w-4 text-primary/70" />
                  <span className="font-medium">{page.shortLabel}</span>
                  <span className="text-xs text-muted-foreground ml-1 truncate">{page.description}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || el.isContentEditable;
}
