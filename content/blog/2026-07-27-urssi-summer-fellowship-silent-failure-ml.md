---
title: "URSSI Summer Fellowship: Detecting Silent Failures in Machine Learning-Driven Scientific Simulations"
date: 2026-07-27
author: "Ali Mohaghegh"
---

## When a Simulation Looks Right but Is Wrong

Machine learning (ML) models are increasingly being embedded inside scientific simulations. Surrogate models, reduced-order models, and neural operators can replace or augment expensive parts of traditional physics-based solvers, allowing researchers to study complex systems at a fraction of the usual computational cost.

However, these speedups come with a difficult reliability problem. Unlike traditional numerical methods, whose stability limits and failure behavior have been studied for decades, learned components can fail in subtle and scientifically dangerous ways. A simulation may continue for thousands of time steps and produce results that appear reasonable, even as conservation properties drift, a reduced basis becomes invalid, or the predicted state moves into a physically impossible regime.[^1]

This creates an important question for the scientific software community:

> How can we detect when an ML-driven simulation has silently become scientifically unreliable, before its results are used to draw conclusions?

[^1]: Reviews of ML-assisted scientific simulation have identified reliability, generalization, and physical-consistency challenges that remain open as learned models are deployed in computational workflows. See, for example, [Panchigar et al. (2022)](https://doi.org/10.1007/s00521-022-07838-6) and [Cai et al. (2021)](https://doi.org/10.1007/s10409-021-01148-1).

## What We’re Building

I’m launching a six-month project to develop a diagnostic framework for identifying silent failures in ML-driven scientific simulations. The project will combine failure analysis, open-source software, reproducible benchmarks, and educational resources so that researchers can recognize unreliable behavior while a simulation is running, rather than discovering it only through visual inspection or after-the-fact error analysis.

The initial testbed will use computationally affordable one-dimensional fluid simulations, including compressible-flow, shock-dominated, detonation, and combustion problems. These cases are challenging enough to expose important ML and reduced-order modeling failures while remaining practical to reproduce and study systematically. The software interfaces will be designed so researchers in other scientific domains can extend the framework to their own workflows.

The project has four main objectives:

1. **Build a taxonomy of silent failure modes**

I’ll review documented failures across scientific machine learning, computational physics, reduced-order modeling, and software reliability research. These findings will be organized into a structured taxonomy and database describing each failure mode, its likely causes, observable signatures, physical consequences, and possible detection strategies.

The taxonomy will give researchers a shared vocabulary for distinguishing problems such as conservation drift, inadequate training coverage, invalid reduced spaces, unstable learned dynamics, and gradual movement toward physically inadmissible states.

2. **Develop an open-source runtime diagnostic library**

I’ll develop extensible runtime monitors for detecting the failure modes identified in the taxonomy. The library will allow a simulation to report relevant state and metadata to a collection of diagnostics, which can then identify warning signs and alert researchers before the solution becomes misleading or breaks down completely.

Although the first diagnostics will be validated on fluid simulations and reduced-order models, the core interfaces will avoid dependence on a single solver or physical domain.

3. **Create reproducible pathological benchmarks**

I’ll assemble a suite of parameterized simulation cases that deliberately trigger representative silent failures. These cases will serve as a test harness for the diagnostic library and as an open community resource for evaluating other reliability methods.

The benchmark infrastructure will build with data generated with [CompFlowLab](https://github.com/alimike97/CompFlowLab), an existing open-source Python codebase for developing and testing data-driven models for compressible flows with shocks and chemical reactions.

4. **Develop practical educational material**

I’ll create a learning module that introduces reliability monitoring in ML-driven simulations and demonstrates how researchers can integrate runtime diagnostics into their own workflows. The material will be developed alongside the software so that its examples reflect the library’s actual design and use.

## Why It Matters

ML-assisted simulations are becoming common in fluid dynamics, climate modeling, structural mechanics, and other computational fields. These methods create exciting opportunities to reduce computational cost and study systems that would otherwise be prohibitively expensive. But a fast simulation is only useful if researchers can trust the scientific validity of its output.

This project will help:

1. **Make silent failures visible** by providing real-time warnings when a learned component begins to operate outside a reliable physical or statistical regime.

2. **Improve reproducibility** by reducing the risk that published conclusions are based on plausible-looking but physically invalid simulations.

3. **Create a shared reliability vocabulary** that supports collaboration across scientific domains and helps researchers compare detection and mitigation strategies.

4. **Inform future best practices** for validating ML-in-the-loop simulations, complementing the verification and validation frameworks already used in traditional computational science.

5. **Support further research** by providing open benchmarks that others can use to develop, test, and compare new reliability methods.

The taxonomy, diagnostic software, benchmark configurations, examples, and educational resources will be developed openly so that others can inspect, reproduce, extend, and build on the work.

## How We’re Engaging the Community

Community participation is central to the project:

1. **Open Development:** The diagnostic library, failure-mode database, benchmark suite, and educational materials will be developed publicly on GitHub. Issues and discussions will be used to gather examples of failure modes and feedback on terminology, API design, and benchmark scenarios.

2. **Early Community Testing:** An alpha version of the library will be released with preliminary documentation and example workflows. Researchers will be invited to test the diagnostics in their own simulations and report missed detections, false alarms, integration difficulties, and new failure behaviors.

3. **Cross-Domain Validation:** I’ll seek feedback from researchers outside the primary fluid-dynamics testbed to determine whether the interfaces and failure classifications transfer to other physical simulation domains.

4. **Lessons and Presentations:** Progress, results, and practical lessons will be shared through URSSI community events, technical reports, conference outreach, and the Carpentries-style educational module.

## Thank You!

This project is supported by a **$25,000 Early-Career Fellowship with the US Research Software Sustainability Institute (URSSI)** under the **AI/ML and Scientific Software track**.

I’m grateful for the mentorship, community, and financial support that make this work possible. This fellowship provides an opportunity to turn an underappreciated reliability challenge into open and practical resources for the scientific software community.

## Follow the Project

If you’re a scientist, research software engineer, educator, or developer working with ML-driven simulations, I’d be glad to hear about the reliability problems you have encountered. Examples of simulations that looked plausible while silently becoming inaccurate or unphysical are especially valuable to this project.

Project updates, software releases, benchmark cases, and educational materials will be shared openly as the fellowship progresses under this [github repository](https://github.com/alimike97/CompFlowLab).

Stay tuned for the initial failure-mode taxonomy, the first reproducible benchmark cases, and an early version of the runtime diagnostic framework.
