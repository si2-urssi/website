---
title: "Winter 2025 URSSI Fellowship Report: Principled Data Processing"
date: 2025-12-09
author: "Sam Zhang"
---

During my time as a [Winter 2025 URSSI Early-Career Fellow](https://urssi.us/blog/2025/04/25/urssi-welcomes-first-early-career-fellows/), I worked on making the workflow called Principled Data Processing (PDP) more accessible to academic scientists by developing a Python tool that provides a simple command-line interface for scaffolding, running, and sharing workflows based on PDP. PDP is a framework for organizing data science workflows for reproducibility and auditability, developed at the Human Rights Data Analysis Group (HRDAG) in service of their forensic human rights work in order to fulfill their obligation to archive analyses for posterity.

In general, PDP organizes projects according to tasks, which are directories in the file system. Each task may contain folders for input, output, and src, as well as a Makefile  for running that task. Tasks read from their own inputs (or other tasks’ outputs), but importantly, only ever write to their own output folder, which is never read from again by the same task. This helps prevent the most common anti-pattern in data analysis workflows, which is that files are both written into and from the same data folder.

MyOur goal at the start of the fellowship was to create a tool that would make PDP more accessible to academic researchers. PDP is a well-developed workflow within HRDAG, but for its broader adoption into the scientific community, certain conventions could be written into code. For instance, the fact that input and output folders are typically ignored in git, so that data can be archived separately from source code, means that the input and output folders don’t actually exist at the time that the project is cloned. Our tool implements a simple ergonomic shorthand (pdp scaffold) that creates those empty folders, making it easy for someone joining a project using pdp to initialize their own folder structure.

# Project outcomes

I’m grateful to URSSI and the Sloan Foundation for the fellowship, which funded:

* applying PDP toward the code for a [2025 paper in _Nature Communications_](https://www.nature.com/articles/s41467-025-64732-0),
* a collaborative research trip to the [Human Rights Data Analysis Group](https://hrdag.org) in San Francisco,
* an open-sourced tool with 100% test coverage now released on on github at [samzhang111/pdp](https://github.com/samzhang111/pdp)
* ...and corresponding package on [on PyPI](https://pypi.org/project/pdp-helper/), available with `pip install pdp-helper`.

Please leave issues on github, or reach out directly at sam.zhang@uvm.edu!
