/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <div
    sx={{
      fontFamily: "Georgia, serif",
      fontSize: 1,
      maxWidth: "960px",
      pt: [3, 4],
      pb: 6,
      px: [3, 4, 5],
      mb: 6,
      bg: "white",
      mx: "auto",
      boxShadow: "rgba(0, 0, 0, 0.125) 0px 0px 4px",
    }}
  >
    <div sx={{ textAlign: "center" }}>
      <img
        alt=""
        width="120"
        height="auto"
        src="https://static01.nyt.com/newsgraphics/2019/10/16/white-house-letter/assets/images/seal-320_x2.jpg"
      />
      <p sx={{ fontSize: 0 }}>
        <span>THE WHITE HOUSE </span>
      </p>
      <p sx={{ fontSize: 0 }}>
        <span>WASHINGTON </span>
      </p>
      <p>
        <span>October 9, 2019</span>
      </p>
    </div>
    <div
      sx={{
        m: 0,
        pb: props.to ? 0 : 1,
      }}
    >
      <span
        sx={{
          m: 0,
          borderBottom: props.to ? "none" : "1px solid",
          bg: props.to ? "none" : "#fafafa",
          color: props.to ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.to || "Recep Tayyip Erdogan"}
      </span>
    </div>
    <div
      sx={{
        m: 0,
        pb: props.to ? 0 : 1,
      }}
    >
      <span
        sx={{
          m: 0,
          borderBottom: props.title ? "none" : "1px solid",
          bg: props.title ? "none" : "#fafafa",
          color: props.title ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.title || "President of the Republic of Turkey"}
      </span>
    </div>
    <p>
      Dear{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.dear ? "none" : "1px solid",
          bg: props.dear ? "none" : "#fafafa",
          color: props.dear ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.dear || "Mr. President"}
      </span>
      :
    </p>
    <p>
      Let's work out a good deal! You don't want to be responsible for{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.wrong ? "none" : "1px solid",
          bg: props.wrong ? "none" : "#fafafa",
          color: props.wrong ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.wrong || "slaughtering thousands of people"}
      </span>
      , and I don't want to be responsible for{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.action ? "none" : "1px solid",
          bg: props.action ? "none" : "#fafafa",
          color: props.action ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.action || "<random action>"}
      </span>{" "}
      — and I will. I've already given you a little sample with respect to{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.thing ? "none" : "1px solid",
          bg: props.thing ? "none" : "#fafafa",
          color: props.thing ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.thing || "<random thing>"}
      </span>
      .
    </p>
    <p>
      I have worked hard to solve some of your problems. Don't let the world
      down. You can make a great deal.{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.friend ? "none" : "1px solid",
          bg: props.friend ? "none" : "#fafafa",
          color: props.friend ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.friend || "<random person>"}
      </span>{" "}
      is willing to negotiate with you, and he is willing to make concessions
      that they would never have made in the past. I am confidentially enclosing
      <span
        sx={{
          m: 0,
          borderBottom: props.object ? "none" : "1px solid",
          bg: props.object ? "none" : "#fafafa",
          color: props.object ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.object || "<random object>"}
      </span>
      , just received.
    </p>
    <p>
      History will look upon you favorably if you get this done the right and
      humane way. It will look upon you forever as{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.insult1 ? "none" : "1px solid",
          bg: props.insult1 ? "none" : "#fafafa",
          color: props.insult1 ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.insult1 || "<insult>"}
      </span>{" "}
      if good things don't happen. Don't be a{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.insult2 ? "none" : "1px solid",
          bg: props.insult2 ? "none" : "#fafafa",
          color: props.insult2 ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.insult2 || "<insult>"}
      </span>
      . Don't be a{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.insult3 ? "none" : "1px solid",
          bg: props.insult3 ? "none" : "#fafafa",
          color: props.insult3 ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.insult3 || "<insult>"}
      </span>
      !
    </p>
    <p>
      I will{" "}
      <span
        sx={{
          m: 0,
          borderBottom: props.later ? "none" : "1px solid",
          bg: props.later ? "none" : "#fafafa",
          color: props.later ? "black" : "gray",
          borderColor: "#eee",
        }}
      >
        {props.later || "<random>"}
      </span>
      .
    </p>
    <div sx={{ ml: "50%" }}>
      <p>Sincerely,</p>
      <img
        alt=""
        width="275"
        height="150"
        layout="responsive"
        src="https://static01.nyt.com/newsgraphics/2019/10/16/white-house-letter/assets/images/signature-320_x2.jpg"
      />
    </div>
  </div>
)
