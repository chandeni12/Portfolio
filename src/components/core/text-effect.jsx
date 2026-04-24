'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const presets = {
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.02 },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
        },
      },
    },
  },
  'fade-in-blur': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.02 },
      },
      exit: {
        opacity: 0,
        filter: 'blur(10px)',
        transition: { duration: 0.3 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px)',
        y: 20,
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          duration: 0.4,
        },
      },
    },
  },
  blur: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.02 },
      },
      exit: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.4,
        },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: 'blur(10px)',
        transition: {
          duration: 0.4,
        },
      },
    },
  },
};

export function TextEffect({ 
  children, 
  className, 
  per = 'char', 
  variants,
  preset,
  speedReveal = 1,
  speedSegment = 0.3,
  trigger = true 
}) {
  const text = typeof children === 'string' ? children : children?.props?.children || '';
  
  const splitText = per === 'char' 
    ? text.split('').map((char, i) => ({ char, id: i }))
    : text.split(' ').map((word, i) => ({ char: word, id: i }));

  const animationVariants = variants || (preset ? presets[preset] : presets.fade);

  // Apply speed controls to the variants
  const speedAdjustedVariants = {
    container: {
      ...animationVariants.container,
      visible: {
        ...animationVariants.container.visible,
        transition: {
          ...animationVariants.container.visible.transition,
          staggerChildren: (animationVariants.container.visible.transition.staggerChildren || 0.02) * speedSegment,
        },
      },
    },
    item: {
      ...animationVariants.item,
      visible: {
        ...animationVariants.item.visible,
        transition: {
          ...animationVariants.item.visible.transition,
          duration: (animationVariants.item.visible.transition.duration || 0.4) * speedReveal,
        },
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {trigger && (
        <motion.div
          key={text}
          className={cn('inline-flex flex-wrap', className)}
          variants={speedAdjustedVariants.container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {splitText.map(({ char, id }) => (
            <motion.span
              key={id}
              variants={speedAdjustedVariants.item}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 