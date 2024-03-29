---
title: "The No Cap Recap: Thinking in Systems"
date: 2023-04-22T11:38:50-04:00
draft: false
---

## Introduction and impressions

Where I work, we have the blessing of a book bar of selected titles that we can obtain at no personal cost. *Thinking in Systems (A Primer)* by Donella H. Meadows seemed pretty interesting to me and I decided to make the purchase and boss myself up last quarter. Overall, I feel like when I first read it, it opened my eyes up a little bit into just how complicated the relationships between basics things we encounter in life can be, and how these small examples can scale and capture the behaviours of global scale systems and beyond.

I found myself thinking about social, economic, and environmental phenomena with more clarity using these tools. However, since the material was very abstract and widely applicable, I wasn't sure how exactly I would translate this knowledge to software systems specifically. However, I did start to understand the people-based systems and processes around me in my company more clearly, so that mild enlightenment is a nice immediate benefit.

## Building blocks: stocks, flows, and loops

To think in systems, we need the basic vocabulary and building blocks. **Each system has elements, interconnections, and a purpose**. Systems are also naturally composed of subsystems. The purpose of a system is the most important aspect, while the specific elements are the least.

We also need to know what a **stock** and a **flow** is in order to read and talk about those system diagram charts. Stocks are quantities of resources, flows represent changes or manipulation of the resources e.g. inflow or outflow. The example given in the book is of a bathtub as a stock that has a pipe as an inflow that fills water at different rates, and a drain as an outflow that can also be covered or partially covered to drain at different rates. The presence of a stock between inflows and outflows allows the flows to have a degree of independence.

Stocks and flows can be chained in more sophisticated ways to make systems with feedback loops: a model of compound interest, where the amount of money (stock) plus the rate informs how much money is added per month (flow). *Feedback loops form when a stock changes the flows connected to it*.

## More on feedback loops and dynamic systems

The two main types of loops discussed are **balancing loops** and **reinforcing loops**.

Balancing loops serve to stabilize the stock that it is acting on, and they tend to "drag" a flow to hover around a certain quantity. The example in the book is a hot cup of coffee. Imagine the temperature of the hot coffee as a stock, and the thermal energy exchange between the room temperature air and the coffee as flows. The coffee will rapidly cool as the energy flows out into the room, cooling more slowly as it approaches room temperature and reaches equilibrium. It also cannot cool further than room temperature because the air in the room has thermal energy coming in as an inflow, so the temperature stock would be getting "balanced".

That previous example of a bank account gaining interest is an example of a reinforcing loop. Positive (or negative) changes in a stock cause stronger positive changes in the stock. Earning interest gives you more money on which to earn interest, earning more and more money each cycle. These loops lead to runaway infinite growth (to a systemic limit).

Other effects of interest mentioned include paying attention to information delays in systems since they greatly affect behaviour in feedback loops, often leading to high variability through over and under correction to account for those delays.

Another interesting example was of some two-stock physical resource systems, where one stock was capital, and the other was either a **renewable** (fishing industry) or **non-renewable** (oil industry) physical resource. Through the examples, we were taught how non-renewable industry behaviour is stock constrained (once the oil runs out it is over, as the oil becomes more scarce, extraction is more difficult and requires greater capital, investment lowers in the industry as a whole unless innovation occurs to lower that capital barrier) and how renewable systems are flow constrained (the fishing rate vs. fish reproduction rate is the metric to watch, renewable systems act like non-renewable once carrying capacity is breached, etc.). The conclusions seem obvious but the discussion of how they come to be and the implications were very interesting to read.

These types of dynamic systems require three things to thrive in changing environments:
1. Resiliency through feedback loops that restore feedback loops. On another level, feedback loops that learn how to create better restorative feedback loops for the base feedback loops of the system.
2. Self-organization of components.
3. Hierarchy, built from the bottom up, with higher order components serving lower ones by helping them perform their roles better.

## Surprises, traps, opportunities

Remember that all models are just models, there are limits to them and they are not reality.

People are biased to analyze based on events, and trying to tie events together, when really this doesn't provide any way to predict future events. The real way to understand a system is to look at behaviours, and systems can reveal their behaviour through events in context over time. Additionally, watch out for **bounded rationality**. This is when actors in a system do not have perfect information, so they may try to act rationally but it is "bounded", and can cause them to make short term choices that work against their best interests in the long term.

Some systems appear to be overly **resistant to change**. This is often because the state of a system is the result of multiple groups of actors trying to pull a stock in their own different directions (competing balancing flows with variable strength) e.g. addicts want more drugs, police want less, dealers want a good amount but not too much or too little. *To solve: stop resisting, and find a way to align the different actors goals to trend to a new desired equilibrium point.*

**Tragedy of the commons** occurs when actors that share a common resource and each directly benefit from its use, but that resource has a limit and it erodes the closer to the limit it approaches. Because actors directly benefit from usage, but share the cost of degradation equally, this introduces delays to understanding the loss, and induces almost a bystander effect, because nobody thinks that they should be the one to reduce usage for the benefit of the system if nobody else is. i.e. the feedback link/delay is too great for actors to feel loss. *Some solutions include: education of effects and shaming, as well as either strengthen the feedback response when the resource is degrading, by splitting up and privatizing the resource so that individual actors directly feel the results of overuse, and have nobody to shift the blame on or by regulating access to it.*

**Drift to low performance** - when situations suck, people's expectation lower and lower their effort, leading to worse situations, which further lower expectations and effort etc. Negative feedback loop eroding performance goals. *Make standards absolute instead of relative, base performance goals and past highs instead of just beating lows. Try to reverse the mentality by being inspired by what is possible, not what isn't.*

An **escalation loop** is when actors in the system behave like a reinforcing loop e.g. you said something mean, so I hit you, then you shot me, so I blew up your condo building etc. *One group must unilaterally refuse to compete to reset, or all groups must agree on new balancing loops entirely.*

**Competitive exclusion** happens when a competition is structured in a way where winners receive the means to keep winning, it creates a system where winners win, and losers keep losing. *Diversification allows losers of one game to break into other games and win there, limit how much an entity can win relative to the whole system (antitrust), take advantages from winners and give to losers, redesign structure so that past success doesn't bias future challenges.*

**Shifting the burden to the intervenor** - when a system starts to rely on external intervention, it will form a dependency and weaken itself overall. *Just don't end up here*.

**Rule beating**, also known as malicious compliance. When people follow the letter of the law but not the spirit. *Take care to redesign and restructure the rules so that they actually lead people into the desired direction.*

Some systems are set up to **seek the wrong goal**. Sometimes this happens when rules are put into effect without realizing the future implications. e.g. government is trying to reduce imports on grain for animal feed wishing to use national stock, government bans grain import, farmers just import a different vegetable. Leads to rule beating. *Make sure the goal captures all aspects of the desired system that you want.*

## Interventions and parting advice

In a later chapter, the author goes over common leverage points that can have a great effect on the system if manipulated, *in increasing order of impact*. However, be mindful that manipulating a lot of these can be done in the wrong direction, since they can be counterintuitive in larger and more complex systems.

1. **Numbers** - tweaking quantities of stocks and rates of flows.
2. **Buffers** - tweaking the size of stocks relative to their connecting flows.
3. **Interconnections** - restructuring the stocks and flows altogether.
4. **Information delays** - reduce the amount of time for information to propagate to necessary places in the system. Can work by breaking things up into more responsive subsystems.
5. **Balancing loops** - strengthten or weaken them relative to the impact that it is trying to correct. e.g. A very large cold room in the winter and a small heater can form a balancing loop. But if the goal is to warm the room up, the small heater will be overwhelmed relative to the large space of cold air. Strengthen the loop by substituting a more powerful heater to offset that.
6. **Reinforcing loops** - sometimes weakening the effects of a driving reinforcing loop in a system is more efficient than strengthening a balancing loop to counteract it.
7. **Information flows** - how easily accessible is the information to actors in the system, and who can access it? One example about this given in a book is that many identical houses were built either with electricity usage meters on the main floor, or on the basement. The houses with them on the main floor tended to use less electricity than the ones with it in the basement, just because the information was more easily and frequently accessible, making it much more conscious to the dwelling families.
8. **Rules** - tweaking incentives, guidelines, punishments has very high leverage in self-organizing systems.
9. **Adding self-organization** - introducing meta-feedback loops that control feedback loops.
10. **Changing goals** - repurposing the system. Sometimes the purpose of a system isn't unclear or it is trying to achieve too many competing things at once.
11. **Changing the paradigm** - "The mind set out of which the system - its goals, structures, rules, delays, parameters - arises". To me, this seems like changing the environment around a system, changing societal beliefs and ideas of "the way things should be" and so forth.
12. **Transcending paradigms** - realize that there is no "true" paradigm. As the author says, realize that the idea of paradigms is a paradigm. You just have to be as woke as possible and I suppose you can change anything. This most likely just means to maintain a separation from being locked into any one perspective when working with systems.

In the final chapter, the author gives some parting tips and rules of thumb. Most of them can be extrapolated by reading the rest of the book eventually, but a few that were interesting to me were:
- Make sure that you share your mental models with others. They have no use just sitting in your head, and it is important to get feedback to ensure that it is as accurate (and thus useful) as possible.
- People tend to overly focus on quantifiable things, but a lot of things in complex systems are not easily quantifiable. Be sure to pay attention to qualities as well, or at least try to quantify qualities to take them into account instead of ignoring them.
- Stay humble and be a constant learner.

## Conclusion

This article is in no way a replacement to reading the actual source work, just a collection of things I found that stood out to me as important or valuable to me in my notes (and maybe valuable to you too). Her writing style is very engaging and the examples given are quite detailed and relatable, so there is no substitute for that. So now with this primer for the primer, go and read the book yourself. However, if you just found out that you had 15 minutes to live and still wanted to read *Thinking in Systems*, I hope this article will allow you to rest in peace.