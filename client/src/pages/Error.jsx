import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const colors = {
  darkGreen: '#010400',
  offWhite: '#FFFBFC',
};
const StyledErrorPage = styled.div`
  background-color: ${colors.darkGreen}; /* Dark green background */
  color: ${colors.offWhite}; /* Off-white text color */
  text-align: center;
  padding: 40px;
`;
const ErrorPageTitle = styled.h1`
  font-size: 36px;
`;
const ErrorPageMessage = styled.p`
  font-size: 18px;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <StyledErrorPage>
      <ErrorPageTitle>Oops!</ErrorPageTitle>
      <ErrorPageMessage>Sorry, an unexpected error has occurred.</ErrorPageMessage>
      <ErrorPageMessage>
        <i>{error.statusText || error.message}</i>
      </ErrorPageMessage>
      <ErrorPageMessage>
        Please reload the page or contact support.
      </ErrorPageMessage>
    </StyledErrorPage>
  );
};
