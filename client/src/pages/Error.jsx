import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

// Define colors and styled components
const colors = {
  darkGreen: '#010400',
  lightBlue: '#25CFDC',
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

const BlueLink = styled.a`
  color: ${colors.lightBlue}; /* Use light blue color for link */
  text-decoration: underline; /* Add underline to indicate it's a link */
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <StyledErrorPage>
      <ErrorPageTitle>Oops!</ErrorPageTitle>
      <ErrorPageMessage>Sorry, an unexpected error has occurred.</ErrorPageMessage>
      <ErrorPageMessage>
        <i>{error.statusText || error.message}</i>
      </ErrorPageMessage>
      <ErrorPageMessage>
        {/* Example of using blue color for a link */}
        <BlueLink href="#">Go back to the homepage</BlueLink>
      </ErrorPageMessage>
    </StyledErrorPage>
  );
}
