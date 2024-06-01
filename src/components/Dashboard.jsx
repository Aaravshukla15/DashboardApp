// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import styled from 'styled-components';
import LineChartComponent from './LineChart';
import BarChartComponent from './BarCharts';
import PieChartComponent from './PieChart';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DashboardTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  margin-bottom: 20px;
`;
const Dashboard = ({ parsedData, severityData, srcIpData, theme }) => (
    <Container>
        <h1>Network Alert Data</h1>
        <LineChartComponent data={parsedData} />
        <BarChartComponent data={severityData} />
        <PieChartComponent data={srcIpData} theme={theme} />
    </Container>
);

Dashboard.propTypes = {
    parsedData: PropTypes.array.isRequired, // Add prop type validation for parsedData
    severityData: PropTypes.array.isRequired, // Add prop type validation for severityData
    srcIpData: PropTypes.array.isRequired, // Add prop type validation for srcIpData
    theme: PropTypes.object.isRequired, // Add prop type validation for theme
};

export default Dashboard;
