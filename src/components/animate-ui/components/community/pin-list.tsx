'use client';

import * as React from 'react';
import { Pin, X, Plus, Minus } from 'lucide-react';
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';
import { cn } from '@/lib/utils';

type PinListItem = {
  id: number;
  name: string;
  info: string;
  icon: React.ElementType;
  pinned: boolean;
};

type PinListProps = {
  items: PinListItem[];
  labels?: {
    pinned?: string;
    unpinned?: string;
  };
  transition?: Transition;
  labelMotionProps?: HTMLMotionProps<'p'>;
  className?: string;
  labelClassName?: string;
  pinnedSectionClassName?: string;
  unpinnedSectionClassName?: string;
  zIndexResetDelay?: number;
  showExpandButton?: boolean;
  expandButtonLabel?: string;
} & HTMLMotionProps<'div'>;

function PinList({
  items,
  labels = { pinned: 'Pinned Items', unpinned: 'All Items' },
  transition = { stiffness: 320, damping: 20, mass: 0.8, type: 'spring' },
  labelMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.22, ease: 'easeInOut' },
  },
  className,
  labelClassName,
  pinnedSectionClassName,
  unpinnedSectionClassName,
  zIndexResetDelay = 500,
  showExpandButton = false,
  expandButtonLabel = 'Show All Skills',
  ...props
}: PinListProps) {
  const [listItems, setListItems] = React.useState(items);
  const [togglingGroup, setTogglingGroup] = React.useState<
    'pinned' | 'unpinned' | null
  >(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const pinned = listItems.filter((u) => u.pinned);
  const unpinned = listItems.filter((u) => !u.pinned);

  // Show all items when expanded, otherwise show only pinned
  const displayPinned = isExpanded ? listItems : pinned;
  const displayUnpinned = isExpanded ? [] : unpinned;

  const toggleStatus = (id: number) => {
    const item = listItems.find((u) => u.id === id);
    if (!item) return;

    setTogglingGroup(item.pinned ? 'pinned' : 'unpinned');
    setListItems((prev) => {
      const idx = prev.findIndex((u) => u.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      const [currentItem] = updated.splice(idx, 1);
      if (!currentItem) return prev;
      const toggledItem = { ...currentItem, pinned: !currentItem.pinned };
      if (toggledItem.pinned) updated.push(toggledItem);
      else updated.unshift(toggledItem);
      return updated;
    });
    setTimeout(() => setTogglingGroup(null), zIndexResetDelay);
  };

  const glassItemClasses =
    'flex items-center justify-between gap-5 rounded-2xl outline-1 bg-white/20 backdrop-blur-md border border-white/30 p-2 group';

  const iconWrapperClasses = 'rounded-lg bg-transparent p-2';

  const pinButtonClasses =
    'flex items-center justify-center size-8 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250';

  return (
    <motion.div className={cn('space-y-6', className)} {...props}>
      <LayoutGroup>
        {/* Expand/Collapse Button */}
        {showExpandButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              'w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300',
              isExpanded
                ? 'bg-primary/10 border border-primary/30'
                : 'bg-white/10 border border-white/20 hover:bg-white/20'
            )}
          >
            <span className={cn(
              'font-medium text-sm',
              isExpanded ? 'text-primary' : 'text-foreground/80'
            )}>
              {isExpanded ? 'Show Less' : expandButtonLabel}
            </span>
            {isExpanded ? (
              <Minus className="size-4 text-primary" />
            ) : (
              <Plus className="size-4 text-foreground/70" />
            )}
          </button>
        )}

        {/* Pinned Section */}
        {displayPinned.length > 0 && (
          <div
            className={cn(
              'space-y-3 relative',
              togglingGroup === 'pinned' ? 'z-5' : 'z-10',
              pinnedSectionClassName
            )}
          >
            <AnimatePresence mode="wait">
              <motion.p
                layout
                key="pinned-label"
                className={cn(
                  'font-medium px-3 text-neutral-500 text-sm mb-2',
                  labelClassName
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {labels.pinned}
              </motion.p>
            </AnimatePresence>
            {displayPinned.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`item-${item.id}`}
                onClick={() => !isExpanded && toggleStatus(item.id)}
                transition={transition}
                className={cn(
                  glassItemClasses,
                  isExpanded && 'cursor-default'
                )}
              >
                <div className="flex items-center gap-2">
                  <div className={iconWrapperClasses}>
                    <item.icon className="size-5 text-foreground/70" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{item.name}</div>
                    <div className="text-xs font-medium text-foreground/70">
                      {item.info}
                    </div>
                  </div>
                </div>
                {!isExpanded && (
                  <div className="flex items-center justify-center size-8 rounded-full bg-white/30">
                    <Pin className="size-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Unpinned Section */}
        <AnimatePresence>
          {displayUnpinned.length > 0 && (
            <>
              <motion.p
                layout
                key="all-label"
                className={cn(
                  'font-medium px-3 text-neutral-500 text-sm mb-2',
                  labelClassName
                )}
                {...labelMotionProps}
              >
                {labels.unpinned}
              </motion.p>
              <div
                className={cn(
                  'space-y-3 relative',
                  togglingGroup === 'unpinned' ? 'z-5' : 'z-10',
                  unpinnedSectionClassName
                )}
              >
                {displayUnpinned.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    onClick={() => toggleStatus(item.id)}
                    transition={transition}
                    className={glassItemClasses}
                  >
                    <div className="flex items-center gap-2">
                      <div className={iconWrapperClasses}>
                        <item.icon className="size-5 text-foreground/70" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold">{item.name}</div>
                        <div className="text-xs font-medium text-foreground/70">
                          {item.info}
                        </div>
                      </div>
                    </div>
                    <div className={pinButtonClasses}>
                      <Pin className="size-4 text-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}

export { PinList, type PinListProps, type PinListItem };

