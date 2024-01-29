import Body from './components/Body';
import { Header } from './components/Header';
import { css } from '@emotion/css';

const container = css`

`

function App() {
  return (
    <div className={container}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
