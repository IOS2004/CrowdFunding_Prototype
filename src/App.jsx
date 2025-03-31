// Step 1: Add useState and useNavigate imports
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate, // <-- Import useNavigate
} from "react-router-dom";

import Modal from "./Modal";

// --- Reusable Components ---

// Step 2: Modify Navbar to accept props
function Navbar({ isLoggedIn, onLogout }) {
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
        {isLoggedIn && (
          <Link
            to="/start-project"
            className="button button-sm button-success"
            style={{ textDecoration: "none" }}
          >
            Start a Project
          </Link>
        )}
        {isLoggedIn ? (
          <>
            {/* Notification Icon Placeholder */}
            <button
              className="button button-sm button-ghost-teal"
              title="Notifications"
              style={{ padding: "0.5rem", marginRight: "0.5rem" }}
            >
              {/* Standard Bell SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              {/* Notification Badge Placeholder */}
              {/* <span style={{position: 'absolute', top: '5px', right: '5px', background: 'red', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>3</span> */}
            </button>

            <Link to="/profile" className="navbar-avatar" title="My Profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </Link>
            <button
              onClick={onLogout}
              className="button button-sm button-ghost-teal"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="button button-sm button-outline-teal"
              style={{ textDecoration: "none" }}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="button button-sm button-ghost-teal"
              style={{ textDecoration: "none" }}
            >
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  /* Footer remains the same */
  return (
    <footer className="footer">
      {" "}
      © 2024 CrowdFund Pro Prototype. All rights reserved.{" "}
    </footer>
  );
}

function ProjectCard({ project }) {
  /* ProjectCard remains the same */
  const progressPercent = Math.min(
    100,
    Math.round((project.raised / project.goal) * 100)
  );
  const imageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(
    project.category.toLowerCase() || project.title.split(" ")[0] || "project"
  )}`;
  return (
    <div className="card">
      {" "}
      {/* --- REPLACED IMAGE WITH PLACEHOLDER --- */}
      <div className="card-img-placeholder" style={{ height: "200px" }}>
        {" "}
        {/* Keep height consistent */}
        {/* Basic Image SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
        </svg>
      </div>
      {/* --- END PLACEHOLDER --- */}{" "}
      <div className="card-body">
        {" "}
        <span className="tag mb-2">{project.category}</span>{" "}
        <h3 style={{ marginBottom: "0.5rem" }}>
          {" "}
          <Link
            to={`/projects/${project.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {project.title}{" "}
          </Link>{" "}
        </h3>{" "}
        <p
          style={{
            fontSize: "0.9rem",
            height: "45px",
            overflow: "hidden",
            marginBottom: "1rem",
          }}
        >
          {" "}
          {project.description}{" "}
        </p>{" "}
        <div className="progress mb-2">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progressPercent}%` }}
            aria-valuenow={progressPercent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>{" "}
        <p style={{ fontSize: "0.85rem" }} className="text-muted mb-0">
          {" "}
          <strong className="text-teal">
            {" "}
            ${project.raised.toLocaleString()}{" "}
          </strong>{" "}
          raised of ${project.goal.toLocaleString()}{" "}
        </p>{" "}
      </div>{" "}
      <div className="card-footer d-flex justify-content-between align-items-center">
        {" "}
        <Link
          to={`/projects/${project.id}`}
          className="button button-sm button-teal"
        >
          {" "}
          Details{" "}
        </Link>{" "}
        <button className="button button-sm button-ghost-teal">
          {/* Standard Heart SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          {/* Remove the text "Save" if you want icon only */}
          {/* Save */}
        </button>
      </div>{" "}
    </div>
  );
}

// --- Page Components ---

function Homepage() {
  /* Homepage remains the same */
  const featuredProjects = [
    {
      id: 1,
      title: "Eco-Friendly Smart Garden",
      description:
        "Grow herbs indoors effortlessly with automated watering and light.",
      image: "",
      goal: 5000,
      raised: 2500,
      category: "Technology",
    },
    {
      id: 2,
      title: "Handmade Leather Wallets",
      description:
        "Minimalist wallets, crafted with care from full-grain leather.",
      image: "",
      goal: 1000,
      raised: 950,
      category: "Crafts",
    },
    {
      id: 3,
      title: "Ocean Cleanup Drone",
      description:
        "Autonomous drone designed to collect plastic waste from ocean surfaces.",
      image: "",
      goal: 20000,
      raised: 15000,
      category: "Environment",
    },
  ];
  const categories = [
    "Technology",
    "Games",
    "Art",
    "Music",
    "Food",
    "Design",
    "Film",
    "Crafts",
  ];
  return (
    <>
      {" "}
      <div className="hero-section">
        {" "}
        <h1>Fund the Future. Create Together.</h1>{" "}
        <p>
          {" "}
          CrowdFund Pro is where innovative ideas get the support they need to
          become reality. Explore projects or launch your own campaign.{" "}
        </p>{" "}
        <button className="button button-lg button-teal">
          {" "}
          Launch Your Project{" "}
        </button>{" "}
      </div>{" "}
      <div className="container">
        {" "}
        <div className="search-input-group">
          {" "}
          <input
            type="text"
            placeholder="Search for projects..."
            className="search-input"
          />{" "}
          <button className="search-button" aria-label="Search">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
            </svg>{" "}
          </button>{" "}
        </div>{" "}
        <h2 className="text-center mb-4">Explore Categories</h2>{" "}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {" "}
          {categories.map((cat) => (
            <button key={cat} className="button button-sm button-outline-teal">
              {" "}
              {cat}{" "}
            </button>
          ))}{" "}
        </div>{" "}
        <h2 className="mb-4">Featured Projects</h2>{" "}
        <div className="grid lg-grid-cols-3 md-grid-cols-2 grid-cols-1">
          {" "}
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

function ProjectsPage() {
  /* ProjectsPage remains the same */
  const allProjects = [
    {
      id: 1,
      title: "Eco-Friendly Smart Garden",
      description: "Grow herbs indoors effortlessly.",
      image: "",
      goal: 5000,
      raised: 2500,
      category: "Technology",
    },
    {
      id: 2,
      title: "Handmade Leather Wallets",
      description: "Minimalist wallets, crafted with care.",
      image: "",
      goal: 1000,
      raised: 950,
      category: "Crafts",
    },
    {
      id: 3,
      title: "Ocean Cleanup Drone",
      description: "Autonomous drone to collect plastic waste.",
      image: "",
      goal: 20000,
      raised: 15000,
      category: "Environment",
    },
    {
      id: 4,
      title: "Indie Video Game: Nebula",
      description: "A space exploration RPG.",
      image: "",
      goal: 12000,
      raised: 3000,
      category: "Games",
    },
    {
      id: 5,
      title: "Community Art Mural",
      description: "Beautifying the downtown area.",
      image: "",
      goal: 3000,
      raised: 3100,
      category: "Art",
    },
    {
      id: 6,
      title: "Open Source Learning Platform",
      description: "Free educational resources for all.",
      image: "",
      goal: 8000,
      raised: 8500,
      category: "Education",
    },
    {
      id: 7,
      title: "Acoustic Folk Album",
      description: "Recording a new album of original songs.",
      image: "",
      goal: 4000,
      raised: 4100,
      category: "Music",
    },
    {
      id: 8,
      title: "Sustainable Coffee Shop",
      description: "Opening an eco-conscious cafe.",
      image: "",
      goal: 30000,
      raised: 12000,
      category: "Food",
    },
  ];
  return (
    <div className="container mt-4">
      {" "}
      <h1 className="mb-4">Explore All Projects</h1>{" "}
      <div className="card mb-4">
        {" "}
        <div className="card-body d-flex flex-wrap gap-2 align-items-center">
          {" "}
          <span
            className="text-muted"
            style={{ marginRight: "1rem", fontWeight: "500" }}
          >
            {" "}
            Filter by:{" "}
          </span>{" "}
          <button className="button button-sm button-outline-teal">
            {" "}
            Technology{" "}
          </button>{" "}
          <button className="button button-sm button-outline-teal">
            Art
          </button>{" "}
          <button className="button button-sm button-outline-teal">
            {" "}
            Games{" "}
          </button>{" "}
          <button className="button button-sm button-outline-teal">
            {" "}
            Fully Funded{" "}
          </button>{" "}
          <button className="button button-sm button-outline-teal">
            {" "}
            Ending Soon{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="grid lg-grid-cols-4 md-grid-cols-2 grid-cols-1">
        {" "}
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}{" "}
      </div>{" "}
    </div>
  );
}

function ProjectDetailPage() {
  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null); // Store reward info or just pledge amount

  const openModal = (reward = null) => {
    // Accept optional reward info
    setSelectedReward(reward); // Set the selected reward (or null for generic backing)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReward(null); // Reset selected reward
    // Optionally show a "Pledge successful" confirmation here later
  };
  // --- End Modal State ---

  const project = {
    /* ... project data remains the same ... */ id: 1,
    title: "Eco-Friendly Smart Garden",
    description: "Detailed description...",
    image: "",
    goal: 5000,
    raised: 2500,
    category: "Technology",
    creator: "Jane Doe",
    backers: 152,
    daysLeft: 15,
    rewards: [
      {
        tier: 1,
        amount: 25,
        description: "A personal thank you note + sticker pack from the team.",
        estDelivery: "May 2025",
        shipsTo: "Anywhere",
      },
      {
        tier: 2,
        amount: 75,
        description:
          "Early bird access to the Smart Garden App + sticker pack.",
        estDelivery: "June 2025",
        shipsTo: "Anywhere",
      },
      {
        tier: 3,
        amount: 150,
        description: "One Eco-Friendly Smart Garden unit at a special price.",
        estDelivery: "August 2025",
        shipsTo: "US, Canada, EU",
      },
    ],
  };
  const progressPercent = Math.min(
    100,
    Math.round((project.raised / project.goal) * 100)
  );
  const [activeTab, setActiveTab] = useState("story");
  const imageUrlPlaceholder = (
    <div
      className="card-img-placeholder rounded mb-4 w-full shadow"
      style={{ height: "400px", maxHeight: "500px" }}
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        style={{ width: "60px", height: "60px" }}
      >
        {" "}
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />{" "}
        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />{" "}
      </svg>{" "}
    </div>
  );

  return (
    <>
      {" "}
      {/* Wrap in Fragment to allow Modal sibling */}
      <div className="container mt-5">
        <h1 className="mb-2">{project.title}</h1>
        <p className="text-muted mb-4">
          Created by <Link to="#">{project.creator}</Link> in{" "}
          <span className="tag" style={{ marginLeft: "5px" }}>
            {project.category}
          </span>
        </p>

        <div className="d-flex flex-column md-flex-row gap-8">
          {/* Left Column */}
          <div className="flex-2">
            {imageUrlPlaceholder} {/* Use the placeholder */}
            {/* Tabs and Tab Content remain the same */}
            <div className="tab-nav">
              {" "}
              <button
                className={`tab-link ${activeTab === "story" ? "active" : ""}`}
                onClick={() => setActiveTab("story")}
              >
                Story
              </button>{" "}
              <button
                className={`tab-link ${
                  activeTab === "updates" ? "active" : ""
                }`}
                onClick={() => setActiveTab("updates")}
              >
                Updates
              </button>{" "}
              <button
                className={`tab-link ${
                  activeTab === "comments" ? "active" : ""
                }`}
                onClick={() => setActiveTab("comments")}
              >
                Comments
              </button>{" "}
            </div>
            <div className="tab-content card bg-light p-4 mb-4">
              {" "}
              {activeTab === "story" && (
                <div>
                  {" "}
                  <h2>Project Story</h2>{" "}
                  <p style={{ whiteSpace: "pre-line" }}>
                    {project.description}
                  </p>{" "}
                </div>
              )}{" "}
              {activeTab === "updates" && (
                <div>
                  {" "}
                  <h2>Updates</h2>{" "}
                  <p className="text-muted mb-4">
                    Latest updates from the creator.
                  </p>{" "}
                  <div className="card mb-3 p-3">
                    <p className="mb-0">Update #1: We reached 50% funding!</p>
                    <small className="text-muted"> - 2 days ago</small>
                  </div>{" "}
                  <div className="card mb-3 p-3">
                    <p className="mb-0">Update #2: Prototype testing begins.</p>
                    <small className="text-muted"> - 1 day ago</small>
                  </div>{" "}
                </div>
              )}{" "}
              {activeTab === "comments" && (
                <div>
                  {" "}
                  <h2>Comments</h2>{" "}
                  <p className="text-muted mb-4">Join the conversation!</p>{" "}
                  <div className="card mb-3 p-3">
                    <p className="mb-0">
                      <strong>User A:</strong> This looks amazing!
                    </p>
                    <small className="text-muted"> - 1 hour ago</small>
                  </div>{" "}
                  <div className="card mb-3 p-3">
                    <p className="mb-0">
                      <strong>User B:</strong> When will it ship?
                    </p>
                    <small className="text-muted"> - 30 minutes ago</small>
                  </div>{" "}
                  <textarea
                    placeholder="Add your comment..."
                    rows="3"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--border-radius)",
                      marginTop: "1rem",
                    }}
                  ></textarea>
                  <button className="button button-sm button-teal mt-2">
                    Post Comment
                  </button>{" "}
                </div>
              )}{" "}
            </div>
            <div className="social-share">
              {" "}
              <p>Share this project:</p>{" "}
              <div className="social-share-buttons">
                {/* Facebook Icon */}
                <button
                  className="button button-sm icon-only"
                  style={{ backgroundColor: "#1877F2" }}
                  aria-label="Share on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.049c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H10.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </button>
                {/* Twitter Icon */}
                <button
                  className="button button-sm icon-only"
                  style={{ backgroundColor: "#1DA1F2" }}
                  aria-label="Share on Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </button>
                {/* LinkedIn Icon */}
                <button
                  className="button button-sm icon-only"
                  style={{ backgroundColor: "#0A66C2" }}
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </button>
                {/* Link Icon */}
                <button
                  className="button button-sm icon-only"
                  style={{ backgroundColor: "#6c757d" }}
                  aria-label="Copy link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="flex-1"
            style={{
              position: "sticky",
              top: "100px",
              alignSelf: "flex-start",
            }}
          >
            <div className="card p-4 shadow">
              {/* Funding info remains the same */}
              <div className="progress mb-2" style={{ height: "0.8rem" }}>
                {" "}
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progressPercent}%` }}
                  aria-valuenow={progressPercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>{" "}
              </div>
              <h2 className="text-teal mb-1">
                ${project.raised.toLocaleString()}
              </h2>
              <p className="text-muted mb-4">
                pledged of ${project.goal.toLocaleString()} goal
              </p>
              <div className="d-flex justify-content-around mb-4 text-center">
                {" "}
                <div>
                  {" "}
                  <h3 className="mb-0">{project.backers}</h3>{" "}
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Backers
                  </p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="mb-0">{project.daysLeft}</h3>{" "}
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Days Left
                  </p>{" "}
                </div>{" "}
              </div>

              {/* --- ADD onClick to this button --- */}
              <button
                onClick={() => openModal()} // Open modal for generic backing
                className="button button-lg button-teal button-fullwidth mb-4"
              >
                Back This Project
              </button>

              <h3 className="mb-3">Support this project</h3>
              <div className="d-flex flex-column gap-3">
                {project.rewards.map((reward) => (
                  <div key={reward.tier} className="reward-card">
                    <h4>Pledge ${reward.amount} or more</h4>
                    <p>{reward.description}</p>
                    <small>ESTIMATED DELIVERY: {reward.estDelivery}</small>
                    <small>SHIPS TO: {reward.shipsTo}</small>
                    {/* --- ADD onClick to this button --- */}
                    <button
                      onClick={() => openModal(reward)} // Open modal with specific reward
                      className="button button-sm button-outline-teal mt-3 w-full"
                    >
                      Select reward
                    </button>
                  </div>
                ))}
                <div className="reward-card">
                  <h4>Pledge without a reward</h4>
                  {/* --- ADD onClick to this button --- */}
                  <button
                    onClick={() => openModal()} // Open modal for generic backing
                    className="button button-sm button-outline-teal mt-2 w-full"
                  >
                    Make contribution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- Render the Modal conditionally --- */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Confirm Your Pledge"
      >
        {selectedReward ? (
          <>
            <p>You've selected the reward:</p>
            <div
              className="reward-card mb-3"
              style={{ borderColor: "var(--teal-color)" }}
            >
              {" "}
              {/* Highlight selected reward */}
              <h4>Pledge ${selectedReward.amount} or more</h4>
              <p className="mb-0">{selectedReward.description}</p>
            </div>
          </>
        ) : (
          <p>You are making a contribution without a specific reward.</p>
        )}
        {/* Placeholder for amount input if needed */}
        <p>Click confirm to proceed (this is just a simulation).</p>
        <button
          onClick={closeModal}
          className="button button-teal button-fullwidth"
        >
          Confirm Pledge
        </button>
      </Modal>
      {/* --- End Modal Rendering --- */}
    </>
  );
}

// --- Placeholder page components remain the same ---

function LoginPage({ onLogin }) {
  // <-- Step 6: Accept onLogin prop
  const navigate = useNavigate(); // <-- Step 7: Get navigate function

  // Step 8: Add submit handler
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    onLogin(); // Call the passed-in login function
    navigate("/profile"); // Redirect after login
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Log In</h1>
        {/* Step 9: Attach submit handler to form */}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label
              htmlFor="emailLogin"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Email address{" "}
            </label>
            <input
              type="email"
              id="emailLogin"
              placeholder="Enter email"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="passwordLogin"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="passwordLogin"
              placeholder="Password"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <label>
              {" "}
              <input type="checkbox" style={{ marginRight: "5px" }} /> Remember
              me{" "}
            </label>
            <Link to="#">Forgot password?</Link>
          </div>
          {/* Step 10: Change button type to submit */}
          <button type="submit" className="button button-teal button-fullwidth">
            {" "}
            Log In{" "}
          </button>
          <p className="text-center mt-3 text-muted">
            {" "}
            Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

function SignUpPage({ onLogin }) {
  // <-- Step 6: Accept onLogin prop
  const navigate = useNavigate(); // <-- Step 7: Get navigate function

  // Step 8: Add submit handler
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    onLogin(); // Call the passed-in login function (simulates immediate login)
    navigate("/profile"); // Redirect after signup
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Sign Up</h1>
        {/* Step 9: Attach submit handler to form */}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label
              htmlFor="emailSignup"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Email address{" "}
            </label>
            <input
              type="email"
              id="emailSignup"
              placeholder="Enter email"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="passwordSignup"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="passwordSignup"
              placeholder="Create Password"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPasswordSignup"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Confirm Password{" "}
            </label>
            <input
              type="password"
              id="confirmPasswordSignup"
              placeholder="Confirm Password"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />
          </div>
          {/* Step 10: Change button type to submit */}
          <button type="submit" className="button button-teal button-fullwidth">
            {" "}
            Sign Up{" "}
          </button>
          <p className="text-center mt-3 text-muted">
            {" "}
            Already have an account? <Link to="/login">Log In</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

function CreatorDashboardPage() {
  /* CreatorDashboardPage remains the same */
  return (
    <div className="container mt-5">
      {" "}
      <h1 className="mb-4">Creator Dashboard</h1>{" "}
      <div className="grid lg-grid-cols-3 md-grid-cols-2 grid-cols-1">
        {" "}
        <div className="card p-3">
          <h4 className="text-teal mb-1">$15,800</h4>
          <p className="text-muted mb-0">Total Raised</p>
        </div>{" "}
        <div className="card p-3">
          <h4 className="mb-1">3</h4>
          <p className="text-muted mb-0">Active Projects</p>
        </div>{" "}
        <div className="card p-3">
          <h4 className="mb-1">450</h4>
          <p className="text-muted mb-0">Total Backers</p>
        </div>{" "}
      </div>{" "}
      <div className="card mt-4">
        {" "}
        <div className="card-body">
          {" "}
          <h2 className="mb-3">My Projects</h2>{" "}
          <div className="d-flex justify-content-between align-items-center border p-3 rounded mb-2">
            {" "}
            <span>
              Ocean Cleanup Drone{" "}
              <span
                className="tag"
                style={{ marginLeft: "10px", marginBottom: "0" }}
              >
                Active
              </span>
            </span>{" "}
            <Link to="#" className="button button-sm button-outline-teal">
              Manage
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-between align-items-center border p-3 rounded mb-2">
            {" "}
            <span>
              Handmade Leather Wallets{" "}
              <span
                className="tag"
                style={{
                  backgroundColor: "var(--success-color)",
                  marginLeft: "10px",
                  marginBottom: "0",
                }}
              >
                Funded
              </span>
            </span>{" "}
            <Link to="#" className="button button-sm button-outline-teal">
              Manage
            </Link>{" "}
          </div>{" "}
          <Link to="/start-project" className="button button-teal mt-3">
            Start a New Project
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function BackerDashboardPage() {
  /* BackerDashboardPage remains the same */
  return (
    <div className="container mt-5">
      {" "}
      <h1 className="mb-4">Backer Dashboard</h1>{" "}
      <div className="card mt-4">
        {" "}
        <div className="card-body">
          {" "}
          <h2 className="mb-3">Backed Projects</h2>{" "}
          <div className="d-flex justify-content-between align-items-center border p-3 rounded mb-2">
            {" "}
            <div>
              {" "}
              <h4 className="mb-1" style={{ fontSize: "1.1rem" }}>
                Eco-Friendly Smart Garden
              </h4>{" "}
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                Pledged $150
              </span>{" "}
            </div>{" "}
            <span
              className="tag"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              In Progress
            </span>{" "}
          </div>{" "}
          <div className="d-flex justify-content-between align-items-center border p-3 rounded mb-2">
            {" "}
            <div>
              {" "}
              <h4 className="mb-1" style={{ fontSize: "1.1rem" }}>
                Community Art Mural
              </h4>{" "}
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                Pledged $25
              </span>{" "}
            </div>{" "}
            <span
              className="tag"
              style={{ backgroundColor: "var(--success-color)" }}
            >
              Successful
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function StartProjectPage() {
  // State to track current step
  const [step, setStep] = useState(1);
  const totalSteps = 4; // Define total number of steps

  // Dummy state for form fields (optional, just for visual persistence if needed)
  const [projectData, setProjectData] = useState({
    title: "",
    category: "Technology", // Default category
    goal: "",
    description: "",
    rewards: [{ title: "", amount: "", description: "" }], // Basic reward structure
  });

  // Handlers to move between steps
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Basic handler to update dummy state (for demonstration)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const steps = ["Basics", "Story", "Rewards", "Review"];

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <h1 className="text-center mb-4">Create Your Project</h1>

        {/* Step Indicator */}
        <div className="step-indicator">
          {steps.map((name, index) => (
            <div
              key={name}
              className={`step-indicator-item ${
                step === index + 1 ? "active" : ""
              }`}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Form Content - Conditional Rendering based on step */}
        <form onSubmit={(e) => e.preventDefault()}>
          {" "}
          {/* Prevent actual submission */}
          {/* Step 1: Basics */}
          {step === 1 && (
            <div>
              <h2 className="mb-4">Step 1: Project Basics</h2>
              <div className="form-group">
                <label htmlFor="projectTitle" className="form-label">
                  Project Title
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  name="title"
                  placeholder="My Awesome Project"
                  className="form-input"
                  value={projectData.title}
                  onChange={handleChange}
                />
                <small className="text-muted d-block mt-1">
                  What is the name of your project?
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="projectCategory" className="form-label">
                  Category
                </label>
                <select
                  id="projectCategory"
                  name="category"
                  className="form-select"
                  value={projectData.category}
                  onChange={handleChange}
                >
                  <option>Technology</option>
                  <option>Art</option>
                  <option>Games</option>
                  <option>Food</option>
                  <option>Film</option>
                  <option>Music</option>
                  <option>Crafts</option>
                  <option>Design</option>
                  <option>Environment</option>
                  <option>Education</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectGoal" className="form-label">
                  Funding Goal ($)
                </label>
                <input
                  type="number"
                  id="projectGoal"
                  name="goal"
                  placeholder="5000"
                  className="form-input"
                  value={projectData.goal}
                  onChange={handleChange}
                />
                <small className="text-muted d-block mt-1">
                  How much money do you need to raise?
                </small>
              </div>
            </div>
          )}
          {/* Step 2: Story */}
          {step === 2 && (
            <div>
              <h2 className="mb-4">Step 2: Project Story</h2>
              <div className="form-group">
                <label htmlFor="projectDescription" className="form-label">
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  name="description"
                  rows="8"
                  placeholder="Tell potential backers all about your project..."
                  className="form-textarea"
                  value={projectData.description}
                  onChange={handleChange}
                ></textarea>
                <small className="text-muted d-block mt-1">
                  Describe what you're creating and why it's important.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="projectImage" className="form-label">
                  Project Image/Video (Visual Placeholder)
                </label>
                <div
                  style={{
                    border: "2px dashed var(--border-color)",
                    padding: "2rem",
                    textAlign: "center",
                    borderRadius: "var(--border-radius)",
                  }}
                >
                  <p className="text-muted mb-2">
                    Upload a compelling image or video
                  </p>
                  <button className="button button-sm button-outline-teal">
                    Choose File
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Step 3: Rewards */}
          {step === 3 && (
            <div>
              <h2 className="mb-4">Step 3: Rewards</h2>
              <p className="text-muted mb-3">
                Offer rewards to thank your backers.
              </p>
              {/* Placeholder for adding/editing rewards */}
              <div className="card p-3 mb-3">
                <div className="form-group">
                  <label htmlFor="rewardTitle1" className="form-label">
                    Reward Title
                  </label>
                  <input
                    type="text"
                    id="rewardTitle1"
                    placeholder="E.g., Early Bird Special"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rewardAmount1" className="form-label">
                    Pledge Amount ($)
                  </label>
                  <input
                    type="number"
                    id="rewardAmount1"
                    placeholder="25"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rewardDesc1" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="rewardDesc1"
                    rows="3"
                    placeholder="Describe this reward..."
                    className="form-textarea"
                  ></textarea>
                </div>
                {/* Add estimated delivery, shipping info later */}
              </div>
              <button className="button button-outline-teal button-sm">
                + Add Another Reward
              </button>
            </div>
          )}
          {/* Step 4: Review */}
          {step === 4 && (
            <div>
              <h2 className="mb-4">Step 4: Review & Launch</h2>
              <p className="text-muted mb-4">
                Review your project details before launching.
              </p>
              {/* Display summary of entered data (using dummy state for now) */}
              <div className="card bg-light p-4">
                <h4>Summary (Visual Placeholder)</h4>
                <p>
                  <strong>Title:</strong> {projectData.title || "(Not set)"}
                </p>
                <p>
                  <strong>Category:</strong> {projectData.category}
                </p>
                <p>
                  <strong>Goal:</strong> ${projectData.goal || "0"}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {projectData.description.substring(0, 100) || "(Not set)"}...{" "}
                </p>
                <p>
                  <strong>Rewards:</strong> (Reward summary would go here)
                </p>
              </div>
            </div>
          )}
          {/* Navigation Buttons */}
          <div className="form-actions">
            <button
              className="button button-ghost-teal"
              onClick={prevStep}
              disabled={step === 1} // Disable on first step
              style={{ visibility: step === 1 ? "hidden" : "visible" }} // Hide on first step
            >
              Previous
            </button>

            {step < totalSteps ? (
              <button className="button button-teal" onClick={nextStep}>
                Next: {steps[step]} {/* Show next step name */}
              </button>
            ) : (
              <button className="button button-success">
                {" "}
                {/* Final step button */}
                Launch Project (Simulated)
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function UserProfilePage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Profile</h1>
      <div className="card p-4 shadow">
        <h2 className="mb-3">Account Details</h2>
        {/* Placeholder fields */}
        <div className="mb-2">
          <strong>Name:</strong> User Name Placeholder
        </div>
        <div className="mb-2">
          <strong>Email:</strong> user@example.com
        </div>
        <div className="mb-4">
          <strong>Joined:</strong> March 2025
        </div>
        <button className="button button-sm button-outline-teal mb-4">
          Edit Profile Settings
        </button>

        <hr className="my-4" />

        {/* Links to Dashboards */}
        <h3 className="mb-3">My Dashboards & Activity</h3>
        <div className="d-flex gap-3 flex-wrap">
          <Link to="/dashboard/creator" className="button button-teal">
            View Creator Dashboard
          </Link>
          <Link to="/dashboard/backer" className="button button-teal">
            View Backer Dashboard
          </Link>
          {/* Add link to saved projects later if needed */}
          {/* <Link to="/saved-projects" className='button button-outline-teal'>Saved Projects</Link> */}
        </div>

        {/* Placeholder for other settings */}
        {/* <hr className='my-4' />
              <h3 className='mb-3'>Security</h3>
               <button className='button button-sm button-outline-teal'>Change Password</button> */}
      </div>
    </div>
  );
}

function AdminDashboardPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="grid md-grid-cols-2 grid-cols-1">
        {/* Pending Approvals Card */}
        <div className="card">
          <div className="card-body">
            <h2 className="mb-3">Pending Projects (2)</h2>
            <div className="border p-3 rounded mb-2 d-flex justify-content-between align-items-center">
              <span>New Eco Gadget</span>
              <div>
                <button
                  className="button button-sm button-success"
                  style={{ marginRight: "5px" }}
                >
                  Approve
                </button>
                <button
                  className="button button-sm"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    borderColor: "var(--secondary-color)",
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
            <div className="border p-3 rounded mb-2 d-flex justify-content-between align-items-center">
              <span>Art Installation Proposal</span>
              <div>
                <button
                  className="button button-sm button-success"
                  style={{ marginRight: "5px" }}
                >
                  Approve
                </button>
                <button
                  className="button button-sm"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    borderColor: "var(--secondary-color)",
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* User Management Card */}
        <div className="card">
          <div className="card-body">
            <h2 className="mb-3">User Management</h2>
            <p className="text-muted">
              Search users, view details, manage roles/status.
            </p>
            <input
              type="text"
              placeholder="Search users..."
              className="search-input mb-3"
              style={{ borderRadius: "var(--border-radius)" }}
            />
            <div className="border p-2 rounded mb-2 d-flex justify-content-between align-items-center">
              <span>user@example.com</span>
              <button className="button button-sm button-outline-teal">
                View
              </button>
            </div>
            <div className="border p-2 rounded mb-2 d-flex justify-content-between align-items-center">
              <span>creator@example.com</span>
              <button className="button button-sm button-outline-teal">
                View
              </button>
            </div>
          </div>
        </div>
        {/* Add more admin sections like Content Moderation, Platform Stats etc. */}
      </div>
    </div>
  );
}

// --- Main App Structure ---
// --- Main App Structure ---
function App() {
  // Step 1: Manage state here
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Step 2: Define state update handlers here
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("User logged in");
    // Navigation happens inside LoginPage/SignUpPage after calling this
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
    // Navigation will happen inside Layout component after calling this
  };

  // Step 3: Wrap the Layout component (which uses hooks) inside Router
  return (
    <Router>
      <Layout
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </Router>
  );
}

// New component to contain the actual app structure inside the Router
// New component to render the main layout and handle routing/navigation
function Layout({ isLoggedIn, handleLogin, handleLogout }) {
  // Step 4: Use navigate hook safely inside Layout (which is inside Router)
  const navigate = useNavigate();

  // Step 5: Create a function that handles both state update and navigation
  const performLogoutAndRedirect = () => {
    handleLogout(); // Call the state update function passed from App
    navigate("/"); // Use navigate to go home after logging out
  };

  return (
    <>
      {" "}
      {/* Use Fragment */}
      {/* Step 6: Pass state and the REDIRECTING logout handler to Navbar */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={performLogoutAndRedirect} />
      <main>
        <Routes>
          {/* Step 7: Pass the original STATE-UPDATING handleLogin to pages */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<SignUpPage onLogin={handleLogin} />}
          />

          {/* --- Routes for other pages --- */}
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/dashboard/creator" element={<CreatorDashboardPage />} />
          <Route path="/dashboard/backer" element={<BackerDashboardPage />} />
          <Route path="/start-project" element={<StartProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
