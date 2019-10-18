/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { useRouter } from 'next/router'
import Head from "../../../components/Head"
import Letter from "../../../components/Letter"
import Nav from "../../../components/Nav"
import Link from 'next/link'

const To = () => {
  const router = useRouter()
  const { to } = router.query

  return (
    <>
      <Head title="Letter from a Stable Genius" />
      <Nav to={to} dear="Mr. President">
      <Letter to={to} dear="Mr. President" />
    </>
  )
}

export default To
