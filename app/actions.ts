'use server';

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

export async function fetchGitHubContributions(username: string) {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        throw new Error('GITHUB_TOKEN is not defined');
    }

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: `
          query($userName: String!) {
            user(login: $userName) {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
                variables: { userName: username },
            }),
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('GitHub API Error:', response.status, errorText);
            throw new Error(`Failed to fetch GitHub contributions: ${response.status} ${response.statusText}`);
        }

        const data: GitHubResponse = await response.json();

        if (!data.data?.user) {
            console.error('GitHub API Data Error:', JSON.stringify(data));
            throw new Error('Invalid response structure from GitHub API');
        }

        return data.data.user.contributionsCollection.contributionCalendar.weeks;
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        throw error;
    }
}
