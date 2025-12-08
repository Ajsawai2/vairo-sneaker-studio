import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style,
}: LottieAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      style={style}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
      />
    </motion.div>
  );
};

export default LottieAnimation;
