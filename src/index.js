import ReactDOM from 'react-dom';
import App from './components/App';
import client from './apollo';
import { ApolloProvider } from '@apollo/client/react'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);