---
title: "Fundamentals of Software Sustainability"
date: 2018-10-24T08:53:12-05:00
author: "Daniel S. Katz (University of Illinois Urbana-Champaign)"
draft: "True"
---

(reposted from [Daniel S. Katz's blog](https://danielskatzblog.wordpress.com/2018/09/26/fundamentals-of-software-sustainability/)


This blog post is intended as companion text for a talk I gave at the September 2018 NumFOCUS Project Forum in in New York, though I also hope it stands on its own.

To address software sustainability, it is important first to understand how the term sustainability is used more generally.  It’s most often used in the context of ecology, often specifically in the relationship between humans and the planet. An example of this is from Karl-Henrik Robèrt,  who has said (paraphrased and via Wikipedia) that while natural processes are cyclical, we (humans) process resources linearly. We  consume resources, and convert them in part into waste. This waste doesn’t find its way back into natural cycles; it’s not reused or reassimilated. Robèrt called for life-styles and forms of societal organization based on cyclic processes compatible with the Earth’s natural cycles. I think the key element of this is that sustainability means using cyclic processes that do not use up resources.

## Software sustainability for whom?

If we now want to consider software sustainability, we can look at how different groups understand and use this term.  Specifically, users, funders, managers, and developers (or maintainers) all mean different things when they say sustainable in the context of software.

Users often think of software sustainability as a measure of the capacity of software to endure.  They ask if the software will continue to be available in the future, on new platforms, meeting new needs? This can be thought of as shopping (for software to use), with elements of longevity, robustness, and support as factors in the shopping decision.

Funders often think of software sustainability similarly to how I did when I was an NSF program officer, when I described it to those seeking awards as, “If I give you funds for this now, how will you keep this going after these funds run out? … without coming back to me for more funds?”  This is really portfolio management from the point of view of the funder, who wants to invest in a set of projects that together have the potential to pay off.

Managers, at least in research organizations, tend to focus on people when they think about software sustainability. They typically wonder how they will get the funds necessary to keep their team supported.  This is really business management, with elements of capitalism and entrepreneurship.

Developers have two different things that they often mean when discussing software sustainability.  Both are related to resources, as opposed to software. First, they must consider how to get the resources needed to keep their software alive and up-to-date. Sometimes, they turn this around and wonder how they could make keeping their software alive and up-to-date use fewer resources. And second, they consider how to keep themselves supported / employed.  This is really a combination of entrepreneurship, product management, community building, and software engineering.

## Software Collapse

Konrad Hinsen has coined the term “software collapse” to describe the fact that software stops working eventually if is not actively maintained. This is one reason sustainability is important. He says that software stacks used in computational science have a nearly universal multi-layer structure:

* Project-specific software: whatever it takes to do a computation using software building blocks from the lower three levels: scripts, workflows, computational notebooks, small special-purpose libraries and utilities
* Discipline-specific research software: tools and libraries that implement models and methods which are developed and used by research communities
* Scientific infrastructure: libraries and utilities used for research in many different disciplines, such as LAPACK, NumPy, or Gnuplot
* Non-scientific infrastructure: operating systems, compilers, and support code for I/O, user interfaces, etc.

where software in each layer builds on and depends on software in all layers below it, and any changes in any lower layer can cause it to collapse. NumFOCUS’s projects generally work in the middle two layers.

Hinsen goes on to say that merely addressing project-specific software (the top layer) isn’t enough to solve software collapse; the lower layers are still likely to change. And the options he suggests (and I’ve named) are similar to those available to house owners facing the risk of earthquakes:

* Teardown – treat your home as having minimal value, subject to collapse at any time, and in case of collapse, start from scratch
* Repair – whenever shaking foundations cause damage, do repair work before more serious collapse happens
* Flexible – make your house or software robust against perturbations from below
* Bedrock – Choose stable foundations

Hansen suggests that many researchers building new code for what they think is a single use choose teardown, while most active projects that are building code intended to last choose repair. While engineers know how to build flexible buildings to survive a given level of shaking, we don’t know how do this in software. The bedrock choice is possible, as demonstrated by the military and NASA, but it also dramatically limits innovation, so it’s probably not appropriate for research projects.

## Software sustainability aims

Users want to make good product (software) choices that pay off in discoveries. Funders want to make good investments that pay off in discoveries. Managers want to keep staff employed, and also create discoveries. Developers want their software to be used in discoveries, and want a career.  All of these groups also want to know if the software they use/fund/develop/etc. will work in the future, given the risks of software collapse, bugs, and possible lack of development for new use cases. And developers want to know how they can be recognized for their work.

## Software sustainability and economics

Elinor Ostrom (in Governing the Commons) defined sustainability for a common-pool resource (CPR) as, “as long as the average rate of withdrawal does not exceed the average rate of replenishment, a renewable resource is sustained over time.” This has the notion of sustainability as a cyclic property, though the period of the cycle not specified. It also is general with respect to exactly what resource the common-pool resource is.

Titus Brown proposed “the common pool resource in open online projects is effort.” This idea, of sustainability of effort, may be appropriate for the developer. For it to happen, for effort to be available, there needs to be a link to recognition, reward, and position for developers. For users and funders, sustainability of effort may make less sense, and sustainability of software may be appropriate.  But software is not a renewable resource, so this doesn’t quite fit this model, and how to make it fit is unclear. Sustainability of funding may be appropriate for the manager, as well as for the developer.

## Software sustainability “equations”

If we put all of this together, we can hypothesize four “equations” of software sustainability, where equations is used very loosely.  The first is:

<center>Software sustainability ≡ sufficient ∆ software state   (1)</center>

where sufficient means enough to deal with the issues we’ve previously discussed, such as software collapse, bugs, and the new features that are needed.  Next is:

<center>∆ software state = (human effort in – human effort out – friction) * efficiency   (2)</center>

This means that software stops being sustained when human effort out > human effort in over some time.  Third is:

<center>Human effort ⇆ $   (3)</center>

The idea that human effort is equivalent to (transferable to and from) money is not completely correct, but has some value. (This idea is explored in great detail by David Graeber in Debt: The First 5,000 Years.)  There are successful software projects that are mostly based on human effort, such as community open source.  There are also successful software projects that are all based on funds, transferred in salary, such as commercial software and grant-funded projects.  When these two types of resource are combined, they lead to tension, such as when some some people are paid to work on a project and others work as volunteers, in part because humans are not purely rational and do not completely accept that money and effort are equivalent.  The fourth “equation” is:

<center>∆ software state → users choose to volunteer effort or $   (4)</center>

Development choices might take this into account, and prioritize changes that will lead to more resources over those that lead to more users.

## Software sustainability and time

Software sustainability is a measure of a dynamic, unpredictable, time domain system. Because of this, it can only be measured looking backward.  We can say if software has been sustained, but not if it is sustainable going forward. We might say that software has stopped being sustained if it no longer works at all, perhaps shown by continuous integration failing. Or maybe that it’s no longer being actively maintained, perhaps shown by no commits in the last x months. Or maybe that it’s no longer being actively developed, perhaps shown by no non-bug fix commits in the last x months.

Sustainability as a forward-looking property is actually a prediction. This is similar to a number of other measures, such as prediction of mutual fund prices, prediction of the cost to complete a software project, etc.  In these cases, our prediction is really a guess, or perhaps an estimate. We do this by basing our guess on past performance of the same activity or those we think are similar. How to best estimate software sustainability is an area where more research is needed.

## Summary

Software sustainability means different things to different groups of people, including the persistence of working software, and the persistence of people, or funding. We can generally define sustainability as the inflow of resources is sufficient to do the needed work, where those resources both include and are somewhat transferrable into human effort. In all cases, sustainability is not possible to measure in advance; it can only be measured in hindsight. Looking forward, we can only predict sustainability.

### Acknowledgements

My thinking, and some of the definitions here, are due, in addition to the links in the text above, to discussions with Neil Chue Hong and other leaders and members of the UK SSI, discussions at various WSSSPE workshops, a keynote by James Howison at RSE2018, discussions with Rob Haines and Caroline Jay at U. Manchester, and feedback from Matt Turk, James Howison, and Dan Sholler.  In addition, some material pertinent to the above is:

* D. S. Katz, “Scientific Software Challenges and Community Responses,” 2015. https://www.slideshare.net/danielskatz/scientific-software-challenges-and-community-responses
* C. C. Venters, C. Jay, L. Lau, M. K. Griffiths, V. Holmes, R. R. Ward, J. Austin, C. E. Dibsdale, J. Xu, “Software Sustainability: The Modern Tower of Babel,” Proceedings of Third International Workshop on Requirements Engineering for Sustainable Systems (RE4SuSy 2014), Karlskrona, Sweden. http://ceur-ws.org/Vol-1216/paper2.pdf
* C. Becker, R. Chitchyan, L. Duboc, S. Easterbrook, B. Penzenstadler, N. Seyff, C. C. Venters, “Sustainability design and software: The Karlskrona manifesto,” 37th International Conference on Software Engineering (ICSE’15), 2015. https://doi.org/10.1109/ICSE.2015.179
* P. Johnston, M. Everard, D. Santillo, and K.-H. Robèrt, “Reclaiming the Definition of Sustainability,” Environmental Science and Pollution Research, v.14(1), pp. 60-66, 2007. https://doi.org/10.1065/espr2007.01.375
 