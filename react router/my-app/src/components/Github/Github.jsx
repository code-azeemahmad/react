import { useState, useEffect } from "react";

function Github() {
  const [follower, setFollower] = useState(0);
  const [profile, setProfile] = useState(null);

  const url = `https://api.github.com/users/code-azeemahmad`;

  // Triggers re-render → UI updates
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFollower(data.followers);
        setProfile(data.avatar_url);
      });
  });
  return (
    <>
      <div>The Followers are: {follower}</div>
      <img src={profile} alt="github profile" width={500} height={500} />
    </>
  );
}

export default Github;

/*
Whenever you fetch data:
    useState → Stores data that can change and re-render UI
    useEffect → fetch on mount (Runs only once when component loads)
*/
