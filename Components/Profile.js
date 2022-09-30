import React from "react";
import Image from "next/image";
export default function Profile() {
  const [userData, setUserData] = React.useState({
    name: "",
    year: "",
    grade: "",
    imgLink: "",
  });
  React.useEffect(() => {
    setUserData({
      name: "Darshana Perera",
      year: "13",
      grade: "C",
      imgLink:
        "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
    });
  }, []);
  return (
    <div>
      {userData.name}
      {userData.year}
      {userData.grade}
      <img src={userData.imgLink} height="200vh" />
    </div>
  );
}
