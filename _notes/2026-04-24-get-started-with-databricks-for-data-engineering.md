---
layout: note
title: "Get Started with Databricks for Data Engineering"
date: 2026-04-24
tags:
  - databricks
  - databricks-learning
  - data-engineer
summary: How Databricks enables Data Engineers to ingest, transform, manage, and deliver data through a unified lakehouse architecture using tools like Lakeflow, Delta Lake, and the medallion model.
---

# Learning Objectives

- List the four key product lines from Databricks
- Describe how each product line serves its respective audience
- Describe the primary responsibility and core skill of a Data Engineer
- Explain the stages of a traditional Data Engineering architecture, from data ingestion to processing, storage and consumption
- Define the core concepts of the Databricks Lakeflow offering, and describe how it benefits Data Engineering practitioners
- Describe the Medallion Architecture for data transformation in Databricks
- Describe the benefits of Delta Lake and Delta Tables in the Databricks Data Intelligence Platform
- List the available data ingestion techniques in the Databricks Data Intelligence Platform
- Describe how Lakeflow Spark Declarative Pipelines and Lakeflow Jobs facilitate unified orchestration in Databricks

# Data Engineering

Data Engineers are responsible for extracting data from disparate sources into a centralised storage location, as well as incrementally and progressively improving the quality of the data, as it moves through each layer of the data platform.

Their responsibilities often include:

- Designing, building and maintaining data pipelines, which manage data flow from source to storage to consumer tools
- Transforming raw data to clean reliable data
- Ensuring the quality and integrity of data

Data Engineers are faced with a number of challenges, such as:

- Complex data ingestion methods
- Supporting key engineering principles, such as:
  - Agile
  - CI/CD
  - Version Control
  - Isolating the development, test and production environments
- Managing third-party orchestration tools

# Databricks

Databricks is a centralised, managed platform for data. In a typical Databricks architecture, data is ingested from a variety of sources to a storage system. It is then processed, cleaned and made-ready for consumers. The process is orchestrated and includes governance and security.

There are four key product lines in the Databricks offering:

## 1. Lakeflow

Lakeflow handles the Extract, Transform, Load process (ETL) and is likely the most important product for Data Engineers within the Databricks platform. It consists of three components:

### Lakeflow Connect

Connect provisions connectors for ingesting data from a variety of data sources, such as applications, databases and cloud. There are three core features:

#### Manual File Upload

This feature allows for the upload of a file from a users local file system, directly to Databricks. Databricks supports all file types, structured, semi-structured and unstructured, when uploaded to a Volume, which represents a logical space for storage in a cloud object storage location. Volumes are intended for path based data access to the file only. For tabular data, a data table is preferred. The following file types can be manually uploaded to a data table:

- CSV
- TSV
- JSON
- Avro
- Parquet
- TXT

#### Standard connectors

This feature is used to ingest data from remote sources, such as object storage or message queues, among others.

#### Managed connectors

This feature is used to ingest data from enterprise sources such as Software as a Service (SaaS) or Databases, among others. Managed connectors leverage incremental read/writes and are fast, scalable and cost-effective.

### Lakeflow Spark Declarative Pipelines

Once the data in ingested to the Databricks platform, Spark Declarative Pipelines can be used to propagate the data through the platform, from raw to consumer-ready. Traditioanl data platforms require imperative code, which explicitly states **how** to do things, step-by-step:

- Read data
- Filter rows
- Join tables
- Write output

With declarative pipelines, Engineers can use SQL or Python to write declarative code, for batch or streaming pipelines, and the Spark Declarative Pipelines handles:

- Execution Plan
- Error Handling
- Dependency Management
- Intelligent optimisation
  - As you data grows, automated scaling and recovery from failures improve reliability and reduced maintenance
- Unified batch and streaming
  - Adapts to workload type, from near realt-time to batch, optimising fro performance and cost efficiency.

### Lakeflow Jobs

Jobs is the orchestrator for not just for Lakeflow Connect, but for the entire Databricks platform, including:

- Notebooks
- Jobs for SQL
- Machine Learning models

and more. It allows automated workflows to be authored with real-time monitoring and supports a number of different smart triggers, such as:

- Event based
- Continuous execution
- Complex Directed Acyclic Graph's (DAG)

Jobs provides real-time monitoring with drill-down dashboards, allowing users to easily:

- Visulise critical path for troubleshooting and optimisation
- Live query profile for performance insights with query history
- Searchable query profile

Jobs can be administered with an easy to use point-and-click interface, meaning no special skills are required.

## 2. Databricks SQL

Databricks SQL is the Data Warehousing component, providing foundational warehouse functionality, coupled with governance and administrations tooling. It is an important component for both Data Engineers and Analysts alike. Databricks uses Deltalake, an open source protocol for reading and writing files to cloud storage. It turns a Data Lake into a Lakehouse, combining traits from a standard Data Lake (flexibility and scalability) with a Data Warehouse (reliability and performance). Deltalake sits on-top of any data lake stack, such as:

- AWS
- GCP
- Azure
- etc

### The Medallion Architecture

Databricks supports the medallion architecture, a design pattern sometimes referred to as a "multi-hop architecture". It consists of three layers:

#### Bronze

Storage layer for raw, append-only and minimally transformed data, this is where data from external sources lands when it's first ingested. Data is mostly stored as it originally existed, with at most Personally Identifiable Information (PII) removed, and some metadata columns added, for example:

- Load
- Datetime
- ProcessID
- etc

Data in the bronze layer is often has a long retention period, often persisted for many years.

#### Silver

Storage layer for filtered, cleaned and enriched data. Data is taken from the bronze layer, any errors are fixed, data is joined, deduplicated, validated, with business rules applied and schemas are either enforced, or evolved as necessary. Some silver tables may be crated from other, intermediate silver tables, as well as from the bronze layer. Tables are often subject themed, for example:

- Customers
- Transactions
- etc

#### Gold

Storage layer for business-level aggregated data. Data from the Silver layer is modeled (commonly into marts using star schemas) so as to be ready for consumption. Data may be delivered to downstream users and applications, or it may be replicated to external systems.

### Delta Tables

Delta Tables are the default format for tables in Databricks. A Delta Tables is a directory within the Data Lake, containing:

- Data in Parquet files
- Transaction log (JSON + checkpoint Parquet files)

Data is stored in states, with new entries added for each transaction. These states are managed by the log, which ascribes a version to each changed state. Data can be queried in any state, using either a timestamp or the version number. This process is known as Time Travel.

In addition to Time Travel, Data Tables have a number of key features:

#### ACID Compliance

- Atomicity
  - Entire transaction completes
- Consistency
  - Data follows rules or will be rolled back
- Isolation
  - One transaction completes before the start of another
- Durability
  - Data is saved in a persistent state once completed

#### Data Manipulation Language (DML):

- `INSERT`
  - Add new rows
- `UPDATE`
  - Update existing values
- `DELETE`
  - Delete rows
- `MERGE`
  - Select records from a source tables and perform multiple DML operations on a target table.

#### Schema Evolution and Enforcement

- Schema evolution allows controlled adjustments to table schema (such as adding columns and handling certain schema changes) as data evolves.
- Schema enforcement ensures that any data written to a Delta Table matches the tables defined schema, preventing schema mismatches and rejecting data that doesn't conform, thereby ensuring data integrity.

## 3. AI/BI

The Business Intelligence space for Databricks, this is important for Data Analysts and Business Users. It consists of two components:

### Dashboards

Space for running queries and visualising data

### Genie

Space for asking natural language queries, perfect for uses who are not comfortable running queries with SQL.

## 4. Mosaic AI

A suite of tools for Generative AI application development, it is important for Data Scientists, Machine Learning Engineers, and AI Engineers. Mosaic AI provides Data Intelligence, AI agents that reason on your data and solve domain specific problems (distinct from General Intelligence, which consists of large models trained on the entire web).
