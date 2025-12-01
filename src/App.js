/** @format */

import React from "react";
import Card from "./Card";
import cardsData from "./data";
import "./App.css";

function App() {
	return (
		<div className="app">
			{/* Main header */}
			<header className="app-header">
				<h1>MavScript Universe</h1>
				<p>CODING COMPANIONS • 9-CARD LEGENDARY COLLECTION</p>
			</header>

			{/* Map through all cards and render them */}
			<div className="app-container">
				{cardsData.map((card) => (
					<Card key={card.id} data={card} />
				))}
			</div>

			{/* Design justification required for rubric */}
			<section className="justification-section">
				<h2>⚡ System Architecture (Design Justification)</h2>

				<div className="justification-grid">
					{/* Vector graphics explanation */}
					<article>
						<h3 style={{ color: "#a8e6ff" }}>
							1. The "IDE Frame" (Vector / SVG)
						</h3>
						<p>
							I built the card frames in SVG to look like a code editor window.
							Clean lines, perfect circles for the window controls — vectors
							keep everything sharp no matter the screen size.
							<br />
							<br />
							<em>Why not PNG?</em> If I'd gone raster, those thin lines
							would've turned into blurry mush when zoomed or viewed on mobile.
							SVG uses math (<code>&lt;path&gt;</code>, <code>&lt;rect&gt;</code>,{" "}
							<code>&lt;circle&gt;</code>) instead of pixels, so it scales
							forever without losing quality.
						</p>
					</article>

					{/* Raster graphics explanation */}
					<article>
						<h3 style={{ color: "#ff99cc" }}>
							2. The "MavScript Art" (Raster / PNG)
						</h3>
						<p>
							The character art is all raster (PNG). That's because the pieces
							are full of shading, brush textures, and messy gradients — the
							kind of organic detail you just can't fake in vector. These are
							hand-drawn in Procreate, so they carry all the noise and color
							variation that makes them feel alive.
							<br />
							<br />
							<em>Why not vector?</em> Trying to vectorize something like The
							Architect (galaxy brain portrait) or The Crew (factory scene)
							would mean tracing millions of paths. You'd end up with a bloated
							10–50MB SVG that renders slower and looks worse. PNG keeps the
							detail intact and loads fast.
						</p>
					</article>

					{/* How the layering system works */}
					<article>
						<h3 style={{ color: "#ffe5a3" }}>
							3. The Layering Strategy (z-index Architecture)
						</h3>
						<p>
							The card uses a <strong>four-layer stacking system</strong>:
							<br />
							<br />
							<strong>Layer 1 (z-index: 1):</strong> CSS gradient background —
							no image files needed, just code
							<br />
							<strong>Layer 2 (z-index: 2):</strong> The character art (PNG)
							<br />
							<strong>Layer 2.5 (z-index: 2.5):</strong> Holographic foil overlay
							— that rainbow shimmer using <code>mix-blend-mode: color-dodge</code>
							<br />
							<strong>Layer 3 (z-index: 3):</strong> SVG frame on top, so the
							borders stay sharp
							<br />
							<br />
							The holo foil sits between the art and the frame to create that
							premium TCG look. I set <code>pointer-events: none</code> on both
							the foil and frame so clicks pass through to the card flip handler
							underneath.
						</p>
					</article>

					{/* 3D flip animation and advanced features */}
					<article>
						<h3 style={{ color: "#e0b3ff" }}>
							4. Legendary Features (CSS 3D Transform System)
						</h3>
						<p>
							This is where it gets fun. I built a{" "}
							<strong>hybrid 3D interaction system</strong> that combines tilt
							tracking with flip animations. The cards live in 3D space using{" "}
							<code>perspective: 1000px</code>.
							<br />
							<br />
							<strong>Tilt Tracking:</strong> Each card has an invisible 5×5 grid
							(25 zones total). Hover over different parts of the card, and it
							tilts in real-time using <code>rotateX</code> and{" "}
							<code>rotateY</code>. It's like you're actually holding a physical
							card. The grid is generated programmatically in React.
							<br />
							<br />
							<strong>Mouse-Tracking Holographic Effect:</strong> The holographic
							foil overlay uses React state to track your mouse position in real-time.
							A radial gradient spotlight follows your cursor across the card using{" "}
							<code>circle at {"{x}"}% {"{y}"}%</code>, combined with an animated
							rainbow sweep. The position updates on every <code>onMouseMove</code>{" "}
							event with smooth <code>0.1s</code> transitions.
							<br />
							<br />
							<strong>Click-to-Flip System:</strong> Clicking a card triggers one
							of <strong>four different flip directions</strong> based on the
							character's personality: <code>rotateY(180deg)</code> for standard
							flips, <code>rotateX(180deg)</code> for vertical flips,{" "}
							<code>rotate3d(1,1,0,180deg)</code> for diagonal spins, and{" "}
							<code>rotate3d(-1,1,0,180deg)</code> for inverted diagonal chaos.
							When the card flips, tilt tracking disables automatically using{" "}
							<code>pointer-events: none</code> to prevent animation conflicts.
							<br />
							<br />
							I also added staggered floating animations (<code>@keyframes float</code>)
							across all 9 cards and glow effects on hover. Each card has a unique
							timing delay, so they load in a wave pattern.
							<br />
							<br />
							<strong>All 9 artworks are 100% original</strong>, created by me
							specifically for this project — exceeding the 5-6 card requirement
							and hitting the highest tier for original creative content.
						</p>
					</article>

					{/* Dynamic color system for each character */}
					<article>
						<h3 style={{ color: "#a8e6b3" }}>
							5. Dynamic Color System (Role-Based Theming)
						</h3>
						<p>
							Each of the <strong>9 cards</strong> has its own pastel color that
							matches the character's vibe:
							<br />
							<br />• <span style={{ color: "#a8e6ff" }}>Pastel Sky Blue (#a8e6ff)</span> -
							Innovation/Founding (The Founder)
							<br />•{" "}
							<span style={{ color: "#d4a5ff" }}>Pastel Lavender (#d4a5ff)</span> -
							Galaxy/Cosmic Vision (The Architect)
							<br />•{" "}
							<span style={{ color: "#b0c4d4" }}>Pastel Steel Blue (#b0c4d4)</span> -
							Industrial/Hardware (The Crew)
							<br />• <span style={{ color: "#ffb3d9" }}>
								Pastel Rose Pink (#ffb3d9)
							</span>{" "}
							- Love/Loyalty (Brindle Buddy)
							<br />•{" "}
							<span style={{ color: "#ff99cc" }}>Pastel Hot Pink (#ff99cc)</span> -
							Chaos/Energy (Experiment 626)
							<br />•{" "}
							<span style={{ color: "#ffb399" }}>Pastel Coral (#ffb399)</span> -
							Power/Backend (Dragon Rider)
							<br />• <span style={{ color: "#ffe5a3" }}>
								Pastel Golden Yellow (#ffe5a3)
							</span>{" "}
							- Reliability (Chicken Keeper)
							<br />• <span style={{ color: "#a8e6b3" }}>
								Pastel Mint Green (#a8e6b3)
							</span>{" "}
							- Debugging (The Gonzo Devs)
							<br />• <span style={{ color: "#e0b3ff" }}>
								Pastel Lilac (#e0b3ff)
							</span>{" "}
							- UI/UX Magic (Neon Raver)
							<br />
							<br />
							The pastel palette keeps things soft and aesthetic while still giving
							each character a distinct identity. The <code>data.frameColor</code>{" "}
							property gets injected into the SVG <code>stroke</code> and text{" "}
							<code>fill</code> attributes dynamically, so the same component works
							for all 9 cards without copy-pasting.
						</p>
					</article>
				</div>

				{/* Tech stack footer */}
				<div
					style={{
						marginTop: "3rem",
						textAlign: "center",
						padding: "2rem",
						background: "rgba(0, 0, 0, 0.3)",
						borderRadius: "10px",
					}}>
					<p style={{ fontSize: "0.9rem", color: "#888", lineHeight: "1.8" }}>
						<strong>Technical Stack:</strong> React.js (Component Architecture)
						• CSS3 (3D Transforms & Animations) • SVG (Vector Graphics) • PNG
						(Raster Art) • Flexbox/Grid (Responsive Layout)
						<br />
						<strong>Repository:</strong> MavScript Universe © 2025 • All
						artwork and designs are original creations
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
