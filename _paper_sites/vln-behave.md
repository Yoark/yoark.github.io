---
layout: page
# title: Behavioral Analysis of Vision-and-Language Navigation Agents
description:
# img: /assets/img/att-srl.png
importance: 0
permalink: /paper_sites/vln-behave/
category: research
---

# <center style="color: black; font-size: 30px;"> Behavioral Analysis of Vision-and-Language Navigation Agents</center>

<div align="center" style="font-weight: 500; margin-bottom: 10px; font-size: 15px; color: black;" >
  To appear: CVPR 2023
</div>

<div align="center" style="color: black;">
    <a class="poplink2" href="https://yoark.github.io/"><b><u>Zijiao Yang</u></b><sup>1</sup></a>
    &emsp; <a href="https://arjunmajum.github.io/" class="poplink2">Arjun Majumdar<sup>2</sup></a>
    &emsp; <a href="http://web.engr.oregonstate.edu/~leestef" class="poplink2">Stefan Lee<sup>1</sup></a><br><br>
    &emsp; <affiliation><sup>1</sup>Oregon State University</affiliation>
    &emsp; <affiliation><sup>2</sup>Georgia Institute of Technology</affiliation>
</div>

<div align="center" style="margin-top: 10px; font-size: 25px;" >
    <a class="poplink2" href="{{site.baseurl}}/assets/pdf/vln-behave/vln-behave.pdf">[PDF]</a>
    &emsp;
    <a class="poplink2" href="https://github.com/Yoark/vln-behave">[Code]</a>
    &emsp;
    <a class="poplink2" href="{{site.baseurl}}/assets/bibliography/vln-behave.bib.txt">[Bibtex]</a>
    &emsp;
    <a class="poplink2" href="{{site.baseurl}}/assets/pdf/vln-behave/supp_vln_behave.pdf">[Supp]</a>
</div>

<br>

<div align="justify" style="margin-top: 15px; color: black;">
  <p>
        <em>To be successful, Vision-and-Language Navigation
        (VLN) agents must be able to ground instructions to actions based on their surroundings. In this work, we develop
        a methodology to study agent behavior on a skill-specific
        basis – examining how well existing agents ground instructions about stopping, turning, and moving towards specified objects or rooms. Our approach is based on generating skill-specific interventions and measuring changes in
        agent predictions. We present a detailed case study analyzing the behavior of a recent agent and then compare multiple agents in terms of skill-specific competency scores. This analysis suggests that biases from training have lasting effects on agent behavior and that existing models are able to
        ground simple referring expressions. Our comparisons between models show that skill-specific scores correlate with
        improvements in overall VLN task performance. </em>
  </p>

  <div style="text-align: center;" id="figure1">
    <figure style="text-align: center;">
      <img style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/truncation.png" alt="Truncation fig">
      <figcaption class="caption"><span class="fig-number"></span> To build skill-specific interventions, we truncate existing RxR episodes based on RxR trajectory-instruction alignments (a→b).
      We can then extend the instruction with skill-specific language and identify the next step described by this new instruction (c).</figcaption>
    </figure>
  </div>

  <p>
      We consider an intervention sample to be a tuple consisting
      of a trajectory \(\tau\) , an instruction $I$ that guides an agent
      to the end of that trajectory, and an intervention instruction
      $I_{int}$ that describes some desired skill-specific behavior to be
      taken from that point. For intervened episodes, an agent will
      be given the augmented instruction $I+I_{int}$, guided through
      the trajectory $\tau$ and then its decision will be compared to
      the expected behavior described in $I_{int}$. We choose this
      partial-path construction so we can vary pre-intervention
      path length while keeping trajectory-instruction alignment
      similar to standard VLN training settings. <span data-figure-ref="figure1">Figure 1</span> (c) shows
      one such triplet with a 3-step trajectory, an instruction describing
      it, and an underlined intervention prompting the
      agent to move “towards the bathroom”. We design different
      interventions to study fine-grained skills: Stop, Turn, Object-seeking, and Room-seeking.
  </p>

  <div style="text-align: center;" id="figure2">
  <figure style="text-align: center;">
    <img style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/vln-behave/stop.png" alt="stop">
    <figcaption class="caption"><span class="fig-number"></span> 
   Average Stop Probability vs Trajectory Length for "implicit stop instruction", "explicit stop instruction" and "one-step ahead prior". Agents respond strongly to both stop interventions -- stopping with high probability across all trajectory lengths. Explicit stop instruction produce a stronger effect than implicit. 
    </figcaption>
    </figure>
  </div>
  <h3> <strong>Stop</strong></h3>
  <p>
   To be successful at the VLN task, an agent must declare the <code>stop</code> action within a fixed radius of the goal location described by an instruction. As such, grounding explicit (<span class="myquote">Go to the bedroom and stop. </span>) and implicit (<span class="myquote">... then go into the bedroom.</span><code>EOS</code>) stopping instructions to the <code>stop</code> action is an important skill. In this experiment, we analyze stop behavior for explicit or implicit stop instructions. To assess the effect of path length distributions in RxR, we examine stop behavior across a range of path lengths. For intervention instructions, we append a short stop
instruction such as “This is your destination.” We note
however that the stop experiment offers a complication –
both the truncated and intervened instructions imply stop
actions. The difference being whether this instruction is
implicit (truncation) or explicit (intervention). To provide
additional comparison with non-stop instructions, we also
consider a one-step ahead instruction that includes the in-
struction segment from the terminal node as well (i.e. the
agent is instructed to make the next step in the trajectory). 

 We find average stop probability to remain fairly constant for implicit and explicit stop instructions.(Note that longer trajectories have fewer episodes and larger variation.) This suggests agents consistently ground the stop instruction regardless of trajectory length despite biased RxR training trajectory length (<span data-figure-ref="figure2">Figure 2</span>). 
We also find stop probability is higher for explicit than implicit stop which are both naturally higher than the one-step ahead setting with 95% confidence. (Check paper for details)
  </p>

  
  <div style="text-align: center;" id="figure3">
  <figure style="text-align: center;">
    <img style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/vln-behave/dir_def.png" alt="direction_definition">
    <figcaption class="caption"><span class="fig-number"></span>
  For our directional intervention, we define six directions on the polar axis (a) and establish filters to avoid ungroundable (c) or trivial episodes (d) -- requiring that at a neighboring node is in the target direction and at least two other neighbors are not.
    </figcaption>
    </figure>
  </div>

  <div style="text-align: center;" id="figure4">
  <figure style="text-align: center;">
    <img id="modalTrigger" style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/vln-behave/direction.png" alt="direction">
    <figcaption class="caption" ><span class="fig-number"></span>
   We plot the agent's next step direction probability distribution onto polar axis for easier visualization. We contrast between "No Intervention" (red) with "Direction" (blue). The number on outer circle and middle dotted circle are max and <span class="latex">$\frac{\textit{max}}/{2}$</span> respectively. We found the HAMT agent is responsive to all six directional instructions: the probability mass of directional interventions shifts toward the area indicated by directional instructions across all directions comparing to "No Intervention" 
    </figcaption>
    </figure>
  </div>
  <!-- <div id="modal" class="modal">
    <span class="modal_close">&times;</span>
    <img class="modal-content" id="modalImage">
  </div> -->
  <h3><strong>Direction</strong></h3>
  <p>
  
   Another foundational skill for following navigation instructions is responding appropriately to directional language. In this experiment, we examine <em>unconditional directional instructions</em> which specify directions like <span class="myquote">turn left and go forward</span> without referencing entities in the environment. We consider language describing forward/backward motions and turns. Specifically, we explore six direction categories -- forward, backward, left, right, back left, and back right. For each, we define an angular region relative to the agent's heading (canonically 0 degrees) as shown in the top-left of <span data-figure-ref="figure3">Figure 3</span>. During our experiment, we can examine the amount of probability placed on neighboring nodes within these regions. These can be mapped
to beliefs over relative angles by associating the probability
of visiting neighbor k with the relative angle $θ_k$ between the
agent’s heading and neighbor k. <span data-figure-ref="figure4">Figure 4</span> shows the distribution of these probabilities over all episodes for each intervention as histograms on polar axes. We find the agent exhibits a significantly higher accumulated probability for the corresponding direction with directional instruction than without with 95% confidence. (Check paper for details)
  </p>

  <p>
  </p>

  <div style="text-align: center;" id="figure5">
    <figure style="text-align: center;">
    <img style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/vln-behave/object.png" alt="object">
    <figcaption class="caption"><span class="fig-number"></span>
    The distribution of absolute difference between model prediction and target object direction for intervention and no intervention settings.
    </figcaption>
    </figure>
  </div>
  <h3><strong>Object-seeking</strong></h3>
  <p>
   Beyond directional language, instructions also often use references to nearby objects as convenient landmarks, e.g. <span class="myquote">Walk towards the fireplace </span>. Unlike the language studied in the previous sections, object-seeking instructions require grounding the instruction to the visual scene. We examine simple "walk towards X" style object-seeking instructions.
  </p>
  <p>
Using the REVERIE dataset's object annotations, we create intervention episodes for visible objects that are within 3m distance and have a neighboring node with a heading within 15 degrees. Common objects like doors, windows, and railings are excluded. We generate 839 intervention episodes with the instruction to "Walk towards the <code>object</code>." Objects targeted in descending order of occurrence are chair, table, picture, cushion, curtain, plant, cabinet, gym equipment, stool, chest of drawers, bed, towel, bathtub, TV monitor, and seating. We record the agent's predicted distribution over neighboring nodes for each episode and map them to a distribution over angular errors relative to the object. We compute the difference in heading angle between each neighbor and the object, and associate the probability of visiting each neighbor with an angular distance to the target object. These probabilities are accumulated and normalized to produce a distribution over angular distance for the intervention and no-intervention settings. The intervention has a weak effect on reducing angular error. A linear mixed effect model finds a weak fixed effect of 0.069 for intervention vs non-intervention. Both settings exhibit a wide range of angular errors. A baseline <code>Forward Bias</code> agent shows a similar error distribution. The no intervention setting is more likely to stop than the intervention. We find evidence for only a weak tendency to move towards referenced objects for this agent. 
  </p>

  <div style="text-align: center;" id="figure6">
    <figure style="text-align: center;">
    <img style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/vln-behave/delta_room.png" alt="room">
    <figcaption class="caption"><span class="fig-number"></span>
    Distribution of delta distance to target room type. The delta distance difference of distance to target room (relative to start position) with or without intervention. Positive delta distance means the agent move closer to room of target type with intervention than otherwise. The distribution shift towards right with intervention than otherwise, indicates the agent is responsive to room-seeking instruction. (linear mixed effect model: -0.15 vs -0.41, $p\approx 0$ )
    </figcaption>
    </figure>
  </div>
<h3><strong>Room-seeking</strong></h3>
  <p>
   In the experiment, agents are given room-seeking instructions to navigate to specific rooms, with 1-hop settings representing visible rooms (<span data-figure-ref="figure6">Figure 6</span>) and k-hop settings representing rooms that may require searching. Using Matterport3D room region annotations, intervention candidates were created for 1-hop and k-hop settings.

For 1-hop results, agents' progress towards target rooms was measured using a distribution over change in geodesic distances to the nearest node with the target room type. The right-shift in the density suggests that agents respond somewhat to the intervention. The effect of intervention on delta geodesic distance was significant, but agents didn't reliably place strong beliefs on neighbors with the target room type. (For n hop results, check paper)
  </p>

  <div style="text-align: center;" id="figure7">
  <figure style="text-align: center;">
    <img style="width: 800px; max-width: 100%; height: auto;" src="{{site.baseurl}}/assets/img/vln-behave/score.png" alt="score">
    <figcaption class="caption"><span class="fig-number"></span>
    We report scores for each skill type for VLN models with varying RxR task performance (EnvDrop ${<}$ EnvDrop (ViL CLIP) ${<}$ HAMT). We find individual skill performance tends to improve with overall task performance, but not equally over all skills. Object- and room-seeking instructions require further study.
    </figcaption>
    </figure>
  </div>
<h3><strong> Skill Sensitivity Comparision</strong></h3>
  <p>
    In skill-specific interventions, we identify correct actions for various instructions like stopping, turning, object-seeking, and room-seeking. To compare Vision-and-Language Navigation (VLN) models, we calculate the average probability mass placed on these correct actions using a scoring function. This function takes into account the intervention episodes, agent's predicted probability for action, and other factors. Higher scores indicate better certainty in selecting grounded actions.

When comparing three VLN agents with varying performance, (<span data-figure-ref="figure7">Figure 7.</span>) we observe that improved overall task performance also leads to improvements in skill-specific scores. However, these improvements aren't uniform across skills, and agents are more proficient at handling stopping and turning instructions than those related to objects or rooms.
  </p>
  
</div>

<hr style="background-color: black; height: 0.5px;">

# <center style="color: black;"> </center>

<!-- <center>
<div style="width: 800px; height: auto; max-width: 80%;">
  <iframe src="https://www.youtube-nocookie.com/embed/jbrMBGn-91I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</center> -->

<!-- <hr style="background-color: black; height: 0.5px;"> -->

<!-- # <center style="color: black;"> Paper </center> -->

<!-- <div>

  <div style="width: 220px; max-width: 30%; height: auto; margin-left: auto; margin-right: auto; margin-bottom: 10px;">
    <a href="http://arxiv.org/abs/2210.03087"><img width="220px" src="{{site.baseurl}}/assets/img/ivln/paper_thumbnail.png" alt="Paper Thumbnail"></a>
  </div>

  <div align="center">
    <h3 style="color: black;">Iterative Vision-and-Language Navigation</h3>
    <div style="margin-top: 3px; color: black;">
      Jacob Krantz*, Shurjo Banerjee*, Wang Zhu, Jason Corso,<br>Peter Anderson, Stefan Lee, Jesse Thomason<br>
    </div>
    <div style="margin-top: 3px; color: black;">
      <i>arXiv</i>, 2022
      [<a class="poplink2" href="http://arxiv.org/abs/2210.03087">PDF</a>]
      [<a class="poplink2" href="{{site.baseurl}}/bib/ivln.bib.txt">Bibtex</a>]
    </div>
  </div>
</div> -->

<!-- <hr style="background-color: black; height: 0.5px;"> -->

<!-- # <center style="color: black;"> Acknowledgements </center>

<a name="{{site.baseurl}}/acknowledgements"></a>
<div align="center">
  <p align="justify" style="max-width: 625px; margin-left: 15px; margin-right: 15px; color: black;">
    The Oregon State effort is supported in part by the DARPA Machine Common Sense program. The University of Michigan effort is supported in part by the NSF COVE (Computer Vision Exchange for Data, Annotations and Tools) initiative under Grant 1628987 and Google. Wang is supported by various corporate gifts from Google, Facebook, Netflix, Intel and Tencent. The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of the U.S. Government, or any sponsor.
  </p>
</div> -->
<!-- <hr style="background-color: black; height: 0.5px;"> -->

<span style="font-weight:400; color: black;">Email</span> — <a class="poplink2" style="color: black;" href="mailto:yangziji@oregonstate.edu">yangziji@oregonstate.edu</a>
