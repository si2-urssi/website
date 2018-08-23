---
title: "Report from the first URSSI workshop"
date: 2018-08-23T12:27:50-07:00
author: "Karthik Ram, Daniel S. Katz, Jeffrey Carver, Nic Weber, and Sandra Gesing"
---

Among the many efforts that are underway as part of NSF's SI2 program, one of the most cross-cutting efforts is the planning for a US Research Software Institute (URSSI), which was funded in December 2017. This effort aims to plan an institute that would address challenges around making research software sustainable and robust, and more importantly, improve the sustainability of the researchers who develop such software. Some of our initial discussions, described in detail below, have surfaced problems encountered by specific researchers working on specific software applications, but the solutions conceived of and planned for by URSSI are not aimed at any one domain or discipline of research. In short, the issues that URSSI plans to address are representative of the diverse cross-cutting research areas supported by the NSF.

One of the goals for this planning phase is to organize a series of community-driven workshops to understand and prioritize some of the most pressing research software challenges faced by the community. **To that end we held our first workshop at University of California, Berkeley on 10-12 April 2018. The workshop was attended by a diverse group of 68 participants from 48 institutions spanning universities, national labs, ****and private industry****.**

### **Setting the stage for planning URSSI**

The workshop began with a presentation from the SI2 program officer, Vipin Chaudhary, on NSF's directions and priorities with respect to software institutes, which set the stage for helping participants understand the scope of the workshop and the planning process. This was followed by an introduction to URSSI’s motivations and plans by PI Karthik Ram. To complement what we learn about software challenges at the in-person workshops, another key activity of the conceptualization is to carry out a large-scale survey of researchers across the country. Co-PI Jeffrey Carver piloted an early draft of the survey to obtain feedback. At this writing, the survey has undergone several rounds of revision and is now under IRB review, getting close to being launched. The results from this widespread survey will be critical to helping us prioritize what URSSI will focus on. Finally we heard from co-PI Nic Weber on the plans for URSSI’s ethnographic studies of existing software projects that are working towards sustainability. We believe that having an ethnographic component for URSSI will add rich valuable context to many of the issues facing software sustainability in practice. 

### **Lessons from other institutes and community efforts**

Besides these introductory talks, we also invited leads from two full SI2 institutes and one recently-completed  institute conceptualization to share their insights. These invited afternoon keynotes were Nancy Wilkins-Diehr from the Science Gateways Community Institute (SCGI), Shantenu Jha from the Molecular Science Software Institute (MolSSI), and Peter Elmer from the High-Energy Physics Software Institute Conceptualization (now recommended for funding as the IRIS-HEP Institute). In addition to these invited talks, we also had a round of thirteen lightning talks to learn about various software-related efforts led by workshop participants, which included several of URSSI’s senior personnel and advisors.

## **Breakout discussions**

The primary purpose of this workshop was to spark discussion among the attendees around topics that emerged before the workshop. Weeks before the event, we asked the participants and the wider community to post challenges that URSSI should tackle. All of these ideas were collected as issues in our [workshop’s GitHub repository](https://github.com/si2-urssi/berkeley_workshop). After filtering and grouping related ideas, we presented all of them to the workshop attendees so they could form small groups and brainstorm ideas and possible solutions.

Over the two-and-a-half-day workshop we held 4 breakout sessions covering 24 topics, each spanning an hour with an additional 30 minutes for report backs and open discussion.

## **Key themes**

Four key themes emerged from the breakout discussions: 1) Issues that are unique to software development, usability, and credit; 2) Training and workforce development, including the potential for building upon existing models, and designing new methods of instruction; 3) The sustainability of research software engineers (RSEs) as the human infrastructure of scientific software; and 4) The sustainability of software projects through organizational and institutional best practices. Discussions around each theme, and more specific sub-themes, are described in detail below. 

### **Software Issues**

#### **1. ****What Software is Critical?**

The community needs an unbiased way to determine which software is critical and should be sustained. The software that is deemed critical might change over time. Funding and support needs to be properly allocated to support the software that the community deems to be critical. It is difficult to find funding (and sometimes people) who are interested in supporting and maintaining critical software. With the 3- to 5-year funding cycles leaving gaps and merely open sourcing the software not being the solution, how do we proceed?

#### **2. Improving software usability**

When developing software, there is a focus on achieving scientific goals rather than usability (or with future reuse in mind). Usability problems are encountered at four times (three of which are most frequent for URSSI stakeholders): 1. Identifying and finding the appropriate software; 2. Installing the software; 3. Using the software; and 4. Modifying the software. Improving usability is therefore key to improving research software sustainability.

#### **3. Credit for Research Open Source**

What does credit for software look like? What software should be cited and how? Finally, how do researchers get academic credit for their software endeavors, both as RSEs and as traditional scientists.

#### **4. Tools for Sustainability**

In theory, tools can be used to make software more sustainable. But workflows in general need to change before such tools can be helpful, and many of these tools have a significant learning curve. There are also many choices and the best tools for a task can be hard to determine. The balance between commercial and free tools is a problem, and using commercial tools to archive institutional knowledge can risk loss if the company goes under. 

**5. Reproducibility**

Any academic researcher who is querying the web to get their data to analyze cannot rely on their work being reproducible. The only way around this is for them to store every data set that they query and every web service they use, which rapidly becomes too challenging a data maintenance problem for most researchers to handle. If we are developing open source solution to the problems of reproducibility, how can we incorporate these considerations to cover these kinds of use cases? Are there ways in which changing the framing of the problem can introduce new models of collaboration between the current open source software and computational reproducibility communities? Can we grow the community and thereby establish a wider base of use cases as a means of making software supporting reproducible computing more sustainable?

### **Training and workforce development**

#### **1. Research Projects Carpentry**

There is a lot of poorly engineered software in academia and national labs. Projects need training to help them with multiple aspects of turning code into a sustainable project, e.g. documentation, licensing, DOI, packaging, testing, CI, building, workflows, testing, as well as collaboration and community building. There is a need for checklists for sustainable software projects that address broad concerns but also domain-specific needs. Could there be a training program similar to the carpentries?

#### **2. Development practices**

How do we identify, document, and disseminate best practices for software engineering in particular scientific domains/environments, and how do we identify/reach the relevant audiences?

### **Sustainability of Research Software Engineers**

#### **1. Research Software Engineers and career paths**

RSEs in the US are often "hidden" within organizations, work in silos, and do not receive the visibility or support needed to be effective. The career paths for RSEs within the US are uncertain and appear to have lower priority than other research roles in the university. There is no common model for supporting RSEs within universities (e.g., by research groups, departments, colleges, research computing centers, individual PIs, self-support, ...). What lessons can we learn from the UK and elsewhere that would improve the state of our RSEs?

Career paths for RSE don’t generally exist yet and the ones that do exist don’t provide much opportunity for career growth. RSEs have wages that are lower than their peers in industry and their contributions are not well-recognized. Current developers often don’t begin as software engineers but come from research domains where they ended up programming for their domain lab. They often aren’t recognized as making core contributions to their discipline. Citable works are not natural to the software development project.

#### **2. How do we improve diversity of the pipeline?**

Scholarly research is not efficiently benefiting from diversity, especially in STEM fields. While there is now considerable evidence to suggest that diverse perspectives produce better science, this information has not been clearly communicated to most stakeholders. One particular way in which URSSI could have an impact would be to improve access to tools and standards that help universities hire diverse talent.

#### **3. Valuing Faculty Software Contributions**

Academic institutions undervalue software contributions. Such contributions are misaligned with promotion and tenure incentives, particularly the publication model that is core to these scholarly recognition and reward. Compounding the problem is that each field has different standards for what to cite, and few of them are well-defined.

### **Sustainability of Research Software Projects**

#### **1. Collaboration between academic and national labs**

Universities and National Labs both develop research software. These organizations have many differences. How can they work together to make the software they develop and contribute to more sustainable?

#### **2. Governance and sustainability models**

Governance is particularly challenging given the huge diversity of specialized communities and varying project sizes, each of them having unique challenges related to growth. Academic literature on licensing and governance models is disorganized. As governance cuts across many different areas of maintenance, funding, and sustainability, it necessarily confuses new software projects, and is hard to evolve in existing projects.

#### **3. Improving funding for software maintenance**

A cycle of grants that do not support maintenance fosters situations where refactoring software becomes both necessary and difficult. Grants are usually awarded to develop new features, where the developers build in maintenance of previous software, often in a somewhat hidden ways. Proprietary software can be funded by licenses that are written into grants, but there is no equivalent to licensing fees that can support open source projects. In budget negotiations, funding for software support is often the first thing to be cut, since reviewers and funding agencies often do not appreciate its importance.

#### **4. Building community roadmaps**

Different stakeholders have different expectations for standards within a community. Building a roadmap for a community is difficult when these expectations conflict. The practices or standards expected by one set of stakeholders may not be the same as those expected by other sets. These conflicts lead to situations where packages within a community may not work well together.

#### **5. Open source software: bridge between research in academia and industry**

Industry and academia view open source software differently. Industry may be reluctant to contribute to something that they cannot "own". Similarly, universities (and legal departments) may be unclear on policies and licenses related to open source and who “owns” intellectual property. Industrial users/collaborators may expect more support and usability than academic software typically provides (at least partially because reward system in academia discourages its production).

### **Meta discussions**

#### **How does URSSI relate to the SSI and other similar efforts?**

There are several organizations, funded from different sources, that occupy a similar or overlapping space in the US and the world (e.g., the Software Sustainability Institute in the UK, DOE IDEAS, Better Scientific Software, Moore-Sloan Data Science Environments, other NSF Institutes, and Computational Infrastructure in Geodynamics). How can we separate the visions of these organizations, how they can collaborate, and how they can be complementary?

## **Institute planning**

We used a final breakout session to make a first attempt to define how an institute might look. These ideas we floated were not meant to be a true proposal, but rather a first attempt towards that process. For this exercise, we laid out five key areas that the institute could build out. These ideas came from examining past initiatives such as the UK Software Sustainability Institute, the NSF Science Gateways Community Institute, and the NSF Molecular Sciences Software Institute, and selecting a union of the activities that seemed most relevant to URSSI’s goals. The areas we chose were:  Development Support (consulting & short term small project support),  Incubator (technology advice, business planning, guidance on best practices), Training (courses & guides), Policy (research & campaigns), Community (fellowships, workshops, blogs, website).

We divided all participants into five groups (two separate ones for policy given overwhelming interest) and gave them a hypothetical budget of 5 million to allocate among these areas and within the area they chose. 

As this was an initial attempt, we did not gain many strong insight into areas that deserved special attention, though the role of policy appears to be more important than initially thought, and the role of software development support is hard to see at a national and interdisciplinary scale, given a small institute budget. It was clear that URSSI will play a very unique, cross-cutting role in the software institute space that is not being filled by existing offerings. Detailed comments from each group's discussions have helped us plan out our upcoming topic-focused workshops.

## **Follow on workshops**

As a final activity of the workshop, we also had an open poll about what participants would like to see as themes of future workshops in the conceptualization. These were the choices that received the most votes:

* **Software credit & metrics** - A small workshop is set to happen in January 2019. More details will be forthcoming on the URSSI blog.

* **Incubating sustainable **** software projects** - Ideas and discussions around helping research open source projects become sustainable. A small workshop is being planned for February 2019. Again, more details will be forthcoming on the URSSI blog.

* **Institute planning** - Various activities looking at existing institutes to learn from successes and failures.

* **Training** - There is a broad need for training beyond ad-hoc offerings and what is offered by the carpentries.

* **Career paths and workforce development** - There is a need for a workshop or discussion around creating RSE tracks in the US. There is also a need (more under outreach and overlaps with training) to develop a diverse workforce for research software development.

Although we don’t have the resources to run all of these workshops during this planning phase, two of these are in early stages of planning, as mentioned above. A small workshop on [software metrics and credit](https://github.com/si2-urssi/software-credit) is set to happen in late January at the National Center for Ecological Analysis and Synthesis (University of California, Santa Barbara). Another on software sustainability incubators is likely to take place at an East coast location in February 2019. The URSSI blog and newsletter will provide updates on these and other upcoming workshops. A community-driven workshop similar to the one in Berkeley will take place in Chicago 23-24 October 2018 and will be open to everyone interested in contributing to the URSSI conceptualization. The expectation is that we will partly continue discussions on topics that were part of the Berkeley workshop but also add additional topics participants feel enthusiastic about.


