"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CA = "3xZ55JDrcDxLGH2HqtL3B2PdsjSA2r5SYvrQy54fdxrX";
const DEX_URL = "https://dexscreener.com/solana/7m1PyXx8pMVMzu5J46JjkzZVmNuPCDgWooCSpStProZh";
const X_URL = "https://x.com/i/communities/1945704219648094631";

function CabalLogo({ size = 260 }: { size?: number }) {
  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      <Image
        src="/cabal-logo.jpg"
        alt="CABAL COIN — The Watchers"
        width={size}
        height={size}
        priority
        className="rounded-full"
        style={{
          width: size,
          height: size,
          objectFit: "cover",
          borderRadius: "50%",
          filter: "drop-shadow(0 0 40px rgba(192,192,192,0.25)) drop-shadow(0 0 80px rgba(192,192,192,0.08))",
        }}
      />
    </div>
  );
}

// Floating particle
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-px h-px rounded-full pointer-events-none"
      style={{
        background: "rgba(192,192,192,0.8)",
        ...style,
      }}
    />
  );
}

// Animated background grid
function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,192,192,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,192,192,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(192,192,192,0.06) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

// Occult SVG eye icon
function EyeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="rgba(192,192,192,0.8)"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3" stroke="rgba(192,192,192,0.8)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1" fill="rgba(192,192,192,0.8)" />
    </svg>
  );
}

// Triangle icon
function TriangleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon
        points="8,2 14,13 2,13"
        fill="none"
        stroke="rgba(192,192,192,0.6)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function CabalCoin() {
  const [copied, setCopied] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    // Nav visibility on scroll
    const handleScroll = () => {
      setNavVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Static particles
  const particles = [
    { top: "20%", left: "10%", animationDelay: "0s", animationDuration: "5s" },
    { top: "45%", left: "5%", animationDelay: "1s", animationDuration: "4s" },
    { top: "70%", left: "15%", animationDelay: "2s", animationDuration: "6s" },
    { top: "15%", left: "85%", animationDelay: "0.5s", animationDuration: "4.5s" },
    { top: "55%", left: "92%", animationDelay: "1.5s", animationDuration: "5.5s" },
    { top: "80%", left: "88%", animationDelay: "3s", animationDuration: "4s" },
    { top: "30%", left: "25%", animationDelay: "0.8s", animationDuration: "7s" },
    { top: "65%", left: "75%", animationDelay: "2.5s", animationDuration: "5s" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay" style={{ background: "#000000" }}>
      <BackgroundGrid />

      {/* Fixed particles */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          style={{
            top: p.top,
            left: p.left,
            animation: `particle ${p.animationDuration} ease-out ${p.animationDelay} infinite`,
            zIndex: 2,
          }}
        />
      ))}

      {/* ─── Navigation ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: navVisible
            ? "rgba(0,0,0,0.92)"
            : "transparent",
          borderBottom: navVisible
            ? "1px solid rgba(192,192,192,0.08)"
            : "none",
          backdropFilter: navVisible ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TriangleIcon />
            <span
              className="text-silver-gradient font-semibold tracking-[4px] text-xs uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              $CABAL
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Token", "Memes", "Community"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
            style={{ padding: "10px 20px" }}
          >
            Buy $CABAL
          </a>
        </div>
      </nav>

      {/* ─── Ticker Tape ─── */}
      <div
        className="relative z-10 overflow-hidden border-b"
        style={{ borderColor: "rgba(192,192,192,0.08)", background: "rgba(0,0,0,0.8)" }}
      >
        <div
          className="ticker-tape flex items-center gap-12 py-2.5 text-xs tracking-[3px] uppercase"
          style={{ color: "rgba(192,192,192,0.4)", fontFamily: "Georgia, serif" }}
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>$CABAL</span>
              <span style={{ color: "rgba(192,192,192,0.2)" }}>◆</span>
              <span>OG TAKES THE CROWN</span>
              <span style={{ color: "rgba(192,192,192,0.2)" }}>◆</span>
              <span>SOLANA</span>
              <span style={{ color: "rgba(192,192,192,0.2)" }}>◆</span>
              <span>THE CABAL REMAINS</span>
              <span style={{ color: "rgba(192,192,192,0.2)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        {/* Background radial glow behind logo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(192,192,192,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          className="fade-in-up mb-8 flex items-center gap-3"
          style={{ animationDelay: "0s" }}
        >
          <div style={{ width: "40px", height: "1px", background: "rgba(192,192,192,0.3)" }} />
          <span
            className="text-xs tracking-[6px] uppercase"
            style={{ color: "rgba(192,192,192,0.5)", fontFamily: "Georgia, serif" }}
          >
            Solana · Secret Society
          </span>
          <div style={{ width: "40px", height: "1px", background: "rgba(192,192,192,0.3)" }} />
        </div>

        {/* Logo */}
        <div
          className="logo-float logo-pulse scanline-container mb-10 fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Outer rotating ring */}
          <div
            className="absolute inset-0 m-auto"
            style={{
              width: "320px",
              height: "320px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "ringRotate 20s linear infinite",
              borderRadius: "50%",
              border: "1px solid rgba(192,192,192,0.08)",
              borderTopColor: "rgba(192,192,192,0.3)",
            }}
          />
          <div
            className="absolute inset-0 m-auto"
            style={{
              width: "340px",
              height: "340px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "ringRotateReverse 30s linear infinite",
              borderRadius: "50%",
              border: "1px dashed rgba(192,192,192,0.05)",
              borderTopColor: "rgba(192,192,192,0.15)",
            }}
          />
          <CabalLogo size={260} />
        </div>

        {/* Title */}
        <h1
          className="fade-in-up glitch-text"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: "700",
            letterSpacing: "0.15em",
            lineHeight: 1.1,
            background:
              "linear-gradient(135deg, #606060 0%, #c0c0c0 25%, #ffffff 50%, #c0c0c0 75%, #606060 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animationDelay: "0.2s",
            textTransform: "uppercase",
          }}
        >
          CABAL COIN
        </h1>

        {/* Ticker */}
        <div
          className="fade-in-up mt-2 mb-4"
          style={{ animationDelay: "0.3s" }}
        >
          <span
            className="text-xl tracking-[8px] uppercase"
            style={{
              color: "rgba(192,192,192,0.5)",
              fontFamily: "Georgia, serif",
            }}
          >
            $CABAL
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="fade-in-up glow-gold-text mb-10"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(14px, 2.5vw, 22px)",
            letterSpacing: "0.6em",
            textTransform: "uppercase",
            background:
              "linear-gradient(135deg, #8B6914 0%, #D4AF37 30%, #FFD700 50%, #D4AF37 70%, #8B6914 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animationDelay: "0.4s",
          }}
        >
          OG Takes the Crown
        </p>

        {/* CTA Buttons */}
        <div
          className="fade-in-up flex flex-col sm:flex-row items-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" />
              </svg>
              Buy on Dexscreener
            </span>
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <span className="flex items-center gap-2">
              <EyeIcon size={14} />
              Join the Cabal
            </span>
          </a>
        </div>

        {/* CA display */}
        <div
          className="fade-in-up mt-8"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={copyCA}
            className="group flex items-center gap-3 px-5 py-3 occult-frame transition-all duration-300 hover:bg-white/5"
            style={{
              border: "1px solid rgba(192,192,192,0.1)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span
              className="text-xs font-mono tracking-wider"
              style={{ color: "rgba(192,192,192,0.5)" }}
            >
              {CA.slice(0, 8)}...{CA.slice(-8)}
            </span>
            <span
              className="text-xs tracking-[2px] uppercase transition-colors"
              style={{
                color: copied ? "rgba(100,200,100,0.8)" : "rgba(192,192,192,0.4)",
                fontFamily: "Georgia, serif",
              }}
            >
              {copied ? "✓ copied" : "copy"}
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
          style={{ animation: "fadeIn 2s ease-out 1s forwards", opacity: 0 }}
        >
          <span className="text-xs tracking-[4px] uppercase" style={{ color: "rgba(192,192,192,0.2)", fontFamily: "Georgia, serif" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg, rgba(192,192,192,0.3), transparent)",
            }}
          />
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section
        id="about"
        className="relative z-10 py-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="reveal flex items-center gap-4 mb-6">
            <TriangleIcon />
            <span
              className="text-xs tracking-[6px] uppercase"
              style={{ color: "rgba(192,192,192,0.35)", fontFamily: "Georgia, serif" }}
            >
              Origins
            </span>
          </div>

          <h2
            className="reveal text-silver-gradient mb-12"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: "600",
              letterSpacing: "0.05em",
              lineHeight: 1.2,
            }}
          >
            What is CABAL
          </h2>

          <div className="reveal space-y-6 mb-16">
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: 1.9,
                color: "rgba(192,192,192,0.65)",
                letterSpacing: "0.03em",
              }}
            >
              CABAL is the OG memecoin representing the hidden hands of crypto.
              The ones who see the narrative before everyone else.
              The ones who accumulate before the masses arrive.
            </p>
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(192,192,192,0.4), transparent)",
                margin: "20px 0",
              }}
            />
            <p
              className="glow-silver-text"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                lineHeight: 1.9,
                color: "rgba(192,192,192,0.5)",
                letterSpacing: "0.04em",
              }}
            >
              The Cabal does not follow trends.
              <br />
              The Cabal <em style={{ color: "rgba(220,220,220,0.8)" }}>creates</em> them.
            </p>
          </div>

          {/* Featured quote */}
          <div
            className="reveal occult-frame"
            style={{
              borderLeft: "2px solid rgba(192,192,192,0.15)",
              paddingLeft: "32px",
              margin: "40px 0",
            }}
          >
            <p
              className="text-gold-gradient"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(20px, 3vw, 36px)",
                fontWeight: "600",
                fontStyle: "italic",
                letterSpacing: "0.1em",
                lineHeight: 1.4,
              }}
            >
              "OG takes the crown."
            </p>
          </div>

          {/* Three pillars */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                symbol: "◈",
                title: "Hidden Knowledge",
                desc: "The Cabal moves before the crowd sees the signal. First movers. OG energy.",
              },
              {
                symbol: "△",
                title: "Secret Society",
                desc: "Not everyone is meant to hold $CABAL. If you&apos;re here, you already know.",
              },
              {
                symbol: "◎",
                title: "Solana Native",
                desc: "Built on the fastest chain. Power belongs to those who choose the right foundation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="metal-card p-6"
                style={{ borderRadius: "2px" }}
              >
                <div
                  className="text-2xl mb-4"
                  style={{ color: "rgba(192,192,192,0.5)" }}
                >
                  {item.symbol}
                </div>
                <h3
                  className="text-silver-gradient mb-3"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "14px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "13px",
                    lineHeight: 1.8,
                    color: "rgba(192,192,192,0.4)",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="relative z-10 px-6">
        <div className="cabal-divider">
          <EyeIcon size={20} />
        </div>
      </div>

      {/* ─── Token Info Section ─── */}
      <section id="token" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-6">
            <TriangleIcon />
            <span
              className="text-xs tracking-[6px] uppercase"
              style={{ color: "rgba(192,192,192,0.35)", fontFamily: "Georgia, serif" }}
            >
              On-Chain
            </span>
          </div>

          <h2
            className="reveal text-silver-gradient mb-12"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: "600",
              letterSpacing: "0.05em",
            }}
          >
            Token Information
          </h2>

          {/* Token cards */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Token Name", value: "CABAL COIN" },
              { label: "Ticker", value: "$CABAL" },
              { label: "Chain", value: "Solana" },
            ].map((item, i) => (
              <div
                key={i}
                className="metal-card p-8 text-center"
                style={{ borderRadius: "2px" }}
              >
                <div
                  className="text-xs tracking-[4px] uppercase mb-3"
                  style={{ color: "rgba(192,192,192,0.3)", fontFamily: "Georgia, serif" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-silver-gradient"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(16px, 2vw, 22px)",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Contract Address */}
          <div
            className="reveal metal-card p-6"
            style={{ borderRadius: "2px" }}
          >
            <div
              className="text-xs tracking-[4px] uppercase mb-4"
              style={{ color: "rgba(192,192,192,0.3)", fontFamily: "Georgia, serif" }}
            >
              Contract Address
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <code
                className="flex-1 font-mono text-sm break-all"
                style={{
                  color: "rgba(192,192,192,0.7)",
                  letterSpacing: "0.05em",
                  fontSize: "clamp(11px, 1.2vw, 14px)",
                }}
              >
                {CA}
              </code>
              <button
                onClick={copyCA}
                className="btn-primary flex-shrink-0"
                style={{ padding: "10px 24px", fontSize: "11px" }}
              >
                {copied ? "✓ Copied" : "Copy CA"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Memes Section ─── */}
      <section id="memes" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-6">
            <TriangleIcon />
            <span
              className="text-xs tracking-[6px] uppercase"
              style={{ color: "rgba(192,192,192,0.35)", fontFamily: "Georgia, serif" }}
            >
              The Prophecy
            </span>
          </div>

          <h2
            className="reveal text-silver-gradient mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: "600",
              letterSpacing: "0.05em",
            }}
          >
            The Cabal Archives
          </h2>

          {/* Narrative text */}
          <div className="reveal mb-16 max-w-2xl">
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(14px, 1.5vw, 17px)",
                lineHeight: 2,
                color: "rgba(192,192,192,0.4)",
                letterSpacing: "0.04em",
              }}
            >
              The market is chaos.
              <br />
              Narratives rise and fall.
              <br />
              But the Cabal remains.
              <br />
              <br />
              <em style={{ color: "rgba(212, 175, 55, 0.7)" }}>OG takes the crown.</em>
            </p>
          </div>

          {/* Meme Grid */}
          <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                src: "https://i.ytimg.com/vi/JQqRlVrUjzQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJvJ32iINxWKZY4gzfB_DFq8091A",
                caption: "They see it now.",
              },
              {
                src: "https://media.licdn.com/dms/image/v2/D4E22AQE3wemwo8DvDA/feedshare-shrink_800/feedshare-shrink_800/0/1722943555648?e=2147483647&v=beta&t=elgX4GpNi0FvMP958QHtllIasO11KgaUSu-cxHqjHaM",
                caption: "The OGs knew.",
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMT7Kwbn2p3sb86O-25VqL-sA2Dl3XZrvMg&s",
                caption: "Before the crowd.",
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBZtQ4lNb42PI3W-7RZ_mSNlctkYCOQpAYQ&s",
                caption: "The crown is yours.",
              },
            ].map((meme, i) => (
              <div
                key={i}
                className="meme-item group"
                style={{
                  border: "1px solid rgba(192,192,192,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={meme.src}
                  alt={meme.caption}
                  className="w-full object-cover"
                  style={{ height: "clamp(150px, 20vw, 240px)", display: "block" }}
                  loading="lazy"
                />
                <div
                  className="px-3 py-2.5"
                  style={{ borderTop: "1px solid rgba(192,192,192,0.06)" }}
                >
                  <p
                    className="text-xs tracking-[2px] uppercase text-center"
                    style={{ color: "rgba(192,192,192,0.35)", fontFamily: "Georgia, serif" }}
                  >
                    {meme.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Community / Links Section ─── */}
      <section id="community" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Central eye */}
          <div className="reveal flex justify-center mb-8 eye-pulse">
            <EyeIcon size={40} />
          </div>

          <h2
            className="reveal text-silver-gradient mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Enter the Cabal
          </h2>

          <p
            className="reveal mb-16 mx-auto max-w-lg"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "15px",
              lineHeight: 2,
              color: "rgba(192,192,192,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            The inner circle awaits.
            Those who know, know.
            Accumulate early. Walk with kings.
          </p>

          {/* Link cards */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={DEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="metal-card group p-8 text-left transition-all duration-300"
              style={{ borderRadius: "2px", textDecoration: "none" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="text-xs tracking-[4px] uppercase"
                  style={{ color: "rgba(192,192,192,0.3)", fontFamily: "Georgia, serif" }}
                >
                  Trade
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-30 group-hover:opacity-70 transition-opacity"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div
                className="text-silver-gradient"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                }}
              >
                Dexscreener
              </div>
              <p
                className="mt-2 text-xs"
                style={{ color: "rgba(192,192,192,0.35)", fontFamily: "Georgia, serif", lineHeight: 1.7 }}
              >
                Chart · Liquidity · Volume
              </p>
            </a>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="metal-card group p-8 text-left transition-all duration-300"
              style={{ borderRadius: "2px", textDecoration: "none" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="text-xs tracking-[4px] uppercase"
                  style={{ color: "rgba(192,192,192,0.3)", fontFamily: "Georgia, serif" }}
                >
                  Community
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-30 group-hover:opacity-70 transition-opacity"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div
                className="text-silver-gradient"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                }}
              >
                X Community
              </div>
              <p
                className="mt-2 text-xs"
                style={{ color: "rgba(192,192,192,0.35)", fontFamily: "Georgia, serif", lineHeight: 1.7 }}
              >
                The inner circle · Join the conversation
              </p>
            </a>
          </div>

          {/* CA block */}
          <div className="reveal mt-12">
            <div
              className="text-xs tracking-[4px] uppercase mb-4"
              style={{ color: "rgba(192,192,192,0.25)", fontFamily: "Georgia, serif" }}
            >
              Contract Address
            </div>
            <button
              onClick={copyCA}
              className="group inline-flex items-center gap-4 px-6 py-4 transition-all duration-300"
              style={{
                border: "1px solid rgba(192,192,192,0.1)",
                background: "rgba(255,255,255,0.02)",
                fontFamily: "monospace",
              }}
            >
              <span
                className="font-mono text-sm tracking-wider"
                style={{ color: "rgba(192,192,192,0.5)" }}
              >
                {CA}
              </span>
              <span
                className="text-xs tracking-[2px] uppercase transition-colors flex-shrink-0"
                style={{
                  color: copied ? "rgba(100,200,100,0.8)" : "rgba(192,192,192,0.3)",
                  fontFamily: "Georgia, serif",
                }}
              >
                {copied ? "✓" : "⎘"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="relative z-10 py-12 px-6"
        style={{ borderTop: "1px solid rgba(192,192,192,0.05)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <TriangleIcon />
              <span
                className="text-xs tracking-[4px] uppercase"
                style={{ color: "rgba(192,192,192,0.3)", fontFamily: "Georgia, serif" }}
              >
                $CABAL
              </span>
            </div>

            {/* Center */}
            <div className="text-center">
              <p
                className="text-xs tracking-[3px] uppercase mb-1"
                style={{ color: "rgba(192,192,192,0.2)", fontFamily: "Georgia, serif" }}
              >
                OG CABAL COIN CTO
              </p>
              <p
                className="text-xs tracking-[2px] uppercase"
                style={{ color: "rgba(192,192,192,0.15)", fontFamily: "Georgia, serif" }}
              >
                Powered by Solana
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a
                href={DEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[2px] uppercase transition-colors hover:text-white"
                style={{ color: "rgba(192,192,192,0.25)", fontFamily: "Georgia, serif", textDecoration: "none" }}
              >
                Dex
              </a>
              <span style={{ color: "rgba(192,192,192,0.1)" }}>·</span>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[2px] uppercase transition-colors hover:text-white"
                style={{ color: "rgba(192,192,192,0.25)", fontFamily: "Georgia, serif", textDecoration: "none" }}
              >
                Community
              </a>
            </div>
          </div>

          {/* Bottom disclaimer */}
          <div className="mt-8 text-center">
            <p
              className="text-xs"
              style={{
                color: "rgba(192,192,192,0.1)",
                fontFamily: "Georgia, serif",
                lineHeight: 1.8,
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              $CABAL is a community meme token on Solana with no intrinsic value.
              Not financial advice. DYOR. OG takes the crown.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
