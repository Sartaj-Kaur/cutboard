import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './KanbanItem';
import { motion, AnimatePresence } from 'framer-motion';

const COLUMN_META = {
  todo: {
    label: 'To Do',
    bg: 'bg-[#ffdceb]', // Light pink note
    headerBorder: 'border-black/10',
    text: 'text-black',
    count: 'text-black bg-black/10 border-black/20',
  },
  active: {
    label: 'In Progress',
    bg: 'bg-[#ffed99]', // Light yellow note
    headerBorder: 'border-black/10',
    text: 'text-black',
    count: 'text-black bg-black/10 border-black/20',
  },
  review: {
    label: 'In Review',
    bg: 'bg-[#bcebfa]', // Light blue note
    headerBorder: 'border-black/10',
    text: 'text-black',
    count: 'text-black bg-black/10 border-black/20',
  },
  done: {
    label: 'Complete',
    bg: 'bg-[#d8f0d1]', // Light green note
    headerBorder: 'border-black/10',
    text: 'text-black',
    count: 'text-black bg-black/10 border-black/20',
  },
};

export const KanbanColumn = ({ id, title, items }) => {
  const { setNodeRef, isOver } = useDroppable({ id });
  const meta = COLUMN_META[id] || {
    label: title,
    bg: 'bg-[#e5e5e5]',
    headerBorder: 'border-black/10',
    text: 'text-black',
    count: 'text-black bg-black/10 border-black/20',
  };

  return (
    <div
      className={`relative flex flex-col flex-1 min-w-[260px] max-w-[340px] rounded-3xl transition-all duration-300 shadow-[4px_6px_20px_rgba(0,0,0,0.3)]
        ${meta.bg} ${isOver ? 'scale-[1.02] shadow-2xl z-20' : ''}
      `}
      style={{ height: 'calc(100vh - 320px)' }}
    >
      {/* Tape at the top center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 shadow-sm backdrop-blur-md -rotate-2 z-10 border border-white/20" />

      {/* Column header */}
      <div className={`px-5 py-4 border-b flex items-center justify-between ${meta.headerBorder}`}>
        <div className="flex items-center gap-2">
          <h3 className={`text-[16px] font-black uppercase tracking-widest ${meta.text}`}>
            {meta.label}
          </h3>
        </div>
        <span className={`px-2 py-0.5 rounded border text-[12px] font-mono font-bold ${meta.count}`}>
          {items.length}
        </span>
      </div>

      {/* Droppable list */}
      <div
        ref={setNodeRef}
        className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-3 min-h-[100px]"
      >
        <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
          <AnimatePresence initial={false}>
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
              >
                <SortableItem {...item} columnId={id} />
              </motion.div>
            ))}
          </AnimatePresence>
        </SortableContext>

        {/* Empty state */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center py-12 text-center"
          >
            <div className={`w-12 h-12 rounded-full border-2 border-dashed border-black/20 flex items-center justify-center mb-4 bg-black/5`}>
              <span className="text-black/30 text-xl font-light">+</span>
            </div>
            <p className="text-xs text-black/40 font-bold uppercase tracking-widest text-center mx-4 leading-relaxed">
              Pin it!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
