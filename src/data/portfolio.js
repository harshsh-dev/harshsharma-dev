export const personal = {
  name: "Harsh Sharma",
  title: "Senior Software Engineer",
  subtitle: "Backend & Distributed Systems",
  email: "harshsharma.ext@gmail.com",
  phone: "+91 93142 22527",
  linkedin: "https://www.linkedin.com/in/harsh-sharma-8a850b173/",
  github: "https://github.com/harshsh-dev",
  location: "Bangalore, India",
  resume: "/Harsh_Sharma_Resume.pdf",
  summary:
    "Senior Software Engineer with 5+ years designing high-throughput, resilient distributed systems across fintech and banking. Ship production-grade microservices in Rust, Go, Java and Python — serving millions of customers and transactions daily.",
};

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Daily Payment Events", value: 5, suffix: "M+" },
  { label: "Delivery Accuracy", value: 99.99, suffix: "%", decimals: 2 },
  { label: "Processing Time Cut", value: 99, suffix: "%" },
];

export const heroMetrics = [
  { label: "events/day", value: "5M+" },
  { label: "accuracy", value: "99.99%" },
  { label: "customers served", value: "1M+" },
];

export const experience = [
  {
    id: "idfc",
    company: "IDFC FIRST Bank",
    role: "Senior Software Engineer",
    location: "Bangalore, KA",
    period: "Dec 2025 – Present",
    current: true,
    color: "#00F5C4",
    highlights: [
      "Shipped the Nominee Management & Audit Service from concept to production in under one week using Java Spring Boot — serving 1M+ customers on day one",
      "Built an Interest Calculator service in Go handling complex computation across multiple banking product types with a complete audit trail",
      "Built the Standing Instruction (SI) service from scratch and integrated it synchronously with the TCS BaNCS core banking system to automate recurring transactions and payment instructions",
      "Owned end-to-end delivery — architecture, implementation, integration, deployment and production readiness — inside a strict regulated banking environment",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Go",
      "TCS BaNCS",
      "PostgreSQL",
      "Microservices",
    ],
  },
  {
    id: "kotak",
    company: "Kotak Mahindra Bank",
    role: "Software Engineer II",
    location: "Bangalore, KA",
    period: "May 2024 – Dec 2025",
    current: false,
    color: "#F97316",
    highlights: [
      "Redesigned legacy report pipeline with NumPy/Pandas — cut processing from 35–55 days to under 5 minutes on 1M+ records",
      "Built FastAPI backend for Risk-Central platform with JWT auth + WebSocket real-time feedback (300+ MAU)",
      "Instrumented 100+ API endpoints with Prometheus; Grafana dashboards for daily SLA tracking",
      "Authored reusable Python SDK adopted by 7+ internal microservices, reducing redundant code by 30%",
      "Automated CI/CD for 20+ services via Azure DevOps — reduced deployment time by 70%",
      "Designed dependency-aware Airflow DAGs across 5+ RISK modules",
    ],
    tags: [
      "Python",
      "FastAPI",
      "NumPy",
      "Pandas",
      "Prometheus",
      "Grafana",
      "Airflow",
      "Azure DevOps",
    ],
  },
  {
    id: "juspay",
    company: "Juspay",
    role: "Software Engineer – Integration",
    location: "Bangalore, KA",
    period: "Apr 2022 – Apr 2024",
    current: false,
    color: "#A855F7",
    highlights: [
      "Real-time Rust/Kafka payment pipeline — 5M+ events/day, 99.99% delivery accuracy",
      "ClickHouse materialized views for 10,000+ merchants with sub-500ms query latency",
      "Feature Flag platform (FastAPI + Trie) — 100K+ daily evaluations, zero-downtime config changes",
      "Kong API Gateway integration — 65% auth latency reduction, 40% throughput improvement",
      "Stripe + Bamboo integrations supporting ₹10 Cr+ monthly transaction volume",
    ],
    tags: ["Rust", "Kafka", "ClickHouse", "FastAPI", "Kong", "Stripe", "ZooKeeper"],
  },
  {
    id: "apisero",
    company: "Apisero",
    role: "Software Engineer",
    location: "Remote",
    period: "May 2021 – Mar 2022",
    current: false,
    color: "#00ADD8",
    highlights: [
      "Optimised Salesforce scheduler APIs with DataWeave — 100% sync accuracy across 1M+ records",
      "Developed FHIR-compliant healthcare APIs on MuleSoft CloudHub, improving HL7 interoperability across healthcare systems",
    ],
    tags: ["MuleSoft", "DataWeave", "Salesforce", "FHIR", "HL7", "CloudHub"],
  },
];

export const techStack = {
  languages: [
    { name: "Python", color: "#3776AB", level: 95 },
    { name: "Java", color: "#ED8B00", level: 85 },
    { name: "Go", color: "#00ADD8", level: 82 },
    { name: "Rust", color: "#F97316", level: 78 },
  ],
  categories: [
    {
      title: "Distributed Systems",
      items: [
        "Apache Kafka",
        "Apache Airflow",
        "ClickHouse",
        "Redis",
        "Kong API Gateway",
        "ZooKeeper",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS EC2",
        "S3",
        "Glue",
        "Lambda",
        "EKS",
        "VPC",
        "Route53",
        "Docker",
        "Kubernetes",
        "Azure DevOps",
      ],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "ClickHouse", "Redis"],
    },
    {
      title: "Observability",
      items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Promtail"],
    },
    {
      title: "Frameworks",
      items: [
        "FastAPI",
        "Flask",
        "Django",
        "SQLAlchemy",
        "Actix",
        "Gin",
        "Spring Boot",
      ],
    },
  ],
};

export const projects = [
  {
    id: "stock-predictor",
    title: "Stock Price Predictor",
    description:
      "Django + LSTM neural network web app forecasting stock prices from 5 years of historical data.",
    tags: ["Python", "Django", "LSTM", "TensorFlow"],
    github: "https://github.com/harshsh-dev/StockMarketPredictor",
    icon: "TrendingUp",
    accent: "#3776AB",
  },
  {
    id: "spacex-game",
    title: "Space X — 3D Interactive Game",
    description:
      "3D space game built with Unity Engine. Spacecraft assets modelled in Blender.",
    tags: ["Unity", "C#", "Blender", "3D"],
    github: null,
    icon: "Rocket",
    accent: "#A855F7",
  },
  {
    id: "code-review-graph",
    title: "Code Review Graph",
    description:
      "Graph-based code review tool in Go — visualise code review dependencies and relationships.",
    tags: ["Go", "Graph Theory"],
    github: "https://github.com/harshsh-dev/code-review-graph-go",
    icon: "Share2",
    accent: "#00ADD8",
  },
];

export const githubUsername = "harshsh-dev";

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];
