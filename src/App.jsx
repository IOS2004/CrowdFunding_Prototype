// Step 1: Add useState and useNavigate imports
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate, // <-- Import useNavigate
} from "react-router-dom";

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
              {/* Basic Bell SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
              {/* Add a badge indicator if desired later */}
            </button>

            <Link to="/profile" className="navbar-avatar" title="My Profile">
              {" "}
              {/* Changed link to profile */}U
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
      <img
        src={imageUrl}
        alt={project.title}
        className="card-img"
        style={{ height: "200px" }}
        loading="lazy"
      />{" "}
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
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ verticalAlign: "middle", marginRight: "4px" }}
          >
            {" "}
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />{" "}
            <path
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              fillRule="evenodd"
            />{" "}
          </svg>{" "}
          Save{" "}
        </button>{" "}
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
  /* ProjectDetailPage remains the same */
  const project = {
    id: 1,
    title: "Eco-Friendly Smart Garden",
    description:
      "Detailed description about the smart garden project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
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
  const imageUrl = `https://source.unsplash.com/800x500/?${encodeURIComponent(
    project.category.toLowerCase() ||
      project.title.split(" ")[0] ||
      "project,technology"
  )}`;
  const [activeTab, setActiveTab] = useState("story");
  return (
    <div className="container mt-5">
      {" "}
      <h1 className="mb-2">{project.title}</h1>{" "}
      <p className="text-muted mb-4">
        {" "}
        Created by <Link to="#">{project.creator}</Link> in{" "}
        <span className="tag" style={{ marginLeft: "5px" }}>
          {" "}
          {project.category}{" "}
        </span>{" "}
      </p>{" "}
      <div className="d-flex flex-column md-flex-row gap-8">
        {" "}
        <div className="flex-2">
          {" "}
          <img
            src={imageUrl}
            alt={project.title}
            className="rounded mb-4 w-full shadow card-img"
            style={{ height: "auto", maxHeight: "500px" }}
          />{" "}
          <div className="tab-nav">
            {" "}
            <button
              className={`tab-link ${activeTab === "story" ? "active" : ""}`}
              onClick={() => setActiveTab("story")}
            >
              {" "}
              Story{" "}
            </button>{" "}
            <button
              className={`tab-link ${activeTab === "updates" ? "active" : ""}`}
              onClick={() => setActiveTab("updates")}
            >
              {" "}
              Updates{" "}
            </button>{" "}
            <button
              className={`tab-link ${activeTab === "comments" ? "active" : ""}`}
              onClick={() => setActiveTab("comments")}
            >
              {" "}
              Comments{" "}
            </button>{" "}
          </div>{" "}
          <div className="tab-content card bg-light p-4 mb-4">
            {" "}
            {activeTab === "story" && (
              <div>
                {" "}
                <h2>Project Story</h2>{" "}
                <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>{" "}
              </div>
            )}{" "}
            {activeTab === "updates" && (
              <div>
                {" "}
                <h2>Updates</h2>{" "}
                <p className="text-muted mb-4">
                  {" "}
                  Latest updates from the creator.{" "}
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
          </div>{" "}
          <div className="social-share">
            {" "}
            <p>Share this project:</p>{" "}
            <div className="social-share-buttons">
              {" "}
              <button
                className="button button-sm"
                style={{ backgroundColor: "#1877F2" }}
                aria-label="Share on Facebook"
              >
                {" "}
                F{" "}
              </button>{" "}
              <button
                className="button button-sm"
                style={{ backgroundColor: "#1DA1F2" }}
                aria-label="Share on Twitter"
              >
                {" "}
                T{" "}
              </button>{" "}
              <button
                className="button button-sm"
                style={{ backgroundColor: "#0A66C2" }}
                aria-label="Share on LinkedIn"
              >
                {" "}
                in{" "}
              </button>{" "}
              <button
                className="button button-sm"
                style={{ backgroundColor: "#6c757d" }}
                aria-label="Copy link"
              >
                {" "}
                Link{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="flex-1"
          style={{ position: "sticky", top: "100px", alignSelf: "flex-start" }}
        >
          {" "}
          <div className="card p-4 shadow">
            {" "}
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
            </div>{" "}
            <h2 className="text-teal mb-1">
              {" "}
              ${project.raised.toLocaleString()}{" "}
            </h2>{" "}
            <p className="text-muted mb-4">
              {" "}
              pledged of ${project.goal.toLocaleString()} goal{" "}
            </p>{" "}
            <div className="d-flex justify-content-around mb-4 text-center">
              {" "}
              <div>
                {" "}
                <h3 className="mb-0">{project.backers}</h3>{" "}
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                  {" "}
                  Backers{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="mb-0">{project.daysLeft}</h3>{" "}
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                  {" "}
                  Days Left{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <button className="button button-lg button-teal button-fullwidth mb-4">
              {" "}
              Back This Project{" "}
            </button>{" "}
            <h3 className="mb-3">Support this project</h3>{" "}
            <div className="d-flex flex-column gap-3">
              {" "}
              {project.rewards.map((reward) => (
                <div key={reward.tier} className="reward-card">
                  {" "}
                  <h4>Pledge ${reward.amount} or more</h4>{" "}
                  <p>{reward.description}</p>{" "}
                  <small>ESTIMATED DELIVERY: {reward.estDelivery}</small>{" "}
                  <small>SHIPS TO: {reward.shipsTo}</small>{" "}
                  <button className="button button-sm button-outline-teal mt-3 w-full">
                    {" "}
                    Select reward{" "}
                  </button>{" "}
                </div>
              ))}{" "}
              <div className="reward-card">
                {" "}
                <h4>Pledge without a reward</h4>{" "}
                <button className="button button-sm button-outline-teal mt-2 w-full">
                  {" "}
                  Make contribution{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
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
    navigate("/dashboard/creator"); // Redirect after login
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
    navigate("/dashboard/creator"); // Redirect after signup
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
  /* StartProjectPage remains the same */
  return (
    <div className="container mt-5">
      {" "}
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        {" "}
        <h1 className="text-center mb-4">Start Your Project</h1>{" "}
        <p className="text-center text-muted mb-4">
          {" "}
          Let's get some basic details to begin.{" "}
        </p>{" "}
        <form>
          {" "}
          <div className="mb-3">
            {" "}
            <label
              htmlFor="projectTitle"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Project Title{" "}
            </label>{" "}
            <input
              type="text"
              id="projectTitle"
              placeholder="My Awesome Project"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />{" "}
          </div>{" "}
          <div className="mb-3">
            {" "}
            <label
              htmlFor="projectCategory"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Category{" "}
            </label>{" "}
            <select
              id="projectCategory"
              className="search-input"
              style={{
                borderRadius: "var(--border-radius)",
                appearance: "none",
                background:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\") no-repeat right .75rem center/16px 12px",
              }}
            >
              {" "}
              <option>Technology</option> <option>Art</option>{" "}
              <option>Games</option> <option>Food</option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="mb-4">
            {" "}
            <label
              htmlFor="projectGoal"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Funding Goal ($){" "}
            </label>{" "}
            <input
              type="number"
              id="projectGoal"
              placeholder="5000"
              className="search-input"
              style={{ borderRadius: "var(--border-radius)" }}
            />{" "}
          </div>{" "}
          <button type="submit" className="button button-teal button-fullwidth">
            {" "}
            Continue to Details{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
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
