const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="gradient-blob-pink w-[600px] h-[600px] -top-40 -right-40" />
      <div className="gradient-blob-blue w-[500px] h-[500px] top-1/2 -left-40" />
      <div className="gradient-blob-purple w-[400px] h-[400px] bottom-20 right-1/4" />
    </div>
  );
};

export default GradientBlobs;
