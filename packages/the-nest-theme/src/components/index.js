
import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Switch from "@frontity/components/switch"
import Header from "./header"
import Loading from "./loading"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Error from "./error"
import Hero from "./hero"
import Section from "./section"
import Footer from "./footer"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
  return (
    <>
    <Head>
      <meta name="description" content={state.frontity.description} />
      <html lang="en" />
    </Head>
        <Global styles={globalStyles}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage} />
      <Hero/>
      <Section />
      <Main>
        <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Page when={data.isPage} />
            <Post when={data.isPost} />
            <Error when={data.isError} />
        </Switch>
      </Main>
      <Footer/>
    </>
  )
}

export default connect(Root)

const globalStyles = css`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html {
font-family: system-ui, Verdana, Arial, sans-serif;
}
`
const Main = styled.main`
  padding: 1em;
  margin: auto;
  background-color: #EFDECD;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`