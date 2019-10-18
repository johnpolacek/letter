/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import Link from "next/link"
import Head from "../components/Head"
import Letter from "../components/Letter"

import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"

export default () => {
  const [to, setTo] = useState("")
  const [title, setTitle] = useState("")
  const [dear, setDear] = useState("")
  const [wrong, setWrong] = useState("")

  return (
    <>
      <Head title="Letter from a Stable Genius" />
      <div sx={{ display: "flex" }}>
        <div
          sx={{
            width: ["100%", "50%", "33.33%"],
            fontSize: [0, 1],
            mx: "auto",
            mb: 4,
            pt: [0, 4, 5],
            pr: [0, 4, 5],
          }}
        >
          <h1
            sx={{
              textAlign: "right",
              fontSize: 4,
              fontWeight: "normal",
              pb: 4,
            }}
          >
            Letter from a Stable Genius
          </h1>
          <div sx={{ display: "flex", pb: 3 }}>
            <label
              sx={{
                display: "block",
                width: "50%",
                pt: 1,
                pr: 2,
                textAlign: "right",
              }}
              htmlFor="to"
            >
              To:{" "}
            </label>
            <input
              sx={{ display: "block", width: "50%" }}
              type="text"
              name="to"
              value={to}
              onChange={e => setTo(e.target.value)}
            />
          </div>
          <div sx={{ display: "flex", pb: 3 }}>
            <label
              sx={{
                display: "block",
                width: "50%",
                pt: 1,
                pr: 2,
                textAlign: "right",
              }}
              htmlFor="title"
            >
              Their title:{" "}
            </label>
            <input
              sx={{ display: "block", width: "50%" }}
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div sx={{ display: "flex", pb: 3 }}>
            <label
              sx={{
                display: "block",
                width: "50%",
                pt: 1,
                pr: 2,
                textAlign: "right",
              }}
              htmlFor="dear"
            >
              Dear:{" "}
            </label>
            <input
              sx={{ display: "block", width: "50%" }}
              type="text"
              name="dear"
              value={dear}
              onChange={e => setDear(e.target.value)}
            />
          </div>
          <div sx={{ display: "flex", pb: 3, mb: 4 }}>
            <label
              sx={{
                display: "block",
                width: "50%",
                pt: 1,
                pr: 2,
                textAlign: "right",
              }}
              htmlFor="wrong"
            >
              What they did wrong:
            </label>
            <input
              sx={{ display: "block", width: "50%" }}
              type="text"
              name="wrong"
              value={wrong}
              onChange={e => setWrong(e.target.value)}
            />
          </div>
          {to && title && dear && wrong ? (
            <a
              href={"/to/" + to + "/" + dear + "/" + title + "/" + wrong}
              sx={{
                px: 4,
                py: 3,
                bg: "red",
                float: "right",
                color: "white",
                mt: 3,
                textDecoration: "none",
                fontSize: 4,
                borderRadius: "8px",
              }}
            >
              Finish!
            </a>
          ) : (
            <span
              href={"/to/" + to}
              sx={{
                px: 4,
                py: 3,
                bg: "gray",
                float: "right",
                color: "white",
                mt: 3,
                textDecoration: "none",
                fontSize: 4,
                borderRadius: "8px",
              }}
            >
              Finish!
            </span>
          )}
        </div>
        <div sx={{ bg: "#fafafa", width: ["100%", "50%", "66.66%"] }}>
          <Letter to={to} title={title} dear={dear} wrong={wrong} />
        </div>
      </div>
    </>
  )
}
