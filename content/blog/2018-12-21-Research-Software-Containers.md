---
title: "Why Research Software Sustainability Won't Be Fixed by Containers"
date: 2018-12-21T10:00:05-06:00
author: "Henry Neeman, University of Oklahoma"
---


Containers, such as Singularity and Docker, are an
amazing advance in software sustainability. By allowing
software developers to package not only application
software but also other components of the software
stack, including software dependencies, that the
application needs, and with which the application is
well tested, containers make the porting of
applications to new platforms much more straightforward,
convenient and efficient.

In the large scale research computing world, containers
are a miracle in the near-term, but a looming challenge
in the medium- to long-term.

### A little background:

Science, Technology, Engineering and Mathematics (STEM)
research software is mission-critical to virtually
every STEM discipline (and many non-STEM disciplines), with
thousands of software applications available, mostly as
free, open source downloads, alongside a more modest
number of commercial applications.

At my institution, for example, we support about 400
applications and libraries, while national supercomputing
centers support about ten times as many.

Before containers, if you wanted to use an application
package on a particular platform---the combination of
hardware and software stack, including the operating
system and one or more compilers---you had to
explicitly port that application to that platform.

Such porting can be, in many cases, very labor intensive,
because of quirks in every part of the software
stack, from the OS to the application source code. In
some cases, porting can require substantial expertise
about building software in general, or even about the
innards of the specific application you're porting.

### Containers are very helpful with that -- so why are they a challenge?

The main issue is that containers give software
developers a straightforward way to put off until
tomorrow an onerous task that they have no incentive to
do today.

And that means that, for each containerized STEM
research software application, it'll become harder and
harder to take advantage of new hardware features, like
longer vector lengths, new instruction sets, and so on.

### Here's why:

In the research software sustainability world, a key
issue is that the organizations that fund research
software application development---primarily national
research funding agencies---are generally far less
concerned with software issues and far more concerned
with advancing STEM research.

As such, far more funding is available to add
new science features to software applications, so that
they can solve more advanced STEM research problems,
than to improve the software itself, or even to port
the software to new platforms.

By containerizing an application, a research software
engineer can reduce the labor cost of porting to a new
platform, including to a new version of a common
operating system or a long-used compiler.

It's clear why this would be attractive to a research
software engineer, as it helps with prioritizing the
things that their funding is intended to pay for, and
reduces the cost of the things that their funding isn't
focused on.

Of course, software stacks constantly drift, with both
new features and new bugs continually arising. New
versions of applications typically are only tested on
more recent software stacks, because the call for using
those applications on obsolete software stacks is very
limited.

Because of this, old versions of a software application
become harder and harder to port to the latest platforms,
while newer versions of an application are easier to
port to new platforms (but would similarly be very
difficult to port back to obsolete platforms, if there
were a need for doing that).

Once an application has been containerized, then each
time the research software engineer is faced with the
choice between adding new science features or spending
time porting to a new platform, it's possible to defer
the latter in favor of the former.

After a year of doing that, it's still
straightforward to port to a new platform -- but the
software is working fine, so why go to all that trouble?

After a second year, the need may be more pressing --
for example, new hardware features may be available --
but the labor cost of porting has gone up, so the
research software engineer may choose to put off the
porting again.

Each successive year, the need will be greater, but the
labor cost will be higher, so the disincentive to port
will be stronger.

Bear in mind that old versions of the compiler aren't
updated to use new instructions -- only the few most
recent versions of the compiler support that.

But the more porting is deferred to later, the harder
and more labor intensive that porting will be.

After several years of this, application performance
improvement will be limited to whatever can be derived
naturally via improvements in memory bandwidth,
interconnect speed, and disk speed.

In practice, these improve slowly compared to CPU
speed (see below).

Whereas, if the applications can take advantage of
CPU performance improvements, especially via new
instructions (e.g., AVX, half-precision floating point),
then they can also get substantial speedup from CPU
improvements.

But those new instructions are available in new versions
of the relevant compiler families, not in the older
versions that an older container was built around.

And, as time goes on, those new versions of the compilers
won't have been tested against older platforms.

So the software drift gets worse and worse over time,
while the disincentive to port to new platforms gets
stronger and stronger.

### Performance improvements

* individual CPU speed improved from 53 GFLOPs per
socket on Intel Nehalem W5590 in 2009 [9] to 1523 GFLOPs
per socket on Intel Skylake 8180 in 2017 [10], a
doubling period of 2 years;

* memory bandwidth went from, for example, ~37 GB/sec
on dual Intel Nehalem W5580 in 2009 [6,7] to
~290 GB/sec in late 2017 on dual AMD EPYC [8],
a doubling period of 3 years;

* disk drive speed improves primarily with the number
of drives being used or the kind of drives (SSD vs
spinning hard disk) -- i.e., with dollars spent;

* interconnect bandwidth improves slowly, and latency
even more slowly, for example:

  * Mellanox QDR Infiniband at 40 Gbps and ~1 microsecond
MPI point-to-point latency [1] was released in 2008 [2],

  * Mellanox FDR at 56 Gbps and ~1 microsecond latency [1]
was released in late 2011 [2],

  * Mellanox EDR at 100 Gbps and ~1 microseconds latency
[3] in early 2015 [2],

  * Intel Omni-Path at 100 Gbps and ~1 microseconds
latency [3] in 2016 [4],

  * Mellanox HDR at 200 Gbps and ~0.7 microseconds latency
[5] in 2017.

### References

[1] J. Vienne, J. Chen, M. Wasi-ur-Rahman, N. S. Islam,
H. Subramoni and D. K. Panda, 2012: "Performance Analysis
and Evaluation of InfiniBand FDR and 40GigE RoCE on HPC
and Cloud Computing Systems." Proc. IEEE Hot
Interconnects (HOTI-20). DOI: [10.1109/HOTI.2012.19](https://doi.org/10.1109/HOTI.2012.19).

[2] Infiniband Trade Association, Infiniband Roadmap.
https://www.infinibandta.org/infiniband-roadmap/

[3] D. K. Panda, 2018, "Designing Scalable HPC, Deep
Learning, and Cloud Middleware for Exascale Systems."
HPC Advisory Council Swiss Conference 2018, slide #15.
https://www.slideshare.net/insideHPC/panda-scalable-hpcbestpracticestue100418

[4] Wikipedia Omni-Path webpage.
https://en.wikipedia.org/wiki/Omni-Path

[5] Xenon High Performance Computing, 2017: "XENON
will integrate Mellanox's new 200Gb/s HDR InfiniBand
interconnect infrastructure as part of their HPC
offering."
https://www.xenon.com.au/xenon-will-integrate-mellanoxs-new-200gbs-hdr-infiniband-interconnect-infrastructure-part-hpc-offering/

[6] STREAM numbers on nehalem.
https://www.cs.virginia.edu/stream/stream_mail/2009/0011.html

[7] Intel® Xeon® Processor W5580.
https://ark.intel.com/products/37113/Intel-Xeon-Processor-W5580-8M-Cache-3-20-GHz-6-40-GT-s-Intel-QPI-

[8] AMD EPYC SoC Delivers Exceptional Results on the
STREAM Benchmark on 2P Servers.
https://www.amd.com/system/files/2017-06/AMD-EPYC-SoC-Delivers-Exceptional-Results.pdf

[9] Intel® Xeon® Processor W5590.
https://ark.intel.com/products/41643/Intel-Xeon-Processor-W5590-8M-Cache-3-33-GHz-6-40-GT-s-Intel-QPI-

[10] Intel Xeon Platinum 8180 Processor.
https://ark.intel.com/products/120496/Intel-Xeon-Platinum-8180-Processor-38-5M-Cache-2-50-GHz-