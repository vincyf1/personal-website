import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ffffff;
    --secondary-color: #4dabf7;
    --spacing: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    color: var(--text-primary);
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 4rem 0;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > section {
    flex: 1;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
