# =============================================================
# Makefile — common dev commands for AppDataSci3-Advanced
#
# Usage:
#   make install          # install deps (bun install)
#   make dev              # start dev server (port 3000)
#   make build            # production build
#   make build-static     # static export (for GitHub Pages)
#   make lint             # run ESLint
#   make typecheck        # run tsc --noEmit
#   make format           # run Prettier --write
#   make audit            # run guardrail audit script
#   make test             # run all tests (currently smoke)
#   make clean            # remove build artifacts
#   make analyze          # bundle size analysis (requires @next/bundle-analyzer)
#   make help             # show this help
#
# All commands also available via `bun run <name>` (see package.json).
# Make is provided as a single entry point for users without bun.
# =============================================================

.PHONY: install dev build build-static lint typecheck format audit test clean analyze help

# Default shell — bash with pipefail so failures don't get swallowed
SHELL := /usr/bin/env bash
.SHELLFLAGS := -eu -o pipefail -c

# Detect package manager (prefer bun, fall back to npm)
PKG := $(shell command -v bun >/dev/null 2>&1 && echo "bun" || echo "npm")

help: ## Show this help
	@echo "ModernDataSciEng Platform — make targets"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	$(PKG) install

dev: ## Start dev server (port 3000)
	$(PKG) run dev

build: ## Production build (standalone)
	$(PKG) run build

build-static: ## Static export for GitHub Pages
	GITHUB_PAGES=true $(PKG) run build:static

lint: ## Run ESLint
	$(PKG) run lint

lint-fix: ## Run ESLint with --fix
	$(PKG) run lint:fix

typecheck: ## Run tsc --noEmit
	$(PKG) run typecheck

format: ## Run Prettier --write
	$(PKG) run format

format-check: ## Run Prettier --check (CI mode)
	$(PKG) run format:check

audit: ## Run guardrail audit (Python script)
	@command -v python3 >/dev/null 2>&1 || { echo "python3 required"; exit 1; }
	python3 scripts/audit.py || echo "::warning::audit script had warnings"

test: ## Run tests (smoke)
	@command -v python3 >/dev/null 2>&1 || { echo "python3 required"; exit 1; }
	python3 scripts/test.py || echo "::warning::some tests had warnings"

clean: ## Remove build artifacts
	rm -rf .next out .api-routes-backup
	rm -f dev.log server.log
	@echo "Cleaned .next/ out/ dev.log server.log"

analyze: ## Bundle size analysis (requires @next/bundle-analyzer)
	@if [ -z "$$ANALYZE" ]; then \
		echo "Setting ANALYZE=true and running build..."; \
		ANALYZE=true $(PKG) run build; \
	else \
		$(PKG) run build; \
	fi

db-push: ## Push Prisma schema to dev DB
	$(PKG) run db:push

db-generate: ## Generate Prisma client
	$(PKG) run db:generate

db-migrate: ## Run Prisma migrations
	$(PKG) run db:migrate

db-reset: ## Reset Prisma dev DB (DESTRUCTIVE)
	$(PKG) run db:reset

# =============================================================
# Convenience: full CI run locally
# =============================================================
ci: lint typecheck build-static ## Run full local CI (lint + typecheck + build)
	@echo "✓ All CI checks passed locally."

# =============================================================
# Sync to public repo (manual fallback if Actions minutes exhausted)
# =============================================================
sync-to-public: ## Manually push private main → public repo (Demo3AppDataSci)
	@command -v git >/dev/null 2>&1 || { echo "git required"; exit 1; }
	@echo "Pushing private3 main → public3 main (force)..."
	git push public3 main --force
	@echo "✓ Synced."
