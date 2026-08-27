---
title: "From Pixels to Peaks: Sustainable Software for Global Seamount Discovery"
date: 2026-08-27
author: "Sarah Beethe"
---

## From Pixels to Peaks: Sustainable Software for Global Seamount Discovery

There are more than 200,000 seamounts scattered across the world's oceans — submarine volcanoes that rise hundreds to thousands of meters off the seafloor. These features host ecosystems from extremophiles to cold-water coral reefs, record how tectonic plates move and how Earth's chemistry evolves over geologic time. At least 50,000 of them are in the Pacific alone.

However, Most of them have never been directly surveyed. They sit up to five or six kilometers deep and far from shore, which makes them difficult and costly to map. Satellite altimetry gives near-global coverage, but at 5-15 km resolution — coarse enough that a feature the size of Mount St. Helens's (about 10 km across) shows up as a handful of pixels. Ship-based multibeam surveys resolve seamounts in real detail, down to tens of meters, but they only cover a sliver of the seafloor, and someone still has to look at the data and decide what's a seamount and what isn't. The result is a catalog with a lot of empty space, and a world full of seamounts waiting to be explored.

## Why the Seamount Catalog

The [Seamount Catalog](https://earthref.org/SC/) is where that empty space gets filled in — one confirmed feature at a time. Started in the early 2000s under the EarthRef.org initiative, it's a reference researchers use for cruise planning, collating seamount datasets, and studying deep-Earth processes. Right now, it holds ~10% of the Earth's seamounts. This is not just a problem of difficult-to-acquire data, but also difficult-to-update databases.

It's run for two decades on Excel 97 macros. This means that the catalog is hard to reproduce, hard to extend, and increasingly out of step with how research software gets built and maintained now. This is not a rare situation. A lot of trusted scientific infrastructure looks exactly like this: valuable, spreadsheet-bound, and dependent at large on its original creators.

## The question

As a URSSI Fellow, I'm spending the next six months rebuilding the Seamount Catalog as open, Python-based infrastructure, then using that foundation to test something new. The question underneath both parts of the project is the same one:

> **Can a legacy, spreadsheet-bound scientific database be re-architected as open, reproducible software — and can that same foundation reliably support machine-learning-assisted discovery, not just host it?**

Getting the first half right is what makes the second half trustworthy.

## What's coming down the pipeline

My fellowship has two parts, and the second depends on the first actually working.

First, rebuild the Seamount Catalog as an open-source Python package — something with tests, documentation, and a data model that is not bound to a workbook. Maps will be generated with open-source software (Generic Mapping Tools) from accessible databased (GEBCO, NOAA, and more!).

Second, once that foundation exists, use it to evaluate whether object-detection models like YOLO — already used to identify craters and ridges on Mars — can help flag seamounts in bathymetric and gridded geophysical data. This is the part I'm most excited about. Rather than chasing a model that out-detects a trained eye, I'm building a workflow that's rigorous enough to trust: standardized training data, explicit validation, clear documentation of where it performs well and where it doesn't. It's a template other geoscience domains can pick up and reuse!


## Beyond seamounts

The Seamount Catalog is the case study, but the underlying problem — valuable scientific data stuck in spreadsheet-driven, GUI-bound tools — shows up across the geosciences, not just in marine geology. Part of this project is documenting the migration workflow itself, so the path from "legacy database" to "reproducible Python package with ML layer" is something other maintainers can follow.

## Follow along

I'll be developing this on the [project repository](https://github.com/smbeethe/sea-cat) for the duration of the fellowship, so you can watch the architecture take shape in real time. Feedback is welcome, especially from folks who maintain related geospatial or ML tooling!

Stay tuned!
