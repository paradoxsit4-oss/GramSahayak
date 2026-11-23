
import Link from "next/link";
import {
  LayoutDashboard,
  Plus,
  Search,
  ClipboardList,
  Bell,
  Settings,
  House,
  Users,
  Droplets,
  Trash2,
  Waves,
  ArrowUpRight,
  Activity,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Bot,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const complaints = [
  {
    id: "GS-2026-001",
    title: "No drinking water supply",
    category: "Water Supply",
    location: "Ward 04, Mukve",
    priority: "Critical",
    status: "In Progress",
    officer: "Ramesh Kumar",
  },
  {
    id: "GS-2026-002",
    title: "Garbage not collected",
    category: "Sanitation",
    location: "Ward 02, Mukve",
    priority: "High",
    status: "Pending",
    officer: "Suresh Shetty",
  },
  {
    id: "GS-2026-003",
    title: "Blocked drainage system",
    category: "Drainage",
    location: "Ward 06, Mukve",
    priority: "High",
    status: "Escalated",
    officer: "Ramesh Kumar",
  },
  {
    id: "GS-2026-004",
    title: "Street water leakage",
    category: "Water Supply",
    location: "Ward 01, Mukve",
    priority: "Medium",
    status: "Completed",
    officer: "Manoj Rai",
  },
];

const agents = [
  {
    name: "Intake Agent",
    task: "Complaint classification",
    icon: ClipboardList,
  },
  {
    name: "Triage Agent",
    task: "Priority and officer assignment",
    icon: Activity,
  },
  {
    name: "Research Agent",
    task: "Rules and risk analysis",
    icon: Search,
  },
  {
    name: "Action Agent",
    task: "Work orders and notifications",
    icon: Bell,
  },
  {
    name: "Monitor Agent",
    task: "SLA and escalation monitoring",
    icon: ShieldCheck,
  },
];

function statusClass(status: string) {
  if (status === "Completed") return "status-completed";
  if (status === "In Progress") return "status-progress";
  if (status === "Escalated") return "status-escalated";
  return "status-pending";
}

function priorityClass(priority: string) {
  if (priority === "Critical" || priority === "High") return "priority-high";
  if (priority === "Medium") return "priority-medium";
  return "priority-low";
}

export default function Home() {
  return (
    <div className="dashboard-shell">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            <House size={23} />
          </div>

          <div>
            <div className="brand-name">GramSahayak</div>
            <div className="brand-subtitle">
              SMART PANCHAYAT SYSTEM
            </div>
          </div>
        </div>

        <div className="nav-label">WORKSPACE</div>

        <nav>
          <Link href="/" className="nav-link active">
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          <Link href="/submit" className="nav-link">
            <Plus size={17} />
            New Complaint
          </Link>

          <Link href="/track" className="nav-link">
            <Search size={17} />
            Track Complaint
          </Link>
        </nav>

        <div className="nav-label">MANAGEMENT</div>

        <nav>
          <Link href="/dashboard" className="nav-link">
            <Activity size={17} />
            Agent Activity
          </Link>

          <a href="#complaints" className="nav-link">
            <ClipboardList size={17} />
            All Complaints
          </a>

          <a href="#notifications" className="nav-link">
            <Bell size={17} />
            Notifications
          </a>
        </nav>

        <div className="nav-label">SYSTEM</div>

        <nav>
          <a href="#system" className="nav-link">
            <Settings size={17} />
            System Status
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="small-muted">DEMO ENVIRONMENT</div>

          <div style={{
            fontSize: 12,
            fontWeight: 700,
            marginTop: 10,
          }}>
            <span className="agent-dot" />
            System operational
          </div>

          <div className="small-muted" style={{ marginTop: 7 }}>
            Gram Panchayat · Mukve
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-area">

        {/* TOP BAR */}
        <header className="topbar">
          <div>
            <div className="page-title">
              Dashboard Overview
            </div>

            <div className="page-description">
              Welcome back. Here&apos;s what&apos;s happening in your Panchayat today.
            </div>
          </div>

          <div className="profile">
            <div className="avatar">AD</div>

            <div className="profile-details">
              <div style={{
                fontSize: 12,
                fontWeight: 750,
              }}>
                Administrator
              </div>

              <div className="small-muted">
                Panchayat Office
              </div>
            </div>
          </div>
        </header>

        {/* STATISTICS */}
        <section className="stat-grid">

          <div className="card">
            <div style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <div className="stat-label">TOTAL COMPLAINTS</div>
              <ClipboardList color="#168451" size={19} />
            </div>

            <div className="stat-value">128</div>
            <div className="small-muted">
              All registered complaints
            </div>
          </div>

          <div className="card">
            <div style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <div className="stat-label">PENDING</div>
              <Clock3 color="#c18a2a" size={19} />
            </div>

            <div className="stat-value" style={{ color: "#c18a2a" }}>
              24
            </div>

            <div className="small-muted">
              Awaiting action
            </div>
          </div>

          <div className="card">
            <div style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <div className="stat-label">IN PROGRESS</div>
              <Activity color="#3568b5" size={19} />
            </div>

            <div className="stat-value" style={{ color: "#3568b5" }}>
              18
            </div>

            <div className="small-muted">
              Currently being resolved
            </div>
          </div>

          <div className="card">
            <div style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <div className="stat-label">ESCALATED</div>
              <AlertTriangle color="#c33d3d" size={19} />
            </div>

            <div className="stat-value" style={{ color: "#c33d3d" }}>
              03
            </div>

            <div className="small-muted">
              Require higher authority
            </div>
          </div>

        </section>

        {/* AGENTS AND ACTIVITY */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 17,
          marginBottom: 22,
        }}>

          {/* AI AGENTS */}
          <div className="card">
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div>
                <div className="section-heading">
                  AI Agent Network
                </div>

                <div className="small-muted" style={{ marginTop: 5 }}>
                  Five specialized agents
                </div>
              </div>

              <span className="status status-completed">
                SYSTEM ACTIVE
              </span>
            </div>

            <div style={{ marginTop: 20 }}>
              {agents.map((agent) => {
                const Icon = agent.icon;

                return (
                  <div
                    key={agent.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 0",
                      borderBottom: "1px solid #f0f3f0",
                    }}
                  >
                    <div style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "#edf6ef",
                      display: "grid",
                      placeItems: "center",
                      color: "#168451",
                    }}>
                      <Icon size={18} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 12,
                        fontWeight: 750,
                      }}>
                        {agent.name}
                      </div>

                      <div className="small-muted" style={{ marginTop: 3 }}>
                        {agent.task}
                      </div>
                    </div>

                    <CheckCircle2
                      size={16}
                      color="#28a16a"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="card">
            <div className="section-heading">
              Recent Activity
            </div>

            <div className="small-muted" style={{ marginTop: 5 }}>
              Latest system events
            </div>

            <div style={{ marginTop: 22 }}>
              {[
                {
                  name: "Intake Agent",
                  task: "New complaint classified",
                  time: "2 min ago",
                },
                {
                  name: "Triage Agent",
                  task: "Priority assigned: Critical",
                  time: "4 min ago",
                },
                {
                  name: "Research Agent",
                  task: "Health risk analysis completed",
                  time: "5 min ago",
                },
                {
                  name: "Action Agent",
                  task: "Officer notification created",
                  time: "6 min ago",
                },
                {
                  name: "Monitor Agent",
                  task: "SLA monitoring completed",
                  time: "10 min ago",
                },
              ].map((event) => (
                <div
                  key={event.name}
                  style={{
                    display: "flex",
                    gap: 11,
                    paddingBottom: 19,
                  }}
                >
                  <div style={{
                    width: 9,
                    height: 9,
                    background: "#28a16a",
                    borderRadius: "50%",
                    marginTop: 5,
                    flexShrink: 0,
                  }} />

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 12,
                      fontWeight: 700,
                    }}>
                      {event.name}
                    </div>

                    <div className="small-muted" style={{ marginTop: 4 }}>
                      {event.task}
                    </div>
                  </div>

                  <div className="small-muted">
                    {event.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLAINTS TABLE */}
        <section className="card" id="complaints">

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
            flexWrap: "wrap",
          }}>
            <div>
              <div className="section-heading">
                Recent Complaints
              </div>

              <div className="small-muted" style={{ marginTop: 5 }}>
                Monitor citizen complaints and resolution progress
              </div>
            </div>

            <Link href="/submit" className="primary-button">
              + New Complaint
            </Link>
          </div>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>COMPLAINT ID</th>
                  <th>COMPLAINT</th>
                  <th>LOCATION</th>
                  <th>PRIORITY</th>
                  <th>OFFICER</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td style={{
                      fontWeight: 750,
                      color: "#18794e",
                    }}>
                      {complaint.id}
                    </td>

                    <td>
                      <div style={{ fontWeight: 700 }}>
                        {complaint.title}
                      </div>

                      <div className="small-muted" style={{ marginTop: 4 }}>
                        {complaint.category}
                      </div>
                    </td>

                    <td>{complaint.location}</td>

                    <td>
                      <span className={priorityClass(complaint.priority)}>
                        {complaint.priority}
                      </span>
                    </td>

                    <td>{complaint.officer}</td>

                    <td>
                      <span className={`status ${statusClass(complaint.status)}`}>
                        {complaint.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 17,
          }}>
            <span className="small-muted">
              Showing 4 demonstration complaints
            </span>

            <Link
              href="/dashboard"
              style={{
                fontSize: 12,
                color: "#168451",
                fontWeight: 700,
              }}
            >
              View agent activity <ChevronRight size={14} style={{
                display: "inline",
                verticalAlign: "middle",
              }} />
            </Link>
          </div>
        </section>

        {/* ALERT */}
        <section
          className="card"
          id="notifications"
          style={{ marginTop: 20 }}
        >
          <div className="section-heading">
            Notifications & Alerts
          </div>

          <div className="small-muted" style={{ marginTop: 5 }}>
            Important updates from the complaint management system
          </div>

          <div style={{
            background: "#fff5f3",
            border: "1px solid #f7dfd9",
            borderRadius: 10,
            padding: 15,
            marginTop: 17,
          }}>
            <div style={{
              color: "#bd5141",
              fontSize: 12,
              fontWeight: 750,
            }}>
              <AlertTriangle size={15} style={{
                display: "inline",
                verticalAlign: "middle",
                marginRight: 6,
              }} />
              Escalation Alert
            </div>

            <div style={{ fontSize: 12, marginTop: 7 }}>
              GS-2026-003 has exceeded its SLA deadline and requires
              higher authority attention.
            </div>
          </div>
        </section>

        <footer
          className="small-muted"
          style={{
            textAlign: "center",
            padding: "30px 0 10px",
          }}
        >
          GramSahayak · AI-powered Panchayat Assistance · Hackathon 2026
        </footer>

      </main>
    </div>
  );
}
