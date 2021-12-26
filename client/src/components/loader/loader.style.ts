import styled from 'styled-components';

export const LoaderContainer = styled.div`
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoaderSpinner = styled.div`
  height: 8em;
  width: 8em;
  background: url('https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: netflix-loader-rotate 1s linear infinite;

  @keyframes netflix-loader-rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
