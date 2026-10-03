export function MainContentBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden bg-[#121212]"
    >
      <div
        className="absolute inset-x-0 top-0 h-[900px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute -top-48 left-1/2 h-[480px] w-[760px] max-w-full -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute right-0 top-[60vh] h-[360px] w-[360px] translate-x-1/3 rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}
