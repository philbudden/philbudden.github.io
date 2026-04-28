---
source: https://www.databricks.com/resources/learn/training/generative-ai-fundamentals?itm_source=www&itm_category=learn&itm_page=certification&itm_location=body&itm_component=card&itm_offer=generative-ai-fundamentals
layout: note
title: Generative AI Fundamentals
date: 2026-04-28
tags:
  - ai
summary: An introduction to how generative AI works, including language models, model types and trade-offs, agent-based systems, and effective interaction through prompt design.
---

## Learning Objectives

- Awareness that there are different classes of Generative AI models (small, medium, large, frontier) and they should be used in different scenarios based on cost and performance.

## What is Generative AI?

At it's core, Generative AI is a non-deterministic prediction engine. It calculates the probability of the next word (or token) to generate new content. The content it generates isn't necessarily the same every time.

### Large Language Models (LLM)

The most common type of Generative AI, LLM's are a neural network (deep learning model) created from language data. For frontier models, the size of the network can run into the trillions of parameters. Parameters roughly relate to the model capacity of an LLM (in very simple terms). There are two different kinds:

1. **Learned Parameters**: Internal values the model learns from data during it's training phase
2. **Hyper Parameters**: Variables that the researcher sets to determine the models characteristics

Together, these determine the models shape, size and strength. Large numbers of parameters are known as **Hyper Capacity** and allow for greater nuance and more complex reasoning, however this leads to more GPU power required to run the model, and higher API costs. Frontier models have trillions+ parameters and are recommended for multi-step reasoning and deep creative synthesis, where as smaller models have millions to (low) billions of parameters, and are often optimised for speed, specific tasks or local development. Developers are increasingly realising that smaller, highly optimised models can perform as effectively as frontier models for specific business applications, providing a more sustained balance between intelligence and operational cost. While some models are considered general, others are tuned to specific specifications such as:

- Instruction following
- Code generation
- Question answering
- Reasoning
- more

#### Types of LLM

Even within the context of "Large Language" models, there are different sizes (number of parameters) with different characteristics:

- **Small**: Fast, cheap and low latency. Can run locally or on small infrastructure and is best suited for classification, simple transformations and embedded or edge use cases
- **Medium**: Provides a balance of cost vs capability. Has good general performance and is best suited for chatbots, summarisation of documents or internal tooling
- **Large**: Provides strong reasoning and language ability, but at a higher cost and latency. Larger models are typically API hosted, and are best suited for complex workflows and nuanced language tasks
- **Frontier**: Offer state-of-the-art performance, but at a very high cost and compute requirement. These are often limited to closed API's with minimal end-user control, and are best suited for advanced reasoning, research and highly complex or ambiguous tasks

The best model is not the most powerful one, it’s the one that meets your requirements at the lowest cost and highest control.

#### Key Trade-offs

| Factor      | Small Models | Frontier Models |
| ----------- | ------------ | --------------- |
| Cost        | Low          | Very High       |
| Latency     | Fast         | Slower          |
| Performance | Narrow       | Broad           |
| Deployment  | Local        | Cloud/API       |
| Governance  | High control | Lower control   |

### AI Agents

In it's base form, Generative AI is designed for stateless and reactive language generation. It takes a prompt and generates a response. It is a linear process. AI Agents represent a fundamental shift, while an LLM serves as the core intelligence system, AI Agents can break complex goals into smaller sub-tasks, evaluate their own progress, and adjust their plan as they encounter new information. They are able to automate sophisticated processes that previously required constant human oversight and decision making. This shift is driven by the integration of tools, and access to data. AI Agents can use tools such as:

- Browsers
- Code executors
- API's
- and more

and they can access:

- Google Drive
- Slack
- SQL Databases
- and more

Whereas LLM's act as a generic assistant, by grounding agents in unique business data, agents can carry out multi-step workflows that aligned with specific business needs and constraints.

### Fundamental differences between Agentic and Non-agentic

Non-agentic (static) workflows:

- Characterised by linear "if this, then that" structure
- Every step is pre-defined by a developer
- The system moves from input to output along a fixed path
- Highly predictable and efficient for well-defined tasks

Agentic (dynamic) workflows:

- Iterative and non-linear
- Agents evaluate the results of this own actions and:
  - Use digital tools to gather new information
  - Dynamically adjust their strategy based on the feedback received
- Provide the adaptability required to solve complex open-ended problems that were previously only manageable by humans

## How does Generative AI Work?

Models start by breaking down raw text into smaller units called tokens.

### Tokenisation

There are two types of tokens:

1. **Input tokens**: Representing raw data provided by the user in the prompt, which the model must "read" and process
2. **Output tokens**: Units of text generated by the model in response to the user prompt

A token may represent a whole word, a syllable or even just a common cluster of letters. These are converted into numerical representations of language, allowing the model to perform complex mathematical operations. The model operates on probability and pattern recognition, it calculates the statistical likelihood of which token should follow the previous one. This iterative process of predicting the next token is what creates a seamless stream of text. The predictions are guided by learned patterns from the models training phase, where it is exposed to billions of sentences and learns different concepts, and how they relate to each other. Tokenisation is a not a universal standard however, unique algorithms are used to segment text, meaning a single sentence may result in a different number of tokens depending on the model used.

### Context

Context serves a the working memory of a model, and represents the maximum number of tokens that can be held in the models "active attention". It includes the users prompt, any retrieved data and the models response. Each model has a **Context Loss Threshold**, determined by the size of the **Context Window**. When a models context loss threshold is reached, it must drop pieces of information, generally on a "first-in, first-out" basis. The consequences of this are:

- Loss of initial instructions
- Logic gaps
- Increased risk of hallucinations

The size of the context window dictates the complexity of the tasks the model can reliably perform. Large windows enable reasoning over complex topics where as smaller windows require more prompt engineering, with shorter, more precise interactions.

### The Model Context Protocol (MCP)

We've established that an AI Agent uses an LLM for internal reasoning, but what separates it from a generic assistant is it's access to tools and data. MCP is an open standard framework that provides a universal interface that replaces fragmented, proprietary integrations. Without requiring custom code for every new connection, an agent can be given access to specific tools, datasets and environments, acting as a bridge for real-time context to produce accurate and grounded response, while maintaining a consistent security layer across different platforms.

## Interacting with Generative AI

There is a common analogy that can be useful to frame your thinking about LLM's:

- Imagine you've hired the best, most knowledgable intern in the world:
  - They've read the entire internet
  - They never sleep, and have very reliable recall
  - They act as a tireless reasoning engine
- However:
  - They have zero context about specific company documents or private files
  - They take instructions very literally
  - They guess when they lack access to facts

### Prompt Engineering

The process of intentionally designing, refining and optimising inputs (prompts), Prompt Engineering helps guide an LLN toward producing the most accurate, relevant and high-quality output possible. Effective Prompt Engineering requires:

- **Grounding**: Providing highly-specific context and background data the model need to anchor it's responses
- **Organisation**: Structuring prompts logically, to reduce ambiguity:
  - How you ask is as critical as what you ask
  - Use clear descriptive headings, numbered lists for sequential tasks and step-by-step logic sequences
- **Token efficiency**: Being concise yet comprehensive to maximise the models context window:
  - Be concise, yet comprehensive
  - Be aware that irrelevant information can replace critical data points and complex, multi-step instructions
  - Efficient token usage maximises the models ability to remember the beginning of a long dialogue and enables the model to handle larger volumes of data within a single session
