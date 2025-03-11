import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import styles from "./GitHubProfileCard.module.css"; // Import the CSS module

function GitHubProfileCard({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset error and loading state on username change
    setLoading(true);
    setError(null);

    // Fetch GitHub user profile
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message); // Set error message
          setLoading(false);
        });
    } else {
      setError("Username is required.");
      setLoading(false);
    }
  }, [username]); // Depend on username to refetch data when it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className={styles["github-profile-card"]}>
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

// PropTypes validation for the 'username' prop
GitHubProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GitHubProfileCard;
