export type ThemeName = 'root' | 'prism' | 'star' | 'neon';

export interface Theme {
  name: ThemeName;
  displayName: string;
  variables: Record<string, string>;
}

export const themes: Record<ThemeName, Theme> = {
  root: {
    name: 'root',
    displayName: 'Root',
    variables: {
      '--background': 'oklch(0.141 0.005 285.823)',
      '--foreground': 'oklch(0.985 0 0)',
      '--card': 'oklch(0.21 0.006 285.885)',
      '--card-foreground': 'oklch(0.985 0 0)',
      '--popover': 'oklch(0.21 0.006 285.885)',
      '--popover-foreground': 'oklch(0.985 0 0)',
      '--primary': 'oklch(0.705 0.213 47.604)',
      '--primary-foreground': 'oklch(0.98 0.016 73.684)',
      '--secondary': 'oklch(0.274 0.006 286.033)',
      '--secondary-foreground': 'oklch(0.985 0 0)',
      '--muted': 'oklch(0.274 0.006 286.033)',
      '--muted-foreground': 'oklch(0.705 0.015 286.067)',
      '--accent': 'oklch(0.1 0.005 285.823)',
      '--accent-foreground': 'oklch(0.98 0.016 73.684)',
      '--destructive': 'oklch(0.704 0.191 22.216)',
      '--border': 'oklch(1 0 0 / 10%)',
      '--input': 'oklch(1 0 0 / 15%)',
      '--ring': 'oklch(0.552 0.016 285.938)',
      '--chart-1': 'oklch(0.837 0.128 66.29)',
      '--chart-2': 'oklch(0.705 0.213 47.604)',
      '--chart-3': 'oklch(0.646 0.222 41.116)',
      '--chart-4': 'oklch(0.553 0.195 38.402)',
      '--chart-5': 'oklch(0.47 0.157 37.304)',
    },
  },
  prism: {
    name: 'prism',
    displayName: 'Prism',
    variables: {
      '--background': 'oklch(0.1 0.02 280)',
      '--foreground': 'oklch(0.98 0.02 280)',
      '--card': 'oklch(0.15 0.03 280)',
      '--card-foreground': 'oklch(0.98 0.02 280)',
      '--popover': 'oklch(0.15 0.03 280)',
      '--popover-foreground': 'oklch(0.98 0.02 280)',
      '--primary': 'oklch(0.8 0.25 300)',
      '--primary-foreground': 'oklch(0.1 0.02 280)',
      '--secondary': 'oklch(0.3 0.15 200)',
      '--secondary-foreground': 'oklch(0.98 0.02 280)',
      '--muted': 'oklch(0.2 0.08 280)',
      '--muted-foreground': 'oklch(0.7 0.05 280)',
      '--accent': 'oklch(0.08 0.015 280)',
      '--accent-foreground': 'oklch(0.1 0.02 280)',
      '--destructive': 'oklch(0.7 0.15 20)',
      '--border': 'oklch(0.3 0.1 280 / 30%)',
      '--input': 'oklch(0.2 0.08 280 / 20%)',
      '--ring': 'oklch(0.7 0.2 300)',
      '--chart-1': 'oklch(0.8 0.25 300)',
      '--chart-2': 'oklch(0.75 0.2 120)',
      '--chart-3': 'oklch(0.7 0.18 60)',
      '--chart-4': 'oklch(0.65 0.22 240)',
      '--chart-5': 'oklch(0.6 0.19 0)',
    },
  },
  star: {
    name: 'star',
    displayName: 'Star',
    variables: {
      '--background': 'oklch(0.05 0.01 240)',
      '--foreground': 'oklch(0.95 0.02 240)',
      '--card': 'oklch(0.08 0.015 240)',
      '--card-foreground': 'oklch(0.95 0.02 240)',
      '--popover': 'oklch(0.08 0.015 240)',
      '--popover-foreground': 'oklch(0.95 0.02 240)',
      '--primary': 'oklch(0.6 0.15 240)',
      '--primary-foreground': 'oklch(0.05 0.01 240)',
      '--secondary': 'oklch(0.15 0.02 240)',
      '--secondary-foreground': 'oklch(0.95 0.02 240)',
      '--muted': 'oklch(0.12 0.018 240)',
      '--muted-foreground': 'oklch(0.6 0.03 240)',
      '--accent': 'oklch(0.04 0.008 240)',
      '--accent-foreground': 'oklch(0.05 0.01 240)',
      '--destructive': 'oklch(0.65 0.12 20)',
      '--border': 'oklch(0.2 0.03 240 / 20%)',
      '--input': 'oklch(0.15 0.025 240 / 15%)',
      '--ring': 'oklch(0.5 0.12 240)',
      '--chart-1': 'oklch(0.7 0.18 200)',
      '--chart-2': 'oklch(0.6 0.15 240)',
      '--chart-3': 'oklch(0.55 0.12 180)',
      '--chart-4': 'oklch(0.5 0.1 260)',
      '--chart-5': 'oklch(0.45 0.08 220)',
    },
  },
  neon: {
    name: 'neon',
    displayName: 'Neon',
    variables: {
      '--background': 'oklch(0.05 0.02 160)',
      '--foreground': 'oklch(0.95 0.05 160)',
      '--card': 'oklch(0.08 0.03 160)',
      '--card-foreground': 'oklch(0.95 0.05 160)',
      '--popover': 'oklch(0.08 0.03 160)',
      '--popover-foreground': 'oklch(0.95 0.05 160)',
      '--primary': 'oklch(0.9 0.3 160)',
      '--primary-foreground': 'oklch(0.05 0.02 160)',
      '--secondary': 'oklch(0.2 0.1 320)',
      '--secondary-foreground': 'oklch(0.95 0.05 160)',
      '--muted': 'oklch(0.12 0.04 160)',
      '--muted-foreground': 'oklch(0.7 0.08 160)',
      '--accent': 'oklch(0.03 0.01 160)',
      '--accent-foreground': 'oklch(0.05 0.02 160)',
      '--destructive': 'oklch(0.8 0.2 20)',
      '--border': 'oklch(0.3 0.08 160 / 40%)',
      '--input': 'oklch(0.15 0.06 160 / 25%)',
      '--ring': 'oklch(0.8 0.25 160)',
      '--chart-1': 'oklch(0.9 0.3 160)',
      '--chart-2': 'oklch(0.85 0.25 300)',
      '--chart-3': 'oklch(0.8 0.22 60)',
      '--chart-4': 'oklch(0.75 0.28 240)',
      '--chart-5': 'oklch(0.7 0.2 0)',
    },
  },
};

export function getRandomTheme(currentTheme?: ThemeName): ThemeName {
  const themeNames = Object.keys(themes) as ThemeName[];
  
  if (currentTheme && themeNames.length > 1) {
    const availableThemes = themeNames.filter(name => name !== currentTheme);
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    return availableThemes[randomIndex];
  }
  
  const randomIndex = Math.floor(Math.random() * themeNames.length);
  return themeNames[randomIndex];
}

