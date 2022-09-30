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
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
