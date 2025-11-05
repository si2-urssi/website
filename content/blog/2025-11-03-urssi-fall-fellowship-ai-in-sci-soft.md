---
title: "URSSI Fall Fellowship: Characterizing the Impact of LLM-Generated Code in Scientific Software"
date: 2025-11-03
author: "Eva Maxfield Brown, David Farr, and Shahan Ali Memon"
---

## When AI Starts Writing Scientific Software

As a multi-purpose technology, large language models (LLMs) have rapidly been integrated across industries including academia and software development. From suggesting syntax to writing full functions, they’ve transformed the possibilities for how scientists build and maintain research software.

However, the speed and convenience of LLMs comes with trade-offs. Scientific software often lives at the frontier of discovery, where a subtle bug or misused library can distort an entire analysis[^1]. As researchers increasingly use tools like ChatGPT or Claude to write code, we face a new question:

> How is AI-generated code changing the structure, reliability, and culture of scientific software?

[^1]: [O'Brien (2025)](https://doi.org/10.1145/3706598.3713668) finds that researchers who have used generative AI for code assistance in their work typically rely on verification strategies such as "eyeballing" which ultimately did not work and as a result, the LLMs "introduced unplanned or incorrect elements into research code."

## What We’re Building

We’re launching a six-month study to analyze the impact of AI-assisted code in open-source scientific repositories. Our goal is to produce quantitative and qualitative analyses of scientific software repositories spanning the past decade, documenting several metrics along the way that may point to a change in scientific software associated with the advent of LLMs. 

Our project has three main objectives:

1. **Build a dataset of scientific source code**

We’re curating a dataset of paired scientific publications and their associated source-code repositories which are publicly hosted on GitHub. The source-code repositories include a mix of "analysis repositories" (repositories which store the analysis code and visualization scripts for a publication) and  "research tools" (general purpose libraries and reusable tools typically attached to 'software papers'). In addition, our dataset includes repositories with development activity from 2015 (“pre-Gen AI”) to more recent projects possibly influenced by AI tools, including a subset of repositories that span both pre-Gen AI and post-Gen AI time periods.

2. **Detecting AI-assisted vs. human-authored code**

We’re evaluating multiple classification models that may identify LLM-assisted code through a mix of features and metrics including comments, variable naming, and modularity[^2]. We plan on applying these models across a large-sample of our constructed dataset in order to estimate the prevalence of AI code assistance in scientific research.

[^2]: For example, [Shi et al., 2025](https://doi.org/10.1109/ICSE55347.2025.00005) provide `DetectCodeGPT`. [Xu and Sheng, 2024](https://doi.org/10.1609/aaai.v38i21.30361) provide `AIG Code Detector`. And, [Oedingen et al., 2025]( https://doi.org/10.48550/arXiv.2405.15512) provide a few options across multiple models.

3. **Understand broader impacts on scientific practice**

We plan on using quantitative metrics for code organization (e.g., lines of code, lines of comments), development patterns (e.g., commit burstiness), and collaboration (e.g., contributor specialization) to understand how scientific software development practices as a whole have changed over time, and especially between samples of AI assisted versus human-written code. Finally, we aim to identify the potential benefits (e.g., more documentation and basic reproducibility) and risks (e.g., logical errors and increased code churn) introduced by generative AI in science.

## Why It Matters

The scientific software community has potentially entered an era where code can be rapidly prototyped, deployed, and integrated into research processes. This brings exciting opportunities for productivity and creativity, but also raises challenges for transparency, trust, and correctness.

Our findings will help:

1. Characterize the change in scientific software practices since the advent of LLMs.

2. Inform, engage, and empower the scientific software community—maintainers, developers, and users alike—to engage critically and collaboratively with the growing role of AI-generated code.

3. Encourage reproducible science by improving awareness of how AI contributions shape research codebases.

All datasets, software, and models we create will be open-source, enabling others to build on our work.

## How We’re Engaging the Community

A central part of the project is collaboration with the research software community:

1. **Open Resources:** We’ll publish our dataset, selected detection models, and analysis scripts under a permissive license, along with thorough documentation.

2. **Collaborative Feedback:** We plan on inviting scientific software maintainers and computational researchers to share feedback on integration strategies, best practices, or general collaboration.

3. **Workshops and Presentations:** We plan to share progress and results, focusing on practical takeaways for the community.

## Thank You!

This project is supported by a **$25,000 fellowship with the US Research Software Sustainability Institute**, with funding from the **Sloan Foundation**. The fellowship includes a research stipend and funding for computing resources, LLM API access, and travel to conferences for disseminating our findings.

Without this support, our project would not be possible. Thank you for providing both the mentorship and funding that make this research possible and for helping us continue advancing the responsible use of AI in scientific software.

## Contact Us

If you’re a scientist, research software engineer, or just curious about the intersection of AI and scientific software, follow our updates here! 

We’ll share progress, data releases, and findings here as the project evolves.

Stay tuned for our first dataset release and early results in the coming months. Also, please reach out at anytime to Eva (evamxb@uw.edu), David (dtfarr@uw.edu), or Shahan (samemon@uw.edu).
