---
title: "Essential Open Source Software for Science: Supporting the Computational Foundations of Biology"
date: 2019-07-08
author: "Dario Taraborelli, Jeremy Freeman, Nicholas Sofroniew"
---

(reposted from [Chan Zuckerberg Initiative Science Medium](https://medium.com/@cziscience/essential-open-source-software-for-science-72faec2c38c1))


Open source software is a key ingredient of modern science. Hundreds of software packages, libraries, and applications have become essential tools. Whether it’s searching a genome sequence for a disease gene, counting cells in a microscope image, or tracking the evolution of an Ebola outbreak, software is critical to the work scientists do every day — and much of it is built by researchers who volunteer their time and effort to make their tools available and usable by others. Despite its importance, the majority of open source software is undervalued and lacks funding for maintenance, growth, development, and community engagement — especially after its initial phase.

<img src="https://miro.medium.com/max/1400/1*95dOJAirJw0awxv62LUSVg.png" alt="drawing" width="700"/>


Many critical tools begin with government funding. From 1995 through 2016, for example, the National Science Foundation made over 18,000 awards to projects referencing “software” in their abstracts, for a [total of $9.6 billion](https://ieeexplore.ieee.org/document/8358036). Such funding, however, tends to focus on software at an early stage, when it is linked to novel scientific research. Projects often suffer from a lack of investment a few years into development, which is, paradoxically, right when they start to become widely used. As [researchers](https://doi.org/10.1371/journal.pcbi.1002802) studying this ecosystem have noted, “grant-based funding is often exhausted shortly after new software is released, and without support, in-house maintenance of the software and the systems it depends on becomes a struggle.”

We have encountered these same dynamics in the scientific communities with which we work. CZI Science has primarily supported domain-specific biomedical research, and in several of those domains, we have funded open source software developers. For instance, through the global [Human Cell Atlas](https://www.humancellatlas.org/) project, we have collaborated with and provided grants to labs building computational tools such as [Seurat](https://satijalab.org/seurat/), [Scanpy](https://scanpy.readthedocs.io/en/stable/), and [Bioconductor](https://www.bioconductor.org/) — each of which play a critical role in the rapidly advancing area of single-cell transcriptomics analysis.

<img src="https://miro.medium.com/max/1024/0*jaRC76ACtRl1uXIM" alt="drawing" width="500"/>

*Speckle counting pipeline in CellProfiler showing how to identify smaller objects within nuclei. Photo courtesy [CellProfiler](https://cellprofiler.org/examples/#speckle-counting).*

Through our [Imaging Software Fellows](https://chanzuckerberg.com/newsroom/czi-announces-support-for-open-source-software-efforts-to-improve-biomedical-imaging/) program, we have supported three open source software projects — [scikit-image](https://scikit-image.org/), [FIJI / ImageJ](https://imagej.net/Welcome), and [CellProfiler](https://cellprofiler.org/) — which collectively have tens of thousands of users and citations and are critical to the analysis and visualization of microscopy data. In some cases, this is the first time these groups have received dedicated funding for software development.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Folks, this is huge! <br>Biologists count on open-source software everyday and yet it is so hard to find funding to support engineers to maintain and develop it. Way to go CZI!! 🎉🎉🎉 <a href="https://t.co/wddREjpKvJ">https://t.co/wddREjpKvJ</a></p>&mdash; Anne Carpenter (@DrAnneCarpenter) <a href="https://twitter.com/DrAnneCarpenter/status/1070768613555142658?ref_src=twsrc%5Etfw">December 6, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Our conversations with the broader biomedical community — including those outside the domains of cell biology and microscopy — have reinforced that many projects are in the same situation. The open source software we work on at CZI also critically depends on many of these same tools and libraries, whether for single-cell image analysis ([starfish](https://github.com/spacetx/starfish)), single-cell visualization ([cellxgene](https://github.com/chanzuckerberg/cellxgene)), microscopy ([napari](https://github.com/napari/napari)), or infectious disease ([IDseq](https://github.com/chanzuckerberg/idseq-web)).

These experiences motivated us to design a new program to support open source software essential to modern scientific research. You can read all the details in the [request for applications](https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/).

We followed two guiding principles in creating this opportunity:

* First, we didn’t want to limit funding to pure software development. **Open source is more than just writing code.** It includes improving documentation, addressing usability, managing the project, and building community. We want to provide opportunities in whatever form will help make the computational foundations of biological research more usable and robust.

* Second, we wanted to be **inclusive in defining the scope of what counts as essential software for biomedical research.** The proposed work does not need to be tied to novel research. Additionally, both domain-specific software and foundational tools and infrastructure used across several domains of science will be eligible to apply, so long as they have some impact in biomedical science. Such foundational tools can range from data structures to numerical computation libraries to toolkits for workflow execution and reproducibility. These tools play a critical role, often acting as dependencies for more domain-specific tools.

This request for applications is the first of a series. CZI will invite applications during three distinct cycles, with rounds beginning in June 2019, December 2019, and June 2020. You can [sign up for our mailing list](https://us5.list-manage.com/subscribe?u=79f50c0d0474ff43dffedabda&id=54d3511fe0) to receive updates. We are planning three cycles to learn and, in part, address the limitations of one-time funding opportunities, and will be sharing lessons learned in the process.

While we’re excited to strengthen the foundations of open source software in science, we’re not expecting this program to fund the following:

* Software tools that primarily serve domains outside biomedical science;

* Early-stage prototypes, as we believe these efforts are better supported by existing funding mechanisms; or
* Scholarly infrastructure for collecting and sharing manuscripts, data, or metadata, as 

CZI is strengthening these areas through different mechanisms.

This call is open to eligible applicants from across the world, and is not limited to software development in academic contexts, so we can support people in different roles and on various career paths.

> *Applications open June 18, 2019 at 9 a.m. Pacific Time. Please help us spread the word! For more information, including deadlines and application instructions, please [visit CZI’s website](https://chanzuckerberg.com/rfa/essential-open-source-software-for-science/). For administrative and programmatic inquiries, technical assistance, or other questions pertaining to this RFA, please contact [sciencegrants@chanzuckerberg.com](mailto:sciencegrants@chanzuckerberg.com).*

Our hope with this program is to provide much-needed funding to fill critical gaps in the current ecosystem, raise the visibility of how critical these software projects are to science, and provide enough stability for them to better engage with their users and contributors. By improving these tools and strengthening the communities behind them, we hope to both accelerate the rate of discovery in biology, and also inspire others to join us in sustaining this key ingredient of modern science.

We want to thank everyone who has helped us develop this program for their advice and insight, and we look forward to continuing to work with the open source community. Special thanks to:

* Titus Brown, [@ctitusbrown](http://twitter.com/ctitusbrown)

* Martin Fenner, [@mfenner](http://twitter.com/mfenner)

* Josh Greenberg, [@epistemographer](http://twitter.com/epistemographer)

* James Howison, [@jameshowison](http://twitter.com/jameshowison)

* Daniel Katz, [@danielskatz](http://twitter.com/danielskatz)

* Chris Mentzel, [@chrismentzel](http://twitter.com/chrismentzel)

* Jason Priem, [@jasonpriem](http://twitter.com/jasonpriem)

* Karthik Ram, [@_inundata](http://twitter.com/_inundata)

* Danielle Robinson, [@daniellecrobins](http://twitter.com/daniellecrobins)

* Matthew Rocklin, [@mrocklin](http://twitter.com/mrocklin)

* Leah Silen, [@leahsilen](http://twitter.com/leahsilen)

* Tracy Teal, [@tracykteal](http://twitter.com/tracykteal)

* Andy Terrel, [@aterrel](http://twitter.com/aterrel)

* Nelle Varoquaux, [@nvaroqua‏](http://twitter.com/nvaroqua)

* Luis Villa, [@luis_in_brief](http://twitter.com/luis_in_brief)

To learn more about our work, [visit our website](https://www.chanzuckerberg.com/science) or [follow us on Twitter](https://twitter.com/cziscience).

*Dario Taraborelli, Science Program Officer, Open Science*

Dario is a social computing researcher and an open knowledge advocate. As the Science Program Officer for Open Science at CZI, his goal is to build programs and technology to support open, reproducible, and accessible research. Prior to joining CZI, he served as the Director, Head of Research at the Wikimedia Foundation, the non-profit that operates Wikipedia and its sister projects. As a co-author of the Altmetrics Manifesto, a co-founder of the Initiative for Open Citations, and a long-standing open access advocate, he has been designing systems and programs to accelerate the discoverability and reuse of scientific knowledge by scholars, policy makers, and the general public alike.

*Jeremy Freeman, Director, Computational Biology*

Jeremy is a scientist at the intersection of biology and technology. He wants to understand how biological systems work, and use that understanding to benefit both human health and the design of intelligent systems. He studied computational vision in grad school at NYU, led a neuroscience research lab at HHMI’s Janelia Research Campus, and is currently at CZI leading work at the intersection of computation and biology. He is passionate about open source and open science, and bringing scientists and engineers together across a range of fields.

*Nicholas Sofroniew, Computational Biologist*

Nicholas is a computational biologist at CZI, helping to develop, support, and disseminate tools that will accelerate science. He studied mathematics at the University of Cambridge, followed by a PhD and Post-Doc at HHMI’s Janelia Research Campus working in systems neuroscience, microscopy, and image analysis. At CZI, he focuses on projects in neurodegeneration, imaging, and open science.