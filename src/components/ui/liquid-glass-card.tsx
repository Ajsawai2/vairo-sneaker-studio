import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  hover3D?: boolean;
  glowColor?: "pink" | "blue" | "purple" | "multi";
}

const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({ className, children, intensity = "medium", hover3D = true, glowColor = "multi", ...props }, ref) => {
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hover3D) return;
      
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateXValue = (mouseY / (rect.height / 2)) * -10;
      const rotateYValue = (mouseX / (rect.width / 2)) * 10;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setIsHovered(false);
    };

    const intensityStyles = {
      low: "backdrop-blur-md",
      medium: "backdrop-blur-xl",
      high: "backdrop-blur-2xl",
    };

    const glowStyles = {
      pink: "before:bg-glow-pink",
      blue: "before:bg-glow-blue", 
      purple: "before:bg-glow-purple",
      multi: "",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "liquid-glass-card relative overflow-hidden rounded-2xl border",
          intensityStyles[intensity],
          glowStyles[glowColor],
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        animate={{
          rotateX: hover3D ? rotateX : 0,
          rotateY: hover3D ? rotateY : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Liquid gradient overlay */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none",
            isHovered && "opacity-100"
          )}
          style={{
            background: glowColor === "multi" 
              ? `radial-gradient(circle at ${50 + rotateY * 2}% ${50 + rotateX * 2}%, 
                  hsl(var(--glow-pink) / 0.3), 
                  hsl(var(--glow-blue) / 0.2) 40%, 
                  hsl(var(--glow-purple) / 0.1) 70%, 
                  transparent 100%)`
              : undefined,
          }}
        />
        
        {/* Shimmer effect */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none",
            isHovered && "opacity-30"
          )}
          style={{
            background: `linear-gradient(
              ${105 + rotateY}deg, 
              transparent 20%, 
              hsl(0 0% 100% / 0.4) 50%, 
              transparent 80%
            )`,
            transform: `translateX(${rotateY * 5}px)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

LiquidGlassCard.displayName = "LiquidGlassCard";

export { LiquidGlassCard };
