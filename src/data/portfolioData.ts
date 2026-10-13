export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  category: 'integration' | 'analytics' | 'systems';
  overview: string;
  highlights: string[];
  technologies: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  description: string;
}

export interface TechnicalCompetencyItem {
  category: string;
  skills: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    details: string;
    keywords: string[];
  }[];
}

export interface HubCard {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  badge?: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "JOSEPH W. P. BODDEN JR.",
    preferredName: "Joseph W. P. Bodden Jr.",
    title: "Analytical Developer & Integration Engineer",
    specializations: ["SQL Database Architectures", "Python Automation", "REST API Orchestration", "Enterprise Data Pipelines"],
    tagline: "AI‑driven Analytical Developer and Integration Engineer",
    motto: "I build data systems that think — blending 12+ years of SQL mastery with Google‑AI‑powered automation.",
    location: "Poway, CA",
    email: "joeitguy@gmail.com",
    veteranStatus: "U.S. Navy Veteran",
    socials: {
      linkedin: "https://www.linkedin.com/in/joe-bodden/",
      linkedinAlt: "https://linkedin.com/in/joe-bodden",
      github: "https://github.com/joeitguy",
      githubRepo: "https://github.com/joeitguy/modular-resume",
      salesforce: "https://www.salesforce.com/trailblazer/jbodden1",
      dockerHub: "https://hub.docker.com/u/joeitguy"
    },
    summaryParagraphs: [
      "AI‑driven Analytical Developer and Integration Engineer blending 12+ years of deep SQL expertise with modern Google‑AI‑powered automation. I build data systems that think — combining advanced SQL architectures, Python automation, REST API orchestration, and scalable ETL pipelines with prompt‑engineered intelligence.",
      "Certified in Google AI and Python (PCEP™), with specialized mastery in window functions, stored procedures, and high‑performance query design. I translate messy, ambiguous business problems into clean, automated, insight‑ready data workflows. Known for vibe‑coding AI solutions, architecting resilient pipelines, and collaborating across engineering, product, and business teams to deliver clarity, reliability, and speed in high‑availability environments."
    ],
    bio: "AI‑driven Analytical Developer and Integration Engineer blending 12+ years of deep SQL expertise with modern Google‑AI‑powered automation. I build data systems that think — combining advanced SQL architectures, Python automation, REST API orchestration, and scalable ETL pipelines with prompt‑engineered intelligence. Certified in Google AI and Python (PCEP™), with specialized mastery in window functions, stored procedures, and high‑performance query design. I translate messy, ambiguous business problems into clean, automated, insight‑ready data workflows. Known for vibe‑coding AI solutions, architecting resilient pipelines, and collaborating across engineering, product, and business teams to deliver clarity, reliability, and speed in high‑availability environments.",
    military: {
      branch: "United States Navy",
      location: "San Diego, CA",
      role: "Hospital Corpsman (HN / E-3) — Honorable Discharge",
      award: "National Defense Service Medal",
      notes: "Provided medical and operational support at Naval Medical Center San Diego. Awarded National Defense Service Medal. DD-214 available upon request. Foundation taught discipline, calm execution under pressure, consistency, and the vital role of trust in high-stakes environments."
    },
    education: {
      institution: "American InterContinental University",
      degree: "Associate of Science in Business Administration & Management",
      period: "2009 – 2011",
      focus: "Operational Management, Quantitative Analysis, and Strategic Communication"
    },
    certifications: [
      {
        name: "Google AI Professional Certificate (8 courses, 20+ functional AI artifacts)",
        issuer: "Google Career Certificates / Coursera",
        status: "Active Credential",
        date: "Sep 29, 2026",
        credentialId: "1QYD7WQXLVC2",
        verifyUrl: "https://coursera.org/verify/professional-cert/1QYD7WQXLVC2",
        description: "Fluent in AI-driven data analysis, prompt engineering, communication, content creation, research, and app deployment. Completed 8 courses with 20+ functional artifacts and vibe-coded custom AI solutions."
      },
      {
        name: "PCEP™ – Certified Entry-Level Python Programmer",
        issuer: "Python Institute",
        status: "Certified",
        date: "June 24, 2025",
        credentialId: "6ofw.4JrC.7zxc",
        verifyUrl: "https://verify.openedg.org",
        description: "General-Purpose Programming Track: procedural programming, algorithms, core data structures, scripting, and automated workflow logic."
      },
      {
        name: "Advanced SQL: Window Functions, Stored Procedures & Triggers",
        issuer: "LearnKartS / Coursera",
        status: "Completed",
        date: "Sep 4, 2026",
        credentialId: "BFVQ7HF1WIVI",
        verifyUrl: "https://coursera.org/verify/BFVQ7HF1WIVI",
        description: "Advanced relational querying, complex window functions, procedural stored procedures, triggers, and query execution optimization."
      },
      {
        name: "SQL Foundations Certificate",
        issuer: "Microsoft / Coursera",
        status: "Completed",
        date: "Aug 15, 2026",
        credentialId: "4J59PHZ7XOQ3",
        verifyUrl: "https://coursera.org/verify/4J59PHZ7XOQ3",
        description: "Relational database architecture, relational querying, joins, subqueries, and enterprise data manipulation."
      },
      {
        name: "SQL for Data Science Certificate",
        issuer: "University of California, Davis / Coursera",
        status: "Completed",
        date: "Aug 11, 2026",
        credentialId: "YI8XJQZB2UWY",
        verifyUrl: "https://coursera.org/verify/YI8XJQZB2UWY",
        description: "Data extraction, complex filtering, aggregating large analytical datasets, profiling schemas, and exploratory data analysis."
      },
      {
        name: "Python Basics Certificate",
        issuer: "University of Michigan / Coursera",
        status: "Completed",
        date: "Aug 19, 2026",
        credentialId: "2TDPO14510RQ",
        verifyUrl: "https://coursera.org/verify/2TDPO14510RQ",
        description: "Program structure, data manipulation, conditionals, looping constructs, and automated procedural execution."
      },
      {
        name: "Data Exploration with Data 360 SQL Queries",
        issuer: "Salesforce Trailhead",
        status: "Earned",
        date: "Continuous",
        credentialId: "Trailhead Badge",
        verifyUrl: "https://www.salesforce.com/trailblazer/jbodden1",
        description: "Hands-on querying and multi-dataset joins within the Salesforce Data 360 ecosystem."
      }
    ] as CertificationItem[],
    technicalCompetencies: [
      {
        category: "Artificial Intelligence & GenAI",
        skills: "Prompt engineering, AI data analysis, custom AI tooling, model APIs, contextual algorithms"
      },
      {
        category: "Data Engineering & SQL",
        skills: "T-SQL, PostgreSQL, SQLite, window functions, stored procedures, triggers, query optimization, schema design, ETL/ELT automation, SSRS reporting"
      },
      {
        category: "Programming & API Integration",
        skills: "Python (PCEP), TypeScript, REST APIs, JSON/XML, OAuth2, multi-system SaaS integration"
      },
      {
        category: "DevOps & Cloud",
        skills: "Docker, AWS integration, Git/GitHub, pgAdmin, Postman, Jira, Confluence"
      },
      {
        category: "Soft Skills & Leadership",
        skills: "Business communication, cross-functional leadership, requirements gathering, operational troubleshooting"
      }
    ] as TechnicalCompetencyItem[],
    technicalToolkit: {
      languages: ["SQL (T-SQL, PostgreSQL, SOQL, SQLite)", "Python (PCEP)", "TypeScript", "JavaScript", "HTML5/CSS3", "Bash"],
      databases: ["PostgreSQL", "Microsoft SQL Server", "SQLite", "Salesforce Data 360"],
      analytics: ["SSRS", "Splunk", "Power BI", "Tableau", "Excel Advanced Modeling"],
      tools: ["Docker", "Git / GitHub", "pgAdmin", "Postman", "Jira", "Confluence", "VS Code", "AWS Integration"]
    }
  },

  stats: [
    { label: "Enterprise Experience", value: "12+ Yrs" },
    { label: "Google AI Specialist", value: "8 Courses" },
    { label: "Python Certified", value: "PCEP™" },
    { label: "Military Veteran", value: "USN Corpsman" }
  ],

  experiences: [
    {
      id: "independent-ai",
      role: "Analytical Developer & AI Engineer",
      company: "Independent Software & AI Development",
      location: "Remote",
      period: "2025 – Present",
      type: "Development & AI Engineering",
      category: "integration",
      overview: "Engineered custom AI tools and automation apps in Python and TypeScript using contextual algorithms to model business decisions and evaluate technical skills.",
      highlights: [
        "Engineered custom AI tools and automation apps in Python and TypeScript using contextual algorithms to model business decisions and evaluate technical skills.",
        "Built and deployed containerized database environments (postgres-migration-lab) using Docker, Python ETL scripts, and pgAdmin to streamline schema migrations and validation pipelines.",
        "Completed 8 Google AI specialization courses, producing 20+ functional AI artifacts, vibe-coded solutions, and prompt-engineered workflows."
      ],
      technologies: ["Python (PCEP)", "TypeScript", "Google AI", "Docker", "pgAdmin", "PostgreSQL", "ETL Pipelines", "Prompt Engineering"]
    },
    {
      id: "vistage",
      role: "Integration Support Analyst",
      company: "Vistage Worldwide, Inc.",
      location: "Remote",
      period: "2018 – 2025",
      type: "Full-Time Enterprise",
      category: "integration",
      overview: "Designed and optimized complex SQL queries, automated reporting pipelines, and SSRS dashboards across enterprise SaaS platforms.",
      highlights: [
        "Designed and optimized complex SQL queries, automated reporting pipelines, and SSRS dashboards across enterprise SaaS platforms.",
        "Built Python API clients and automated validation scripts to retrieve, transform, and normalize JSON/XML payloads.",
        "Collaborated with engineering, QA, and business teams to convert requirements into technical workflows and integration runbooks.",
        "Troubleshot API authentication, rate limits, schema alignment, and connectivity issues to maintain high integration reliability."
      ],
      technologies: ["T-SQL", "Python", "REST APIs", "SSRS", "JSON/XML", "Splunk", "Jira", "Integration Runbooks"]
    },
    {
      id: "pala-casino",
      role: "Data Reporting Analyst",
      company: "Pala Casino Spa & Resort",
      location: "Pala, CA",
      period: "2017 – 2018",
      type: "Full-Time",
      category: "analytics",
      overview: "Built SQL-based reporting architectures delivering operational, marketing, and financial analytics to executive leadership.",
      highlights: [
        "Built SQL-based reporting architectures delivering operational, marketing, and financial analytics to executive leadership.",
        "Automated external data ingestion using Python and vendor REST APIs.",
        "Optimized slow-performing SQL queries and routines to reduce latency and improve throughput."
      ],
      technologies: ["SQL", "SSRS", "Python", "REST APIs", "Query Optimization", "Financial Analytics"]
    },
    {
      id: "jackson-rancheria",
      role: "Senior Systems Analyst",
      company: "Jackson Rancheria Casino",
      location: "Jackson, CA",
      period: "2012 – 2017",
      type: "Full-Time",
      category: "systems",
      overview: "Managed mission-critical SQL database and reporting infrastructure in a 24/7 high-availability environment.",
      highlights: [
        "Managed mission-critical SQL database and reporting infrastructure in a 24/7 high-availability environment.",
        "Developed T-SQL queries and SSRS compliance reports to diagnose anomalies and meet regulatory requirements.",
        "Mentored technical staff on database troubleshooting, query optimization, and operational procedures."
      ],
      technologies: ["T-SQL", "SSRS", "24/7 High Availability", "Compliance Reporting", "Mentorship", "Database Administration"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      id: "data-eng",
      name: "Data Engineering & Architecture",
      description: "Designing resilient pipelines, ETL orchestration, and schema-first data models.",
      skills: [
        {
          name: "ETL Pipeline Design & Orchestration",
          level: "Advanced",
          details: "Hands-on experience building automated ingestion, schema transformation, and verification checks across heterogeneous databases.",
          keywords: ["ETL", "Python", "T-SQL", "Automated Jobs", "Cron", "Airflow Concepts"]
        },
        {
          name: "Multi-Database Migration & Sync",
          level: "Advanced",
          details: "Architecting seamless SQL Server to PostgreSQL data pipelines, schema synchronization, and data normalization.",
          keywords: ["SQL Server", "PostgreSQL", "Schema Alignment", "Data Cleansing"]
        },
        {
          name: "Query Optimization & Indexing",
          level: "Expert",
          details: "Analyzing execution plans, missing index identification, deadlock resolution, and stored procedure performance tuning.",
          keywords: ["Execution Plans", "Clustered/Non-Clustered Indexes", "Query Profiling"]
        },
        {
          name: "Data Modeling & Governance",
          level: "Proficient",
          details: "Star/snowflake schema design, relational normalization, data dictionary stewardship, and compliance auditing.",
          keywords: ["Dimensional Modeling", "Data Dictionaries", "Audit Trails", "Governance"]
        }
      ]
    },
    {
      id: "salesforce",
      name: "Salesforce & CRM Ecosystem",
      description: "Hands-on data exploration, SOQL schema modeling, and record-triggered automation.",
      skills: [
        {
          name: "SOQL & Data 360 Exploration",
          level: "Advanced",
          details: "Advanced SOQL querying, relational traversing, and hands-on Trailhead badge in Data 360 SQL Queries.",
          keywords: ["SOQL", "Data 360", "Trailhead", "Data Streams", "Bulk Queries"]
        },
        {
          name: "Flow Automation & Integrations",
          level: "Proficient",
          details: "Configuring record-triggered flows, scheduled actions, outbound webhook coordination, and error fault paths.",
          keywords: ["Record-Triggered Flows", "Screen Flows", "Integrations", "Error Handling"]
        },
        {
          name: "CRM Data Modeling & Governance",
          level: "Proficient",
          details: "Custom object relationships, permission sets, security governance, validation rules, and approval workflows.",
          keywords: ["Object Schema", "Security Profiles", "Governance", "Validation Rules"]
        }
      ]
    },
    {
      id: "analytics",
      name: "Analytics & Business Intelligence",
      description: "Translating raw transactional rows into executive visibility and actionable operational indicators.",
      skills: [
        {
          name: "SSRS Enterprise Reporting",
          level: "Expert",
          details: "7+ years producing automated, parameterized enterprise reports with high aesthetic rigor and scheduled deliveries.",
          keywords: ["SSRS", "Parameterized Reports", "Automated Subscriptions", "Export Templates"]
        },
        {
          name: "Power BI & Tableau Dashboards",
          level: "Proficient",
          details: "Interactive visual dashboards, DAX measures, calculated fields, and executive KPI summaries.",
          keywords: ["Power BI", "Tableau", "DAX", "KPI Dashboards", "Visual Analytics"]
        },
        {
          name: "Splunk Telemetry & Log Intelligence",
          level: "Advanced",
          details: "Querying distributed log streams (SPL), building alert triggers, and isolating sync drop-offs in real time.",
          keywords: ["Splunk SPL", "Log Diagnostics", "Anomaly Detection", "Root-Cause Analysis"]
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps, Cloud & Tooling",
      description: "Modern containerized pipelines, reproducible development environments, and cloud deployment.",
      skills: [
        {
          name: "Docker Containerization",
          level: "Proficient",
          details: "Building multi-stage Dockerfiles (Node 18 Alpine, Python Flask), compose workflows, and Docker Hub distribution.",
          keywords: ["Docker", "Docker Compose", "Alpine Linux", "Docker Hub", "Multi-stage Builds"]
        },
        {
          name: "Git & Collaborative Workflows",
          level: "Proficient",
          details: "Branching strategies, atomic commits, pull requests, semantic versioning, and CI/CD integration.",
          keywords: ["Git", "GitHub", "CI/CD", "Version Control", "Releases"]
        },
        {
          name: "Cloud Hosting & Deployments",
          level: "Working Knowledge",
          details: "Heroku container registry deployments, buildpack workflows, and foundational AWS/Azure/GCP cloud environments.",
          keywords: ["Heroku", "AWS", "Azure", "GCP", "PaaS", "Environment Management"]
        }
      ]
    },
    {
      id: "leadership",
      name: "Leadership & Collaboration Strengths",
      description: "Proven military poise, cross-functional bridge building, and technical translation.",
      skills: [
        {
          name: "High-Pressure Composure & Integrity",
          level: "Core Strength",
          details: "Forged as a U.S. Navy Hospital Corpsman — unwavering calm under operational tension, methodical triage, and high ethical standard.",
          keywords: ["Military Veteran", "Crisis Management", "Triage", "Dedication"]
        },
        {
          name: "Technical Translation for Non-Tech Stakeholders",
          level: "Core Strength",
          details: "Transforming complex SQL schema logic and backend pipeline bugs into plain-English business trade-offs.",
          keywords: ["Stakeholder Alignment", "Executive Summaries", "Cross-Department Rapport"]
        },
        {
          name: "Mentorship & Systems Documentation",
          level: "Core Strength",
          details: "Authoring runbooks, leading peer SQL training, and institutionalizing knowledge to eliminate single points of failure.",
          keywords: ["Runbooks", "Peer Training", "Knowledge Base", "Process Mapping"]
        }
      ]
    }
  ] as SkillCategory[],

  hubCards: [
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      category: "Professional Network",
      description: "Connect for opportunities, view endorsements, and track ongoing updates in data engineering.",
      link: "https://www.linkedin.com/in/joe-bodden/",
      badge: "Verified Profile",
      icon: "linkedin"
    },
    {
      id: "github-repo",
      title: "Modular Résumé Repository",
      category: "Open Source Code",
      description: "Explore the clean architecture behind this modular identity engine, component breakdown, and container configs.",
      link: "https://github.com/joeitguy/modular-resume",
      badge: "GitHub Repo",
      icon: "github"
    },
    {
      id: "salesforce-trailhead",
      title: "Salesforce Trailblazer",
      category: "Skills & Badges",
      description: "Inspect completed learning modules, badges, and Data 360 SQL Query exploration achievements.",
      link: "https://www.salesforce.com/trailblazer/jbodden1",
      badge: "Trailhead Profile",
      icon: "salesforce"
    },
    {
      id: "docker-hub",
      title: "Docker Hub Registry",
      category: "Containers & Artifacts",
      description: "Demonstrating full-stack containerization workflows with portable, multi-platform Docker container images.",
      link: "https://hub.docker.com/u/joeitguy",
      badge: "Docker Hub",
      icon: "docker"
    },
    {
      id: "github-profile",
      title: "GitHub Portfolio & Labs",
      category: "Code & Experiments",
      description: "Discover additional repositories, ETL scripts, and data engineering prototypes authored by Joe.",
      link: "https://github.com/joeitguy/",
      badge: "Code Hub",
      icon: "code"
    }
  ] as HubCard[],

  coverLetter: {
    salutation: "Dear Hiring Team,",
    date: "Current Application Cycle",
    body: [
      "I am writing to introduce myself as a data professional who thrives at the intersection of technology, teamwork, and problem-solving. My career has been built around connecting systems, people, and ideas — turning scattered, siloed data into clear, reliable insight. Whether I am architecting an automated ETL pipeline, tuning a stubborn multi-table SQL query, or collaborating with cross-functional stakeholders to visualize key operational metrics, I bring a steady, disciplined approach that keeps initiatives moving forward.",
      "Over the past twelve years, I have worked across enterprise SQL Server, PostgreSQL, and Python environments, building automated reporting workflows and multi-system integration pipelines that make data genuinely accessible and actionable. At Vistage Worldwide, I served as the linchpin between data infrastructure and business operations, diagnosing integration anomalies through Splunk log analysis and automating validation checks before production impact. I take genuine satisfaction in translating technical nuance into meaningful business outcomes — it is where my analytical mindset meets my commitment to open communication.",
      "My foundation in the U.S. Navy as a Hospital Corpsman taught me discipline, consistency, and the vital importance of trust inside a high-performing unit. Those principles directly shape how I operate today: stay calm under pressure, communicate with absolute clarity, and deliver with unyielding integrity. I take pride in being the engineer who keeps systems talking and teams aligned, no matter how complex the technical landscape.",
      "I am drawn to teams that prioritize innovation, data reliability, and collaborative culture. I would welcome the opportunity to bring my technical depth, dependable work ethic, and team-first mindset to your mission."
    ],
    closing: "Respectfully,",
    signoff: "Joseph William Phillip Bodden Jr."
  },

  architectureDoc: {
    title: "Modular Identity System & Architecture",
    version: "2.0 (Modernized Web Standards Edition)",
    summary: "A production-grade, containerized identity platform engineered by Joseph W.P. Bodden Jr. Designed to demonstrate that professional identity can be as portable, scalable, and resilient as modern enterprise cloud software.",
    components: [
      {
        name: "React 19 + TypeScript Presentation Layer",
        description: "Replaces legacy Create-React-App with a high-performance, accessible Vite + React 19 single-page architecture with Tailwind CSS v4 styling, WCAG AA compliance, and native print stylesheets."
      },
      {
        name: "Self-Contained Identity Modules",
        description: "Modular boundaries separating Resume, CoverLetter, SkillsSummary, SystemArchitecture, and Contact subsystems, enabling independent rendering, isolated state, and multi-profile customization."
      },
      {
        name: "Backend & ETL Sandbox Container",
        description: "Containerized Flask and PostgreSQL services for simulating live database migration scenarios, schema alignment checks, and automated API-driven data transformations."
      },
      {
        name: "Multi-Platform Deployment Ready",
        description: "Containerized with Alpine Linux and Nginx reverse proxy, deployable seamlessly to Heroku, Google Cloud Run, AWS ECS, or Azure Container Apps with zero code changes."
      }
    ],
    roadmap: [
      { item: "Direct Recruiter PDF Export", status: "Completed in Overhaul", desc: "Native browser print-optimized layout that produces pristine 1-2 page PDFs without external server dependencies." },
      { item: "Interactive Skill & Experience Filter", status: "Completed in Overhaul", desc: "Real-time fuzzy search across 12+ years of enterprise experience, technologies, and competencies." },
      { item: "Dynamic Tailored Cover Letter Generator", status: "Completed in Overhaul", desc: "Allows instant personalization of target company and recipient for tailored application packets." },
      { item: "Multi-Profile Identity Vault", status: "Active Roadmap", desc: "Routing system supporting role-targeted views (e.g. Data Engineer vs. CRM Data Specialist vs. BI Architect)." },
      { item: "Automated CI/CD Pipeline", status: "Active Roadmap", desc: "GitHub Actions workflow validating TypeScript, linting, and running automated headless container health checks." }
    ]
  }
};
