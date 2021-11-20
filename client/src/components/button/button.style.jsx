import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const buttonStyle = css`
  padding: ${(props) => (props.large ? '.6rem 2rem' : '.2rem .4rem')};
  background-color: #e6322f;
  color: white;
  border: none;
  border-radius: ${(props) => (props.large ? '4px' : '5px')};
  font-size: ${(props) => (props.large ? '1.2rem' : '1rem')};
  font-weight: ${(props) => (props.large ? '100' : '500')};

  @media only screen and (min-width: 50em) {
    padding: ${(props) => (props.large ? '1.3rem 3rem' : '.4rem 1.5rem')};
    border-radius: ${(props) => (props.large ? '4px' : '5px')};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export const CustomButton = styled.button`
  ${buttonStyle}
`;
export const ButtonLink = styled(Link)`
  text-decoration: none;
  ${buttonStyle}

  @media (min-width:40em) {
    border-radius: ${(props) => (props.large ? '4px' : '5px')};
  }
`;

 // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const movies = await fetch('/browse').then((res) => res.json());
  //     setMovies(movies.data.results);
  //   };
  //   fetchMovies();
  // }, []);
