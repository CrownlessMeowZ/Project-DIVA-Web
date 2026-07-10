import { useEffect, useMemo, useState } from "react";
import { useApp } from "../hooks/useApp";
import {
  GAMES,
  FILTER_TABS,
  VALID_FILTER_IDS,
  filterGames,
} from "../data/gameHistory";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const STORAGE_KEY = "gameHistory_activeFilter";

function readStoredFilter() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_FILTER_IDS.includes(stored)) return stored;
  } catch {
    // localStorage unavailable
  }
  return "all";
}

function tabLabelKey(tab) {
  if (tab.group === "all") return "gameHistory.tabs.all";
  return `gameHistory.tabs.${tab.key}`;
}

function GameCard({ game, placeholderLabel }) {
  const cover = game.coverImage ? (
    <img src={game.coverImage} alt={game.title} loading="lazy" />
  ) : (
    <span className="gh-card-cover-placeholder">{placeholderLabel}</span>
  );

  return (
    <article className="gh-card">
      <div className="gh-card-cover">
        {game.coverImage && game.coverHref ? (
          <a
            href={game.coverHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${game.title} — official reference`}
          >
            {cover}
          </a>
        ) : (
          cover
        )}
      </div>
      <div className="gh-card-body">
        <h3 className="gh-card-title">{game.title}</h3>
        <p className="gh-card-meta">
          {game.year} · {game.platform}
        </p>
        <span className="gh-card-series">{game.series}</span>
      </div>
    </article>
  );
}

export default function GameHistory() {
  const { t } = useApp();
  const [activeFilter, setActiveFilter] = useState(readStoredFilter);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, activeFilter);
    } catch {
      // storage unavailable
    }
  }, [activeFilter]);

  const filtered = useMemo(
    () => filterGames(GAMES, activeFilter),
    [activeFilter],
  );

  const platformTabs = FILTER_TABS.filter(
    (tab) => tab.group === "all" || tab.group === "platform",
  );
  const seriesTabs = FILTER_TABS.filter((tab) => tab.group === "series");

  function selectFilter(id) {
    setActiveFilter(id);
  }

  return (
    <div className="gh-page">
      <PageHero
        title={t("gameHistory.title")}
        sub={t("gameHistory.subtitle")}
      />

      <section
        className="gh-filter-section"
        aria-label={t("gameHistory.filterAria")}
      >
        <div className="gh-filter-group">
          <span className="gh-filter-group-label">
            {t("gameHistory.filterPlatform")}
          </span>
          <div className="gh-filter-tabs" role="tablist">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                className={`gh-filter-tab${activeFilter === tab.id ? " active" : ""}`}
                onClick={() => selectFilter(tab.id)}
              >
                {t(tabLabelKey(tab))}
              </button>
            ))}
          </div>
        </div>

        <div className="gh-filter-group">
          <span className="gh-filter-group-label">
            {t("gameHistory.filterSeries")}
          </span>
          <div className="gh-filter-tabs" role="tablist">
            {seriesTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                className={`gh-filter-tab${activeFilter === tab.id ? " active" : ""}`}
                onClick={() => selectFilter(tab.id)}
              >
                {t(tabLabelKey(tab))}
              </button>
            ))}
          </div>
        </div>

        <p className="gh-filter-meta">
          {t("gameHistory.resultCount", { count: filtered.length })}
        </p>
      </section>

      <main id="main">
        <div className="gh-card-grid">
          {filtered.length === 0 ? (
            <p className="gh-empty">{t("gameHistory.empty")}</p>
          ) : (
            filtered.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                placeholderLabel={t("gameHistory.coverPlaceholder")}
              />
            ))
          )}
        </div>
      </main>

      <Footer
        extra={
          <span style={{ color: "var(--muted)", fontSize: "12px" }}>
            {t("gameHistory.footerCredit")}
          </span>
        }
      />
    </div>
  );
}
