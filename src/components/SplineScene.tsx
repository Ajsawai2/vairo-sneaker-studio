import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

const SplineScene = ({ scene, className = "", fallback }: SplineSceneProps) => {
  const defaultFallback = (
    <motion.div 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-muted border-t-primary animate-spin" />
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-glow-pink via-glow-blue to-glow-purple opacity-30 blur-xl animate-pulse" />
      </div>
    </motion.div>
  );

  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={fallback || defaultFallback}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
};

export default SplineScene;
