// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const url = `https://api.github.com/users/code-azeemahmad`;

function Github() {
    const data = useLoaderData();
//   const [follower, setFollower] = useState(0);
//   const [profile, setProfile] = useState(null);

//   // Triggers re-render → UI updates
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setFollower(data?.followers);
//         setProfile(data?.avatar_url);
//       });
//   });
  
  return (
    <>
      {/* <div>The Followers are: {follower}</div>
      <img src={profile} alt="github profile" width={500} height={500} /> */}
      <div>The Followers are: {data?.followers}</div>
      <img src={data?.avatar_url} alt="github profile" width={500} height={500} />
    </>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async() => {
    const response = await fetch(url);
    return response.json();
}

/*
Whenever you fetch data:
    useState → Stores data that can change and re-render UI
    useEffect → fetch on mount (Runs only once when component loads)
*/

// Loader starts data fetching even before useEffect. Whenever you hovers the tab, the event is triggered
