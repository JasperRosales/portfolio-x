# TypeScript Build Errors Fix

## Todo List

- [x] Fix dock.tsx - remove unused `height` variable
- [x] Fix combobox.tsx - change `size="icon-xs"` to valid size (2 occurrences)
- [x] Fix projects.tsx - remove unused imports
- [x] Fix home.tsx - remove unused `i` variable
- [ ] Run build to verify fixes

## Errors to Fix

1. **dock.tsx(156,9)**: TS6133 - 'height' is declared but never read
2. **combobox.tsx(246,43)**: TS2322 - 'icon-xs' not assignable to size type
3. **projects.tsx(1,1)**: TS6192 - All imports in VSC icons declaration are unused
4. **projects.tsx(2,1)**: TS6133 - 'ReactNode' is declared but never read
5. **home.tsx(43,29)**: TS6133 - 'i' is declared but never read

