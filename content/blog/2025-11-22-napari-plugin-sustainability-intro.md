---
title: "URSSI Fall 2025 Fellowship: Building Sustainable Plugin Ecosystems in Scientific Software"
date: 2025-11-24
author: "Tim Monko"
---

Foundational scientific software tools deliver innovative, yet reliable methods for research across multiple domains.
These tools often rely on community expansion by "downstream" libraries to meet domain-specific needs. [napari](https://napari.org/), an open-source, multidimensional imagee viewer for Python, provides core infrastructure for visualizing and annotating scientific imaging data. Its extendable GUI has empowered a diverse ecosystem of over 550 [community-developed plugins](https://napari-hub.org/) (i.e., downstream libraries). Since the public announcement of napari in 2019 and the addition of plugin support soon after, collaboration among core contributors, plugin authors, and users has enabled research workflows that no single library could accomplish alone.

One advantage of napari and its plugin ecosystem is that it enables advanced scientific processing, without necessarily requiring any code! This lowers the barrier to entry for domain scientists who may be beginners to writing code, but need powerful tools to analyze their data. Then, as users meet the limits of available resources, they can learn to extend napari and their image analysis with their own code. In this way, napari serves as an *entry point* into scientific programming for many researchers, just like other foundational scientific software tools.

The napari project maintains key infrastructure for plugin developers and users, including an easily searchable [napari-hub](https://napari-hub.org/) website, a GUI to easily download plugins with the [napari-plugin-manager](https://github.com/napari/napari-plugin-manager), and tools to easily create plugins (including [documentation](https://napari.org/stable/plugins/index.html) and the [napari-plugin-template](http://github.com/napari/napari-plugin-template)). In recent years, collaboration between plugin developers and the napari core team has declined. This has led to challenges in maintaining a healthy plugin ecosystem, with many developers struggling to keep their plugins up to date and aligned with napari's evolving architecture. This sustainability problem is not unique to napari; its a pattern repeated across scientific software, where the relationship between foundational tools and their domain-specific extensions takes on a transactional nature, rather than a collaborative one.
(You can read more about sustainability efforts in core napari at this [recent blog post](https://napari.org/island-dispatch/blog/sustainability_survey.html).)

With financial support from the [United States Research Software Sustainability Institute (URSSI) Early Career Fellowship](https://urssi.us/blog/2025/07/02/call-for-proposals-urssi-early-career-fellows-round-2/), I've been working with the napari community to improve the plugin ecosystem's sustainability. Our goal is to build infrastructure and practices that other scientific software communities can learn from and adapt to meet their own needs.

## How I got here

In 2022, I was drawn in by a community and [Chan Zuckerberg Initiative (CZI)](https://chanzuckerberg.com/) promotion of napari as a *fast* image viewer ready for the needs of complex, large, modern scientific imaging data. In addition, the already present plugins included a number of incredibly powerful extensions that made analysis work possible without me having to know any Python. The napari plugin ecosystem was still in its infancy, but was bolstered by a number of [CZI plugin grants](https://chanzuckerberg.com/rfa/napari-plugin-grants/), the [napari plugin template](https://github.com/napari/napari-plugin-template), and a growing community of enthusiastic developers reaching out to the scientific community. Most importantly, the napari community created welcoming instructional material for new users and developers to get started.

In this way, I would describe my entry into Python as mainly influenced by learning to use napari for my own scientific research. To that end, I started developing [napari-ndev](https://ndev-kit.github.io/) as a way to bring bioimage analysis tools to my collaborators, and with the goal of bringing tools, like reproducible high-throughput analyses to napari, something that I felt was missing at the time. Without the opportunity to contribute a plugin, I never would have had the learning experience that led me to become a core contributor and community manager for napari.

## How ecosystems drift apart

The early growth of the plugin ecosystem was very exciting, but it also came with challenges: the plugin system was still maturing, many developers were new to Python and packaging, and there was little infrastructure for long-term maintenance. As initial funding ended and excitement waned, the reality of maintaining research software reared its head.

- Many plugins were built on top of rapidly evolving napari APIs, even if the project made efforts to inform about the instability of these features.
- Plugins, often developed by domain scientists, had slowed maintenance or stopped receiving updates altogether.
- Other libraries that were dependencies of the ecosystem evolved independently, causing compatibility issues.

Our 2023 napari survey captured this disconnect well: 86% of respondents said creating a plugin was easy, but many mentioned the burden of maintenance. Year over year in the surveys, respondents felt it was getting harder to contribute to napari core and maintain plugins. In community meetings and discussions, certain pain points keep coming up: lacking plugin discoverability and quality assesment, dependency hell due to complex environments, deep learning and GPU-accelerated tooling, confusion about what belong in core napari versus what should be a plugin, and maybe most tellingly, that domain scientists writing research software don't have the time, resources, or expertise to maintain software. Ultimately, there is no clear path for the ecosystem to become sustainable.

## But, what about users?

A further consideration with all of this is that *these plugins are often critical to the workflows of their users*. This creates a trust issue in the ecosystem, where users may be hesitant to adopt new version of napari, novel plugins or update existing setups, fearing that they may become unsupported or break their workflows. Afterall, scientific research often depends on reproducibility and stability, and when the tools they rely on are in flux, it can hinder progress. Unfortunately, this pattern eventually led to a drifting apart beween forming between the napari core team and the plugin ecosystem, with communication becoming quieter and trust decreasing. The disconnect went both ways; plugin developers and users felt dependent on napari but disconnected from where it was headed. Core contributors, focused on stabilizing napari itself, had lost touch with what the broader ecosystem needed.

## Insights from the community

Initiation of this project involved [recruiting](https://napari.zulipchat.com/#narrow/channel/212875-general/topic/Announcing.20the.20plugin.20sustainability.20initiative!/with/544624119) community members from as many communities as possible and establishing the Plugin Sustainability Initiative. The working group [meets at different times](https://napari.org/stable/community/meeting_schedule.html) for global participation and includes members from diverse scientific (many different career levels and roles) and napari (ie. core team, plugin developers, and users) backgrounds. The most surprising part of the [working group outcomes](https://hackmd.io/@napari/plugin-wg) hasn't been the list of familiar challenges, but instead how much the community *wants to help build and shape solutions*.

Plugin developers have volunteered to review each other's work. Instructors have offered to write documentation about Git and GitHub basics. Active developers have suggested programs where unmaintained plugins could find new maintainers. The coversation was never "what should napari do for us?" but rather "how can we work together to make this better?"

In one of the working group meetings it was said well: plugin developers often see the core napari team as shephereds of the whole ecosystem, but at the same time, plugin developers rely on the core team in ways the core team doesn't always know about and can't always support. Ultimately, people want ways to be involved more broadly with the *whole ecosystem* without necessarily having to contribute to the core tools, we just need to send out the invitations and build the right infrastracture to make this possible.

## What we're building, together

The Plugin Sustainability Initiative has indentified three main objectives:

### 1. Modernize plugin development infrastructure

We're updating the [napari-plugin-template](http://github.com/napari/napari-plugin-template) and [documentation](https://napari.org/stable/plugins/index.html) to follow current best practices from resources including the venerable [PyOpenSci](https://www.pyopensci.org/),[Scientific Python](https://scientific-python.org/), and [Python Packaging User Guide](https://packaging.python.org/en/latest/). These new and updated resources will tailored to different experience levels, so that both beginners and experienced developers have personalized napari-specific guidance. This includes:

- Clearer guidance for people new to Python packaging, Git, Github, testing, and continuous integration
- Better documentation of sustainable design patterns, like how to separate computational code from user interface code from visualization code
- Create clear, real-world-tested upgrade paths for existing plugins to adopt modern best practices
- Create guidance for thinking about plugin interoperability and long term functionality by thinking carefully about dependencies and environment manager
- Introduce documentation around modern tools for building and distributing reproducible python environments with [uv](https://docs.astral.sh/uv/) and [Pixi](https://pixi.sh/latest/)

### 2. Build community review systems

We're establishing both automated and human review processes to help plugin developers incorporate personalized feedback. The goal is to improve initial plugin quality, with better tooling and best practices, and then to create ongoing feedback loops for improved longterm maintenance.

- **Automated tools:** We're developing a tool for gathering and evaluating napari plugins, inspired by efforts like [SciPy's repo review](https://scipy.github.io/devdocs/dev/contributor_guide/repo_review.html) and [napari-hub-cli](https://github.com/chanzuckerberg/napari-hub-cli). This will provide early feedback on common issues and suggest improvements to align with best practices. In addition, we will analyze plugin metrics gathered with [npe2api](https://github.com/napari/npe2api) to provide higher quality information about plugin sustainability.
- **Human review:** Inspired by PyOpenSci's [peer review model](https://www.pyopensci.org/about-peer-review/), we will set up a system where experienced community members provide constructive feedback on plugin maintainability, discoverability, and best practices. We hope to setup a similar partnership with [Journal of Open Source Science (JOSS)](https://joss.theoj.org/) [as PyOpenSci](https://www.pyopensci.org/software-peer-review/partners/joss.html), and use this as an opportunity to help fasttrack plugins to publications in JOSS. Community members have already volunteered time to serve as peer reviewers, including ideas such as live video review session.

These approaches will work together to improve developer experience, plugin quality, and user satisfaction.

### 3. Better communication, discoverability, and recognition

The community has expressed a desire to improve discoverability of their plugins and recognition of their efforts.
This system will benefit the entire ecosystem by demonstrating maturity and collaboration. The automated tooling and review system will be the foundation of this effort, but a recognition program will be used to incentivize collaborative participation and long-term maintenance. We hope to build on models like [Astropy's affiliate program](https://www.astropy.org/affiliated/index.html). We're figuring out how to:

- Identify high quality plugin contributions across different domains
- Improve plugin discoverability on the [napari hub](https://napari-hub.org/) with new metadata
- Make collaborative maintenance easier and less intimidating
- Enable plugin donation programs where maintainers can hand off plugins to new stewards
- Support maintainer partnerships, potentially through a napari-plugins GitHub organization
- Improve communication about napari API changes and new features that may impact plugins

## How we're engaging the community

Open collaboration is central to this project:

1. **Open resources**: The updated plugin template, review tools, and documentation will all be published under permissive licenses with documentation for how to adapt them
2. **Collaborative working group**: We meet at multiple times for global participation, with open Zulip and GitHub channels for async discussion
3. **Transparent process**: We share regular updates with the community about what we're doing and why
4. **Cross-community learning**: We're planning to share what we learn at conferences like SciPy and through blog posts and documentation

## Why it matters beyond napari

These challenges—sustaining domain-specific extensions, coordinating between foundational and downstream projects, supporting novice contributors while maintaining quality—aren't unique to napari. They show up across scientific software, from Python's scientific ecosystem to astronomy tools to geosciences platforms.

What might be transferable from this work isn't any particular piece of technology, but the approach of:

1. **Thinking about extensions as collaborative partners** with the core project, not external add-ons
2. **Creating shared ownership** through working groups that include both core and extension developers
3. **Building infrastructure for collaboration**, not just distribution—review systems, donation programs, maintainer partnerships
4. **Enabling cross-domain learning** where advances in one field benefit others through upstream contributions
5. **Recognizing all kinds of contributions** across the ecosystem to support developers and users

Our work will produce:

- Documentation of sustainable practices for coordinating foundational tools and their extensions
- Reusable infrastructure (templates, review tools, affiliation models) that other projects can adapt
- Lessons learned about community engagement across diverse groups
- Support for other projects facing similar challenges

Everything we create—updated templates, review tools, documentation—will be open source and documented so other communities can use and adapt it.

## Thank you

This project is supported by the URSSI Early Career Fellowship, with funding from the Sloan Foundation. The fellowship gives me both research support and the opportunity to engage deeply with the scientific software community.

Without this support, building these relationships and infrastructure wouldn't be possible. Thank you to URSSI and the Sloan Foundation for making this work possible, and to the napari community for showing up and being willing to build this together.

Honestly, the most important outcome isn't any particular tool or program—it's the collaborative relationship between napari and its plugin ecosystem feeling healthier than it has in a while. When foundational tools and their extensions work together, everyone benefits: developers don't duplicate effort, users get more reliable tools, and research moves forward on steadier ground.

## Contact and follow along

If you're working on scientific software with an extension ecosystem, or if you're curious about sustainability practices for open source communities, we would love to hear from you.

You can follow our progress and join the conversations on [Zulip](https://napari.zulipchat.com/). This blog post has a [companion post on the napari blog](https://napari.org/island-dispatch/), which you can follow for more technical details and community-specific context. We'll be sharing updates on infrastructure releases, insights from the working group, and early results from the affiliation program over the coming months.
