#!/usr/bin/env python3
"""
Generate missing landing page images using Gemini 3 Pro (Nano Banana Pro).
Highest quality Google image generation model.
"""

import os
import sys
import time
import base64
from pathlib import Path
from google import genai
from google.genai import types

# Load API key
API_KEY = os.environ.get("GOOGLE_API_KEY", "AIzaSyCViecgzpu_MdZYJinrdWUmndEtSWMZml4")
client = genai.Client(api_key=API_KEY)

# Model: Nano Banana Pro (gemini-3-pro) - highest quality image generation
MODEL = "gemini-3-pro-image-preview"

BASE = Path("/Users/santipandal/landing-pages-rest/sites")

# All missing images with carefully crafted prompts
IMAGES_TO_GENERATE = [
    # === ELEIA TEAM (2 remaining - placeholder-2, placeholder-3) ===
    {
        "path": BASE / "eleia/public/images/team/placeholder-2.jpg",
        "prompt": (
            "Generate a professional corporate headshot photograph. Subject: Mexican businessman "
            "in his early 40s, wearing a navy blue suit with a light blue tie, confident smile, "
            "clean-shaven, short dark hair neatly styled. Setting: neutral gray gradient studio "
            "background with soft professional lighting. Framing: chest up portrait. "
            "Style: high-resolution corporate portrait photography, sharp focus, warm skin tones."
        ),
    },
    {
        "path": BASE / "eleia/public/images/team/placeholder-3.jpg",
        "prompt": (
            "Generate a professional corporate headshot photograph. Subject: Mexican male engineer "
            "in his late 30s, wearing a dark charcoal suit with white open-collar shirt (no tie), "
            "warm professional expression, short dark hair, well-groomed light beard. "
            "Setting: neutral gray gradient studio background with soft professional lighting. "
            "Framing: chest up portrait. Style: high-resolution corporate portrait, sharp focus."
        ),
    },
    # === PANDENER TEAM (1 remaining - placeholder-2) ===
    {
        "path": BASE / "pandener/public/images/team/placeholder-2.jpg",
        "prompt": (
            "Generate a professional corporate headshot photograph. Subject: Mexican male mechanical "
            "engineer in his mid-40s, wearing a dark blue button-down shirt, serious but approachable "
            "expression, short dark hair with touches of gray at temples. Setting: industrial "
            "machinery background subtly blurred (bokeh). Framing: chest up portrait. "
            "Style: high-resolution professional portrait, natural lighting, sharp focus."
        ),
    },
    # === TRACKIO TEAM (2 remaining - placeholder-2, placeholder-3) ===
    {
        "path": BASE / "trackio/public/images/team/placeholder-2.jpg",
        "prompt": (
            "Generate a professional corporate headshot photograph. Subject: young Mexican data "
            "scientist in his early 30s, wearing a modern slim-fit dark blazer over a black "
            "crew-neck t-shirt, smart glasses, friendly intellectual expression. "
            "Setting: minimalist modern tech office background slightly blurred. "
            "Framing: chest up portrait. Style: high-resolution corporate portrait, "
            "modern professional photography, sharp focus."
        ),
    },
    {
        "path": BASE / "trackio/public/images/team/placeholder-3.jpg",
        "prompt": (
            "Generate a professional corporate headshot photograph. Subject: Mexican field engineer "
            "in his mid-30s, wearing a high-visibility safety vest over a navy polo shirt, "
            "confident smile, athletic build. Setting: industrial site background with electrical "
            "equipment slightly blurred. Framing: chest up portrait. "
            "Style: high-resolution professional portrait, natural outdoor lighting, sharp focus."
        ),
    },
    # === TRACKIO SOLUTIONS (4 dashboard/tech illustrations) ===
    {
        "path": BASE / "trackio/public/images/solutions/areas.png",
        "prompt": (
            "Generate a modern isometric 3D illustration of an energy monitoring concept. "
            "Show a stylized map with multiple building locations connected by glowing lines, "
            "with small bar charts next to each building showing energy consumption. "
            "Color palette: dark blue (#1E6DA1) and vibrant green (#58AC25) with white accents. "
            "Style: clean corporate SaaS illustration, minimal, professional, no text or labels. "
            "Soft gradient background from white to light blue."
        ),
    },
    {
        "path": BASE / "trackio/public/images/solutions/equipos.png",
        "prompt": (
            "Generate a modern isometric 3D illustration of industrial equipment monitoring. "
            "Show stylized industrial machines (HVAC, compressor, chiller) with circular gauge "
            "indicators floating above each machine showing performance levels. "
            "Color palette: dark blue (#1E6DA1) and vibrant green (#58AC25) with red alert indicators. "
            "Style: clean corporate SaaS illustration, minimal, professional, no text or labels. "
            "Soft gradient background from white to light blue."
        ),
    },
    {
        "path": BASE / "trackio/public/images/solutions/facturacion.png",
        "prompt": (
            "Generate a modern isometric 3D illustration of electricity billing validation. "
            "Show a stylized document/invoice on one side and a data dashboard with graphs on the "
            "other side, connected by comparison arrows, with a large green checkmark in the center. "
            "Color palette: dark blue (#1E6DA1) and vibrant green (#58AC25). "
            "Style: clean corporate SaaS illustration, minimal, professional, no text or labels. "
            "Soft gradient background from white to light blue."
        ),
    },
    {
        "path": BASE / "trackio/public/images/solutions/generacion.png",
        "prompt": (
            "Generate a modern isometric 3D illustration of solar energy generation monitoring. "
            "Show stylized solar panels on a rooftop with a sun above, connected to a dashboard "
            "showing upward-trending production curves and a green leaf icon for environmental impact. "
            "Color palette: dark blue (#1E6DA1) and vibrant green (#58AC25) with golden sun accents. "
            "Style: clean corporate SaaS illustration, minimal, professional, no text or labels. "
            "Soft gradient background from white to light blue."
        ),
    },
    # === VIVE SOLAR - ALYEX CLIENT LOGO ===
    {
        "path": BASE / "vive-solar/public/images/clients/alyex.png",
        "prompt": (
            "Generate a minimalist modern corporate logo for a company called 'ALYEX'. "
            "The logo features the word 'ALYEX' in bold geometric sans-serif typography. "
            "Colors: metallic silver and dark gray on a pure white background. "
            "Simple abstract geometric accent suggesting aluminum/metal industry. "
            "Style: clean vector-like corporate logo design, crisp edges, professional, "
            "suitable for a manufacturing company. Centered composition."
        ),
    },
]


def generate_image(prompt: str, output_path: Path) -> bool:
    """Generate a single image using Gemini 3 Pro (Nano Banana Pro)."""
    try:
        print(f"  Generating: {output_path.name}")
        print(f"  Prompt: {prompt[:100]}...")

        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
                temperature=0.8,
            ),
        )

        # Extract image from response
        if response.candidates:
            for part in response.candidates[0].content.parts:
                if part.inline_data and part.inline_data.mime_type.startswith("image/"):
                    output_path.parent.mkdir(parents=True, exist_ok=True)
                    with open(str(output_path), "wb") as f:
                        f.write(part.inline_data.data)
                    size_kb = output_path.stat().st_size / 1024
                    print(f"  Saved: {output_path.name} ({size_kb:.0f} KB)")
                    return True

        print(f"  WARNING: No image in response for {output_path.name}")
        # Print text parts for debugging
        if response.candidates:
            for part in response.candidates[0].content.parts:
                if part.text:
                    print(f"  Response text: {part.text[:200]}")
        return False

    except Exception as e:
        print(f"  ERROR: {e}")
        return False


def main():
    print("=" * 60)
    print(f"Landing Pages Image Generator - {MODEL}")
    print("  (Nano Banana Pro - Highest Quality)")
    print("=" * 60)

    # Filter to only missing images
    missing = []
    for img in IMAGES_TO_GENERATE:
        path = img["path"]
        if path.exists():
            size = path.stat().st_size
            if size > 1000:  # Skip if already has a real image (>1KB)
                print(f"SKIP (exists): {path.relative_to(BASE)}")
                continue
        missing.append(img)

    print(f"\nImages to generate: {len(missing)}")
    print("-" * 60)

    success = 0
    failed = 0

    for i, img in enumerate(missing, 1):
        print(f"\n[{i}/{len(missing)}] {img['path'].relative_to(BASE)}")
        if generate_image(img["prompt"], img["path"]):
            success += 1
        else:
            failed += 1

        # Rate limiting between requests
        if i < len(missing):
            time.sleep(3)

    print("\n" + "=" * 60)
    print(f"DONE: {success} generated, {failed} failed")
    print("=" * 60)


if __name__ == "__main__":
    main()
