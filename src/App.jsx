// import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import data from './data/data.json';
import Dashboard from './components/Dashboard';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.secondary};
    color: #fff;
    font-family: Arial, sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#61dafb',
    secondary: '#282c34',
  },
};

const App = () => {
  // Parsing and preparing data for graphs
  const parsedData = data.map(item => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    src_ip: item.src_ip,
    dest_ip: item.dest_ip,
    src_port: item.src_port,
    dest_port: item.dest_port,
    signature: item.alert.signature,
    severity: item.alert.severity,
  }));

  // Grouping data by severity
  const severityData = [1, 2, 3].map(sev => ({
    severity: sev,
    count: parsedData.filter(item => item.severity === sev).length,
  }));

  // Grouping data by source IP
  const srcIpData = Array.from(new Set(parsedData.map(item => item.src_ip))).map(ip => ({
    src_ip: ip,
    count: parsedData.filter(item => item.src_ip === ip).length,
  }));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard parsedData={parsedData} severityData={severityData} srcIpData={srcIpData} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
