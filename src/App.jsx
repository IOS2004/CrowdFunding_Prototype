import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// --- Reusable Components ---

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        CrowdFund Pro
      </Link>
      <div className="navbar-nav">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/projects" className="navbar-link">
          Explore
        </Link>
        {/* Placeholder Login Button */}
        <button className="button button-sm navbar-button">Log In</button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2024 CrowdFund Pro Prototype. All rights reserved.
    </footer>
  );
}

function ProjectCard({ project }) {
  // Reusable card component
  const progressPercent = Math.min(
    100,
    Math.round((project.raised / project.goal) * 100)
  );
  return (
    <div className="card">
      <img
        src={project.image}
        alt={project.title}
        className="card-img"
        style={{ height: "180px" }} // Consistent image height
      />
      <div className="card-body">
        <span className="tag">{project.category}</span>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6c757d",
            marginBottom: "1rem",
            height: "40px",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
        <div className="progress mb-2">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progressPercent}%` }}
            aria-valuenow={progressPercent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p style={{ fontSize: "0.8rem" }} className="text-muted">
          ${project.raised.toLocaleString()} raised of $
          {project.goal.toLocaleString()} goal
        </p>
      </div>
      <div className="card-footer">
        <Link
          to={`/projects/${project.id}`}
          className="button button-sm button-teal"
        >
          View Project
        </Link>
        <button
          className="button button-sm button-ghost-teal"
          style={{ marginLeft: "0.5rem" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

// --- Page Components ---

function Homepage() {
  const featuredProjects = [
    {
      id: 1,
      title: "Eco-Friendly Smart Garden",
      description: "Grow herbs indoors effortlessly.",
      image: "https://via.placeholder.com/300x200/92c952/FFFFFF?text=Project+1",
      goal: 5000,
      raised: 2500,
      category: "Technology",
    },
    {
      id: 2,
      title: "Handmade Leather Wallets",
      description: "Minimalist wallets, crafted with care.",
      image: "https://via.placeholder.com/300x200/777/FFFFFF?text=Project+2",
      goal: 1000,
      raised: 950,
      category: "Crafts",
    },
    {
      id: 3,
      title: "Ocean Cleanup Drone",
      description: "Autonomous drone to collect plastic waste.",
      image: "https://via.placeholder.com/300x200/2a9d8f/FFFFFF?text=Project+3",
      goal: 20000,
      raised: 15000,
      category: "Environment",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-light p-5 text-center mb-5">
        <h1 className="mb-3">Bring Your Ideas to Life</h1>
        <p className="text-muted mb-4" style={{ fontSize: "1.2rem" }}>
          Discover innovative projects or launch your own campaign today.
        </p>
        <button className="button button-lg button-teal">Get Started</button>
      </div>

      <div className="container">
        {/* Search Bar Placeholder */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="Search projects, creators, or categories..."
            style={{
              width: "100%",
              padding: "0.75rem 3rem 0.75rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "50px",
              border: "1px solid #ced4da",
              boxSizing: "border-box",
            }}
          />
          <button
            className="button button-teal"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              bottom: "5px",
              borderRadius: "50px",
              padding: "0 1rem",
            }}
            aria-label="Search"
          >
            {/* Basic Search Icon Placeholder - Replace with SVG later if needed */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>

        {/* Featured Projects Section */}
        <h2 className="mb-4">Featured Projects</h2>
        <div className="grid lg-grid-cols-3 md-grid-cols-2 grid-cols-1">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "Eco-Friendly Smart Garden",
      description: "Grow herbs indoors effortlessly.",
      image: "https://via.placeholder.com/300x200/92c952/FFFFFF?text=Project+1",
      goal: 5000,
      raised: 2500,
      category: "Technology",
    },
    {
      id: 2,
      title: "Handmade Leather Wallets",
      description: "Minimalist wallets, crafted with care.",
      image: "https://via.placeholder.com/300x200/777/FFFFFF?text=Project+2",
      goal: 1000,
      raised: 950,
      category: "Crafts",
    },
    {
      id: 3,
      title: "Ocean Cleanup Drone",
      description: "Autonomous drone to collect plastic waste.",
      image: "https://via.placeholder.com/300x200/2a9d8f/FFFFFF?text=Project+3",
      goal: 20000,
      raised: 15000,
      category: "Environment",
    },
    {
      id: 4,
      title: "Indie Video Game: Nebula",
      description: "A space exploration RPG.",
      image: "https://via.placeholder.com/300x200/e76f51/FFFFFF?text=Project+4",
      goal: 12000,
      raised: 3000,
      category: "Games",
    },
    {
      id: 5,
      title: "Community Art Mural",
      description: "Beautifying the downtown area.",
      image: "https://via.placeholder.com/300x200/f4a261/FFFFFF?text=Project+5",
      goal: 3000,
      raised: 3100,
      category: "Art",
    },
    {
      id: 6,
      title: "Open Source Learning Platform",
      description: "Free educational resources for all.",
      image: "https://via.placeholder.com/300x200/e9c46a/FFFFFF?text=Project+6",
      goal: 8000,
      raised: 8500,
      category: "Education",
    },
  ];
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Explore Projects</h1>
      {/* Filter Placeholder */}
      <div className="card mb-4">
        <div className="card-body">
          <p className="text-muted">
            Filters (Location, Category, Status) - Visual Placeholder
          </p>
          {/* Add dropdowns/buttons visuals here later */}
        </div>
      </div>

      <div className="grid lg-grid-cols-4 md-grid-cols-2 grid-cols-1">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  // In a real app, get ID from URL: import { useParams } from 'react-router-dom'; const { id } = useParams();
  const project = {
    // Placeholder Data
    id: 1,
    title: "Eco-Friendly Smart Garden",
    description:
      "Detailed description about the smart garden project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://via.placeholder.com/600x400/92c952/FFFFFF?text=Project+1+Detail",
    goal: 5000,
    raised: 2500,
    category: "Technology",
    creator: "Jane Doe",
    backers: 152,
    daysLeft: 15,
    rewards: [
      { tier: 1, amount: 25, description: "A thank you note + sticker pack." },
      { tier: 2, amount: 75, description: "Early bird access + sticker pack." },
      { tier: 3, amount: 150, description: "One Smart Garden unit." },
    ],
  };
  const progressPercent = Math.min(
    100,
    Math.round((project.raised / project.goal) * 100)
  );

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column md-flex-row gap-8">
        {" "}
        {/* Use flex utilities */}
        {/* Left Column */}
        <div className="flex-2">
          {" "}
          {/* Takes up 2/3 width on medium+ */}
          <img
            src={project.image}
            alt={project.title}
            className="rounded mb-4 w-full"
          />
          <h1>{project.title}</h1>
          <p className="text-muted mb-2">by {project.creator}</p>
          <span className="tag mb-4">{project.category}</span>
          <hr className="my-4" /> {/* Basic HTML horizontal rule */}
          <h2>Project Story</h2>
          <p>{project.description}</p>
          <hr className="my-4" />
          <h3>Updates</h3>
          <p className="text-muted mb-4">Updates section placeholder...</p>
          <h3>Comments</h3>
          <p className="text-muted mb-4">Comments section placeholder...</p>
        </div>
        {/* Right Column */}
        <div className="flex-1">
          {" "}
          {/* Takes up 1/3 width on medium+ */}
          <div className="card p-3">
            {" "}
            {/* Use card for visual grouping */}
            <div className="progress mb-2" style={{ height: "1rem" }}>
              {" "}
              {/* Thicker progress bar */}
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progressPercent}%` }}
                aria-valuenow={progressPercent}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h2 className="text-teal">${project.raised.toLocaleString()}</h2>
            <p className="text-muted mb-4">
              pledged of ${project.goal.toLocaleString()} goal
            </p>
            <div className="d-flex justify-content-around mb-4 text-center">
              <div>
                <h3>{project.backers}</h3>
                <p className="text-muted mb-1">Backers</p>
              </div>
              <div>
                <h3>{project.daysLeft}</h3>
                <p className="text-muted mb-1">Days Left</p>
              </div>
            </div>
            <button className="button button-lg button-teal button-fullwidth mb-4">
              Back This Project
            </button>
            <h3>Rewards</h3>
            <div className="d-flex flex-column gap-3 mt-3">
              {" "}
              {/* Stack rewards */}
              {project.rewards.map((reward) => (
                <div key={reward.tier} className="card p-3">
                  <h4>Pledge ${reward.amount} or more</h4>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {reward.description}
                  </p>
                  <button className="button button-sm button-outline-teal mt-2">
                    Select this reward
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main App Structure ---
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        {" "}
        {/* Main content area */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
