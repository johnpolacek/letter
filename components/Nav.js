/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => {
  const mailto =
    "mailto:?subject=Letter%20from%20a%20Stable%20Genius&body=Let%E2%80%99s%20make%20a%20deal!%20Read%20my%20perfect%20letter%20(definitely%20don%E2%80%99t%20throw%20it%20in%20the%20trash)%3A%20https%3A%2F%2Fletter-from.unmatched-genius.now.sh%2Fto%2F" +
    encodeURIComponent(props.to)
  if (props.dear) {
    mailto += "%2F" + encodeURIComponent(props.dear)
  }
  if (props.title) {
    mailto += "%2F" + encodeURIComponent(props.title)
  }
  if (props.badThing) {
    mailto += "%2F" + encodeURIComponent(props.badThing)
  }
  return (
    <nav sx={{ textAlign: "center", pb: 4 }}>
      <a sx={{ color: "blue" }} href="/">
        Write new
      </a>
      <span sx={{ mx: 4 }}>|</span>
      <a sx={{ color: "blue" }} href={mailto}>
        Send it
      </a>
    </nav>
  )
}
