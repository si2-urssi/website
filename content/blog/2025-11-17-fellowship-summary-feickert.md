---
title: "Winter 2025 URSSI Fellowship Report: Reproducible Machine Learning Workflows for Scientists"
date: 2025-11-17
author: "Matthew Feickert"
---

During my [Winter 2025 URSSI Early-Career Fellowship](https://urssi.us/blog/2025/04/25/urssi-welcomes-first-early-career-fellows/) project, I researched how modern technologies and tools can assist researchers in easily creating fully reproducible hardware accelerated software environments for scientific and machine learning workflows.
I compiled the techniques and best practices I had learned into a short course, which I contributed to [The Carpentries Incubator](https://carpentries-incubator.org/), and then taught this open source educational material to the broader scientific community at workshops.

The material focused on using [Pixi](https://pixi.sh/) &mdash; a modern multi-platform software environment manager that builds on the conda and Python package ecosystems &mdash; and [CUDA conda packages distributed on conda-forge](https://github.com/conda-forge/cuda-feedstock/tree/main/recipe).
Pixi is a tool with high-level semantics designed to let users declaratively specify project software requirements and then record the fully resolved ("locked") dependencies in a "lock file".
Written in Rust, Pixi exploits the language's speed and technologies to efficiently resolve complex dependency trees and update the project lock file for _every_ Pixi operation that could affect the software environment.
This means that that if a Pixi project is version controlled, any state of that project is fully reproducible, byte for byte, indefinitely into the future.

Pixi also supports technology to define system level requirements that it expects to have access to, like NVIDIA drivers, that ensures that it resolves the correct versions of packages built against hardware requirements, even if the user machine running the solve does not.
This allows for users to define, resolve, and lock exact software environments for remote machines, which might be a different computing platform.
For example, a user on an ARM-based macOS machine can create fully locked environments for both their machine and x86_64 Linux machines with NVIDIA GPUs.
When combined with optimized builds of the entire CUDA ecosystem distributed as conda packages, researchers can use these powerful technologies in concert to create complex environments for scientific analysis and machine learning that they know will work.

To teach the broader scientific community about these technologies and how to apply them to their research problems, I organized and taught the material at multiple workshops.
I piloted an [early version](https://indico.global/event/14745/) of the workshop for University of Wisconsin&ndash;Madison (UW&ndash;Madison) students and staff.
I then took the information, experience, and feedback I gained there to teach a condensed 4 hour [tutorial](https://matthewfeickert-talks.github.io/reproducible-ml-for-scientists-with-pixi-scipy-2025/) at the SciPy 2025 conference.
This was a special event as I collaborated with and co-taught the tutorial with, Ruben Arts, one of Pixi's lead developers, and, John Kirkham, one of the NVIDIA engineers who lead the work to package the CUDA ecosystem as conda packages &mdash; the literal world experts on the subject matter!
All of this work and revision of the teaching materials culminated in August, 2025 when I ran a [national-level workshop](https://indico.global/event/14982/).
44 participants, from many domains in the physical and data sciences, came to UW&ndash;Madison from 11 universities, national laboratories, research organizations, and companies across the United States to learn how to apply these technologies to their research and production software problems.

Over the three days of the workshop we covered multiple aspects of reproducible science, software environment design, applications to machine learning workflows, and software deployments to remote machines.
Most workshop participants had never heard of Pixi before attending the workshop, and less than a third of them were actively using CUDA accelerated software in their scientific and machine learning workflows.
By the end of the workshop, people were leaving with the knowledge of not only how to apply the technologies to their own problems, but also how to spread this information to their research groups and collaborators.

I hope that the largest impact of this Fellowship project is yet to come, and that this is just the start of these ideas and tools spreading across the scientific community.
I'm encouraged by responses I've received in the long-term follow-up survey to the national-level workshop!
While the survey &mdash; sent three months after the end of the workshop &mdash; had a response rate below 15%, there was unanimous feedback that the workshop changed participant's normal scientific software workflows habits, with Pixi becoming a common tool in the respondents' regular work.
Respondents also all reported sharing the workshop tools with their colleagues and collaborators and using the public and open source workshop educational materials as helpful references.

I'm grateful to have had the opportunity to explore this work and the support of the URSSI Early-Career Fellowship to have done so.
I'm additionally thankful for the support and encouragement provided by Kyle Niemeyer and Nicolas Weber.
This work has positively affected my own scientific software practices in my research career in experimental particle physics and data science, and I look forward to seeing other researchers build and improve on it.

## Project Outcomes

### Workshops and Events

* [Reproducible Machine Learning Workflows for Scientists Workshop Pilot 2025](https://indico.global/event/14745/), Matthew Feickert. June 16-17, 2025.
* [SciPy 2025 tutorial: Reproducible Machine Learning Workflows for Scientists with Pixi](https://github.com/matthewfeickert-talks/reproducible-ml-for-scientists-with-pixi-scipy-2025), Matthew Feickert, Ruben Arts, John Kirkham. July 7, 2025.
* [Reproducible Machine Learning Workflows for Scientists Workshop 2025](https://indico.global/event/14982/), Matthew Feickert. August 12-14, 2025.

### Research Products and Publications

* Matthew Feickert, [Reproducible Machine Learning Workflows for Scientists](https://github.com/carpentries-incubator/reproducible-ml-workflows), 2025. DOI: [10.25080/zenodo.17537698](https://doi.org/10.5281/zenodo.17537698)
* Matthew Feickert, Ruben Arts, John Kirkham, _[Reproducible Machine Learning Workflows for Scientists with Pixi](https://inspirehep.net/literature/3071594)_, Proceedings of 24th International SciPy Conference — SciPy 2025, July, 2025. DOI: [10.25080/nwuf8465](https://doi.org/10.25080/nwuf8465)
* Matthew Feickert, [Feickert URSSI Early-Career Fellowship Report](https://matthewfeickert.github.io/report-urssi-fellowship-2025/). November, 2025.

## Acknowledgements

This work was supported by the US Research Software Sustainability Institute (URSSI) via grant G-2022-19347 from the Sloan Foundation.
This work benefitted from resources and services provided by the University of Wisconsin&ndash;Madison Center for High Throughput Computing, as well as services provided by the OSG Consortium, which is supported by the National Science Foundation awards #2030508 and #2323298.
