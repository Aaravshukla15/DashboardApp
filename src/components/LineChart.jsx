// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const ChartContainer = styled.div`
  margin: 20px 0;
`;

export const ChartTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;


const LineChartComponent = ({ data }) => (
    <ChartContainer>
        <h2>Alerts Over Time</h2>
        <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="severity" stroke="#8884d8" />
        </LineChart>
    </ChartContainer>
);

LineChartComponent.propTypes = {
    data: PropTypes.array.isRequired,
};

export default LineChartComponent;
