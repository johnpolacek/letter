/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { useRouter } from 'next/router'
import Head from "../../../../../../components/Head"
import Letter from "../../../../../../components/Letter"
import Nav from "../../../../../../components/Nav"
import Link from 'next/link'
import random from '../../../../../../components/random'

const To = () => {
  const router = useRouter()
  const { to, dear, title, wrong } = router.query

  return (
    <>
      <Head title="Letter from a Stable Genius" />
      <Nav to={to} dear={dear} title={title} wrong={wrong} />
      <Letter to={to} dear={dear} title={title} wrong={wrong} action={random.action()} thing={random.thing()} friend={random.friend()} object={random.object()} insult1={random.insult()} insult2={random.otherInsult()} insult3={random.anotherInsult()} later={random.later()} />
    </>
  )
}

export default To
