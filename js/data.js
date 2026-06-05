// portfolio-data.js
// All content for Syed. Md. Abu Haider's portfolio

const DATA = {

  person: {
    name:      "Syed. Md. Abu Haider",
    tagline:   "SOC Analyst · Threat Hunter · NOC Engineer",
    bio:       "Blue Team–focused cybersecurity analyst specialising in SIEM deployment, detection engineering, and threat hunting. Active bug bounty hunter with verified reports on DBS Bank, Paddle.com, and Decathlon via YesWeHack.",
    location:  "Chittagong, Bangladesh",
    phone:     "+8801870932020",
    email:     "smabuhaider6@gmail.com",
    linkedin:  "https://linkedin.com/in/syed-md-abu-haider",
    github:    "https://github.com/SyedMdAbuHaider",
    twitter:   "https://twitter.com/smabuhaider",
    portfolio: "https://portfolio.syedmdabuhaider.xyz",
    resumeLink: "#"   // ← replace with actual PDF URL when ready
  },

  stats: [
    { num: "3+", label: "Years Hunting" },
    { num: "10+", label: "OSS Tools" },
    { num: "15+", label: "Certs" },
    { num: "T3", label: "Data Centre" },
  ],

  experience: [
    {
      role:    "Senior Executive Officer",
      company: "Exord Online",
      dept:    "Network Operations & Engineering",
      date:    "Dec 2025 — Present",
      color:   "green",
      items: [
        "Leading network operations and engineering for Exord Online's production infrastructure",
        "Managing platform reliability for myflix.ebox.live streaming service",
        "Driving systems integration for Exord HRM Software (admin.exord.net)",
        "Ensuring uptime, monitoring, and incident response across all network layers",
      ],
    },
    {
      role:    "Network Operations Intern",
      company: "Tech Elevate (Earth Telecommunication · Race Online · Dhaka Colo)",
      dept:    "Data Centre Operations — Tier 3 Facility, Dhaka",
      date:    "Sep 2025 — Dec 2025",
      color:   "blue",
      items: [
        "Monitored and managed network systems in a Tier 3 data centre, ensuring operational efficiency",
        "Assisted with network directing and troubleshooting in a live production environment",
        "Supported IT infrastructure operations and applied core networking principles at scale",
      ],
    },
    {
      role:    "Network & Security Engagements",
      company: "YesWeHack Platform — Bug Bounty",
      dept:    "Remote · Targets: DBS Bank · Paddle.com · Decathlon",
      date:    "2023 — Present",
      color:   "red",
      items: [
        "Discovered and reported critical vulnerabilities on DBS Bank, Paddle.com, and Decathlon",
        "Performed recon, endpoint enumeration, and web application security testing (Burp Suite, FFUF, Nmap, Subfinder)",
        "Delivered Proof-of-Concepts (PoCs) with mitigation guidance; received private acknowledgments",
      ],
    },
  ],

  projects: [
    // LIVE PRODUCTION
    {
      name:  "MyFlix — ebox.live",
      desc:  "Live streaming platform under Exord Online. Network operations and infrastructure management for continuous media delivery and uptime.",
      tags:  ["Live Production", "Network Ops", "Streaming"],
      icon:  "play",
      color: "green",
      live:  true,
      url:   "https://myflix.ebox.live",
    },
    {
      name:  "Exord HRM Software",
      desc:  "HR management platform for Exord Online. System architecture, network-level integration, and operational management at admin.exord.net.",
      tags:  ["HRM", "Systems Integration", "admin.exord.net"],
      icon:  "briefcase",
      color: "blue",
      live:  true,
      url:   "https://admin.exord.net",
    },

    // OPEN SOURCE / LAB (with optional github links)
    {
      name:   "SOC-LabOps",
      desc:   "Virtual SOC lab with Splunk/ELK for MITRE ATT&CK–mapped threat detection. Custom SPL queries for brute force, lateral movement, privilege escalation.",
      tags:   ["Splunk", "ELK", "MITRE ATT&CK", "Atomic Red Team"],
      icon:   "shield",
      color:  "blue",
      live:   false,
      url:    null,
      github: "https://github.com/SyedMdAbuHaider/SOC-LabOps"
    },
    {
      name:   "BlueSight-SOC",
      desc:   "Lightweight Python SIEM for real-time log parsing, anomaly detection, IOC correlation, and email alerting. Simulates tier-1 analyst workflows.",
      tags:   ["Python", "Bash", "Syslog", "Regex"],
      icon:   "eye",
      color:  "green",
      live:   false,
      url:    null,
      github: "https://github.com/SyedMdAbuHaider/BlueSight-SOC"
    },
    {
      name:   "PacketIntel",
      desc:   "Network forensics toolkit for PCAP behavioural analysis — flags beaconing, scanning, protocol misuse, and C2 indicators.",
      tags:   ["Zeek", "Python", "Wireshark", "PCAP"],
      icon:   "network",
      color:  "red",
      live:   false,
      url:    null,
      github: "https://github.com/SyedMdAbuHaider/PacketIntel"
    },
    {
      name:  "NOC-DashboardX",
      desc:  "Real-time network monitoring dashboard. Tracks uptime, latency, and resource usage with automated Telegram bot alerts.",
      tags:  ["Zabbix", "Grafana", "Prometheus", "Telegram Bot"],
      icon:  "activity",
      color: "blue",
      live:  false,
      url:   null,
    },
    {
      name:  "PhishSecure",
      desc:  "ML-powered phishing email detection. IMAP-integrated scanner with 89% lab accuracy using scikit-learn for SOC triage.",
      tags:  ["Python", "scikit-learn", "IMAP", "Regex"],
      icon:  "lock",
      color: "red",
      live:  false,
      url:   null,
    },
    {
      name:  "AutoNet-Heal",
      desc:  "Automated NOC tool that monitors critical services and triggers auto-recovery scripts before manual escalation is required.",
      tags:  ["Bash", "Python", "Auto-recovery"],
      icon:  "cpu",
      color: "blue",
      live:  false,
      url:   null,
    },
    {
      name:  "MITRE-DetectMap",
      desc:  "Detection rule mapping system linking Sigma/SPL rules to ATT&CK tactics. Kibana dashboards visualise coverage gaps and SOC rule maturity.",
      tags:  ["MITRE ATT&CK", "Sigma", "YAML", "Kibana"],
      icon:  "layers",
      color: "green",
      live:  false,
      url:   null,
    },
    {
      name:  "SIEM Rule Factory",
      desc:  "Repository of 50+ curated detection rules covering credential dumping, RATs, and key TTPs. Includes test scenarios and YARA signatures.",
      tags:  ["Sigma", "SPL", "YARA", "MITRE ATT&CK"],
      icon:  "server",
      color: "red",
      live:  false,
      url:   null,
    },
    {
      name:  "RedSim",
      desc:  "Adversary simulation toolkit to validate Splunk/ELK rule coverage. Generates detection gap reports and tuning recommendations.",
      tags:  ["Atomic Red Team", "Splunk", "Bash"],
      icon:  "terminal",
      color: "red",
      live:  false,
      url:   null,
    },
    {
      name:  "IncidentX",
      desc:  "End-to-end attack simulation and IR report generator. Aggregates Zeek, Sysmon, and Wazuh logs into formal incident reports with IOC summaries.",
      tags:  ["Wazuh", "Zeek", "Sysmon", "Kibana"],
      icon:  "bug",
      color: "green",
      live:  false,
      url:   null,
    },
    {
      name:  "SysLog-Analyzer Pro",
      desc:  "Centralised log management with rsyslog server, Python parsing, and ELK Stack integration for real-time visualisation and incident detection.",
      tags:  ["ELK Stack", "Python", "rsyslog"],
      icon:  "code",
      color: "blue",
      live:  false,
      url:   null,
    },
    {
      name:  "SubReconPlus",
      desc:  "Subdomain enumeration and tech stack discovery combining Amass, Subfinder, and HTTPx for blue/red team asset inventory.",
      tags:  ["Amass", "Python", "Subfinder", "HTTPx"],
      icon:  "globe",
      color: "green",
      live:  false,
      url:   null,
    },
  ],

  skills: [
    {
      category: "Blue Team & SOC",
      icon:      "shield",
      color:     "blue",
      items:     ["Splunk", "ELK Stack", "Wazuh", "Velociraptor", "Sysmon", "Zeek", "OSQuery", "Cortex XSOAR"],
    },
    {
      category: "Network & NOC",
      icon:      "network",
      color:     "green",
      items:     ["Zabbix", "Grafana", "Prometheus", "GNS3", "Wireshark", "TCP/IP", "Subnetting", "DNS/DHCP", "Juniper SRX"],
    },
    {
      category: "Detection Engineering",
      icon:      "eye",
      color:     "red",
      items:     ["Sigma Rules", "YARA", "MITRE ATT&CK", "IOC Management", "SPL Queries", "Playbooks"],
    },
    {
      category: "Scripting & Automation",
      icon:      "terminal",
      color:     "red",
      items:     ["Python", "Bash", "Regex", "Git"],
    },
    {
      category: "Security Testing",
      icon:      "bug",
      color:     "blue",
      items:     ["Burp Suite", "FFUF", "Nmap", "Subfinder", "Recon", "Web App Testing"],
    },
    {
      category: "Cloud & Platform",
      icon:      "server",
      color:     "green",
      items:     ["Microsoft Sentinel", "Microsoft Defender", "CrowdStrike Falcon", "Cortex XSOAR"],
    },
  ],

  certifications: [
    { name: "Certified SOC Analyst (C|SA)", issuer: "EC-Council", status: "ongoing" },
    { name: "CCNA — Cisco Certified Network Associate", issuer: "Cybrary", status: "ongoing" },
    { name: "CompTIA CySA+ (CS0-003) Complete Course & Practice Exam", issuer: "Udemy", status: "done" },
    { name: "Cybersecurity SOC Analyst Training — SIEM (Splunk) 87.5 hrs", issuer: "Udemy", status: "done" },
    { name: "The Complete Computer Forensics: CFCT+ PRO CFIR DFIR", issuer: "Udemy", status: "done" },
    { name: "Cyber Security and Ethical Hacking", issuer: "CodersTrust", status: "done" },
    { name: "SC-200: Microsoft Security Operations Analyst (13 hrs)", issuer: "Udemy · Anand Rao Nednur", status: "done" },
    { name: "The Complete Hands-On Cybersecurity Analyst Course (81 hrs)", issuer: "Udemy · Mike S, Josh G", status: "done" },
    { name: "GNS3 Certified Associate (GNS3A) Official Course (67.5 hrs)", issuer: "Udemy · David Bombal", status: "done" },
    { name: "Cybersecurity Threat Hunting for SOC Analysts (8.5 hrs)", issuer: "Udemy · Vonnie Hudson", status: "done" },
    { name: "Wireshark Packet Analysis", issuer: "David Bombal", status: "done" },
    { name: "Introduction to Critical Infrastructure Protection (ICIP)", issuer: "OPSWAT Academy", status: "done" },
    { name: "SQL Injection and Ethical Hacking", issuer: "EC-Council", status: "done" },
    { name: "Configure Juniper SRX Router Using J-Web", issuer: "EC-Council", status: "done" },
    { name: "CrowdStrike for SOC Analysts", issuer: "Udemy · Hailie Shaw", status: "done" },
    { name: "Cortex XSOAR 6 — Security Orchestration & Automation (4 hrs)", issuer: "Udemy · Kalec Blau", status: "done" },
    { name: "Infrastructure Protection Defensive Security & Cyber Risk", issuer: "Cybrary", status: "done" },
    { name: "Computer Forensics & Digital Forensics Masterclass PRO+ (19 hrs)", issuer: "OCSALY Academy · Udemy", status: "done" },
  ],

  achievements: [
    {
      icon:  "award",
      title: "Regional Finalist",
      sub:   "Junior Science Olympiad",
    },
    {
      icon:  "code",
      title: "Certificate of Appreciation",
      sub:   "National Programming Contest",
    },
    {
      icon:  "bug",
      title: "Verified Bug Bounty Reports",
      sub:   "DBS Bank · Paddle.com · Decathlon",
    },
    {
      icon:  "layers",
      title: "10+ Open Source Tools",
      sub:   "Published for the SOC community",
    },
  ],

  references: [
    {
      name:    "Sharif Ahsan",
      role:    "Head of Department — Tech Elevate (Earth Telecommunication · Race Online Ltd · Dhaka Colo)",
      contact: "sharif.ahsan@office.race.net.bd · +8801933361321",
    },
    {
      name:    "Md. Shakhwat Hossain",
      role:    "Information Security Specialist — Mercantile Bank PLC",
      contact: "shrobin79@gmail.com · +8801815280204",
    },
    {
      name:    "Muhammad Sayeed Mazumder",
      role:    "IT Specialist — SSL Wireless",
      contact: "sayeed.mazumder@sslwireless.com · +8801752147588",
    },
  ],

};