---
title: "Reliability checks for machine-learning surrogates in scientific software"
date: 2026-08-01
author: "Isaac Malsky"
---

Machine-learning surrogate models are now common across a variety of domains in science. A surrogate model is a machine-learning framework that approximates the input-to-output mapping of a classical, deterministic solver. By training on examples from that solver, it can reproduce the solver's behavior at a fraction of the computational cost, while asymptoting toward the solver's accuracy. For example, weather and climate models may use neural network surrogate models to recreate the effects of expensive solvers that track how radiation propagates through the atmosphere (Tahseen et al. 2024). The original solvers may need to solve coupled differential equations or other complex systems, dramatically limiting how much physics can be included within larger models.

Surrogate models offer a path to break this bottleneck between speed and accuracy. Ideally, they can approach the accuracy of the original solver at a fraction of the cost. For instance, GraphCast showed medium-range weather forecasts that beat traditional numerical weather prediction on most benchmarks (Lam et al. 2023), and NeuralGCM showed a learned physics core coupled directly into a general circulation model, matching classical climate-model skill at a fraction of the cost (Kochkov et al. 2024). Surrogate methods are on a path to become a ubiquitous part of numerical simulations.

However, surrogate models can fail in catastrophic, and often silent, ways. In high-dimensional simulation regimes, the models may not be accurate for all inputs. This is not even to mention the models themselves being trained incorrectly. As the field progresses, the systems required to build trust in surrogate models and ensure their validity, robustness, and accuracy have not kept up.

For example, one common failure that is hard to see: normalization leakage. Almost every surrogate normalizes its inputs. Those statistics are supposed to come from the training split alone; fit them on the full dataset instead, and information about the held-out data leaks into the pipeline before you ever evaluate it. In a small demonstration, a correct workflow gives a test RMSE of 0.87, while a leaky dataset gives 0.25. This kind of leakage is common: a survey of machine-learning-based science found leakage errors in 17 different fields, affecting 294 published papers (Kapoor and Narayanan 2023).

To help address the problem of building automated and robust checks of surrogate models, I am building vibe-check. The goal of this project is to give scientists a standard, practical way to test their surrogate models for these silent failure modes before the models are trusted inside a larger scientific software system. I am currently a NASA Postdoctoral Program Fellow at JPL, working on machine-learning surrogates for planetary atmospheres, including radiative-transfer and chemical-kinetics emulators. As part of my work, I have developed many of these tests across different projects. Much of this work is compiling and improving upon these tests, and creating a systematic project for community use.

Over this URSSI fellowship I will:

1. Build an open-source Python package that tests normalization, data-split hygiene, training-domain coverage, constraint violations, calibration, exported inference, and speed.
2. Validate it against representative local, sequential, and spatial-field emulators.
3. Open-source the package, documentation, and tutorial material for the community to use.

The package is called vibe-check. You hand it a predict function and your data splits, numpy in and numpy out. You get back a report that someone who did not train the model can actually read.

This work was supported by the US Research Software Sustainability Institute (URSSI) via grant G-2022-19347 from the Sloan Foundation.
