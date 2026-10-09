---
title: "Can AI agents keep scientific software interfaces alive?"
date: 2026-08-01
author: "Su Sun"
---

## The problem hiding in plain sight

Most scientific software you use is not written in the language you call it from.
A combustion researcher writes a few lines of MATLAB; underneath, a large C++
library does the real work. That translation layer — the **interface** — is what
makes powerful compiled libraries usable from high-level languages like Python,
MATLAB, R, or Julia.

Interfaces are quietly essential, and equally fragile. Every time the underlying
library changes its API, or the language's tooling for generating bindings
shifts, or a packaging system updates, the interface can drift out of sync. The
result is familiar to anyone who maintains scientific software: stale
documentation, examples that no longer run, and releases that break on one
platform but not another. Keeping an interface healthy is labor-intensive,
repetitive, and easy to get wrong — exactly the kind of work that rarely gets
funded and quietly falls behind.

## Why Cantera

[**Cantera**](https://cantera.org) is a widely used open-source toolkit for chemical
kinetics, thermodynamics, and species transport, with applications across
combustion, catalysis, electrochemistry, and atmospheric chemistry.
It is written in C++ and exposes its functionality through interfaces to
Python, MATLAB, C, and Fortran.
Cantera 3.2.0 alone saw over 18,600 conda-forge downloads in six months — this is
software that a lot of people rely on.

I maintain the [**Cantera MATLAB interface**](https://cantera.org/stable/matlab/index.html). Over the past three years I have
rebuilt the MATLAB toolbox through *two* major architectural overhauls, forced by
changes in MATLAB's interface-generation technology and the sunsetting of legacy
features. Both transitions introduced breaking changes and demanded a great deal
of careful, manual effort. That experience is frustrating — but it also makes me
an ideal test subject. I know exactly how much work this maintenance takes,
because I have done it by hand.

## The question

Agentic AI tools — systems that can read code, run tests, and iterate toward a
goal — are getting good at exactly the kind of repetitive, context-heavy work
that interface maintenance demands. So the central question of this project is:

> **Under what conditions can agentic tools support *release-quality* maintenance
> of scientific software interfaces, and what recurring failure modes require
> automated validation, human review, or both?**

The emphasis on *release-quality* matters. It is one thing for an AI agent to
produce something that looks plausible; it is another for that output to be
correct enough to ship to thousands of users. The interesting research is not
"can AI write a wrapper?" but "when can we *trust* it to, and how do we catch it
when we can't?"

## The game plan

Over six months, the project pursues four objectives:

1. **Map the maintenance workflow.** Document how changes in the upstream C++
   library propagate all the way out to MATLAB-facing wrappers, documentation,
   examples, tests, packaging, and releases. You cannot automate what you have
   not mapped.
2. **Prototype AI-assisted workflows.** Evaluate where agentic tools — such as
   the MATLAB Agentic Toolkit — can genuinely help: updating wrappers as the
   Cantera API evolves, adapting existing C++ documentation and examples into
   idiomatic MATLAB, and validating the results.
3. **Build validation checks.** Automated checks to catch executable failures,
   API mismatches, and numerical regressions; structured human review for the
   things automation can't judge — semantic quality, usability, and whether the
   code *feels* like MATLAB.
4. **Produce reusable community artifacts.** Not just results for Cantera, but a
   workflow template, a validation checklist, example CI/test components, a
   case-study report, a failure-mode analysis, and a sketch of how this transfers
   to other multi-language interfaces.

## Beyond Cantera

Although Cantera MATLAB is the case study, the goal is transferable practice.
Many education, engineering, and industrial users live in MATLAB, while most
open-source scientific software is built around Python and compiled libraries.
Bridging that gap reliably — and making the bridge *maintainable* — is a problem
far larger than any one library. As a transferability check, I'll sketch how the
same workflow could apply to a different domain, such as a Python-to-MATLAB
bridge for climate data access.

I'll be working in the open on the [project website](https://ssun30.github.io/urssi-cantera-matlab-agentic-workflows/)
throughout. The next post will share progress, an interesting finding, or an
honest account of something that went wrong. If any of this is relevant to
software you maintain, I'd love your feedback.

---

*This work was supported by the US Research Software Sustainability Institute
(URSSI) via grant G-2022-19347 from the Sloan Foundation.*
