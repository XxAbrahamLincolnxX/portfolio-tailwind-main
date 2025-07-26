"use client";

export default function Starfield() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 animate-starfield"
        style={{
          backgroundColor: "black",
          backgroundImage: `
            radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(2px 2px at 33% 65%, rgba(255,255,255,0.35) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 47% 52%, rgba(255,255,255,0.25) 50%, transparent 50%),
            radial-gradient(1px 1px at 69% 29%, rgba(255,255,255,0.45) 50%, transparent 50%),
            radial-gradient(1.2px 1.2px at 83% 79%, rgba(255,255,255,0.55) 50%, transparent 50%),
            radial-gradient(3px 3px at 18% 38%, rgba(255,255,255,0.3) 50%, transparent 50%),
            radial-gradient(2.4px 2.4px at 39% 73%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(1.75px 1.75px at 59% 57%, rgba(255,255,255,0.2) 50%, transparent 50%),
            radial-gradient(1.25px 1.25px at 77% 22%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(2.25px 2.25px at 91% 87%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 15% 22%, rgba(255,255,255,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 45% 82%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 62% 18%, rgba(255,255,255,0.25) 50%, transparent 50%),
            radial-gradient(2.2px 2.2px at 74% 40%, rgba(255,255,255,0.35) 50%, transparent 50%),
            radial-gradient(2.6px 2.6px at 90% 60%, rgba(255,255,255,0.5) 50%, transparent 50%)
          `.replace(/\s+/g, ' '),
          backgroundSize: `
            250px 250px, 530px 410px, 880px 700px, 720px 480px, 640px 600px,
            300px 320px, 580px 460px, 970px 730px, 620px 520px, 820px 630px,
            340px 310px, 660px 470px, 700px 650px, 500px 450px, 900px 720px
          `.replace(/\s+/g, ' '),
          backgroundRepeat: 'repeat',
          backgroundPosition: `
            3% 12%, 47% 19%, 28% 33%, 61% 42%, 13% 77%,
            84% 58%, 76% 10%, 21% 90%, 40% 65%, 69% 32%,
            12% 15%, 33% 72%, 58% 27%, 79% 44%, 91% 66%
          `.replace(/\s+/g, ' '),
          animation: 'stars-drift 200s linear infinite, stars-twinkle 10s ease-in-out infinite'
        }}
      />
      <div className="absolute inset-0 bg-black opacity-10" />
    </div>
  );
}
