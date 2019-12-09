---
title: "FAIR Software at the 2019 eScience Symposium"
date: 2019-12-09
author: "Ben van Werkhoven (Netherlands eScience Center, NL-RSE),
James Meakin (Radboud UMC, NL-RSE),
Anna-Lena Lamprecht (Utrecht University),
Stephan Druskat (DLR, Humboldt Universität zu Berlin),
Pablo Rodriguez-Sanchez (Netherlands eScience Center)"
---

(reposted from the [Netherlands eScience Center blog](https://blog.esciencecenter.nl/fair-software-at-the-2019-escience-symposium-6117f310aa34))

<img
src="https://www.software.ac.uk/sites/default/files/FAIR%20software.jpg"
alt="drawing" width="512" /><br><small>Image by Netherlands eScience Center</small>

FAIR data has been on everybody’s lips for a while. Many think that FAIR software will become “the next big thing” in eScience. Reasons enough to devote a session at the National eScience Symposium to the discussion of FAIR and its meaning for research software.

James Meakin from Radboud UMC and NL-RSE started by introducing the topic for the session. The [FAIR Guiding Principles](https://doi.org/10.1038/sdata.2016.18) were defined in 2016 for scientific data management and stewardship, aiming to improve the Findability, Accessibility, Interoperability, and Reusability of research data. Given that software is key to modern science, research software should also be FAIR. How can the FAIR principles be applied to software? What should they be? What challenges exist? How do we get there?

The session featured three talks and a panel discussion, with the session’s speakers as panel members. We used the mentimeter Q&A feature to allow the audience to submit and vote on questions and discussion points for the panel discussion at the end of the session.

### Anna-Lena Lamprecht: Towards FAIR principles for Research Software

<img
src="https://www.software.ac.uk/sites/default/files/Anna-Lena%20Lamprecht.jpg"
alt="photo of Anna-Lena Lamprecht speaking" width="512"/><br><small>Photo by de Kort fotografie</small>

Anna-Lena Lamprecht, assistant professor of Software Technology at Utrecht University, presented the main findings from the paper [“Towards FAIR principles for research software”](https://doi.org/10.3233/DS-190026) that she recently published together with several co-authors from the European eScience community: Software and data share some properties, but they are not the same and hence a differentiated interpretation of the FAIR principles is required. For example, one point of ongoing discussion is whether the FAIR principles, which do not demand data to be open, should require software to be open source. Another much-debated relationship has been the one between FAIR and software quality, naturally of great concern in the RSE community. Here it helps to distinguish between form and function of software. FAIR can help to ensure quality of the form of software, but the quality of the functionality of the software goes beyond what FAIR intends to cover.

After these general considerations, Anna-Lena continued with the proposal for FAIR Guiding Principles for software, taking the FAIR data principles as a starting point. Many of the proposed changes are effectively a rephrasing by replacing “(meta)data” with “software and its associated metadata”. Other changes extend or reinterpret the FAIR data principles because software, in contrast to data, is of composite nature, needs to deal with dependencies and evolve along with the changing eScience ecosystems, and hence often comes in different versions.

Perhaps the biggest change from the FAIR data principles is in the following principle (a reinterpretation and extension of the original interoperability principle I2):

“Software use and produce data in types and formats that are formally described using controlled vocabularies that follow the FAIR principles.”

This is remarkable because it requires FAIR software to only work with FAIR data, whereas FAIR data does not require to have been produced by only FAIR software.

[Anna-Lena’s slides](https://www.slideshare.net/annalenalamprecht/towards-fair-principles-for-research-software/) are available.


### Stephan Druskat: Dare to be mair than just FAIR!

<img
src="https://www.software.ac.uk/sites/default/files/Stephan%20Druskat.jpg"
alt="photo of Stephan Druskat speaking" width="512" /><br><small>Photo by de Kort fotografie</small>

Stephan Druskat is an RSE working in linguistics, and researching software sustainability with a focus on software citation. With his talk titled “Dare to be mair than just FAIR!” Stephan challenged us to think beyond only the FAIR principles.

Of course, making digital objects FAIR is a great step in the right direction for research. FAIR enables easier, better, and open science. The momentum that FAIR has gained also allows us to bring other subjects to the attention of policy makers, including research software engineering, and increase the visibility of software sustainability concerns.

However, FAIR does not imply openness, FAIR does not ensure credit is given where credit is due, and FAIR does not give any guarantees with regard to quality. Stephan suggests that we should perhaps consider “FAIR PLAY” as the application of FAIR principles to software where useful, augmented with rigorously good practice for research software: open sourcing it per default, licensing it respectively, attributing contributions to it for credit, and asserting adequate quality. FAIR PLAY is essentially the good things of FAIR combined with the good things of RSEing.

An important part of giving proper attribution is to make your software citable and to cite others when you build upon their work. Stephan and others have developed the Citation File Format (https://citation-file-format.github.io/), a metadata format for both humans and machines. While these citation files can be read and manually written, there is also an entire toolbox available to support creation, validation, and conversion of CFF files, and automation is on the horizon, with build plugins and automated updates.

[Stephan’s slides](https://sdruskat.net/2019-11-21-nl-escience-symposium/) are available.


### Pablo Rodríguez-Sánchez: How software development shaped the way I write science

<img src="https://www.software.ac.uk/sites/default/files/Pablo%20Rodr%C3%ADguez-Sánchez.jpg"
alt="photo of Pablo Rodríguez-Sánchez speaking" width="512"/><br><small>Photo by de Kort fotografie</small>

Pablo Rodríguez-Sánchez is working as an RSE at the Netherlands eScience Center. His talk was about how software development shaped the way he writes about his research.

With a great example of communication between Johannes Kepler and Galileo Galilei, Pablo confronted the audience with the fact that, despite great advances in the means of information and communication technology, some parts of scientific communication have not improved over the last four hundred years.

Pablo defines a scientific paper as a trustworthy and useful piece of encapsulated knowledge, and argues that there are actually many parallels between scientific papers and software. Both should adhere to the properties: consistency, reproducibility, being properly written, having references/dependencies, written by a team, and evolving over time. Instead of only using software development tools to write his paper, Pablo, inspired in what [other researchers](https://www.carlboettiger.info/2012/05/06/research-workflow.html) did before, takes it one step further and writes software packages whose output is the paper.

Using a combination of markdown and knitr, Pablo writes his papers as software packages in a way that all of the content of the paper, graphs and all can be fully reproduced by others who run the software.

[Pablo’s slides](https://pabrod.github.io/NLeSC_symp19-en.html#NLeSC_symp19) are available.

### Panel Discussion

Following the three talks, our speakers gathered on one side of the table for the panel discussion. While Ben was chairing the discussion, James was analyzing the questions that were submitted to mentimeter. The discussion involved questions such as:

* What does metadata mean in the context of software?
* How to make software dependencies FAIR as well?
* Should FAIR Software imply open source?
* Does FAIR/Open Software conflict with the university’s striving for spin-offs/patents/commercialization?
* The discussions are all quite abstract, what can we do concretely?

Anna-Lena, Stephan, Pablo and also several attendees of the session shared their insights, experiences, perspectives and some speculations, making it a lively and inspiring session.

With regard to the question what to do concretely, Pablo mentioned “that the main bottleneck for FAIR software is, still, much more basic: many researchers who would like to share their code with FAIRness just don’t know how to begin.” In an effort to provide some concrete pointers on where to begin with making software FAIR, the Netherlands eScience Center and DANS developed [fair-software.nl](https://fair-software.nl), which was officially launched later that day at the symposium.

If you would like to join the discussion on FAIR Software, the session’s organizers and the speakers of this session will be using the #fair-software on the [UK RSE slack server](http://ukrse.slack.com/) to continue the discussion on FAIR Software.
