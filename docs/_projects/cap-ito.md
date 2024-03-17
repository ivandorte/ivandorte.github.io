---
name: CAPito?! (WIP)
tools:
  [
    Python,
    Playwright,
    PolyFUZZ,
    shapely,
    geopandas,
    topojson
  ]
image: "../docs/images/projects/p17.png"
description: A scraping workflow developed to collect the official Italian postal codes (CAP) from Poste Italiane.
order: 17
---

## The process in a nutshell

This scraping pipeline was developed to collect **ALL** the data on the official Italian postal codes (referred to as **CAP**, Codici di Avviamento Postale) from Poste Italiane [web page](https://www.poste.it/cerca/index.html#/risultati-cerca-cap).

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/projects/cap-ito/01.webm?raw=true" caption="Scraped CAP codes of Lazio and Abruzzo. CAP zones for Rome and Pescara were reconstructed using Voronoi Polygons." %}

The CAP boundaries of the so-called "multi-CAP" cities (i.e., cities divided into several postal areas) were reconstructed by first cross-referencing the information extracted from Poste Italiane (i.e., the list of addresses and house numbers belonging to a specific CAP code) with the [ANNCSU](https://www.anncsu.gov.it/it/) database. Next, the house addresses were grouped into [Voronoi Polygons](https://shapely.readthedocs.io/en/stable/manual.html#voronoi-diagram) based on the assigned CAP. The resulting polygons were aggregated using the dissolve() operator, cleaned up by removing holes, sliver polygons, and overlaps. Finally, the resulting CAP zones were clipped to the municipality-level boundaries from [ISTAT](https://www.istat.it/it/archivio/222527).

{% include elements/figure.html image="../docs/images/projects/p17_1.png" caption="Reconstructed CAP zones of Bologna" %}

It is built on the following libraries:
- [Playwright](https://playwright.dev/docs/intro): An open-source automation library for browser testing and web scraping developed by Microsoft;
- [Playwright-reCAPTCHA](https://github.com/Xewdy444/Playwright-reCAPTCHA): A Python library for solving Google reCAPTCHA v2 and v3 with Playwright;
- [PolyFuzz](https://github.com/MaartenGr/PolyFuzz): PolyFuzz performs fuzzy string matching between text strings that match partially;
- [Shapely](https://shapely.readthedocs.io/en/stable): A specialized library for manipulation and analysis of planar geometric objects;
- [Geopandas](https://geopandas.org/en/stable/docs.html): An open source project that adds support for geographic data to pandas objects.
