import React, { useState, useEffect } from "react";
import "./GitHubProfileCard.css"; // Import the CSS for the GitHub Profile Card

function GitHubProfileCard({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching GitHub profile");
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="github-profile-card">
      <img src={profile.avatar_url} alt={`${profile.login} Avatar`} />
      <h2>{profile.name}</h2>
      <p>@{profile.login}</p>
      <p>{profile.bio}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default GitHubProfileCard;
