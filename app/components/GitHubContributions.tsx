'use client';

import { useEffect, useState } from "react";
import { fetchGitHubContributions } from "../actions";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Week[];
        };
      };
    };
  };
}

export default function GitHubContributions() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const allWeeks = await fetchGitHubContributions("kazedevs");
        setWeeks(allWeeks.slice(-20));
      } catch (err) {
        setError("Failed to load contributions");
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, []);

  const getColor = (count: number): string => {
    if (count === 0) return "var(--pattern-fg)";
    const intensity = Math.min(Math.ceil(count / 2), 4);
    return `hsl(142, 76%, ${90 - intensity * 20}%)`;
  };

  if (loading) return <div className="py-4 text-sm text-foreground/60">Loading...</div>;
  if (error) return <div className="py-4 text-sm text-red-400">{error}</div>;

  return (
    <div className="mt-8">
      <div className="text-sm text-foreground/60 mb-3">GitHub Activity</div>

      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {weeks.flatMap((week, weekIndex) =>
          week.contributionDays.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: getColor(day.contributionCount) }}
              title={`${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString()}`}
            />
          ))
        )}
      </div>

      <div className="flex items-center justify-end mt-2 text-xs text-foreground/60">
        <span className="mr-2">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="w-3 h-3 mx-0.5 rounded-sm"
            style={{ backgroundColor: getColor(level * 2) }}
          />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}