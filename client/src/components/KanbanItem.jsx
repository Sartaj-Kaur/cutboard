import { forwardRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Clock, Play, GripVertical, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const STATUS_BADGE = {
  active: { label: 'Active',   cls: 'bg-black/10 text-black/70 border-black/20' },
  review: { label: 'Review',   cls: 'bg-black/10 text-black/70 border-black/20' },
  done:   { label: 'Done',     cls: 'bg-black/10 text-black/70 border-black/20' },
};

const STICKER_COLORS = [
  '#F28E2B', // Orange
  '#F7B267', // Apricot
  '#EDC948', // Yellow
  '#B0D05C', // Lime
  '#59A14F', // Green
  '#8CD17D', // Olive
  '#76B7B2', // Cyan
  '#4D9CA6', // Teal
  '#4E79A7', // Blue
  '#B07AA1', // Purple
  '#D090D1', // Violet
  '#FF9DA7', // Pink
  '#E15759', // Rose
];

const getStickerColor = (id) => {
  if (!id) return STICKER_COLORS[0];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return STICKER_COLORS[Math.abs(hash) % STICKER_COLORS.length];
};

const getRotation = (id) => {
  if (!id) return 0;
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (Math.abs(hash) % 7) - 3; // -3 to 3 degrees
};

// Fun die-cut shapes
const BORDER_RADII = [
  '8px 16px 12px 24px / 24px 12px 16px 8px',
  '16px 8px 24px 12px / 12px 24px 8px 16px',
  '20px 15px 10px 25px / 22px 18px 25px 12px',
  '12px 24px 16px 8px / 16px 8px 24px 12px'
];

const getBorderRadius = (id) => {
  if (!id) return BORDER_RADII[0];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return BORDER_RADII[Math.abs(hash) % BORDER_RADII.length];
};

export const KanbanItem = forwardRef(
  ({ id, title, duration, comments, version, thumbnail, columnId, isDragging, ...props }, ref) => {
    const badge = STATUS_BADGE[columnId] || STATUS_BADGE['active'];
    const color = getStickerColor(id);
    const rotation = getRotation(id);
    const borderRadius = getBorderRadius(id);

    return (
      <div
        ref={ref}
        {...props}
        style={{
          backgroundColor: color,
          transform: `rotate(${isDragging ? 0 : rotation}deg)`,
          borderRadius: borderRadius,
        }}
        className={`group relative shadow-[3px_5px_15px_rgba(0,0,0,0.25)] cursor-default select-none
          border-4 border-white
          ${isDragging ? 'shadow-2xl z-50 scale-105' : ''}
          transition-all duration-300 w-full mt-2 mb-2
        `}
      >
        {/* Pushpin at the top center */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E15759] shadow-[0_4px_6px_rgba(0,0,0,0.5)] border border-[#c43e3f] z-20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 absolute top-0.5 left-0.5" />
          <div className="w-[1px] h-3.5 bg-gray-500 absolute -bottom-2.5 -z-10 shadow-sm" />
        </div>

        {/* Thumbnail area (like a polaroid photo stuck on the post-it) */}
        <div className="relative w-[calc(100%-16px)] mx-auto mt-4 h-[110px] bg-black/5 overflow-hidden rounded bg-white shadow-inner">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Play
                size={22}
                className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
                strokeWidth={1.5}
              />
            </div>
          )}
          {/* Status Badge */}
          <div className="absolute top-1.5 left-1.5 flex gap-1">
            <span className={`inline-flex items-center gap-1 text-[9px] font-bold font-mono px-1.5 py-0.5 rounded border select-none ${badge.cls} backdrop-blur-sm bg-white/80`}>
              {badge.label}
            </span>
          </div>

          {/* Time & Version */}
          {duration && (
            <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-mono text-white backdrop-blur-sm">
              <Clock size={8} />
              {duration}
            </div>
          )}
          <div className="absolute bottom-1.5 left-1.5 text-[9px] font-bold font-mono text-black bg-white/80 px-1 py-0.5 rounded">
            v{version}
          </div>
        </div>

        {/* Body (Sticker note handwritten feel text) */}
        <div className="px-3 py-3 flex items-start justify-between gap-2">
          <h4 className="text-[14px] font-semibold text-black leading-snug break-words line-clamp-2">
            {title}
          </h4>
          <Link
            to={`/app/videos/${id}`}
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 text-black/40 hover:text-black transition-colors duration-150 mt-0.5"
          >
            <ExternalLink size={14} strokeWidth={2} />
          </Link>
        </div>

        {/* Drag handle strip */}
        <div className="absolute top-0 right-0 h-full w-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-grab active:cursor-grabbing">
          <GripVertical size={13} className="text-black/30" />
        </div>
        
        {/* Subtle curled edge effect */}
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-black/10 to-transparent rounded-bl-xl pointer-events-none" />
      </div>
    );
  }
);

KanbanItem.displayName = 'KanbanItem';

export const SortableItem = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id, data: { ...props } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : 'auto',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <KanbanItem {...props} isDragging={isDragging} />
    </div>
  );
};
