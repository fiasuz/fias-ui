'use client';

import * as React from 'react';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <ToggleGroup type="single" className="border">
      <ToggleGroupItem
        value="system"
        className="border-r"
        aria-label="Toggle system"
        onClick={() => setTheme('system')}
      >
        <Laptop className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        onClick={() => setTheme('light')}
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        className="border-l"
        aria-label="Toggle dark"
        onClick={() => setTheme('dark')}
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <span className="sr-only">Toggle theme</span>
    </ToggleGroup>
  );
}
