import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --text-primary: #343a40;
    --text-secondary: #495057;
    --background-color: #f8f9fa;
    --spacing-small: 0.5rem;
    --spacing-medium: 1rem;
    --spacing-large: 2rem;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  footer {
    bottom: 0;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .ant-pagination .ant-pagination-options {
    display: none !important;
  }

  .ant-pagination .ant-pagination-item {
    margin: 0 2px !important;
  }
`;

export default GlobalStyle;
