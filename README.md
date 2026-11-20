<div align="center">

# ⚡ D-SPORTS | Behavioural Data Analytics & UX Intelligence Platform

**From Raw DOM Telemetry to Statistical Inference & Executive BI — Built From Scratch.**

[![Live Platform](https://img.shields.io/badge/Live_Platform-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://jtp-codes.github.io/D-SPORTS/)
[![JavaScript](https://img.shields.io/badge/Telemetry-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#%EF%B8%8F-system-architecture--tech-stack)
[![R](https://img.shields.io/badge/Inference-R_Tidyverse-276DC3?style=for-the-badge&logo=r&logoColor=white)](#%EF%B8%8F-inferential-statistical-validation)
[![Power BI](https://img.shields.io/badge/Dashboard-Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](#%EF%B8%8F-system-architecture--tech-stack)

</div>

---

## 🎯 Project Overview
Standard web analytics tools obscure micro-interaction friction behind session-level aggregates. Instead of analyzing a static third-party dataset, we engineered **D-SPORTS** — a live, custom-instrumented sports e-commerce platform — to capture authentic clickstream telemetry directly from the browser DOM, validate behavioural hypotheses in **R**, and deliver developer-actionable CRO diagnostics via **Power BI**, benchmarked against the **Google HEART Framework**.

---

## 📊 Core Empirical Metrics
| Icon | Metric | Value | Analytical Context |
| :---: | :--- | :---: | :--- |
| 🧾 | **Cleaned Interaction Events** | `3,027` | Deduplicated, bot-filtered DOM event logs |
| 👥 | **Sessions / Unique Users** | `66` / `33` | `45.9` avg. events per session |
| 🎯 | **Conversion Rate** | `31.82%` | `21` completed orders out of `66` sessions |
| 🔁 | **User Retention Rate** | `60.6%` | `20` of `33` users returning for repeat sessions |
| 📉 | **Bounce Rate** | `18.18%` | Single-page sessions with zero further interaction |
| 📱 | **Device Split** | `75.8%` Mobile | `50` Mobile · `15` Desktop (`22.7%`) · `1` Tablet (`1.5%`) |

---

## 🏗️ System Architecture & Tech Stack
* **🌐 Frontend & Hosting:** `HTML5`, `CSS3` (Mobile-First), `JavaScript (ES6+)` deployed via **GitHub Pages**.
* **📡 Custom Telemetry (`tracker.js`):** Non-blocking, privacy-compliant (zero PII, UUID v4) DOM event listener capturing `click`, `scroll` (25%/50%/75%/100%), `mouseover`, `input`, `submit`, and `beforeunload` events.
* **🔬 Statistical Engine (R):** `tidyverse`, `dplyr`, `jsonlite`, `lubridate`, `ggplot2` for ETL, deduplication, 10 empirical visualizations, and formal hypothesis testing.
* **📈 Business Intelligence (Power BI):** 6-page interactive executive dashboard built on a flat Star Schema with custom DAX measures and synchronized cross-filtering slicers.

---

## ⚖️ Inferential Statistical Validation
| Test | Hypothesis Evaluated | Result | Operational Takeaway |
| :--- | :--- | :---: | :--- |
| **Pearson Correlation** | Session engagement vs. conversion outcome | `r = 0.77`, `p < 0.001` | Longer, deeper sessions strongly predict purchase completion. |
| **Welch's t-Test** | Mobile vs. Desktop mean session duration | `t = 2.14`, `p = 0.036` | Desktop users exhibit significantly longer, research-driven sessions. |
| **Chi-Square Test** | Device category vs. entry-page pathway | `χ² = 8.47`, `df = 2`, `p = 0.014` | Navigation entry patterns depend significantly on device type. |

---

## ❤️ Google HEART Framework Alignment
* **😊 Happiness:** `25` form validation errors (`0.38` / session) & `49` double-click hesitation events.
* **🔥 Engagement:** `45.9` avg. events/session | `193.3s` mean duration (`48.75s` median).
* **🚀 Adoption:** `33` unique users generating `1,360` product discovery events (`44.9%` of total volume).
* **🔄 Retention:** `60.6%` cross-session return rate.
* **🏆 Task Success:** `31.82%` end-to-end checkout conversion rate.

---

## 🔍 Micro-Interaction Diagnostics & 5-Step CRO Roadmap
1. **⚡ Debounce Primary CTAs:** Implement a `300ms` button debounce + active spinner to eliminate **49 rage/double-clicks** (`42.9%` Add-to-Cart, `28.6%` Checkout).
2. **✅ Real-Time Form Validation:** Deploy inline input validation with format tooltips to resolve **25 form errors** (`76%` concentrated in checkout shipping/payment).
3. **📐 Restructure Above-the-Fold:** Shift core merchandise and category filters above the 50% scroll depth to counter the **27-point drop-off** after 25% scroll.
4. **🛒 Cross-Device Cart Persistence:** Link carts to user accounts so high-volume desktop research (`789` events) converts seamlessly into mobile checkouts (`436` events).
5. **🧪 Post-Deployment A/B Testing:** Benchmark every frontend fix against the `31.82%` conversion baseline.

---

## 📁 Repository Structure
```text
D-SPORTS/
├── index.html              # Mobile-first e-commerce platform
├── styles.css              # Responsive UI & styling
├── tracker.js              # Custom vanilla JS DOM telemetry engine
├── analytics/              # R ETL scripts, hypothesis tests & cleaned dataset
└──dashboard/              # Power BI (.pbix) & executive dashboard exports

