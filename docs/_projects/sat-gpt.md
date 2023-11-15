---
name: SatGPT
tools:
  [
    Python,
    pandas,
    geopandas,
    numpy,
    xarray,
    bokeh,
    folium,
    datashader,
    langchain,
    pystac_client,
    odc-stac,
    openai,
    rasterio,
    rioxarray,
    spyndex,
    Panel,
    hvplot,
    holoviews,
  ]
image: "../docs/images/projects/p13.jpg"
description: SatGPT is an experimental project that uses LLMs to retrieve Sentinel 2/Landsat imagery based on the user's requested area and time of interest in natural language.
order: 13
---

# SatGPT

SatGPT is an experimental project that uses LLMs to retrieve Sentinel 2/Landsat imagery based on the user's requested area and time of interest in natural language.

{% include elements/video.html id="r-gO47Y8q_k" %}

So far, the app can help retrieve Sentinel 2 optical imagery based on the user's requested area and time of interest in natural language. It is built on the following:

- [OpenAI ChatGPT API](https://openai.com/blog/openai-api)
- [LangChain](https://python.langchain.com/en/latest/index.html) - LangChain provides abstractions and common tooling for many LLMs, including OpenAI;
- [STAC](https://stacspec.org/en) & [Element84 EarthSearch v1](https://www.element84.com/blog/introducing-earth-search-v1-new-datasets-now-available) - The spatiotemporal asset catalogs (STAC) specification is a common way to describe geospatial information;
- [Holoviz Panel](https://panel.holoviz.org/) - A python-friendly app development package that works well with the greater Holoviz data & vizualization ecosystem;

<p class="text-center">
{% include elements/button.html link="https://github.com/lalligagger/satgpt-app" %}
</p>
